import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    logger.info('Conectado ao banco de dados');
  } catch (e) {
    logger.error('Não foi possível conectar!');
    logger.error(`Erro: ${e}`);
    process.exit();
  }
}

export default connect;