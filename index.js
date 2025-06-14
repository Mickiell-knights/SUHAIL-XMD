 const path = required('path');
const bot = require(path.join(__dirname + '/lib/smd'));
const { VERSION } = require(path.join(__dirname + '/config'));

const start = async () => {
    Debug.info(`Suhail ${VERSION}`)
  try {
    await bot.init()
    bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start(); //retry on error 
  }
}
start();
