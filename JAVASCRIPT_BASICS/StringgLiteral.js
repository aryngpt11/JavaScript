/* let specialString=`This is a template literal`;
console.log(specialString);
console.log(typeof specialString); */

let obj={
    item:"pen",
    price:10
};
//console.log(obj["item"]);
console.log("this is a",obj.item,"of ",obj.price,"ruppess")// using string
console.log(`this is a ${obj.item} of ${obj.price} ruppess`)// using tempplate literals



let str="aryan";
//console.log(str.toUpperCase());
console.log(str.toLocaleUpperCase());
