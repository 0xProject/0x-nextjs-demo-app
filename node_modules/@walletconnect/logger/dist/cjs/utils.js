"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateChildLogger = exports.formatChildLoggerContext = exports.getLoggerContext = exports.setBrowserLoggerContext = exports.getBrowserLoggerContext = exports.getDefaultLoggerOptions = void 0;
const constants_1 = require("./constants");
function getDefaultLoggerOptions(opts) {
    return Object.assign(Object.assign({}, opts), { level: (opts === null || opts === void 0 ? void 0 : opts.level) || constants_1.PINO_LOGGER_DEFAULTS.level });
}
exports.getDefaultLoggerOptions = getDefaultLoggerOptions;
function getBrowserLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    return logger[customContextKey] || "";
}
exports.getBrowserLoggerContext = getBrowserLoggerContext;
function setBrowserLoggerContext(logger, context, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    logger[customContextKey] = context;
    return logger;
}
exports.setBrowserLoggerContext = setBrowserLoggerContext;
function getLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    let context = "";
    if (typeof logger.bindings === "undefined") {
        context = getBrowserLoggerContext(logger, customContextKey);
    }
    else {
        context = logger.bindings().context || "";
    }
    return context;
}
exports.getLoggerContext = getLoggerContext;
function formatChildLoggerContext(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    const parentContext = getLoggerContext(logger, customContextKey);
    const context = parentContext.trim()
        ? `${parentContext}/${childContext}`
        : childContext;
    return context;
}
exports.formatChildLoggerContext = formatChildLoggerContext;
function generateChildLogger(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    const context = formatChildLoggerContext(logger, childContext, customContextKey);
    const child = logger.child({ context });
    return setBrowserLoggerContext(child, context, customContextKey);
}
exports.generateChildLogger = generateChildLogger;
//# sourceMappingURL=utils.js.map