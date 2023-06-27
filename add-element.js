// create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Hi there and greetings!");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const existingDiv = document.getElementById("my-target-element");
document.body.appendChild(newDiv, existingDiv);

// create a new div element
const newH2 = document.createElement("h2");

// and give it some content
const newContentForH2 = document.createTextNode("Hi there!");

// add the text node to the newly created div
newH2.appendChild(newContentForH2);

// add the newly created element and its content into the DOM
const existingH2 = document.getElementById("my-target-element2");
document.body.appendChild(newH2, existingH2);