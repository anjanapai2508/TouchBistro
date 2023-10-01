import {Request, Response} from "express";
module.exports = (req:Request, res:Response) => {

    // Logic to find the median of the prime numbers sent as input 
    // input : array of prime numbers : primeNums[]
    // output : single median or median [2]
    try {
        //       // Extract the 'number' parameter from the request
               const inputNumber = parseInt(req.params.upperLimit, 10);
          
         // Send the response with the data as JSON
     return res.status(200).json({ data: inputNumber });
       } catch (error) {
       return res.status(500).json({ error: "Internal server error" });
     }
};