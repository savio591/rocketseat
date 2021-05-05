import 'reflect-metadata';
import express from 'express';

import createConnection from './database';
import './database';
import { router } from './routes';


createConnection()

export const app = express();

app.use(express.json());
app.use(router);
