const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//Creating functions for random letters, numbers and symbols
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol(){
    const symbols = `!@<>#$%^&*()+-=/|`
    return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getRandomSymbol())
console.log(getRandomNumber())
console.log(getRandomLower())
console.log(getRandomUpper())