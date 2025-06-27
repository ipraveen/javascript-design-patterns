export enum LogLevel {
    INFO = 1,
    DEBUG = 2,
}

export class Logger {
    private static instance: Logger;

    private logLevel: LogLevel = LogLevel.INFO;

    private constructor() {}

    public static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    public setLogLevel(level: LogLevel) {
        Logger.instance.logLevel = level;
    }

    public info(message: string) {
        if (Logger.instance.logLevel >= LogLevel.INFO) {
            console.info(message);
        }
    }

    public debug(message: string) {
        if (Logger.instance.logLevel >= LogLevel.DEBUG) {
            console.debug(message);
        }
    }
}
