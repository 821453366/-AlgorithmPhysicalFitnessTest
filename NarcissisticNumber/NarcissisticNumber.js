function narcissusNumber() {
    let data = [];

    for (let i = 100; i < 1000; i++) {
        if (summation(i) === i)
            data.push(i);
    }

    return data;
}

function summation(i) {
    return Math.pow(parseInt(i / 100), 3) + Math.pow(parseInt((i % 100) / 10), 3) + Math.pow(parseInt(i % 10), 3);
}

console.log(narcissusNumber());