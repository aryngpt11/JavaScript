/* console.log("Hello")
alert("Aryan Gupta") */
/* console.dir(document.body);
console.log(document.body); */
/* let header=document.getElementById("heading")
console.dir(header); */


/* let headings=document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings); */

/* let parg=document.getElementsByTagName("p");
console.dir(parg); */

/* 
let elements=document.querySelector(".heading");
console.dir(elements);

let elementsall=document.querySelectorAll(".heading");
console.dir(elementsall); */

//console.dir(document.body.firstChild);

//let div=document.querySelector("div");
//console.dir(div);

//let heading=document.querySelector("h1");

//practice question

/* let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+" I am Aryan"; */

let divs =document.querySelectorAll(".box");
//console.log(divs[0]);
let idx=1;
for(div of divs){
    div.innerText="new unique value"+idx;
    idx++
}
/* divs[0].innerText="This is unique text1"
divs[1].innerText="This is unique text2s"
divs[2].innerText="This is unique text3" */
