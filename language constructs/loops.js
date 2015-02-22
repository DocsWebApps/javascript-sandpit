function loops() {
	console.log("Hey there, lets do some looping");
	var myarray=[1,2,3,9,5,6,7,8],
		len=myarray.length,
		count=0;

	var myObject={
		property1: 3,
		property2: "Hello, I am a string",
		property3: ['I', 'am', 'an', 'array'],
		property4: {property1: 'Another', property2: 'Object'},
		property5: function(param) {
			return 'I am a function/method that received '+param+' as a parameter';
		}
	};

	//1. For loop
	for(var i=0;i<myarray.length;i++) {
		console.log("Array element "+i+" is "+myarray[i]);
	}

	//2. forEach on a collection loop
	myarray.forEach(function(value,index,array) {
		console.log(value+" "+index+" "+array);
	});

	for (ele in myarray) {
		console.log(ele+" "+myarray[ele]);
	}

	//3. While loop
	count=0;
	while(count<len) {
		console.log("element "+count);
		count++;
	}

	//4. Do .. While loop
	count=0;
	do {
		console.log("element "+count);
		count++;
	} while(count<len)

	//5. For-in for enumerating over an objects properties
	var value=null;
	for(key in myObject) {
		value=myObject[key];
		console.log(key+':', value);
	}
}

loops();

// Loop optimisations
var myObject={
	name: 'myObject',
	contents: [{subname: 'subname'},{subcontents: [1,2,3,4]}]
};

// Bad way yo navigate Loop
for(var i=0; i<myObject.contents[1].subcontents.length; i++) {
	console.log('Array contents are: '+ myObject.contents[1].subcontents[i]);
}

// Better way if you want to reuse myLength varaible outside the loop
var myLength=myObject.contents[1].subcontents.length;
for(var i=0; i<myLength; i++) {
	console.log('Array contents are: '+ myObject.contents[1].subcontents[i]);
}

// Better way if you want dont to reuse myLength varaible outside the loop
for(var i=0, myLength=myObject.contents[1].subcontents.length; i<myLength; i++) {
	console.log('Array contents are: '+ myObject.contents[1].subcontents[i]);
}

// Ultimate way if you want dont to reuse myLength varaible outside the loop
var listItem=myObject.contents[1].subcontents;
for(var i=0, myLength=myObject.contents[1].subcontents.length; i<myLength; i++) {
	console.log('Array contents are: '+ listItem[i]);
}

// For in statements loop over functions as well - sometime not good
var InvertedPeninsula = function() {
  this.inhabitants = [
    {
      name: "Sir Charles",
      race: "Human"
    },
    {
      name: "Ealei",
      race: "Elf"
    }
  ];

  // Adds an extra `humans` method property to the inhabitants `array` to return all `Humans`
  this.inhabitants.humans = function() { return 'OK';};
};

// Create a new invertedPeninsula
var invertedPeninsula = new InvertedPeninsula();

// Console.log the `name` of each invertedPeninsula inhabitant
for(var i in invertedPeninsula.inhabitants) {
  console.log(invertedPeninsula.inhabitants[i].name);
}

// If all you want is the name property in the inhabitants objects
// cache up a pointer to the array and cache the length and then iterate
for(var i=0, myLength=invertedPeninsula.inhabitants.length, myArray=invertedPeninsula.inhabitants;i<myLength;i++) {
  console.log(myArray[i].name);
}