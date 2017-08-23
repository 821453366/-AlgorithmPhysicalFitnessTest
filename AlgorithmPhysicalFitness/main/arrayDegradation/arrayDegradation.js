function arrayDegradation(arr) {
    let result = [];
    let number = arr.toString().split(",");
    
    number.forEach(item => {
        result.push(parseInt(item));
    });

    return result;
}
module.exports = arrayDegradation;
console.log(arrayDegradation([1,2,[1,2]]));
console.log(arrayDegradation([1, 2, [1, 2], [3, 14]]));
console.log(arrayDegradation([4, [3, [2, [1]]]]));