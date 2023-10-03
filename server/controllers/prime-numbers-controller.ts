import {Request, Response} from "express";
import { getPrimeNumbers } from '../utils/prime-number-utils';
import { getMedian } from "../utils/median-utils";
module.exports = (req:Request, res:Response) => {

    // Logic to find the median of the prime numbers sent as input 
    // input : upper limit n 
    // output : array of prime numbers < n using Sieve of Eratosthenes algorithm
    try {
      const inputNumber = parseInt(req.params.upperLimit, 10);// Extract the 'number' parameter from the request
      const primes = getPrimeNumbers(inputNumber); // Get the array of prime numbers using Sieve of Eratosthenes algorithm
      const median = getMedian(primes);     
      return res.status(200).json({ data: median });// Send the response with the data as JSON
       } catch (error) {
       return res.status(500).json({ error: "Internal server error" });
     }
};