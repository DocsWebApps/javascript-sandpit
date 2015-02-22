var myFunction1=function(param) {
	try{
		param1.myMethod();
	}
	catch(error) {
		console.log('You have caught a reference error, param1 is undefined')
	}
	finally{
		console.log('And finally....1');
	}
};

var myFunction2=function(param) {
	try{
		param.charAt(3);
	}
	catch(error) {
		console.log('You have caught a type error, 2 has no charAt method')
	}
	finally{
		console.log('And finally....2');
	}
};

var myFunction3=function(param) {
	try{
		param.charAt(3);
	}
	catch(error) {
		console.log('You have should not catch an error here!')
	}
	finally{
		console.log('And finally....3');
	}
};

myFunction1('Hi');
myFunction2(2);
myFunction3('All is cool');