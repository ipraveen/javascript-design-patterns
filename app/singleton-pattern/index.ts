import { Logger, LogLevel } from './LoggerSingletonModern';

const logger01 = Logger;
const logger02 = Logger;

if (logger01 === logger02) {
    console.log('Singleton acquired with Modern Modules ✅');
}

Logger.info('Info 01');
Logger.debug('Debug 01');

Logger.setLogLevel(LogLevel.DEBUG);

Logger.info('Info 02');
Logger.debug('Debug 02');