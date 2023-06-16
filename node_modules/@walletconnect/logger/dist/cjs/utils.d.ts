import { Logger, LoggerOptions } from "pino";
export declare function getDefaultLoggerOptions(opts?: LoggerOptions): LoggerOptions;
export declare function getBrowserLoggerContext(logger: Logger, customContextKey?: string): string;
export declare function setBrowserLoggerContext(logger: Logger, context: string, customContextKey?: string): Logger;
export declare function getLoggerContext(logger: Logger, customContextKey?: string): string;
export declare function formatChildLoggerContext(logger: Logger, childContext: string, customContextKey?: string): string;
export declare function generateChildLogger(logger: Logger, childContext: string, customContextKey?: string): Logger;
//# sourceMappingURL=utils.d.ts.map