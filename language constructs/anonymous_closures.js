// Namespacing only works so long as no one else ever uses that name - otherwise deep shit !
// In normal object all properties are public
var familyName='Collier'; // Global variable
var FAMILY={
	// This should be private
	familyList: ['Dave','Sarah','Fraz','Jess'],

	// 2 public methods to expose services available - need to be public
	allMembersRequest: function() {
		return this.listMembers();
	},

	addMemberRequest: function(newMember) {
		this.addMember(newMember);
	},

	// 2 private methods to do the actual work - need to be private
	addMember: function(member) {
		this.familyList.push(member);
	},

	listMembers: function() {
		var family=familyName+' Family Members: ';
		this.familyList.forEach(function(member) {
			family+=' '+member+' ';
		});
		return family;
	}
};

// Currently I can use and access all proerties
console.log(FAMILY.allMembersRequest());
FAMILY.addMemberRequest('Loki');
FAMILY.addMember('Candy');
FAMILY.addMember('FiFi');
console.log(FAMILY.listMembers());

// Conseal private variables using anonymous closures !
// Here we are creating a function that simply returns an object with two properties
// allMembersRequest and addMemberRequest
// However, we are closing up the array familyList and the two function expsressions
// addMember and listMembers
// within the scope of the returned object and therefore they are only accessible to the object itself
// and nothing else - ouch, head hurts !!

var NEWFAMILY=(function(famName) {
	// This is now private
	var familyList=['Dave','Sarah','Fraz','Jess'];

	// 2 private methods
	var addMember=function(member) {
										familyList.push(member);
									};
									
	var listMembers=function() {
											var family=famName+' Family Members: ';
											familyList.forEach(function(member) {
												family+=' '+member+' ';
											});
											return family;
										};

	// 2 public methods 
	return {
		allMembersRequest: function() {
			return listMembers();
		},

		addMemberRequest: function(newMember) {
			addMember(newMember);
		},
	};

})(familyName); // Global Import - Passing in globals creates a locally scoped variable within the objects scope

console.log(NEWFAMILY.allMembersRequest());
NEWFAMILY.addMemberRequest('Loki');
//NEWFAMILY.addMember('Candy');		// Errors out now - property is not publically available
//NEWFAMILY.addMember('FiFi');		// Errors out now - property is not publically available
//console.log(NEWFAMILY.listMembers());	// Errors out now - property is not publically available
NEWFAMILY.addMemberRequest('Candy');
NEWFAMILY.addMemberRequest('Fifi');
console.log(NEWFAMILY.allMembersRequest());

// Augmentation - adding to an already existing module
// This works because closures are produceed by the executing function, not the returned object
// The returned object simply has access to new method and scope
NEWFAMILY=(function(oldObject) {
	var message="Hi, Ive just been added to the existing object NEWFAMILY"; //Private variable added to the objects scope
	// Public property added to the old object
	oldObject.getMessage=function(){
		return message;
	};

	return oldObject;
})(NEWFAMILY);

console.log(NEWFAMILY.getMessage());