import winston from 'winston'
import config from 'config'

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

function level() {
  const env = config.get<string>('env') || 'development';
  const isDevelopment = env === 'development';

  return isDevelopment ? 'debug' : 'warn';
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white'
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} - ${info.level}: ${info.message}`
  )
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'files/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' })
];

const log = winston.createLogger({
  level: level(),
  levels,
  format,
  transports
});

export default log