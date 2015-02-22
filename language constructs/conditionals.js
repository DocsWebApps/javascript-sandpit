// Ternary statements
var isTrue=true;
console.log(isTrue ? 'OK, its true' : 'False :-(');


// Nested ternary statements
var isSunny=false;
console.log(isTrue ? isSunny ? 'True and sunny' : 'True not sunny': 'False :-(');


// Nested function
console.log(isTrue ? (isSunny ? 'True and sunny' : function() {return 'True not Sunny';}()) : 'False :-(');


// If then - == check value only, === check value and type
var x=4,
	y='4';

if(x==y) {
	console.log('== can lead to problems as the type of one component can be intrinsically so that values match');
}

if(x===y) {
	console.log('== can lead to problems as the type of one component can be changed intrinsically so that values match');
} else {
	console.log('=== checks the value and the type!')
}