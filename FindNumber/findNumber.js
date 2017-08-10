function findNumber(numbers) {
    let numberArray = numbers;
    let result;

    numberArray.forEach(item => {
        if (numberArray.filter(element => element === item).length === 1) {
            result = item;
        }
    });

    return result;
}

let numbers = [17, 12, 25, 9, 15, 30, 7, 32, 12, 25, 15, 7, 17, 32, 26, 26, 30]
console.log("数组："+numbers)
console.log(findNumber(numbers))