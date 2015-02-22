var EXAMPLE1=(function() {
	var myList=['Dave','Sarah','Fraz','Jess'],
		element,
		fragment,
		targetElement;

	return {
		loadMessage: function() {
			element=document.getElementById('message');
			element.appendChild(document.createTextNode('My Family !!'));
		},
		loadFamily: function() {
			targetElement=document.getElementById('mylist');
			fragment=document.createDocumentFragment();
			for(var i=0, x=myList.length;i<x;i++) {
				element=document.createElement('li');
				element.appendChild(document.createTextNode(myList[i]));
				fragment.appendChild(element);
			}
			targetElement.appendChild(fragment);
		}
	};

})();

EXAMPLE1.loadMessage();
EXAMPLE1.loadFamily();