import express from 'express';
import path, { dirname }from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

// connect express framework to different module (end point of a component ?)
app.use(bodyParser.json({ limit: '30mb', extended: true}));       // bodyParser is an npm module used to process data sent in an HTTP request body.
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));
app.use(cors());
app.use('/posts', postRoutes);   










// connect mongo DB altas - its a cloud host database, instead of local.

// const CONNECTION_URL = 'mongodb+srv://daymond:daymond123@cluster0.id3mbvx.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server connect MongoDB and ruunning on port : ${PORT}`)))
    .catch( error => console.log(error.message));



