import express from 'express';
import connectDb from './config/db';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
connectDb();
const port = process.env.PORT ||  8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});