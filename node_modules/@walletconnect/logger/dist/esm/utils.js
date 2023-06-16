import { PINO_CUSTOM_CONTEXT_KEY, PINO_LOGGER_DEFAULTS } from "./constants";
export function getDefaultLoggerOptions(opts) {
    return Object.assign(Object.assign({}, opts), { level: (opts === null || opts === void 0 ? void 0 : opts.level) || PINO_LOGGER_DEFAULTS.level });
}
export function getBrowserLoggerContext(logger, customContextKey = PINO_CUSTOM_CONTEXT_KEY) {
    return logger[customContextKey] || "";
}
export function setBrowserLoggerContext(logger, context, customContextKey = PINO_CUSTOM_CONTEXT_KEY) {
    logger[customContextKey] = context;
    return logger;
}
export function getLoggerContext(logger, customContextKey = PINO_CUSTOM_CONTEXT_KEY) {
    let context = "";
    if (typeof logger.bindings === "undefined") {
        context = getBrowserLoggerContext(logger, customContextKey);
    }
    else {
        context = logger.bindings().context || "";
    }
    return context;
}
export function formatChildLoggerContext(logger, childContext, customContextKey = PINO_CUSTOM_CONTEXT_KEY) {
    const parentContext = getLoggerContext(logger, customContextKey);
    const context = parentContext.trim()
        ? `${parentContext}/${childContext}`
        : childContext;
    return context;
}
export function generateChildLogger(logger, childContext, customContextKey = PINO_CUSTOM_CONTEXT_KEY) {
    const context = formatChildLoggerContext(logger, childContext, customContextKey);
    const child = logger.child({ context });
    return setBrowserLoggerContext(child, context, customContextKey);
}
//# sourceMappingURL=utils.js.map