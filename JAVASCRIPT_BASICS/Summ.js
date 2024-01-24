function sum(x,y){
    console.log(`sum of ${x} and ${y} is ${x+y}`);
}
sum(848,542);
sum(5,8);

function suum(x,y){
    //local variable
    s=x+y;
    return s;
}
let val=suum(848,542);
console.log(val); 

//arrow function

const arrowSum=(a,b)=>{
    console.log(a+b);
};
arrowSum(10,12);