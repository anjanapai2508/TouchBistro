const {Router} = require('express');
import {Request, Response} from "express";
const app = Router();
const primeNumbersController = require('../controllers/prime-numbers-controller')
const medianController = require('../controllers/median-controller');
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello World from the Typescript inside Router</h1>')
});
app.get('/find-prime-numbers/:upperLimit', primeNumbersController);
app.get('/find-median/:upperLimit', medianController);
module.exports = app;

