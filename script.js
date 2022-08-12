window.addEventListener("DOMContentLoaded", () => {
	_document = window.parent.document;

	const inputName = _document.querySelector('#name_field');
	console.log(inputName);
	inputName.addEventListener('click', () => {
		console.log('Hello');
	});
		
	
});
