"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpoint = exports.postEndpoint = void 0;
const utils_1 = require("./utils");
function makeUrl(baseUrl, path, pathParams, query) {
    const pathname = (0, utils_1.insertParams)(path, pathParams);
    const search = (0, utils_1.stringifyQuery)(query);
    return `${baseUrl}${pathname}${search}`;
}
function postEndpoint(baseUrl, path, params) {
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.fetchData)(url, params === null || params === void 0 ? void 0 : params.body);
}
exports.postEndpoint = postEndpoint;
function getEndpoint(baseUrl, path, params, rawUrl) {
    if (rawUrl) {
        return (0, utils_1.fetchData)(rawUrl);
    }
    const url = makeUrl(baseUrl, path, params === null || params === void 0 ? void 0 : params.path, params === null || params === void 0 ? void 0 : params.query);
    return (0, utils_1.fetchData)(url);
}
exports.getEndpoint = getEndpoint;
//# sourceMappingURL=endpoint.js.map