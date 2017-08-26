function arrayLast(arr, elem) {
    return (arr.filter(item => item !== elem)).concat(arr.filter(item => item === elem));
}
let arr = [0, 1, 0, 3, 12];
let elem = 0;
module.exports = arrayLast;