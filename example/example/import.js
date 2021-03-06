// theLog is dump to screen at the end of the file
var startDate = new Date();
var theLog = "Start of log - " + startDate + "\n";

var fakeGen = {};

function BuildFullPath(inBaseFolder, inFileName)
{
	var thePath = inBaseFolder;
	
	inBaseFolder;
	
	if(thePath.charAt(thePath.length - 1) != '/')
		thePath += '/';
	
	return thePath + inFileName;
}

function ImporInArray(file)
{
	var result = [];
	var input = TextStream(file, "read");
	while (!input.end())
	{
		var s = input.read("\n");
		if (s !== "")
		{
			if(s.charAt(s.length - 1) == "\r")
				s = s.slice(0, -1);
			result.push(s);
		}
	}
	input.close();
	return result;
}

function ImportFirstNames(inBaseFolder)
{
	var file = File(BuildFullPath(inBaseFolder, "FirstNames-Male.txt"));
	fakeGen.firstNamesMale = ImporInArray(file);

	file = File(BuildFullPath(inBaseFolder, "FirstNames-Female.txt"));
	fakeGen.firstNamesFemale = ImporInArray(file);
}

function ImportLastNames(inBaseFolder)
{
	var file = File(BuildFullPath(inBaseFolder, "LastNames.txt"));
	fakeGen.lastNames = ImporInArray(file);	
}

function ImportCompanies(inBaseFolder)
{
	var file = File(BuildFullPath(inBaseFolder, "Companies.txt"));
	var input = TextStream(file,"read");
	fakeGen.comp1 = [];
	fakeGen.comp2 = [];
	fakeGen.comp3 = [];
	
	while (!input.end())
	{
		var s = input.read("\n");
		if (s !="")
		{
			if(s.charAt(s.length - 1) == "\r") {
				s = s.slice(0, -1);
			}
			var triplet = s.split("\t");
			fakeGen.comp1.push(triplet[0]);
			fakeGen.comp2.push(triplet[1]);
			fakeGen.comp3.push(triplet[2]);
		}
	}
	input.close();
}

function BuildFakeCompanyName()
{	
	var x1 = myRandomForIntegers(0, fakeGen.comp1.length - 1);
	var x2 = myRandomForIntegers(0, fakeGen.comp2.length - 1);
	var x3 = myRandomForIntegers(0, fakeGen.comp3.length - 1);
	
	return fakeGen.comp1[x1] + " " + fakeGen.comp2[x2] + " " + fakeGen.comp3[x3];
}

function BuildFakeLastName()
{
	var x = myRandomForIntegers(0, fakeGen.lastNames.length - 1);
	var result = fakeGen.lastNames[x];
	return result;
}

function BuildFakeFirstNameAndGender()
{
	var result = {};
	
	result.firstName = "";
	
	if(Math.random() > 0.5)
	{
		var x = myRandomForIntegers(0, fakeGen.firstNamesMale.length - 1 );
		result.firstName = fakeGen.firstNamesMale[x];
		result.gender = 'M';
	}
	else
	{
		var x = myRandomForIntegers(0, fakeGen.firstNamesFemale.length - 1 );
		result.firstName = fakeGen.firstNamesFemale[x];
		result.gender = 'F';
	}
	return result;
}

function myRandomForIntegers(inMin, inMax)
{
	return Math.round( inMin + (Math.random() * (inMax - inMin)) );
}
// Min. 1000 people
function BuildFakeData(inBaseFolder, inCountPeople)
{
	fakeGen = {};
	ImportCompanies(inBaseFolder);
	ImportFirstNames(inBaseFolder);
	ImportLastNames(inBaseFolder);
	
	if (inCountPeople === null || inCountPeople == 0)
		inCountPeople = 100000;
	if(inCountPeople < 1000)
		inCountPeople = 1000;
	
	var cumulatedPeopleCount = 0, countToCreate = 0, maxPerComp;
	
	while(cumulatedPeopleCount < inCountPeople)
	{
		// Get the count of people top create for this comp
		var rand;
		rand = Math.random();
		
		if(rand > 0.98)
			countToCreate = myRandomForIntegers(151, inCountPeople < 2000 ? 250 : myRandomForIntegers(251, 500) );
		if(rand > 0.95)
			countToCreate = myRandomForIntegers(70, 150);
		else if(rand > 0.9)
			countToCreate = myRandomForIntegers(40, 69);
		else if(rand > 0.8)
			countToCreate = myRandomForIntegers(20, 39);
		else if(rand > 0.7)
			countToCreate = myRandomForIntegers(10, 19);
		else
			countToCreate = myRandomForIntegers(0, 10);
		
		if( inCountPeople < (cumulatedPeopleCount + countToCreate) )
			countToCreate = inCountPeople - cumulatedPeopleCount;
		
		// Create the company
		var companyName = BuildFakeCompanyName();
		var theRevenues = myRandomForIntegers(0, 500000);
		var oneComp = new ds.Company({
				name	: companyName,
				revenues : theRevenues
			});
		oneComp.save();
		
		// Create the employees of this company
		for(var i = 0; i < countToCreate; ++i)
		{
			var firstNameGender = BuildFakeFirstNameAndGender();
			var lastName = BuildFakeLastName();
			var theSalary = myRandomForIntegers(5000, 150000);
			
			var list = firstNameGender.gender === 'F' ? womenPaths : menPaths;
			
			var oneEmp = new ds.Employee({
					firstName	: firstNameGender.firstName,
					lastName	: lastName,
					salary		: theSalary,
					company		: oneComp,
					gender		: firstNameGender.gender,
					picture		: list[i]
				});
			oneEmp.save();
		}
		cumulatedPeopleCount += countToCreate;
	} // while(cumulatedPeopleCount < inCountPeople)
	
	return true;
}

var xfolder = application.getFolder("path") + "ssjs/CreateData/FakeData/";
//theLog += QuickTest(xfolder);
ds.Company.remove();
ds.Employee.remove();


var menPaths = [];
var womenPaths = [];

var picFolder = application.getFolder("path") + "WebFolder/pictures/"

var menFolder = Folder(picFolder + 'men');
theLog += menFolder.path;

[
    Folder(picFolder + 'men'),
    Folder(picFolder + 'women')
].forEach(function (folder, index) {
    var list;
    list = (index === 0) ? menPaths : womenPaths;
    folder.forEachFile(function (file) {
            list.push(file.path.split('WebFolder')[1]);
     });
});


BuildFakeData(xfolder, 10000);//250000);//1000000);
ds.flushCache();
theLog += " //// Companies: " + ds.Company.count()  + " - Employees: " + ds.Employee.count() + " ////";

var endDate = new Date();
var theDiff = endDate - startDate;
theLog += "\n DURATION: " + theDiff + " ms\n";

theLog;


// --EOF--
