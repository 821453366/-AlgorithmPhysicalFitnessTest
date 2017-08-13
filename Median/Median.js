function median(num) {
    let numbers = num;
    let medianNum = 0;

    numbers.sort((a, b) => a - b);
    numbers.forEach((item, index) => {
        if (numbers.length % 2 === 0) {
            if ((index + 1) === numbers.length / 2 || (index + 1) === (numbers.length / 2) + 1)
                medianNum += item;
        } else {
            if ((index + 1) === Math.ceil(numbers.length / 2))
                medianNum = item;
        }
    });

    if (numbers.length % 2 === 0)
        return medianNum / 2;
    else
        return medianNum;
}
console.log(median([9, 6, 7, 8, 10]));