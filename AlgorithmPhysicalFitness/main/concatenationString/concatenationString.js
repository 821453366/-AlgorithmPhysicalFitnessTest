function leftPad(characterString, number, alphabetic) {
    let howLong = number - characterString.length;
    let newCharacterString = '';

    for(let i =0;i<howLong;i++){
        newCharacterString+=alphabetic;
    }

    return newCharacterString+characterString;
}
module.exports = leftPad;
console.log(leftPad('hello', 20, '1'));
