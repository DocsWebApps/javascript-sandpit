// Logical || - returns the first truthy value or the last falsey value
var var1=false,
	var2=0,
	var3=undefined,
	var4='Im the first truthy value';

var myAnswer=var1||var2||var3||var4;
console.log(myAnswer); 

var myAnswer=var1||var2||var3;
console.log(myAnswer); 


// Logical && - returns either the first falsey value or the last truthy value
myAnswer=var1&&var2&&var2&&var4;
console.log(myAnswer); 

var var1=true,
	var2='truthy',
	var3=1,
	var4='Im the last truthy value';

myAnswer=var1&&var2&&var2&&var4;
console.log(myAnswer); 