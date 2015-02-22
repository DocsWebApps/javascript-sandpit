// Use namespace to protect your variables and functions
// Use capital to denote the namespace

var DAVECOLLIER={
	myAge: 48,
	myName: 'Dave',
	whoAmI: function() {
		console.log('You are '+this.myName+' and you are '+this.myAge+' today. Yay !');
	},
	// You can have nested namespaces
	FAMILY: {
		myWife: 'Sarah',
		mySon: 'Frazer',
		myDaughter: 'Jess',
		myFamily: function() {
			console.log('Your wife is '+this.myWife+', your son is '+this.mySon+', and your daughter is '+this.myDaughter+' :-)');
		}
	}
}

DAVECOLLIER.whoAmI();
DAVECOLLIER.FAMILY.myFamily();