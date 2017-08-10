function findNumber(numbers) {
    let numberArray = numbers;

    return numberArray.filter(item => {
        return isOneNumber(item, numberArray)
    });
}

function isOneNumber(item, numberArray) {
    return numberArray.filter(element => element === item).length === 1;
}

let numbers = [17, 12, 25, 9, 15, 30, 7, 32, 12, 25, 15, 7, 17, 32, 26, 26, 30];
console.log("数组：" + numbers);
console.log(findNumber(numbers));