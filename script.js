window.addEventListener("DOMContentLoaded", () => {
	_document = window.parent.document;

	const nameField = _document.querySelector(".name>span");
	const emailSpan = _document.querySelector(".email>span");
	const emailField = _document.querySelector(".email .form-item");
	const country = _document.querySelector(".country");
	const checkbox = _document.querySelector(".checkbox>span");

	const nameFieldChildren = nameField.children;

	const firstName = nameFieldChildren[2];
	const lastName = nameFieldChildren[3];

	firstName.innerHTML +=
		'<span class=\'placeholder\' id=\'placeholder-first\'>First name</span><img src="https://sunbirdapp.com/icons/name.svg" alt="First name" style="position:absolute;top: 50%;left: 19px;transform: translateY(-50%)"/>';

	lastName.innerHTML +=
		'<span class=\'placeholder\' id=\'placeholder-last\'>Last name</span><img src="https://sunbirdapp.com/icons/name.svg" alt="Last name" style="position:absolute;top: 50%;left: 19px;transform: translateY(-50%)"/>';

	emailField.innerHTML +=
		'<span class=\'placeholder\' id=\'placeholder-email\'>Email</span><img src="https://sunbirdapp.com/icons/email.svg" alt="Email" style="position:absolute;top: 50%;left: 19px;transform: translateY(-50%)"/>';

	
	
	
	const inputName = _document.querySelector('#first_name');
	console.log(inputName);
	inputName.addEventListener('click', () => {
		console.log('Hello');
	});
		
	
});
