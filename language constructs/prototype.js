// All objects inherit from a prototype
// Object is the top level prototype
// String, Array, Number and Function all have their own prototype whose ancestor is the Object prototype

var myObject={
	name: 'Dave',
	age: 47
}

var myString="I am a string"; // Primitive not object ???

// Create a copy of an object
var myObject1=Object.create(myObject);
var myArray=[1,2,3];

// Extend string prototype with new methods
String.prototype.myMethod=function() {
	return 'Hello';
};

console.log(Object.prototype.isPrototypeOf(myObject));
console.log(myObject.valueOf());

console.log(String.prototype.isPrototypeOf(myString));
console.log(String.constructor.prototype);
console.log(myString.myMethod());
console.log(myString.charAt(0));

console.log(Object.prototype.isPrototypeOf(myObject1));

console.log(Array.prototype.isPrototypeOf(myArray)+'\n');

// Define a new objects
// First start with a constructor for the objects instance type attributes
function MyNewObject(name,age) {
	this.name=name,
	this.age=age
}
// Then add the common methods or static attributes to the prototype
MyNewObject.prototype = {
	method1: function(param) {
		return param=param||'default value method 1';
	},
	method2: function(param) {
		return param=param||'default value method 2';
	},
	PI: 3.142
};

// Create a new object using the new keyword, then access the properties
var newObject= new MyNewObject('Dave',47);
console.log(newObject.name);
console.log(newObject.PI);
console.log(newObject.method1('Hi there'));
console.log(newObject.method2()+'\n');

// New methods added to a prototype after object creation are visible to exsiting objects
// and the new methods are visible to all
MyNewObject.prototype.method3=function(param) {
	return param=param||'default value method 3';
}

var newObject1= new MyNewObject('Sarah',44);
console.log(newObject1.method1());
console.log(newObject1.method2());
console.log(newObject1.method3());

console.log(newObject.method1('Hi there method 1'));
console.log(newObject.method2('Hi there method 2'));
console.log(newObject.method3('Hi there method 3')+'\n');

// Overriding standard methods, if you overrride a method it affects ALL objects, those already created as well
// as those to be created
console.log(newObject1.valueOf());

MyNewObject.prototype.valueOf=function() {
	return 'Hello, Ive been overriden';
}

console.log(newObject1.valueOf()+'\n');


// Prepare to bend your head with prototypes
// Define Object1 with a constructor only
var Object1=function(param) {
	this.param=param||'Object1 default';
};

// create an object from it
var object1=new Object1();
console.log(object1.param);

// Now define a prototype property and you'll see that object1 doesn't have it
// Prototype, version 1 - object1 can never access the properties in this prototype
Object1.prototype={method1: function(param) {return 'Hello Iam '+this.param+' , calling method1 1st definition and I received this '+ param}}
//console.log(object1.method1()); // uncomment this line to see that object1 does not have the method1 property

// Create a new object and it does have the method1 property
var object2=new Object1('object2');
console.log(object2.method1('sausages'));

// Since the a prototype was created before object2 was created, we can actually now add new properties to the prototype and
// they will be callable from object2, but not object1
Object1.prototype.methodX=function(param) {return 'Hello Iam '+this.param+' , calling methodX 1st definition and I received this '+ param;}
//console.log(object1.methodX('object1')); // uncomment this line to see that object1 does not have the methodX property
console.log(object2.methodX('pantaloones'));

									// IMPORTANT - defining a prototype for each constructor before you generate any objects from it 
									// means that you can add properties/methods to that prototype later, and those additions WILL
									// be callable from all exisitng objects plus any new objects. 

// Now, replace the whole prototype definition
// Prototype version 2 - object 2 only sees method 1 and method X, object 3 only sees method2 from the new prototype definition
Object1.prototype={method2: function(param) {return 'Hello Iam '+this.param+' , calling method2 1st definition and I received this '+ param}}
var object3=new Object1('object3');

console.log(object2.method1('peas'));
console.log(object2.methodX('gravy'));
console.log(object3.method2('beans'));
//console.log(object3.methodX('monkey')) //Cannot call method X from object3
//console.log(object2.method2('chips')); //Cannot call method 2 from object2 but method 1 still good 
//console.log(object3.method1('beans')); //Cannot call method 1 from object3

// redefine the prototype twice in a row
Object1.prototype={method1: function(param) {return 'Hello Iam '+this.param+' , calling method1 2nd definition and I received this '+ param}}
Object1.prototype={method2: function(param) {return 'Hello Iam '+this.param+' , calling method2 2nd definition and I received this '+ param}}

// object 2 and object 3 only see the methods that were in the active prototype at the time of their creation
console.log(object2.method1('laurel'));
console.log(object3.method2('hardy'));

// Now create a new object and only the 2nd gen method 2, which is in the current active prototype when object4 gets created is visible
var object4=new Object1('object4');
// console.log(object4.method1('sugar')); // No method 1 visible
console.log(object4.method2('spice'));

// Using this notation we can add to the current prototype scope without losing method2
Object1.prototype.method3=function(param) {return 'Hello Iam '+this.param+' , calling method3 1st definition and I received this '+ param}
console.log(object4.method2('spice'));
console.log(object4.method3('huey'));

// Using the notation below I can override method 3 without losing method 2
Object1.prototype.method3=function(param) {return 'Hello Iam '+this.param+' , calling method3 2nd definition and I received this '+ param}
console.log(object4.method2('dooy'));
console.log(object4.method3('lui'));