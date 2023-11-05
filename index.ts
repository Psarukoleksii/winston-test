import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
const appRouter = require('./src/routes/index');

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use('/', appRouter);

app.listen(port, () => {
    console.log(`Server is open at http://localhost:${port}`);
});
