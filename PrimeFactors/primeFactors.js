function printPrimeFactors(number) {
    let primeFactors = "";

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

