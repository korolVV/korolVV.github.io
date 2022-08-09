window.addEventListener("DOMContentLoaded", function () {
	

_document = window.parent.document;
const nameField = _document.querySelector('.name>span');
const emailField = _document.querySelector('.email .form-item');
const country = _document.querySelector('.country');
const firstNameInput = _document.querySelector('#first_name');
const lastNameInput = _document.querySelector('#last_name');

const nameFieldChildren = nameField.children;
	
const firstName = nameFieldChildren[2];
const lastName = nameFieldChildren[3];

firstName.innerHTML += "<span>First name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"First name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

lastName.innerHTML += "<span>Last name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"Last name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

emailField.innerHTML += "<span>Email</span><img src=\"https://sunbirdapp.com/icons/email.svg\" alt=\"Email\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

country.innerHTML = "<div class=\"country__img\"></div><span>Country</span><span class=\"placeholder\" style=\"display:none;\">Please select...</span><div class=\"country-list\"><div class=\"country-list__search\"><img src=\"https://sunbirdapp.com/icons/search.svg\" alt=\"Search\" /><input type=\"text\" placeholder=\"Primamy Label\" /></div><ul><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/afganistan.svg\" alt=\"afganistan\"/><span>Afganistan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/albania.svg\" alt=\"albania\" /><span>Albania</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/algeria.svg\" alt=\"algeria\" /><span>Algeria</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/andorra.svg\" alt=\"andorra\" /><span>Andorra</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/angola.svg\" alt=\"angola\" /><span>Angola</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/argentina.svg\" alt=\"argentina\"/><span>Argentina</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/tunisia.svg\" alt=\"tunisia\" /><span>Tunisia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-arab-emirates.svg\" alt=\"united arab emirates\"/><span>United Arab Emirates</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-kingdom.svg\"alt=\"united kingdom\"/><span>United Kingdom</span><img class=\"checkmark\"src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-states.svg\" alt=\"united states\"/><span>United States</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li></ul></div><div class=\"country-btn\"></div><img class=\"chevron\" src=\"https://sunbirdapp.com/icons/chevron.svg\" alt=\"arrow-down\" />";


	
firstName.children[1].style.cssText = 'pointer-events: none;position: absolute;left: 51px;top: 50%;transform: translateY(-50%);-webkit-transition: 0.2s;-o-transition: 0.2s;transition: 0.2s;-webkit-transition-timing-function: ease;-o-transition-timing-function: ease;transition-timing-function: ease;-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);font-weight: 600;font-size: 16px;line-height: 15px;color: #9cabc7;-webkit-transition: 0.2s all ease-out;-o-transition: 0.2s all ease-out;transition: 0.2s all ease-out';	
	
lastName.children[1].style.cssText = 'pointer-events: none;position: absolute;left: 51px;top: 50%;transform: translateY(-50%);-webkit-transition: 0.2s;-o-transition: 0.2s;transition: 0.2s;-webkit-transition-timing-function: ease;-o-transition-timing-function: ease;transition-timing-function: ease;-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);font-weight: 600;font-size: 16px;line-height: 15px;color: #9cabc7;-webkit-transition: 0.2s all ease-out;-o-transition: 0.2s all ease-out;transition: 0.2s all ease-out';
	
emailField.children[1].style.cssText = 'pointer-events: none;position: absolute;left: 51px;top: 50%;transform: translateY(-50%);-webkit-transition: 0.2s;-o-transition: 0.2s;transition: 0.2s;-webkit-transition-timing-function: ease;-o-transition-timing-function: ease;transition-timing-function: ease;-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);font-weight: 600;font-size: 16px;line-height: 15px;color: #9cabc7;-webkit-transition: 0.2s all ease-out;-o-transition: 0.2s all ease-out;transition: 0.2s all ease-out';
	
country.children[1].style.cssText = 'pointer-events: none;position: absolute;left: 51px;top: 50%;transform: translateY(-50%);-webkit-transition: 0.2s;-o-transition: 0.2s;transition: 0.2s;-webkit-transition-timing-function: ease;-o-transition-timing-function: ease;transition-timing-function: ease;-webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);-o-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);font-weight: 600;font-size: 16px;line-height: 15px;color: #9cabc7;-webkit-transition: 0.2s all ease-out;-o-transition: 0.2s all ease-out;transition: 0.2s all ease-out';
	
country.children[0].style.cssText = 'background-image: url(https://sunbirdapp.com/icons/country.svg);width: 14px;height: 16px;position: absolute;top: 50%;left: 19px;transform: translateY(-50%)';
	
country.children[3].style.cssText = 'display: none;position: absolute;width: calc(100% + 4px);left: 50%;-webkit-transform: translateX(-50%);-ms-transform: translateX(-50%);transform: translateX(-50%);top: 68px;z-index: 20;max-height: 336px;background: #fff;-webkit-box-shadow: 0 4px 24px rgba(38, 52, 78, 0.16);box-shadow: 0 4px 24px rgba(38, 52, 78, 0.16);border-radius: 16px;padding: 80px 16px 0';
	
country.children[5].style.cssText = 'position: absolute;right: 19px;-webkit-transition: 0.3s;-o-transition: 0.3s;transition: 0.3s';
	
country.addEventListener('click', () => {
	country.children[1].classList.toggle('.country-span-active');
	country.children[3].style.dispay = "flex";	
});

	
const countryListSearch = _document.querySelector('.country-list__search');
countryListSearch.style.cssText = 'height: 48px;margin-bottom: 16px;border: 2px #a0abc5 solid;border-radius: 15px;display: -webkit-box;display: -ms-flexbox;display: flex;max-width: 352px;width: 100%;-webkit-box-align: center;-ms-flex-align: center;align-items: center;padding-left: 19px;z-index: 30;position: absolute;top: 16px;left: 50%;-webkit-transform: translateX(-50%);-ms-transform: translateX(-50%);transform: translateX(-50%)';


	
	
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
