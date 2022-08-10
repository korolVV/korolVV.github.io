window.addEventListener("DOMContentLoaded", function () {


	_document = window.parent.document;
	const nameField = _document.querySelector('.name>span');
	const emailField = _document.querySelector('.email .form-item');
	const country = _document.querySelector('.country');

	const nameFieldChildren = nameField.children;

	const firstName = nameFieldChildren[2];
	const lastName = nameFieldChildren[3];

	firstName.innerHTML += "<span class=\'placeholder\' id=\'placeholder-first\'>First name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"First name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

	lastName.innerHTML += "<span class=\'placeholder\' id=\'placeholder-last\'>Last name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"Last name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

	emailField.innerHTML += "<span class=\'placeholder\' id=\'placeholder-email\'>Email</span><img src=\"https://sunbirdapp.com/icons/email.svg\" alt=\"Email\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

	country.innerHTML = "<div class=\"country__img\"></div><span class=\'placeholder\' id=\'placeholder-country\'>Country</span><span class=\"placeholder-change\">Please select...</span><div class=\"country-list\"><div class=\"country-list__search\"><img src=\"https://sunbirdapp.com/icons/search.svg\" alt=\"Search\" /><input type=\"text\" placeholder=\"Primamy Label\" /></div><ul><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/afganistan.svg\" alt=\"afganistan\"/><span>Afganistan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/albania.svg\" alt=\"albania\" /><span>Albania</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/algeria.svg\" alt=\"algeria\" /><span>Algeria</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/andorra.svg\" alt=\"andorra\" /><span>Andorra</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/angola.svg\" alt=\"angola\" /><span>Angola</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/argentina.svg\" alt=\"argentina\"/><span>Argentina</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/tunisia.svg\" alt=\"tunisia\" /><span>Tunisia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-arab-emirates.svg\" alt=\"united arab emirates\"/><span>United Arab Emirates</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-kingdom.svg\"alt=\"united kingdom\"/><span>United Kingdom</span><img class=\"checkmark\"src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-states.svg\" alt=\"united states\"/><span>United States</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li></ul></div><div class=\"country-btn\"></div><img class=\"chevron\" src=\"https://sunbirdapp.com/icons/chevron.svg\" alt=\"arrow-down\" />";

	const countryBtn = _document.querySelector('.country-btn');
	const countryImg = _document.querySelector('.country__img');
	const placeholderCountry = _document.querySelector('#placeholder-country');
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

	countryLi.forEach((item, i) => {
	item.addEventListener("click", () => {
		countryLi.forEach((items, index) => {
			if(index !== i){
				items.children[2].classList.remove("checkmark-active");
			}
		});
		item.children[2].classList.toggle("checkmark-active");
		country.classList.add("country-active");
		countryImg.classList.add("country-img-active");
		country.children[5].classList.toggle("chevron-active");
		placeholderCountry.classList.add("country-span-color-active");
		placeholderChange.textContent = item.children[1].textContent;
		placeholderChange.style.fontWeight = "600";
		placeholderChange.style.fontSize = "16px";
		placeholderChange.style.color = "#26344E";
		setTimeout(function () {
		country.children[3].classList.toggle('country-list-active');
		}, 300);
		
	
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




	const inputName = _document.querySelector('#first_name');
	const placeholderFirst = _document.querySelector('#placeholder-first');

	inputName.addEventListener('blur', () => {
		if (inputName.value.length >= 1) {
			firstName.children[2].src = "https://sunbirdapp.com/icons/name-on.svg";
			placeholderFirst.style.cssText = "color: #3478F6 !important";
			inputName.style.cssText = "border-color: #3478F6 !important";
		} else {
			firstName.children[2].src = "https://sunbirdapp.com/icons/name.svg";
			placeholderFirst.style.cssText = "color: #9CABC7 !important";
			inputName.style.cssText = "border-color: #9CABC7 !important";
		}
	});


	const inputLast = _document.querySelector('#last_name');
	const placeholderLast = _document.querySelector('#placeholder-last');

	inputLast.addEventListener('blur', () => {
		if (inputLast.value.length >= 1) {
			lastName.children[2].src = "https://sunbirdapp.com/icons/name-on.svg";
			placeholderLast.style.cssText = "color: #3478F6 !important";
			inputLast.style.cssText = "border-color: #3478F6 !important";
		} else {
			lastName.children[2].src = "https://sunbirdapp.com/icons/name.svg";
			placeholderLast.style.cssText = "color: #9CABC7 !important";
			inputLast.style.cssText = "border-color: #9CABC7 !important";
		}
	});
		
		
	const email = _document.querySelector('#email');
	const placeholderEmail = _document.querySelector('#placeholder-email');

	email.addEventListener('blur', () => {
		if (email.value.length >= 1) {
			emailField.children[2].src = "https://sunbirdapp.com/icons/email-on.svg";
			placeholderEmail.style.cssText = "color: #3478F6 !important";
			email.style.cssText= "border-color: #3478F6 !important";
		} else {
			emailField.children[2].src = "https://sunbirdapp.com/icons/email.svg";
			placeholderLast.style.cssText = "color: #9CABC7 !important";
			email.style.cssText = "border-color: #9CABC7 !important";
		}
	});
		
		
	let extra = _document.querySelector('.actions ul li');
		
	extra.innerHTML += <img src=\"https://sunbirdapp.com/icons/email.svg\" alt=\"Email\">
		
		
		
		
		
		
		
});
});
