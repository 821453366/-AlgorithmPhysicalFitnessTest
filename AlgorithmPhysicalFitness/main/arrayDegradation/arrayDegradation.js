function arrayDegradation(arr) {
    let result = [];
    let number = arr.toString().split(",");

    number.forEach(item => {
        result.push(parseInt(item));
    });

    return result;
}
module.exports = arrayDegradation;
