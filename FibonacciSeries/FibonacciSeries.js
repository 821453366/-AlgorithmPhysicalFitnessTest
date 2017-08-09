function fibonacciSeries(num) {
    let number = num;
    let fibonacciSeriesNumber = [0,1];

    for (let i = 2; i < number;i++) {
        fibonacciSeriesNumber.push(fibonacciSeriesNumber[i-1]+fibonacciSeriesNumber[i-2]);
    }

    return fibonacciSeriesNumber[num-1];
}

console.log(fibonacciSeries(10));