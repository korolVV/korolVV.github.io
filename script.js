window.addEventListener("DOMContentLoaded", () => {
	_document = window.parent.document;
	
	const nameField = _document.querySelector('.name>span');
	const emailSpan = _document.querySelector('.email>span');
	const emailField = _document.querySelector('.email .form-item');
	const country = _document.querySelector('.country');
	const countrySpan = _document.querySelector('.country>span');
	const checkbox = _document.querySelector('.checkbox>span');
	
	emailSpan.children[0].style.cssText = 'display: none';
	countrySpan.children[0].style.cssText = 'width: 0 !important;height: 0 !important;opacity: 0 !important;appearance: none !important';
	countrySpan.children[1].style.cssText = 'width: 0 !important;height: 0 !important;opacity: 0 !important;appearance: none !important';

	
	let divError = _document.createElement('div');
	divError.classList.add('error-message');
	let errorMessage = _document.createTextNode("Wrong name format");
	let disclaimer = _document.createElement('img');
	disclaimer.src = "https://sunbirdapp.com/icons/disclaimer.svg";
	disclaimer.alt = 'error message';
	
	divError.appendChild(disclaimer);
	divError.appendChild(errorMessage);

	
	const divError2 = divError.cloneNode();
	const errorMessage2 = _document.createTextNode("Wrong email format");
	const disclaimer2 = disclaimer.cloneNode();
	divError2.appendChild(disclaimer2);
	divError2.appendChild(errorMessage2);
	
	const divError3 = divError.cloneNode();
	const errorMessage3 = _document.createTextNode("Choose country");
	const disclaimer3 = disclaimer.cloneNode();
	divError3.appendChild(disclaimer3);
	divError3.appendChild(errorMessage3);
	
	const divError4 = divError.cloneNode();
	const errorMessage4 = _document.createTextNode("Required");
	const disclaimer4 = disclaimer.cloneNode();
	divError4.appendChild(disclaimer4);
	divError4.appendChild(errorMessage4);
	
	
    	nameField.appendChild(divError);
	emailSpan.appendChild(divError2);
	countrySpan.appendChild(divError3);
	checkbox.appendChild(divError4);
	

	
	
	const nameFieldChildren = nameField.children;
	const firstName = nameFieldChildren[2];
	const lastName = nameFieldChildren[3];

	firstName.innerHTML += "<span class=\'placeholder\' id=\'placeholder-first\'>First name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"First name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

	lastName.innerHTML += "<span class=\'placeholder\' id=\'placeholder-last\'>Last name</span><img src=\"https://sunbirdapp.com/icons/name.svg\" alt=\"Last name\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

	emailField.innerHTML += "<span class=\'placeholder\' id=\'placeholder-email\'>Email</span><img src=\"https://sunbirdapp.com/icons/email.svg\" alt=\"Email\" style=\"position:absolute;top: 50%;left: 19px;transform: translateY(-50%)\"/>";

	let imgCountry = _document.createElement('div');
	imgCountry.classList.add('country__img');
	
	let countryPlaceholder = _document.createElement('span');
	countryPlaceholder.classList.add('placeholder');
	countryPlaceholder.id = 'placeholder-country';
	const placeholderCountryText = _document.createTextNode("Country");
	countryPlaceholder.appendChild(placeholderCountryText);
	
	let changePlaceholder = _document.createElement('span');
	changePlaceholder.classList.add('placeholder-change');
	let placeholderChangeText = _document.createTextNode("Please select...");
	changePlaceholder.appendChild(placeholderChangeText);
	
	let listCountry = _document.createElement('div');
	listCountry.classList.add('country-list');
	
	let countryListSearch = _document.createElement('div');
	countryListSearch.classList.add('country-list__search');
	
	let countryListSearchImg = _document.createElement('img');
	countryListSearchImg.src = "https://sunbirdapp.com/icons/search.svg";
	countryListSearchImg.alt = 'Search';
	
	let countryListSearchInput = _document.createElement('input');
	countryListSearchInput.type = 'text';
	
	let ulCountry = _document.createElement('ul');
	ulCountry.innerHTML = '<li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/afganistan.svg\" alt=\"afganistan\"/><span>Afganistan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/albania.svg\" alt=\"albania\" /><span>Albania</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/algeria.svg\" alt=\"algeria\" /><span>Algeria</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/andorra.svg\" alt=\"andorra\" /><span>Andorra</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/angola.svg\" alt=\"angola\" /><span>Angola</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/argentina.svg\" alt=\"argentina\"/><span>Argentina</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/antigua.svg\" alt=\"Antigua and Barbuda\"/><span>Antigua and Barbuda</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/armenia.svg\" alt=\"Armenia\"/><span>Armenia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/australia.svg\" alt=\"Australia\"/><span>Australia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/austria.svg\" alt=\"Austria\"/><span>Austria</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/azerbaijan.svg\" alt=\"Azerbaijan\"/><span>Azerbaijan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/bahamas.svg\" alt=\"Bahamas\"/><span>Bahamas</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/bahrain.svg\" alt=\"Bahrain\"/><span>Bahrain</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/bangladesh.svg\" alt=\"Bangladesh\"/><span>Bangladesh</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/barbados.svg\" alt=\"Barbados\"/><span>Barbados</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/belarus.svg\" alt=\"Belarus\"/><span>Belarus</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/belgium.svg\" alt=\"Belgium\"/><span>Belgium</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/belize.svg\" alt=\"Belize\"/><span>Belize</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/benin.svg\" alt=\"Benin\"/><span>Benin</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/bhutan.svg\" alt=\"Bhutan\"/><span>Bhutan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li cass=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/bolivia.svg\" alt=\"Bolivia\"/><span>Bolivia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/bosnia.svg\" alt=\"Bosnia and Herzegovina\"/><span>Bosnia and Herzegovina</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/botswana.svg\" alt=\"Botswana\"/><span>Botswana</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/brazil.svg\" alt=\"Brazil\"/><span>Brazil</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/brunei.svg\" alt=\"Brunei\"/><span>Brunei</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/bulgaria.svg\" alt=\"Bulgaria\"/><span>Bulgaria</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/burkina.svg\" alt=\"Burkina Faso\"/><span>Burkina Faso</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/burundi.svg\" alt=\"Burundi\"/><span>Burundi</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/cabo.svg\" alt=\"Cabo Verde\"/><span>Cabo Verde</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/cambodia.svg\" alt=\"Cambodia\"/><span>Cambodia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/canada.svg\" alt=\"Canada\"/><span>Canada</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/central_africa.svg\" alt=\"Central African Republic\"/><span>Central African Republic</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/chad.svg\" alt=\"Chad\"/><span>Chad</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/chile.svg\" alt=\"Chile\"/><span>Chile</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/china.svg\" alt=\"China\"/><span>China</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/colombia.svg\" alt=\"Colombia\"/><span>Colombia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/congo.svg\" alt=\"Democratic Republic of the Congo\"/><span>Democratic Republic of the Congo</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/costa_rica.svg\" alt=\"Costa Rica\"/><span>Costa Rica</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/croatia.svg\" alt=\"Croatia\"/><span>Croatia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/cuba.svg\" alt=\"Cuba\"/><span>Cuba</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/cyprus.svg\" alt=\"Cyprus\"/><span>Cyprus</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/czech.svg\" alt=\"Czechia\"/><span>Czechia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/denmark.svg\" alt=\"Denmark\"/><span>Denmark</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/dominican.svg\" alt=\"Dominican Republic\"/><span>Dominican Republic</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/ecuador.svg\" alt=\"Ecuador\"/><span>Ecuador</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/egypt.svg\" alt=\"Egypt\"/><span>Egypt</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/el_salvador.svg\" alt=\"El Salvador\"/><span>El Salvador</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/eritrea.svg\" alt=\"Eritrea\"/><span>Eritrea</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/estonia.svg\" alt=\"Estonia\"/><span>Estonia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/ethiopia.svg\" alt=\"Ethiopia\"/><span>Ethiopia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/fiji.svg\" alt=\"Fiji\"/><span>Fiji</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/finland.svg\" alt=\"Finland\"/><span>Finland</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/france.svg\" alt=\"France\"/><span>France</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/gabon.svg\" alt=\"Gabon\"/><span>Gabon</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/gambia.svg\" alt=\"Gambia\"/><span>Gambia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/georgia.svg\" alt=\"Georgia\"/><span>Georgia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/germany.svg\" alt=\"Germany\"/><span>Germany</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/ghana.svg\" alt=\"Ghana\"/><span>Ghana</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/greece.svg\" alt=\"Greece\"/><span>Greece</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/guatemala.svg\" alt=\"Guatemala\"/><span>Guatemala</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/guinea_bissau.svg\" alt=\"Guinea Bissau\"/><span>Guinea Bissau</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/guyana.svg\" alt=\"Guyana\"/><span>Guyana</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/haiti.svg\" alt=\"Haiti\"/><span>Haiti</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/honduras.svg\" alt=\"Honduras\"/><span>Honduras</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/hungary.svg\" alt=\"Hungary\"/><span>Hungary</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/iceland.svg\" alt=\"Iceland\"/><span>Iceland</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/india.svg\" alt=\"India\"/><span>India</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/indonesia.svg\" alt=\"Indonesia\"/><span>Indonesia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/iran.svg\" alt=\"Iran\"/><span>Iran</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/iraq.svg\" alt=\"Iraq\"/><span>Iraq</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/ireland.svg\" alt=\"Ireland\"/><span>Ireland</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/israel.svg\" alt=\"Israel\"/><span>Israel</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/italy.svg\" alt=\"Italy\"/><span>Italy</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/jamaica.svg\" alt=\"Jamaica\"/><span>Jamaica</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/japan.svg\" alt=\"Japan\"/><span>Japan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/jordan.svg\" alt=\"Jordan\"/><span>Jordan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/kazakhstan.svg\" alt=\"Kazakhstan\"/><span>Kazakhstan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/kenya.svg\" alt=\"Kenya\"/><span>Kenya</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/kosovo.svg\" alt=\"Kosovo\"/><span>Kosovo</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/kuwait.svg\" alt=\"Kuwait\"/><span>Kuwait</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/kyrgyzstan.svg\" alt=\"Kyrgyzstan\"/><span>Kyrgyzstan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/laos.svg\" alt=\"Laos\"/><span>Laos</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/latvia.svg\" alt=\"Latvia\"/><span>Latvia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/liberia.svg\" alt=\"Liberia\"/><span>Liberia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/libya.svg\" alt=\"Libya\"/><span>Libya</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/liechtenstein.svg\" alt=\"Liechtenstein\"/><span>Liechtenstein</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/lithuania.svg\" alt=\"Lithuania\"/><span>Lithuania</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/luxembourg.svg\" alt=\"Luxembourg\"/><span>Luxembourg</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/madagascar.svg\" alt=\"Madagascar\"/><span>Madagascar</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/malawi.svg\" alt=\"Malawi\"/><span>Malawi</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/malaysia.svg\" alt=\"Malaysia\"/><span>Malaysia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/maldives.svg\" alt=\"Maldives\"/><span>Maldives</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/malta.svg\" alt=\"Malta\"/><span>Malta</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/marshall_islands.svg\" alt=\"Marshall Islands\"/><span>Marshall Islands</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/mauritania.svg\" alt=\"Mauritania\"/><span>Mauritania</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/mexico.svg\" alt=\"Mexico\"/><span>Mexico</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/micronesia.svg\" alt=\"Micronesia\"/><span>Micronesia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/moldova.svg\" alt=\"Moldova\"/><span>Moldova</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/monaco.svg\" alt=\"Monaco\"/><span>Monaco</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/mongolia.svg\" alt=\"Mongolia\"/><span>Mongolia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/montenegro.svg\" alt=\"Montenegro\"/><span>Montenegro</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/morocco.svg\" alt=\"Morocco\"/><span>Morocco</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/mozambique.svg\" alt=\"Mozambique\"/><span>Mozambique</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/namibia.svg\" alt=\"Namibia\"/><span>Namibia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/nepal.svg\" alt=\"Nepal\"/><span>Nepal</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/netherlands.svg\" alt=\"Netherlands\"/><span>Netherlands</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/new_zealand.svg\" alt=\"New Zealand\"/><span>New Zealand</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/nicaragua.svg\" alt=\"Nicaragua\"/><span>Nicaragua</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/nigeria.svg\" alt=\"Nigeria\"/><span>Nigeria</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/macedonia.svg\" alt=\"North Macedonia\"/><span>North Macedonia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/norway.svg\" alt=\"Norway\"/><span>Norway</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/oman.svg\" alt=\"Oman\"/><span>Oman</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/pakistan.svg\" alt=\"Pakistan\"/><span>Pakistan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/palestine.svg\" alt=\"Palestine\"/><span>Palestine</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/panama.svg\" alt=\"Panama\"/><span>Panama</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/peru.svg\" alt=\"Peru\"/><span>Peru</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/philippines.svg\" alt=\"Philippines\"/><span>Philippines</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/poland.svg\" alt=\"Poland\"/><span>Poland</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/portugal.svg\" alt=\"Portugal\"/><span>Portugal</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/qatar.svg\" alt=\"Qatar\"/><span>Qatar</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/romania.svg\" alt=\"Romania\"/><span>Romania</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/russia.svg\" alt=\"Russia\"/><span>Russia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/samoa.svg\" alt=\"Samoa\"/><span>Samoa</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/san_marino.svg\" alt=\"San Marino\"/><span>San Marino</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/saudi_arabia.svg\" alt=\"Saudi Arabia\"/><span>Saudi Arabia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/serbia.svg\" alt=\"Serbia\"/><span>Serbia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/seychelles.svg\" alt=\"Seychelles\"/><span>Seychelles</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/singapore.svg\" alt=\"Singapore\"/><span>Singapore</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/slovakia.svg\" alt=\"Slovakia\"/><span>Slovakia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/slovenia.svg\" alt=\"Slovenia\"/><span>Slovenia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/solomon_islands.svg\" alt=\"Solomon Islands\"/><span>Solomon Islands</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/south_africa.svg\" alt=\"South Africa\"/><span>South Africa</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/south_korea.svg\" alt=\"South Korea\"/><span>South Korea</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/south_sudan.svg\" alt=\"South Sudan\"/><span>South Sudan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/spain.svg\" alt=\"Spain\"/><span>Spain</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/sri_lanka.svg\" alt=\"Sri Lanka\"/><span>Sri Lanka</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/sudan.svg\" alt=\"Sudan\"/><span>Sudan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/sweden.svg\" alt=\"Sweden\"/><span>Sweden</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/switzerland.svg\" alt=\"Switzerland\"/><span>Switzerland</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/taiwan.svg\" alt=\"Taiwan\"/><span>Taiwan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/tajikistan.svg\" alt=\"Tajikistan\"/><span>Tajikistan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/tanzania.svg\" alt=\"Tanzania\"/><span>Tanzania</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/thailand.svg\" alt=\"Thailand\"/><span>Thailand</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/tunisia.svg\" alt=\"tunisia\" /><span>Tunisia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/turkey.svg\" alt=\"Turkey\"/><span>Turkey</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/turkmenistan.svg\" alt=\"Turkmenistan\"/><span>Turkmenistan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/uganda.svg\" alt=\"Uganda\"/><span>Uganda</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/ukraine.svg\" alt=\"Ukraine\"/><span>Ukraine</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-arab-emirates.svg\" alt=\"united arab emirates\"/><span>United Arab Emirates</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-kingdom.svg\"alt=\"united kingdom\"/><span>United Kingdom</span><img class=\"checkmark\"src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/united-states.svg\" alt=\"united states\"/><span>United States</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/uzbekistan.svg\" alt=\"Uzbekistan\"/><span>Uzbekistan</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/vietnam.svg\" alt=\"Vietnam\"/><span>Vietnam</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/yemen.svg\" alt=\"Yemen\"/><span>Yemen</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li><li class=\"country-list-card\"><img src=\"https://sunbirdapp.com/icons/flags/zambia.svg\" alt=\"Zambia\"/><span>Zambia</span><img class=\"checkmark\" src=\"https://sunbirdapp.com/icons/checkmark.svg\" alt=\"checkmark\"/></li>';
	
	
	let btnCountry = _document.createElement('div');
	btnCountry.classList.add('country-btn');
	
	let imgChevron = _document.createElement('img');
	imgChevron.classList.add('chevron');
	imgChevron.src = 'https://sunbirdapp.com/icons/chevron.svg';
	imgChevron.alt = 'arrow-down';
	
	country.appendChild(imgCountry);
	country.appendChild(countryPlaceholder);
	country.appendChild(changePlaceholder);
	countryListSearch.appendChild(countryListSearchImg);
	countryListSearch.appendChild(countryListSearchInput);
	listCountry.appendChild(countryListSearch);
	
	listCountry.appendChild(ulCountry);
	country.appendChild(listCountry);
	country.appendChild(btnCountry);
	country.appendChild(imgChevron);


	const countryBtn = _document.querySelector('.country-btn');
	const countryImg = _document.querySelector('.country__img');
	const placeholderCountry = _document.querySelector('#placeholder-country');
	const placeholderChange = _document.querySelector('.placeholder-change');
	const countrySearch = _document.querySelector(".country-list__search input");

	countryBtn.addEventListener('click', () => {
		setTimeout(function () {
			country.children[4].classList.add('country-list-active');
		}, 300);
		country.children[6].classList.add("chevron-active");	
	});
	
	
	const countryOptions = _document.querySelectorAll('.country option');
		
	const countryLi = _document.querySelectorAll('.country-list-card');
	
	countryLi.forEach((item, i) => {
		item.addEventListener("click", () => {
			countryLi.forEach((items, index) => {
				if(index !== i){
					items.children[2].classList.remove("checkmark-active");
				}
			});
		console.log('Hello')
		item.children[2].classList.add("checkmark-active");
// 		country.style.borderColor = '#3478f6';
// 		placeholderCountry.style.color = '#3478f6';
		placeholderCountry.classList.add('country-span-active');
// 		countryImg.style.backgroundImage = 'url(https://sunbirdapp.com/icons/country-on.svg)';
		country.children[6].classList.remove("chevron-active");
		placeholderChange.textContent = item.children[1].textContent;
		placeholderChange.style.cssText = 'display: block; font-weight = 600; font-size = 16px; color: #26344E';
		setTimeout(function () {
		country.children[4].classList.remove('country-list-active');
		}, 300);
			
		countryOptions.forEach((option) => {
			if (option.value === item.textContent) {
				option.setAttribute("selected", "selected");
			}
		});

	});
	});


// 	Search

	countrySearch.addEventListener("input", (e) => {
	countryLi.forEach((item) => {
		if (e.target.value.length > 0) {
			if (item.children[1].textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
				item.style.display = "flex";
			} else {
				item.style.display = "none";
			}
		} else {
			item.style.display = "flex";
		}
	});
	});	


		
		
	let extra = _document.querySelector('.extra');
		
	extra.innerHTML += '<img/>';
		
		
		
	const referralEmail = _document.querySelector('#referral_email');
	referralEmail.innerHTML += '<span class=\'placeholder\' id=\'placeholder-referral\'>Enter a friend’s email</span><span class=\"referral-img\"></span><div class=\"error-message\"><img src=\"https://sunbirdapp.com/icons/disclaimer.svg\" alt=\"error message\" />Wrong email format</div>';
	
	const inputName = _document.querySelector('#first_name');
	const placeholderFirst = _document.querySelector('#placeholder-first');
	const inputLast = _document.querySelector('#last_name');
	const placeholderLast = _document.querySelector('#placeholder-last');
	const email = _document.querySelector('#email');
	const placeholderEmail = _document.querySelector('#placeholder-email');
	const referralInput = _document.querySelector('#referral_email input');
	const placeholderReferral = _document.querySelector('#placeholder-referral');
	const referralImg = _document.querySelector('.referral-img');
	const sendBtn = _document.querySelector('.submit-refer-friend');
	const invalidEmail = _document.querySelector('.invalid-email');
		
	const joinBtn = _document.querySelector('.promotion .enter_sweeps');
	const nameWarning = _document.querySelector('.name .error-message');
	const emailWarning = _document.querySelector('.email .error-message');
	const countryWarning = _document.querySelector('.country .error-message');
	const checkboxWarning = _document.querySelector('.checkbox .error-message');
	
	joinBtn.addEventListener('click', () => {
		if(nameField.classList.contains('warning')){
			nameWarning.style.display = 'flex';
			setTimeout(function () {nameWarning.style.display = 'none';}, 2000);
			firstName.children[2].src = "https://sunbirdapp.com/icons/name-red.svg";
			placeholderFirst.style.cssText = "color: #e74e4e";
			inputName.style.cssText= "border-color: #e74e4e";
			
			lastName.children[2].src = "https://sunbirdapp.com/icons/name-red.svg";
			placeholderLast.style.cssText = "color: #e74e4e";
			inputLast.style.cssText = "border-color: #e74e4e";
		} 
		if(emailSpan.classList.contains('warning')){
			emailWarning.style.display = 'flex';
			setTimeout(function () {emailWarning.style.display = 'none';}, 2000);
			emailField.children[2].src = "https://sunbirdapp.com/icons/email-red.svg";
			placeholderEmail.style.cssText = "color: #e74e4e";
			email.style.cssText= "border-color: #e74e4e";
		}
		if(countrySpan.classList.contains('warning') || placeholderChange.textContent === "Country"){
			countryWarning.style.display = 'flex';
			countryImg.style.backgroundImage = 'url(https://sunbirdapp.com/icons/country-red.svg)';
			placeholderCountry.style.cssText = "color: #e74e4e";
			country.style.cssText= "border-color: #e74e4e; margin-bottom: 36px";
			setTimeout(function () {countryWarning.style.display = 'none'; country.style.cssText = 'border-color: #e74e4e; margin-bottom: 0';}, 2000);
		} 
		if(checkbox.classList.contains('warning')){
			checkboxWarning.style.display = 'flex';
			checkbox.children[1].style.cssText = "outline-color: #e74e4e";
			setTimeout(function () {checkboxWarning.style.display = 'none';}, 2000);
		} 
	});
	
	
	sendBtn.addEventListener('click', () => {
		setTimeout(function () {
		if(invalidEmail.classList.contains('hide')){
			return;
		} else {
			placeholderReferral.style.cssText= "color: #e74e4e";
			referralInput.style.cssText = "border-color: #e74e4e";
			referralImg.style.backgroundImage = 'url(https://sunbirdapp.com/icons/name-red.svg)';
		}
		}, 100);
	});
	
	
	inputName.addEventListener('input', () => {
		firstName.children[2].src = "https://sunbirdapp.com/icons/name.svg";
		placeholderFirst.style.cssText = "color: #9CABC7";
		inputName.style.cssText = "border-color: #9CABC7";
	
	});
	inputLast.addEventListener('input', () => {
		lastName.children[2].src = "https://sunbirdapp.com/icons/name.svg";
		placeholderLast.style.cssText = "color: #9CABC7";
		inputLast.style.cssText = "border-color: #9CABC7";
	
	});
	email.addEventListener('input', () => {
		emailField.children[2].src = "https://sunbirdapp.com/icons/email.svg";
		placeholderEmail.style.cssText = "color: #9CABC7";
		email.style.cssText = "border-color: #9CABC7";
	
	});
	
	country.addEventListener('click', () => {
		countryImg.style.backgroundImage = 'url(https://sunbirdapp.com/icons/country.svg)';
		placeholderCountry.style.cssText = "color: #9CABC7";
		country.style.cssText = "border-color: #9CABC7";
	
	});
	checkbox.addEventListener('click', () => {
		checkbox.children[1].style.cssText = "outline-color: #9CABC7";
	
	});
	referralInput.addEventListener('input', () => {
		referralImg.style.backgroundImage = 'url(https://sunbirdapp.com/icons/name.svg)';
		placeholderReferral.style.cssText= "color: #9CABC7";
		referralInput.style.cssText = "border-color: #9CABC7";
	
	});
	
	

	
	inputName.addEventListener('blur', () => {
		if (inputName.value.length >= 1) {
			firstName.children[2].src = "https://sunbirdapp.com/icons/name-on.svg";
			placeholderFirst.style.cssText = "color: #3478F6";
			inputName.style.cssText = "border-color: #3478F6";
		} else {
			firstName.children[2].src = "https://sunbirdapp.com/icons/name.svg";
			placeholderFirst.style.cssText = "color: #9CABC7";
			inputName.style.cssText = "border-color: #9CABC7";
		}
	});



	inputLast.addEventListener('blur', () => {
		if (inputLast.value.length >= 1) {
			lastName.children[2].src = "https://sunbirdapp.com/icons/name-on.svg";
			placeholderLast.style.cssText = "color: #3478F6";
			inputLast.style.cssText = "border-color: #3478F6";
		} else {
			lastName.children[2].src = "https://sunbirdapp.com/icons/name.svg";
			placeholderLast.style.cssText = "color: #9CABC7";
			inputLast.style.cssText = "border-color: #9CABC7";
		}
	});
		
	
	email.addEventListener('blur', () => {
		if (email.value.length >= 1) {
			emailField.children[2].src = "https://sunbirdapp.com/icons/email-on.svg";
			placeholderEmail.style.cssText = "color: #3478F6";
			email.style.cssText= "border-color: #3478F6";
		} else {
			emailField.children[2].src = "https://sunbirdapp.com/icons/email.svg";
			placeholderEmail.style.cssText = "color: #9CABC7";
			email.style.cssText = "border-color: #9CABC7";
		}
	});
		
	referralInput.addEventListener('blur', () => {
		if (referralInput.value.length >= 1) {
			referralImg.style.backgroundImage = 'url(https://sunbirdapp.com/icons/name-on.svg)';
			placeholderReferral.style.cssText = "color: #3478F6";
			referralInput.style.cssText= "border-color: #3478F6";
		} else {
			referralImg.style.backgroundImage = 'url(https://sunbirdapp.com/icons/name.svg)';
			placeholderReferral.style.cssText= "color: #9CABC7";
			referralInput.style.cssText = "border-color: #9CABC7";
		}
	});
	

	
	

	
	
	
});
