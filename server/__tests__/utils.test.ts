import { getPrimeNumbers } from '../utils/prime-number-utils';

//Testing prime-number-utils.ts
describe('getPrimeNumbers', () => {
    it('returns an array of prime numbers for valid input', () => {
      // Test with an input number that has known prime numbers up to 10
      const inputNumber = 10;
      const expectedPrimes = [2, 3, 5, 7];
  
      try {
        const result = getPrimeNumbers(inputNumber);
        expect(result).toEqual(expectedPrimes);
      } catch (error:any) {
        // Handle the error and fail the test
        fail(`Unexpected error: ${error}`);
      }
    });
  
    it('returns an empty array for input less than 2', () => {
      // Test with an input number less than 2
      const inputNumber = 1;
  
      try {
        const result = getPrimeNumbers(inputNumber);
        expect(result).toEqual([]);
      } catch (error:any) {
        // Handle the error and fail the test
        fail(`Unexpected error: ${error.message}`);
      }
    });
  
    //Remaining tests
  });