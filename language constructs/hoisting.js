// When a scope is generated variable declarations are hoisted to the top of the scope
// Their initial value is always set to undefined
var myVar=2;  // var myVar=undefined

// Next function declarations are loaded below the variables
function myFunc1(param) {
	console.log('I am myFunc1 - a function declaration and I have recived '+param);
}

// Then executable code is loaded and run
myFunc1(myVar);


// Assigning function expressions to variables are considered executable code and are
// not treated like function declarations
// So make sure to delcare them before you try and call them !!!!!!

//funcExp(myVar); // <- this call will fail as the function expression has not been loaded
var funcExp=function (param) {
	console.log('I am funExp - a function expression and I have received '+param);
} 
funcExp(myVar); // However this code works OK



// For overidden declared functions, the original declared function is removed and the new function declaration added to the end of
// the existing function declarations ie. its original place in the list of declared functions is lost
function myFunc1(param) {
	console.log('I am the new myFunc - I have replaced the original version even tho I am declared after the call to me in the code. This is because all function declarations are loaded, including overloaded function decs, before any code is executed. I recieved '+param);
}



// When function expressions are redefined, it only happens when the line of code is 
// redefing the expression id reached
funcExp(myVar); 
var funcExp=function (param) {
	console.log('I am  the new funExp - I dont replace the original function expression until the line of code re-defining me is executed  '+param);
} 

funcExp(myVar); 

// In this way the scope of a function expression is defined only when the line of code
// defining the expression is executed. The values of any variables in the function expression
// get added to the scope now. 