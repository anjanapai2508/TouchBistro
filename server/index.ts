//import dotenv from "dotenv";
import {Express, Request, Response} from "express";
import cors from "cors";
const port = 8000;
//dotenv.config(); 
const express = require('express');   
const app: Express = express();
app.use(express.json());
app.use(cors());
const prRouter = require('./routes/pr-routes');
app.use(prRouter);
app.listen(port, () => {
    console.log(`Prime Number app listening on port ${port}`)
});


