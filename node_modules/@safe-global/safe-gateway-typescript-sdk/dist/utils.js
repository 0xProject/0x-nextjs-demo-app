"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.stringifyQuery = exports.insertParams = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const isErrorResponse = (data) => {
    const isObject = typeof data === 'object' && data !== null;
    return isObject && 'code' in data && 'message' in data;
};
function replaceParam(str, key, value) {
    return str.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
}
function insertParams(template, params) {
    return params
        ? Object.keys(params).reduce((result, key) => {
            return replaceParam(result, key, String(params[key]));
        }, template)
        : template;
}
exports.insertParams = insertParams;
function stringifyQuery(query) {
    if (!query) {
        return '';
    }
    const searchParams = new URLSearchParams();
    Object.keys(query).forEach((key) => {
        if (query[key] != null) {
            searchParams.append(key, String(query[key]));
        }
    });
    const searchString = searchParams.toString();
    return searchString ? `?${searchString}` : '';
}
exports.stringifyQuery = stringifyQuery;
function fetchData(url, body) {
    return __awaiter(this, void 0, void 0, function* () {
        let options;
        if (body != null) {
            options = {
                method: 'POST',
                body: typeof body === 'string' ? body : JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            };
        }
        const resp = yield (0, cross_fetch_1.default)(url, options);
        let json;
        try {
            json = yield resp.json();
        }
        catch (_a) {
            if (resp.headers && resp.headers.get('content-length') !== '0') {
                throw new Error(`Invalid response content: ${resp.statusText}`);
            }
        }
        if (!resp.ok) {
            const errTxt = isErrorResponse(json) ? `${json.code}: ${json.message}` : resp.statusText;
            throw new Error(errTxt);
        }
        return json;
    });
}
exports.fetchData = fetchData;
//# sourceMappingURL=utils.js.map