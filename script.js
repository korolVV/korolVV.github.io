window.addEventListener("DOMContentLoaded", function () {
    let nameField = document.querySelector(".name>span");
    let firstName = nameField.children[1];
    let lastName = nameField.children[2];
    
    nameField.innerHTML += "<h1>Hello</h1>";
});
