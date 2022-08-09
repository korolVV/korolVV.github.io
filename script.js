window.addEventListener("DOMContentLoaded", function () {
	
	console.log("Hello!!!!!!!!!!!!!!!");
	
	
	_document = window.parent.document;
	let nameField = _document.querySelector('.name>span');
	
	console.log(nameField);
	
    let nameFieldChildren = nameField.children;
	
    
    nameFieldChildren[2].innerHTML += "<span>First name</span>";
    nameFieldChildren[3].innerHTML += "<span>Last name</span>";
    
    
    console.log(nameField);
    console.log(nameFieldChildren);
});
