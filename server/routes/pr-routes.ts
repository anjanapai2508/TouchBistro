const {Router} = require('express');
import {Request, Response} from "express";
const app = Router();
const primeNumbersController = require('../controllers/prime-numbers-controller')
const medianController = require('../controllers/median-controller');
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World from the Typescript inside Router')
});
app.get('/find-prime-numbers/:upperLimit', primeNumbersController);
app.get('/find-median/:upperLimit', medianController);
module.exports = app;

