// Here is an object literal
var myObject={
	name: 'I am an object called myObject',
	properties: 'And I have properties that can be defined on intialisation',
	another: 'Or dynamically',
	remove: 'Properties can be deleted by delete myObject.property_name',
	myFunc: function(param) {
		return 'Hi I am myFunc(param) and your passed in '+param+' as an argument'
	}
}

// Access properties using the dot notation
console.log(myObject.name);
console.log(myObject.properties);
console.log(myObject.another);
console.log(myObject.remove);
console.log(myObject.myFunc('hello'));

// Or access like a hash
console.log(myObject['name']);
console.log(myObject['properties']);
console.log(myObject['another']);
console.log(myObject['remove']);
console.log(myObject['myFunc']('Hey hey'));

// Dyanmically add properties
console.log(myObject.age);
myObject.age=47;
console.log(myObject.age);

// Add a function as a property
console.log(myObject.myFunc);
myObject.myFunc=function(param) {
	return 'I am a function that received a '+param;
};
console.log(myObject.myFunc);

// Use spacing in the key
myObject['Family Cats']=['loki','candy']
console.log(myObject['Family Cats']);

// Delete properties
console.log(myObject.age);
delete myObject.age;
console.log(myObject.age)

// Create properties programitically
for(i=0;i<10;i++) { myObject['property'+i]=i; }
for(i=0;i<10;i++) { console.log(myObject['property'+i]); }

// Properties can be both attribute like and method like by using functions
var myHouse={
	myNum: 0,
	addMember: function(name, age, type) {
		this[name]={type: type,age: age};
		this.myNum++;
	},
	removeMember: function(name) {
		var temp=this[name];
		temp.name=name;
		delete temp;
		this.myNum--;
		return temp;
	}
};

// You can add objects to an object !
console.log(myHouse.myNum);
myHouse.addMember('Dave',47,'human');
console.log(myHouse.Dave);
console.log(myHouse.myNum);
console.log(myHouse.removeMember('Dave'));
console.log(myHouse.myNum);

// You can enumarate over an objects properties using a for-in loop, including functions(methods)
myHouse.addMember('Dave',47,'human');
myHouse.addMember('Sarah',44,'human');
myHouse.addMember('Fraz',17,'human');
myHouse.addMember('Jess',6,'human');
myHouse.addMember('Loki',1,'cat');
myHouse.addMember('Candy',1,'cat');
myHouse.addMember('Fifi',1,'fish');

console.log(myHouse.myNum);

var value=null;
for(key in myHouse) {
	value=myHouse[key];
	console.log(key+':', value);
}