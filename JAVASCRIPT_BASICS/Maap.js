let nums=[67,52,39];
let newArr=nums.map((val)=>{
    return val*val;
});
console.log(newArr);
console.log(nums);

//filter

let arr=[1,2,3,4,5,6,7];
let evenArr=arr.filter((val)=>{
    return val%2===0;
});
console.log(evenArr);