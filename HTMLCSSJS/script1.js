/* let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id); 
let name=div.getAttribute("name")
console.log(name) */

let para=document.querySelector("p")
//console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","newclass"))

let div=document.querySelector("div");
div.style.backgroundColor="green";
div.style.fontSize="22px"
div.innerText="Hello"
console.log(div)
