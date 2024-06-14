// let titleElement = document.getElementById('title');
// console.log(titleElement.textContent);
// let content = titleElement.textContent;

// let classElement = document.getElementsByClassName('content');
// console.log(classElement);


// const listItemElements = document.getElementsByTagName('li');
// console.log(listItemElements.length);

// const readingParagraph = document.getElementsByClassName("reading");
// console.log(readingParagraph);

// content = "Hello, ChatGpt";
// console.log(content);


// const paragraphElement = document.querySelectorAll(".content");
// for (let i = 0; i < paragraphElement.length; i++) {
//     paragraphElement[i].innerHTML = "This is <strong>modified</strong> paragraph";
//   }
// for(i in paragraphElement){
//     console.log(paragraphElement[i].innerHTML = "Hello Element")
// }


var inputElement = document.getElementById('myInput');
console.log(inputElement.type);
console.log(inputElement.value);

// inputElement.value = "New Value";
// console.log(inputElement.value);


inputElement.setAttribute("value", "NewVALUE");;
console.log(inputElement.getAttribute("value"));


var element = document.getElementById("myInput");
if(element.hasAttribute("type")){
    //Attribute exists
    console.log('exist');
}else{
    //Attribute does not exist
    console.log("doesnt exist");
}