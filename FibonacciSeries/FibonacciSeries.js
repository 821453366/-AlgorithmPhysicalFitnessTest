function fibonacciSeries(num) {
    let number = num;
    let fibonacciSeriesNumber = [0,1];

    for (let i = 2; i < number;i++) {
        fibonacciSeriesNumber.push(fibonacciSeriesNumber[i-1]+fibonacciSeriesNumber[i-2]);
    }
    console.log(`前`+num+`个数的斐波纳契数列：`+fibonacciSeriesNumber);

    return fibonacciSeriesNumber.pop();
}

console.log(fibonacciSeries(10));