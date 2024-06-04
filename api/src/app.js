import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
config();

export default app;