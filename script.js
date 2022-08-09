window.addEventListener("DOMContentLoaded", function () {
	
	console.log("Hello!!!!!!!!!!!!!!!");
	
	
_document = window.parent.document;
let nameField = _document.querySelector('.name>span');
let emailField = _document.querySelector('.email .form-item');
	
nameField.style.cssText = '
	pointer-events: none;
	position: absolute;
	left: 47px;
	top: 21px;
	-webkit-transition: 0.2s;
	-o-transition: 0.2s;
	transition: 0.2s;
	-webkit-transition-timing-function: ease;
	-o-transition-timing-function: ease;
	transition-timing-function: ease;
	-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	font-weight: 600;
	font-size: 16px;
	line-height: 15px;
	color: #9cabc7;
	-webkit-transition: 0.2s all ease-out;
	-o-transition: 0.2s all ease-out;
	transition: 0.2s all ease-out';
	
emailField.style.cssText = '
	pointer-events: none;
	position: absolute;
	left: 47px;
	top: 21px;
	-webkit-transition: 0.2s;
	-o-transition: 0.2s;
	transition: 0.2s;
	-webkit-transition-timing-function: ease;
	-o-transition-timing-function: ease;
	transition-timing-function: ease;
	-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	font-weight: 600;
	font-size: 16px;
	line-height: 15px;
	color: #9cabc7;
	-webkit-transition: 0.2s all ease-out;
	-o-transition: 0.2s all ease-out;
	transition: 0.2s all ease-out';

let nameFieldChildren = nameField.children;
	
    
nameFieldChildren[2].innerHTML += "<span>First name</span>";
nameFieldChildren[3].innerHTML += "<span>Last name</span>";
emailField.innerHTML += "<span>Email</span>";

console.log(nameField);
console.log(nameFieldChildren);
	
});
