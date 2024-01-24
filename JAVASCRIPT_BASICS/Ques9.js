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
