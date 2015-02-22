// Delcare an array
var myarray=[1,2,3,4,5,6,7,8];

// A declared function
function decFunc(){
	console.log('I am a declared function and loaded when the program initialy loads');
}

// A function expression assigned to a variable
var assignFunc=function(message) {
	console.log('I am a function expression and am loaded when the code is executed');
	console.log(message);
};

// Map property
var newarray=myarray.map(function(value, index) {
	value=value*2;
	index++;
	console.log("The function in a map call is applied to each element in the collection "+value, index);
})

// Pass a function in as an argument and return it ! eeeek !
function funcReturn1(func) {
	return func;
}

// Return a function expression created IN the function
function funcReturn2() {
	var func=function() {
		console.log('Another function returned');
	};
	return func;
}

// Same
function funcReturn3() {
	return function() {console.log('Function returned (again)')};
}


decFunc();
assignFunc('Hey there, I am a parameter');
funcReturn1(function() {
	console.log('I am a function and I have been passed to and returned from another function then executed - mind bending!!');
})();
funcReturn2()();
funcReturn3()();