function printPrimeFactors(number) {
    let primeFactors = "";

    if(number<=1){
        console.log(number +"没有质因数");
        return;
    }
    primeFactors += (number + "=");
    for (let i = 2; i <= number; i++) {
        while (number != i) {
            if (number % i == 0) {
                primeFactors += i;
                number = number / i;
            } else {
                break;
            }
        }
    }
    primeFactors += number;

    console.log(primeFactors);
}

printPrimeFactors(90);

