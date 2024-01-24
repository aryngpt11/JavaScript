function CountVowels(str) {
    str = str.toLowerCase(); 
    let count = 0;
    
    for (const c of str) {
        if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
            count++;
        }
    }
    
    console.log(count);
}

CountVowels("Aryan");


//using arrow function

const counvowels=(str)=>{
    str = str.toLowerCase(); 
    let countt = 0;
    
    for (const c of str) {
        if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
            countt++;
        }
    }
    
    return countt;
}
let b=counvowels("Aarav");
console.log(b);

