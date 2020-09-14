import { Service } from "typedi";
import * as winston from "winston";

@Service()
export class Logger {
  logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.splat(),
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
      )
    ),
    transports: [
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "info.log", level: "info" }),
    ],
  });

  error(message: string, ...meta: any[]) {
    this.logger.error(message, meta);
  }

  info(message: string, ...meta: any[]) {
    this.logger.info(message, meta);
  }
}
