export function getMedian(listOfPrimes: number[]): number | number[] {
    const n = listOfPrimes.length;
    // Sort the list of primes in ascending order
    listOfPrimes.sort((a, b) => a - b);
    if (n % 2 === 1) {
      // Odd-length list, return the middle element
      return listOfPrimes[Math.floor(n / 2)];
    } else {
      // Even-length list, return the two middle elements as an array
      const mid1 = listOfPrimes[n / 2 - 1];
      const mid2 = listOfPrimes[n / 2];
      return [mid1, mid2];
    }
  }