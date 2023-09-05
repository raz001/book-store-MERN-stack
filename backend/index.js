import express from 'express';
import { PORT, mongoURL } from './config.js'
import mongoose from 'mongoose';
import bookRouter from './routes/book.route.js';
const app = express();
import cors from 'cors';

//middleware for parsing req body
app.use(express.json());

//middleware for handling CORS policy
//opt1: Allow all origins with default of cors(*)
app.use(cors())

//opt2: Allow custom origins
// app.use(cors(
//     {
//         origin: 'http://localhost:3000',
//         method: ['GET', 'POST', "PUT", "DELETE"],
//         allowedHeaders: ['Content-Type']
//     }
// ))
app.get('/', (req, res) => {
    return res.status(200).send("welcome")
})

app.use('/books', bookRouter)
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