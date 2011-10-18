Ext.apply(Ext.data.Types, {
    LONG: Ext.apply(Ext.apply({}, Ext.data.Types.INT), {type: 'long'})
});

/************************************************************/
/***** WAKANDA READER ***************************************/
/************************************************************/

// Ext.define('Ext.data.reader.Wakanda', {
// 
//     extend: 'Ext.data.reader.Json',
// 
//     alternateClassName: 'Ext.data.WakandaReader',
// 
//     alias : 'reader.wakanda',
// 
//     idProperty: '__KEY',
// 
//     stampProperty: '__STAMP',
// 
//     root: '__ENTITIES',
// 
//     totalProperty: '__COUNT',
// 
//     getData: function(data) {
//         if (Ext.isObject(data) && !data[this.root]) {
//             data = [data];
//         }
//         return data;
//     }
// 
// });

/************************************************************/
/***** WAKANDA WRITER ***************************************/
/************************************************************/

// Ext.define('Ext.data.writer.Wakanda', {
// 
//     extend: 'Ext.data.writer.Json',
// 
//     alternateClassName: 'Ext.data.WakandaWriter',
// 
//     alias: 'writer.wakanda',
// 
//     writeAllFields: false,
// 
//     getRecordData: function(record) {
//         var isPhantom = record.phantom === true,
//             writeAll = this.writeAllFields || isPhantom,
//             nameProperty = this.nameProperty,
//             fields = record.fields,
//             data = {},
//             changes,
//             name,
//             field,
//             key;
// 
//         if (writeAll) {
//             fields.each(function(field){
//                 if (field.persist) {
//                     name = field[nameProperty] || field.name;
//                     data[name] = record.get(field.name);
//                 }
//             });
//         } else {
//             changes = record.getChanges();
//             for (key in changes) {
//                 if (changes.hasOwnProperty(key)) {
//                     field = fields.get(key);
//                     name = field[nameProperty] || field.name;
//                     data[name] = changes[key];
//                 }
//             }
//             if (!isPhantom) {
//                 data[record.idProperty] = record.getId();
//             }
//             data['__STAMP'] = record.get('__STAMP');
//         }
//         return {'__ENTITIES': [data]};
//     }
// 
// });

/************************************************************/
/***** WAKANDA PROXY ****************************************/
/************************************************************/

// Ext.define('Ext.data.proxy.Wakanda', {
// 
//     extend: 'Ext.data.proxy.Rest',
// 
//     alternateClassName: 'Ext.data.WakandaProxy',
// 
//     alias : 'proxy.wakanda',
// 
//     sortParam: '$orderby',
// 
//     filterParam: '$filter',
// 
//     startParam: '$skip',
// 
//     limitParam: '$top',
// 
//     reader: 'wakanda',
// 
//     writer: 'wakanda',
// 
//     actionMethods: {
//         create : 'POST',
//         read   : 'GET',
//         update : 'POST',
//         destroy: 'POST'
//     },
// 
//     buildUrl: function(request) {
//         var modelName = this.model.modelName,
//             operation = request.operation,
//             records = operation.records || [],
//             record = records[0],
//             id = record ? record.getId() : operation.id,
//             url = '/rest/' + modelName;
// 
//         if (this.appendId && id) {
//             url += '(' + id + ')';
//         }
// 
//         request.url = url;
// 
//         // console.log("buildUrl", this, arguments, request.url);
// 
//         var action  = request.action;
//         if (action !== 'read') {
//             url = Ext.urlAppend(url, '&$method=' + action);   
//         }
// 
//         if (this.noCache) {
//             url = Ext.urlAppend(url, Ext.String.format("{0}={1}", this.cacheString, Ext.Date.now()));
//         }
// 
//         return url;
//     },
// 
//     encodeSorters: function(sorters) {
//         var min = [],
//             length = sorters.length,
//             i = 0, sort = '';
// 
//         for (; i < length; i++) {
//             sort += sorters[i].property + ' ' + sorters[i].direction + ' ';
//         }
// 
//         return sort;
//     },
// 
//     encodeFilters: function(filters) {
//         var min = [],
//             length = filters.length,
//             i = 0, filter = '';
//         
//         for (; i < length; i++) {
//             filter += filters[i].property + ' eq @' + filters[i].value + '@ ';
//         }
//         return filter;
//     }
// 
// });


/************************************************************/
/***** WAKANDA MODEL ****************************************/
/************************************************************/


// Ext.define('Ext.data.WakandaModel', {
// 
//     extend: 'Ext.data.Model',
// 
//     idProperty: '__KEY',
// 
//     defaultProxyType: 'wakanda',
// 
//     onClassExtended: function(cls, data) {
//         var catalog = this.prototype.getCatalog(data.$className),
//             attributes = catalog.attributes;
//         attributes.push({name: this.superclass.proxy.reader.idProperty});
//         attributes.push({name: this.superclass.proxy.reader.stampProperty});
//         data.fields = attributes;
//         this.superclass.superclass.$onExtended.apply(this, arguments);
//     },
// 
//     getCatalog: function(className) {
//         var catalog;
//         Ext.Ajax.request({
//             async: false,
//             url: 'http://' + window.location.host + '/rest/$catalog/' + className,
//             success: function(response) {
//                 catalog = Ext.decode(response.responseText);
//             }
//         });
//         return catalog;
//     }
// 
// });


/************************************************************/
/************************************************************/
/************************************************************/


Ext.define('Employee', {
    extend: 'Ext.data.WakandaModel'
});


Ext.onReady(function() {

    var Employee = Ext.ModelManager.getModel('Employee');

    Employee.load(861416, {
        success: function(employee) {
            console.log('employee ' + employee.getId() + ' loaded: ', employee, employee.get('salary'));

            employee.set('salary', Math.floor(Math.random()*1001));

            employee.save({
                success: function(employee) {
                    console.warn('employee ' + employee.getId() + ' updated: ', employee.get('salary'));
                }
            });

        }
    });

    /************************************************************/

    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        model: 'Employee'
    });

    store.on('load', function() {
        console.log(store.getCount() + ' employees loaded: ', store.getRange());
    });

});
