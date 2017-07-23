import express from 'express'
import bodyParser from 'body-parser'
import {router} from './routes/api.router'
import {config} from './config/config'
import {errorHandler} from './controllers/error.controller'
const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1',router);
app.use(errorHandler);
app.listen(config.port,()=> console.log(`Running in ${process.env.NODE_ENV} on port ${config.port}`));