/* for(let i=0;i<5;i++){
    console.log("Aryan");
} */

/* let summ=0;
for(let i=0;i<=5;i++){
    summ+=i;
};
console.log(summ); */

//for of loop used for string and

/* let str="Aryan";
let size=0;
for(let i of str){
    console.log(i)
    size++;
}
console.log(size); */

//for in loop used for objects

let student={
    name:"Aryan Gupta",
    age:22,
    cgpa:8.1,
    isPass:true
};
for(let i in student){
    console.log(i);
}