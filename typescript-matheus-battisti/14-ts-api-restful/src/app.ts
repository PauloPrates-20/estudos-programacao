require('dotenv').config();

import express from 'express'
import config from 'config'
import router from './router'
import db from '../config/db'
import logger from '../config/logger'
import morganMiddleware from './middleware/morganMiddleware';

const app = express();

// JSON middleware
app.use(express.json());

app.use(morganMiddleware);

// routes
app.use('/api', router);


// app port
const port = config.get<number>('port');

app.listen(port, async () => {
  await db();
  logger.info(`Aplicação está funcionando na porta: ${port}`);
});