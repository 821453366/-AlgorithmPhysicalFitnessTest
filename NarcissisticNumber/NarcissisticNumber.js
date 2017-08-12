
function narcissusNumber() {
    let data =[];

    for (let i = 100; i < 1000; i++) {
        let result = divisionNumber(i);
        let sum = summation(result);
        if(sum === i)
            data.push(i);
    }

    return data;
}

function divisionNumber(i) {
    let result = [];

    result.push(parseInt(i / 100));
    result.push(parseInt((i % 100) / 10));
    result.push(parseInt(i % 10));

    return result;
}

function summation(result) {
    let sum = 0;

    result.forEach(item => {
        sum += parseInt(item * item * item);
    });

    return sum;
}

console.log(narcissusNumber());