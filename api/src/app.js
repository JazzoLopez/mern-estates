import express from 'express';
import morgan from 'morgan';
import userModel from './models/user.model.js';
import authRoutes from './routes/auth.routes.js';
import { config } from 'dotenv';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
config();

app.use('/api/auth', authRoutes);
export default app;