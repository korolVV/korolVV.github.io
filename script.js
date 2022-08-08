window.addEventListener("DOMContentLoaded", function () {
    let nameField = document.querySelector(".name>span");
    let firstName = nameField.children[2];
    let lastName = nameField.children[3];
    
    firstName.innerHTML += "<h1>Hello</h1>";
    
    
    console.log(nameField);
    console.log(firstName);
});
