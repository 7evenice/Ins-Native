import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './router/index.js';
import error from './middleware/error.js';

const app = express();

// app.get('/favicon.ico', (req, res) => res.status(204));
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(helmet());

// parse json request body
app.use(bodyParser.json());

// parse urlencoded request body
app.use(bodyParser.urlencoded({extended: true}));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
// app.options('*', cors);

// v1 api routes
app.use('/v1', routes);

export default app;
