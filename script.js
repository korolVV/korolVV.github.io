window.addEventListener("DOMContentLoaded", function () {


	_document = window.parent.document;
	const nameField = _document.querySelector('.name>span');
	const emailField = _document.querySelector('.email .form-item');
	const country = _document.querySelector('.country');

	const nameFieldChildren = nameField.children;

	const firstName = nameFieldChildren[2];
	const lastName = nameFieldChildren[3];

	firstName.innerHTML += "<span class=\'placeholder\'>First name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"First name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

	lastName.innerHTML += "<span class=\'placeholder\'>Last name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"Last name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

	emailField.innerHTML += "<span class=\'placeholder\'>Email</span><img src=\"https://sunbirdapp.com/icons/email.svg\" alt=\"Email\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

	country.innerHTML = "<div class=\"country__img\"></div><span class=\'placeholder\'>Country</span><span class=\"placeholder-change\">Please select...</span><div class=\"country-list\"><div class=\"country-list__search\"><img src=\"https://sunbirdapp.com/icons/search.svg\" alt=\"Search\" /><input type=\"text\" placeholder=\"Primamy Label\" /></div><ul><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/afganistan.svg\" alt=\"afganistan\"/><span>Afganistan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/albania.svg\" alt=\"albania\" /><span>Albania</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/algeria.svg\" alt=\"algeria\" /><span>Algeria</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/andorra.svg\" alt=\"andorra\" /><span>Andorra</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/angola.svg\" alt=\"angola\" /><span>Angola</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/argentina.svg\" alt=\"argentina\"/><span>Argentina</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/tunisia.svg\" alt=\"tunisia\" /><span>Tunisia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-arab-emirates.svg\" alt=\"united arab emirates\"/><span>United Arab Emirates</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-kingdom.svg\"alt=\"united kingdom\"/><span>United Kingdom</span><img class=\"checkmark\"src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-states.svg\" alt=\"united states\"/><span>United States</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li></ul></div><div class=\"country-btn\"></div><img class=\"chevron\" src=\"https://sunbirdapp.com/icons/chevron.svg\" alt=\"arrow-down\" />";

	const countryBtn = _document.querySelector('.country-btn');
	const countryImg = _document.querySelector('.country__img');
	const placeholder = _document.querySelector('.placeholder');
	const placeholderChange = _document.querySelector('.placeholder-change');
	const countrySearch = _document.querySelector(".country-list__search input");

	countryBtn.addEventListener('click', () => {
	country.children[1].classList.toggle('country-span-active');
	setTimeout(function () {
		country.children[2].classList.toggle('placeholder-change-active');
	}, 90);
	country.children[5].classList.toggle("chevron-active");
	country.children[3].classList.toggle('country-list-active');	
	});
	
	
	
	const countryLi = _document.querySelectorAll('.country-list-card');

	countryLi.forEach((item) => {
	item.addEventListener("click", () => {
		item.children[2].classList.toggle("checkmark-active");
		country.classList.add("country-active");
		countryImg.classList.add("country-img-active");
		placeholderChange.classList.add("country-span-color-active");
		placeholderChange.textContent = item.children[1].textContent;
		placeholderChange.style.fontWeight = "600";
		placeholderChange.style.fontSize = "16px";
		placeholderChange.style.color = "#26344E";
		setTimeout(function () {
		country.children[3].classList.toggle('country-list-active');
		}, 1000);
		
	});
	});


	// Search

	countrySearch.addEventListener("input", (e) => {
	countryLi.forEach((item) => {
		if (e.target.value.length > 0) {
			if (item.children[1].textContent.includes(e.target.value)) {
				item.style.display = "flex";
			} else {
				item.style.display = "none";
			}
		} else {
			item.style.display = "flex";
		}
	});
	});	




	const firstNameInput = _document.querySelector('#first_name');
	const lastNameInput = _document.querySelector('#last_name');



	console.log(firstNameInput);

	firstNameInput.addEventListener("change", (e) => {
	console.log(e.target.value);
	if (e.target.value.length >= 1) {
		firstNameChildren[2].src = "https://sunbirdapp.com/icons/name-on.svg";
		firstNameChildren[1].style.color = "#3478F6";
		firstNameInput.style.borderColor = "#3478F6";
		console.log('Works');
	} else {
		firstNameChildren[2].src = "https://sunbirdapp.com/icons/name.svg";
		firstNameChildren[1].style.color = "#9CABC7";
		firstNameInput.style.borderColor = "#9CABC7";
	}
	});



});
