// Below are examples where numbers can have unintended values
var num=0.1+0.2;
console.log(num); // equals 0.30000000000000004 WTF !!


// toFixed(num)
// Select a fixed number of decimal places
console.log(num.toFixed(4));
console.log(num.toFixed(1));


// toFixed(num) rounds up and down
num=0.345;
console.log(num.toFixed(1)); // 0.3
num=0.354;
console.log(num.toFixed(1)); // 0.4
num=0.3444454;
console.log(num.toFixed(5)); // 0.34445


// parseFloat(num)
// Convert to proper float - remove trailing 0's
num=0.1+0.2;
console.log(num.toFixed(2)); // 0.30
console.log(parseFloat(num.toFixed(2))); // 0.3 yay \o/
console.log(parseFloat('88.88 cows')); // 88.88

// parseInt(num)
console.log(parseInt(88)); // 88
console.log(parseInt('88')); // 88
console.log(parseInt('88 cows')); // 88
console.log(parseInt('I have 88 cows')); // NaN
console.log(parseInt('88.88 cows')); // 88

// pre ECMA script5 versions of Javascript parseInt(num) accepts, decimal, octal and hex
// so use a radix - 2 to 36
console.log(parseInt('021',8));
console.log(parseInt('ff',16));

// Be wary of using isNaN(num) to check for numbers
console.log(isNaN('42')); // should be true as its a string, actually returns false
console.log(NaN === NaN); // should return true -  errr no its returns false - yuk !

// use typeOf as well to ACTUALLY check for number or not !!
num="42";
console.log(!isNaN(num) && (typeof num === 'number'));  // returns false - yay !
num=42;
console.log(!isNaN(num) && (typeof num === 'number'));  // returns true - yay !


