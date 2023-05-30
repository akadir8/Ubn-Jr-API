import express from 'express';
import cors from 'cors'
import getDataRoute from './getData.mjs';
const app = express();

app.use(express.json());
app.use(cors());
app.use(getDataRoute);
export default app;