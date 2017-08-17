function quadratic(arr) {
    let array = arr;

    return array.map(item => Math.pow(item, 2));
}

let arr = [5, 3, 7, 1];
console.log("[5, 3, 7, 1]二次方===>[" + quadratic(arr)+"]")

