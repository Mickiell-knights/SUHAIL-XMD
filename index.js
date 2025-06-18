import path from 'path';
import { fileURLToPath } from 'url';
import { initBot, DATABASE, connect, logger } from './lib/smd/index.js';
import { VERSION } from './config.js';
import Debug from 'debug';

const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const debug = Debug('Suhail');

const start = async () => {
  debug(`Suhail ${VERSION}`);

  try {
    await initBot();
    logger.info('⏳ Database syncing!');
    await DATABASE.sync();
    await connect();
  } catch (error) {
    debug(error);
    start(); // Retry on error
  }
};

start();
