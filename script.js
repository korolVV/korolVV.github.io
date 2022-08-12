window.addEventListener("DOMContentLoaded", () => {
	_document = window.parent.document;

	const inputName = _document.querySelector('#first_name');
	console.log(inputName);
	inputName.addEventListener('click', () => {
		console.log('Hello');
	});
		
	
});
