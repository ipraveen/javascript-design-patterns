export enum LogLevel {
    INFO = 1,
    DEBUG = 2,
}

class LoggerModern {
    private logLevel: LogLevel = LogLevel.INFO;

    public setLogLevel(level: LogLevel) {
        this.logLevel = level;
    }

    public info(message: string) {
        if (this.logLevel >= LogLevel.INFO) {
            console.info(message);
        }
    }

    public debug(message: string) {
        if (this.logLevel >= LogLevel.DEBUG) {
            console.debug(message);
        }
    }
}

export const Logger = new LoggerModern();
