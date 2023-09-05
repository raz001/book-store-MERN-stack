import express from 'express';
import { PORT, mongoURL } from './config.js'
import mongoose from 'mongoose';
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("welcome")
})


mongoose
    .connect(mongoURL)
    .then(() => {
        console.log('connected to DB')
        app.listen(PORT, () => {
            console.log('app is running at port', PORT)
        });
    })
    .catch((err) => [
        console.log(err)
    ])