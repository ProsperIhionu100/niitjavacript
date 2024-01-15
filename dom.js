// // Elements are tags 
// // Document means your web page
// // Document is the parent of all the elements

// // How to access an HTML element
// const text = document.getElementById ("text");

// // innerHTML property
// // This is used for getting or replacing the content of the HTML elements
// // console.log(text.innerHTML)
// text.innerHTML = "This is a new text";

// //Access HTML elements 
// // getElementById

// // getElementByClassName
// const paragraph = document.getElementsByClassName("para")
// paragraph[2].innerHTML = "This is a new paragraph";

// const headers = document.getElementsByTagName("h3");

// // querySelector 
// const newText = document.querySelector("#text")

// // Accessing Elements Attributes

// // Use Javascript to change cs styles
// text.style.color = "red"
// text.style.backgroundColor = "teal"
// text.style.fontSize = "40px"
// text.style.padding = "20px 40px"

// // Events
// const btn = document.getElementById("btn");
// const ptag = document.getElementById("ptag");
// const img = document.getElementById("img")

// // btn.addEventListener("click", function() {
//     //     ptag.innerHTML = "Event Listened";
//     //     ptag.style.backgroundColor = "red";
//     // })
    
//     // function textColorChange(){
//     //     ptag.style.backgroundColor = "red";
//     //     ptag.style.color = "white";
//     //     ptag.innerHTML = "This is a text"
        
//     // }
    
//     // btn.addEventListener("click", textColorChange)
    
// // When you click on the button, the image should change    
// // const img = document.querySelector("#img")
    
    
// // function imgChange() {
// //     img.src = "prod13.jpg"
// // }

// // When you click on a button, change an image, when you double click on the button,revert it back to it's original image

// btn.addEventListener("click", function(){
//     img.src = "prod13.jpg"
// })

// btn.addEventListener("dblclick", function () {
//     img.src = "prod12.jpg"
// })


// // JavaScript Forms

// function validateForm(){
//     let form = document.forms["myForm"];
//     let username = form["username"].value
//     let email = form["email"].value
//     let password = form["password"].value
//     let password2 = form["password2"].value

//     if (username == ""  || email == "") {
//         alert("Fields cannot be empty")
//     } 

//     if (password != password2) {
//         alert("password must match")
//     }
// }

let para = document.getElementById("para")
let paraParent = para.parentNode;
console.log(paraParent);

// Create Elements with js
let myDiv = document.getElementById("myDiv");
// let para = document.getElementById("para")
let newElement = document.createElement("h1");
newElement.innerHTML = "Hello World!";

// myDiv.appendChild(newElement);

myDiv.insertBefore(newElement, para);

// para.remove();

myDiv.removeChild(para)

// Adding and removing a class javaScript
let text2 = document.getElementById("text2")
// Add, Remove, Toggle
// text2.classList.remove("myClass")
text2.classList.add("newClass")
 
