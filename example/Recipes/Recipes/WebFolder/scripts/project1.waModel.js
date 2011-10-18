
guidedModel =// @startlock
{
	Computer :
	{
		collectionMethods :
		{// @endlock
			cpuStats:function()
			{// @lock
				var data = {
					"vm_stat":{},
					"iostat":{}
				};
				function vm_stat() {
				  var myWorker = new SystemWorker('/usr/bin/vm_stat');
				  myWorker.onmessage = function() {
				  		 var result = arguments[0].data;
				  		 var lines = result.split('\n');
				  		 for (var i=0, j=lines.length; i<j; i++) {
				  		 	linedata = lines[i].split(':');
				  		 	var key = linedata[0].replace(/"/g,'').replace(':','').trim();
				  		 	if (key!='' && parseInt(linedata[1])>0) {
					  		 	data.vm_stat[key] = parseInt(linedata[1]);
					  		 }
				  		 }
				  }
				}
				function iostat() {
				  var myWorker = new SystemWorker('/usr/sbin/iostat -n0');
				  myWorker.onmessage = function() {
				  		 var result = arguments[0].data;
				  		 var detail = result.split('\n')[2].replace(/\s+/g,' ').trim().split(' ');
				  		 data.iostat['user'] = parseInt(detail[0]);
				  		 data.iostat['system'] = parseInt(detail[1]);
				  		 data.iostat['idle'] = parseInt(detail[2]);
				  		 data.iostat['1m'] = parseFloat(detail[3]);
				  		 data.iostat['5m'] = parseFloat(detail[4]);
				  		 data.iostat['15m'] = parseFloat(detail[5]);
				  }
				}

				vm_stat();
				iostat();

				wait(500);
				return data;
			}// @startlock
		}
	}
};// @endlock
