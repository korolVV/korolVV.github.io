window.addEventListener("DOMContentLoaded", function () {
	
	console.log("Hello!!!!!!!!!!!!!!!");
	
	
_document = window.parent.document;
const nameField = _document.querySelector('.name>span');
const emailField = _document.querySelector('.email .form-item');
const countryField = _document.querySelector('.country .form-item');
const firstNameInput = _document.querySelector('#first_name');
const lastNameInput = _document.querySelector('#last_name');

const nameFieldChildren = nameField.children;
	
const firstName = nameFieldChildren[2];
const lastName = nameFieldChildren[3];

firstName.innerHTML += "<span>First name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"First name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

lastName.innerHTML += "<span>Last name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"Last name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

emailField.innerHTML += "<span>Email</span><img src=\"https://sunbirdapp.com/icons/email.svg\" alt=\"Email\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

countryField.innerHTML = "<div class=\"country__img\"></div><span>Country</span><span class=\"placeholder\">Please select...</span><div class=\"country-list\"><div class=\"country-list__search\"><img src=\"https://sunbirdapp.com/icons/search.svg\" alt=\"Search\" /><input type=\"text\" placeholder=\"Primamy Label\" /></div><ul><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/afganistan.svg\" alt=\"afganistan\"/><span>Afganistan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/albania.svg\" alt=\"albania\" /><span>Albania</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/algeria.svg\" alt=\"algeria\" /><span>Algeria</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/andorra.svg\" alt=\"andorra\" /><span>Andorra</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/angola.svg\" alt=\"angola\" /><span>Angola</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/argentina.svg\" alt=\"argentina\"/><span>Argentina</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/tunisia.svg\" alt=\"tunisia\" /><span>Tunisia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-arab-emirates.svg\" alt=\"united arab emirates\"/><span>United Arab Emirates</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-kingdom.svg\"alt=\"united kingdom\"/><span>United Kingdom</span><img class=\"checkmark\"src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-states.svg\" alt=\"united states\"/><span>United States</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li></ul></div><div class=\"country-btn\"></div><img class=\"chevron\" src=\"https://sunbirdapp.com/icons/chevron.svg\" alt=\"arrow-down\" />";


	
firstName.children[1].style.cssText = 'pointer-events: none;position: absolute;left: 51px;top: 23px;-webkit-transition: 0.2s;-o-transition: 0.2s;transition: 0.2s;-webkit-transition-timing-function: ease;-o-transition-timing-function: ease;transition-timing-function: ease;-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);font-weight: 600;font-size: 16px;line-height: 15px;color: #9cabc7;-webkit-transition: 0.2s all ease-out;-o-transition: 0.2s all ease-out;transition: 0.2s all ease-out';	
	
lastName.children[1].style.cssText = 'pointer-events: none;position: absolute;left: 51px;top: 23px;-webkit-transition: 0.2s;-o-transition: 0.2s;transition: 0.2s;-webkit-transition-timing-function: ease;-o-transition-timing-function: ease;transition-timing-function: ease;-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);font-weight: 600;font-size: 16px;line-height: 15px;color: #9cabc7;-webkit-transition: 0.2s all ease-out;-o-transition: 0.2s all ease-out;transition: 0.2s all ease-out';
	
emailField.children[1].style.cssText = 'pointer-events: none;position: absolute;left: 51px;top: 23px;-webkit-transition: 0.2s;-o-transition: 0.2s;transition: 0.2s;-webkit-transition-timing-function: ease;-o-transition-timing-function: ease;transition-timing-function: ease;-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);font-weight: 600;font-size: 16px;line-height: 15px;color: #9cabc7;-webkit-transition: 0.2s all ease-out;-o-transition: 0.2s all ease-out;transition: 0.2s all ease-out';
	
countryField.children[1].style.cssText = 'pointer-events: none;position: absolute;left: 51px;top: 23px;-webkit-transition: 0.2s;-o-transition: 0.2s;transition: 0.2s;-webkit-transition-timing-function: ease;-o-transition-timing-function: ease;transition-timing-function: ease;-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);font-weight: 600;font-size: 16px;line-height: 15px;color: #9cabc7;-webkit-transition: 0.2s all ease-out;-o-transition: 0.2s all ease-out;transition: 0.2s all ease-out';
	
console.log(firstNameInput.activeElement);
console.log(2+2===4);
	
	
firstNameInput.addEventListener("input", (e) => {
	if (e.target.value.length >= 1) {
		firstName.children[2].src = "https://sunbirdapp.com/icons/name-on.svg";
		firstName.children[1].style.color = "#3478F6";
		firstNameInput.style.borderColor = "#3478F6";
// 	} else {
// 		img1.src = "https://sunbirdapp.com/icons/name.svg";
// 		span1.style.color = "#9CABC7";
// 		first_name.style.borderColor = "#9CABC7";
// 	}
	}});

	
});
