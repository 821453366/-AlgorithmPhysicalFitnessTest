function narcissusNumber() {
    let data =[];

    for (let i = 100; i < 1000; i++) {
        let sum = 0;
        let result = [];

        result.push(parseInt(i/100));
        result.push(parseInt((i%100)/10));
        result.push(parseInt(i%10));
        result.forEach( item => {
            sum +=parseInt(item*item*item);
        });
        if(sum === i)
            data.push(i);
    }

    return data;
}

console.log(narcissusNumber());