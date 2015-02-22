// If function close1() was declared as a function expression or passed in as an argument 
// to something, x would retain a value 4 in the closure
function close1() {
	var x=4;
	return x;
}

// Here the function returned, closeX() retains x=3 in its closure. When finally executed closeX() returns 3!
function close2() {
	var x=3;
	function closeX() {
		return x;
	}
	return closeX;
}

// Varaibles defined inside functions can keep and change their values when the function is finally called.
// Here number will increment each time the internal function is called
// WARNING! If you put a loop inside a function returned by another function do note that the 
// loop variable values are closed in only after the loop has completely finished.
// This may result in the wrong behaviour !!!! You have bben warned !
function funcMaker(message) {
	var number=0;
	return function() {
		number++;
		console.log('I am a function maker that stores its scope for runtime. I am '+message);
		console.log('I have been run '+number+' times');
	}
}

var func1=funcMaker('Legend');
var func2=funcMaker('Dave');
var func3=funcMaker('Fraz');

console.log(close1());
console.log(close2()());

func1();
func2();
func3();
func3();
func3();