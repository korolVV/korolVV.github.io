window.addEventListener("DOMContentLoaded", function () {
    let nameField = document.querySelector(".name>span");
    let nameFieldChildren = nameField.children;
    
    nameFieldChildren[2].innerHTML += "<h1>Hello</h1>";
    
    
    console.log(nameField);
    console.log(nameFieldChildren);
});
