import { ConsoleLogger, Logger, LoggerService, type LogLevel } from "@nestjs/common";
import { appendFileSync, existsSync, mkdirSync } from "fs";
import * as path from "path";

export class CustomLogger implements LoggerService {

    private readonly logFile = path.join(__dirname, '../../logs/app.log');

    private readonly consoleLogger = new ConsoleLogger()

    log(message: any, context: any) {
        this.writeToFile('log', message, context);
        this.consoleLogger.log(message, context);
    }
    error(message: any, trace?: string, context?: any) {
        this.writeToFile('error', message, context, trace);
        this.consoleLogger.error(message, context, trace);
    }
    warn(message: any, context?: any) {
        this.writeToFile('warn', message, context);
        this.consoleLogger.warn(message, context);
    }
    debug(message: any, context?: any) {
        this.writeToFile('debug', message, context);
        this.consoleLogger.debug(message, context);
    }
    verbose(message: any, context?: any) {
        this.writeToFile('verbose', message, context);
        this.consoleLogger.verbose(message, context);
    }

    private writeToFile(
        level: LogLevel,
        message: any,
        context?: string,
        trace?: string
    ) {
        const time = new Date().toISOString();
        const log = `[${time}] [${level}] ${context ? ` ${context}` : ''} ${message} ${trace ? `\nTRACE: ${trace}` : ''}\n`;

        const logDir = path.dirname(this.logFile);

        if (!existsSync(logDir)) {
            mkdirSync(logDir, { recursive: true });
        }

        appendFileSync(this.logFile, log);
    }
}