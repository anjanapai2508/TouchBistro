export function getPrimeNumbers(inputNumber: number): number[] {
    // Your code to generate an array of prime numbers
    const isPrime: boolean[] = new Array(inputNumber).fill(true); // Initially all numbers are assumed to be prime.
    isPrime[0] = isPrime[1] = false;
    for (let num = 2; num * num <= inputNumber; num++) { // iterate over the array created earlier and mark
                                                 // all numbers which are multiples as non-prime/ false
      if (isPrime[num]) {
        for (let i = num * num; i <= inputNumber; i += num) {
          isPrime[i] = false;
        }
      }
    }
    const primes: number[] = [];
    for (let i = 2; i < inputNumber; i++) {
      if (isPrime[i]) { // the rest of numbers in the array which are not explicitly marked as prime/false
                        // are prime numbers and need to be returned.
        primes.push(i);
      }
    }  
    return primes;
  }