import * as fs from 'fs';
const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;

const logFormat = printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
});

const logFile = fs.createWriteStream(`app_${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}.log`, { flags: 'a' });

const streamTransport = new transports.Stream({
    stream: logFile,
    format: combine(
        timestamp(),
        logFormat
    ),
});

const logger = createLogger({
    level: 'info',
    format: combine(timestamp(), logFormat),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        streamTransport,
    ],
});

export default logger;
