
function median(array) {
    let numbers = array;

    numbers.sort((a, b) => a - b);
    if (isEvenNumbers(numbers)) {
        return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    }

    return numbers[Math.floor(numbers.length / 2)];
}

function isEvenNumbers(numbers) {
    return numbers.length % 2 === 0;
}
console.log(median([9, 6, 7, 8, 10]));
console.log(median([9, 6, 7, 8]));