// Type coercion - double == tries to help out by comparing the values but not types
console.log("'4' == 4 is "+('4' == 4));

// === checks value AND type
console.log("'4' === 4 is "+('4' === 4));

console.log("true == 1 is "+(true == 1));
console.log("true === 1 is "+(true === 1));

console.log("'\n' == 1 "+('/n' == 0));
console.log("'\n' === 1 "+('/n' === 0));

// === is a strict comparitor