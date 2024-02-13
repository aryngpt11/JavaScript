/* let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id); 
let name=div.getAttribute("name")
console.log(name) */

/* let para=document.querySelector("p")
//console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","newclass"))

let div=document.querySelector("div");
div.style.backgroundColor="green";
div.style.fontSize="22px"
div.innerText="Hello"
console.log(div) */

let btn=document.createElement("button");
btn.innerText="click Me";
console.log(btn);
let div=document.querySelector("div");
div.append(btn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi,I am new!</i>";
document.querySelector("body").prepend(newHeading);
let para=document.querySelector("p");
para.remove();

newHeading.remove();