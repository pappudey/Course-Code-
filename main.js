// let docName = document.getElementById("container");
// let programmer = document.getElementById("programmer");
// programmer.textContent= "Codex Devware"
// programmer.innerText = "Codex Devware"


// console.dir(programmer.textContent)
// console.dir(programmer.innerText)
// console.dir(programmer.innerHTML)

// programmer.style.color ="black"
// programmer.style.fontWeight = "100";

// let programmer = document.querySelector("#programmer");


// let tagConnect = document.getElementsByTagName("div");

let container = document.querySelector("#container");
let h2Element = container.querySelector("h2");


let newElement = document.createElement('div')
newElement.className = "red";

newElement.setAttribute("id", "blue");
newElement.setAttribute("title", "Hey Programmer")

container.insertBefore(newElement,h2Element);
newElement.innerHTML = "New Element Add "

console.log(newElement)

