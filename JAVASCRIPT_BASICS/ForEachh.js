/* function abc(){
    console.log("Hello");
}

function myFunc(abc){
    return abc;
}
let a=myFunc(abc);
console.log(a);
abc(); */


let arr=[1,2,3,4,5];
arr.forEach((num)=>{
    console.log(num*num);
});

//or

let nums=[67,52,39];
let calcSquare=(num)=>{
    console.log(num*num);
};
nums.forEach(calcSquare);