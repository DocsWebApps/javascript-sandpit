// Performance tips

// Use prototypes to hold method properties or static properties for a class of objects
// Do not put any method properies in the contructor
// You can put any static properties in the prototype 

var MyObject=function(id) {
	this.id=id; 
}

// Since pi and all methods in MyObject objects are common, put them in a prototype
// to save memory allocation
MyObject.prototype={
	pi: 3.142,
	readID: function() {
		return this.id;
	}
}

var masterID=1;

var myobject=new MyObject(masterID++);
console.log(myobject.readID());
console.log(myobject.pi);

var myobject1=new MyObject(masterID++);
console.log(myobject1.readID());
console.log(myobject1.pi);

var myobject2=new MyObject(masterID++);
console.log(myobject2.readID());
console.log(myobject2.pi);


/* Use fragment when dynamically adding to the DOM
// To the page below
<html>
<body>
<ul id='days'></ul>
</body>
</html>

// We want to add all seven days of the week to the <ul> element 'days' using the foolowing code
// This code would result in a DOM reflow every time list.appendChild(element) was called - not good !
var list=document.getElementById('days');
var days=['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];
for(var i=0, arrayLen=days.length;i<arrayLen;i++) {
	var element=document.createElement('li');
	element.appendChild(document.createTextNode(days[i]));
	list.appendChild(element);
}

// Instead use a fragment - the code below results in 1 DOM reflow
var list=document.getElementById('days');
var fragment=document.createDocumentFragment();
var days=['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];
for(var i=0, arrayLen=days.length;i<arrayLen;i++) {
	var element=document.createElement('li');
	element.appendChild(document.createTextNode(days[i]));
	fragment.appendChild(element);
}

list.appendChild(fragment);

// Also when you use the var keyword the parser has to look up what var means
// Therefore use a few as possible and don't declare any var's in a loop
// The above code becomes
var list=document.getElementById('days'),
		fragment=document.createDocumentFragment(),
		days=['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'],
		element;
for(var i=0, arrayLen=days.length;i<arrayLen;i++) {
	element=document.createElement('li');
	element.appendChild(document.createTextNode(days[i]));
	fragment.appendChild(element);
}

list.appendChild(fragment);
*/

// String concatentation performance bonuses
// For collections use collection.join instead of +=
// Also use console.time(string) and console.timeEnd(string) to time the operatons
var myString='';
var myArray=[];
for(var i=0;i<30000;i++) {
	myArray.push('sausages');
}

console.time('Time the concatenation');
for(i=0;i<myArray.length;i++) {
	myString+=myArray[i];
}
console.timeEnd('Time the concatenation');

myString='';
console.time('Time new concatenation');
myString=myArray.join();
console.timeEnd('Time new concatenation');

// Time class - for testing your code performance acuratley
// testImplement=code to test as a function
// testParams=params for code under test
// repetitions=number of repetitions - more = more accuracey
function SpeedTest(testImplement, testParams, repetitions) {
	this.testImplement=testImplement,
	this.testParams=testParams,
	this.repetitions=repetitions||1000,
	this.average=0
}

SpeedTest.prototype={
	startTest: function() {
		var startTime, endTime, sumTime=0;
		for(var i=0, repetitions=this.repetitions;i<repetitions;i++) {
			startTime=+new Date();
			this.testImplement(this.testParams);
			endTime=+new Date();
			sumTime+=(endTime-startTime)
		}
		this.average=sumTime/this.repetitions;
		return console.log('Average execution across '+this.repetitions+': '+this.average);
	}
}

var myParams=['Hi', myArray];

var testFunction1=function(myParams) {
	for(var i=0;i<myParams[1].length;i++) {
		myParams[0]+=myParams[1][i];
	}
};

var testFunction2=function(myParams) {
	myParams[0]=myParams[1].join();
};

var test1=new SpeedTest(testFunction1, myParams),
		test2=new SpeedTest(testFunction2, myParams);

test1.startTest();
test2.startTest();