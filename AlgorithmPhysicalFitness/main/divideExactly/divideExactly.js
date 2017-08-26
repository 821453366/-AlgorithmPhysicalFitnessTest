function divideExactly(number) {
    let result =[];

    for (let num = 1; num <= number; num++) {
        filterNumber(num, result);
    }

    return result.join(",")
}

function filterNumber(num, result) {
    if (isThreeAndFiveMultiple(num)) {
        result.push("fizz buzz");
    } else if (isThreeMultiple(num)) {
        result.push("fizz");
    } else if (isFiveMultiple(num)) {
        result.push("buzz");
    }
}

function isThreeAndFiveMultiple(num) {
    return num % 3 === 0 && num % 5 === 0;
}

function isThreeMultiple(num) {
    return num % 3 === 0;
}

function isFiveMultiple(num) {
    return num % 5 === 0;
}
console.log("6 ==>"+divideExactly(6));
console.log("10 ==>"+divideExactly(10));
console.log("30 ==>"+divideExactly(30));
module.exports =divideExactly;