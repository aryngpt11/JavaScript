let n=prompt("enter a number: ");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum= ",sum);

let product=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("product= ",product);
