function encodingAndDecoding(num) {
    let Array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let result = 0;
    let data = num.toString().split("");

    result += isZeroAndTwentySix(num);
    result += containsZero(data);
    result += LongGreaterThree(data);

    return result;
}

function isZeroAndTwentySix(num) {
    if (num > 0 && num <= 26) {
        return 1;
    }

    return 0;

}

function containsZero(data) {
    if (data.includes("0")) {
        return 0;
    }

    return 1;
}

function LongGreaterThree(data) {
    if (data.length === 3) {
        if(parseInt(data[0]+data[1]))
        return 2;
    }

    return 0;
}
console.log("12==>"+encodingAndDecoding(12));
console.log("66==>"+encodingAndDecoding(66));
console.log("123==>"+encodingAndDecoding(123));
module.exports = encodingAndDecoding;