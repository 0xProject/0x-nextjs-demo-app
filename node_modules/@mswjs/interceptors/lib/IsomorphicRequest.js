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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsomorphicRequest = void 0;
var headers_polyfill_1 = require("headers-polyfill");
var outvariant_1 = require("outvariant");
var bufferUtils_1 = require("./utils/bufferUtils");
var uuid_1 = require("./utils/uuid");
var IsomorphicRequest = /** @class */ (function () {
    function IsomorphicRequest(input, init) {
        if (init === void 0) { init = {}; }
        var defaultBody = new ArrayBuffer(0);
        this._bodyUsed = false;
        if (input instanceof IsomorphicRequest) {
            this.id = input.id;
            this.url = input.url;
            this.method = input.method;
            this.headers = input.headers;
            this.credentials = input.credentials;
            this._body = input._body || defaultBody;
            return;
        }
        this.id = uuid_1.uuidv4();
        this.url = input;
        this.method = init.method || 'GET';
        this.headers = new headers_polyfill_1.Headers(init.headers);
        this.credentials = init.credentials || 'same-origin';
        this._body = init.body || defaultBody;
    }
    Object.defineProperty(IsomorphicRequest.prototype, "bodyUsed", {
        get: function () {
            return this._bodyUsed;
        },
        enumerable: false,
        configurable: true
    });
    IsomorphicRequest.prototype.text = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                outvariant_1.invariant(!this.bodyUsed, 'Failed to execute "text" on "IsomorphicRequest": body buffer already read');
                this._bodyUsed = true;
                return [2 /*return*/, bufferUtils_1.decodeBuffer(this._body)];
            });
        });
    };
    IsomorphicRequest.prototype.json = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                outvariant_1.invariant(!this.bodyUsed, 'Failed to execute "json" on "IsomorphicRequest": body buffer already read');
                this._bodyUsed = true;
                text = bufferUtils_1.decodeBuffer(this._body);
                return [2 /*return*/, JSON.parse(text)];
            });
        });
    };
    IsomorphicRequest.prototype.arrayBuffer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                outvariant_1.invariant(!this.bodyUsed, 'Failed to execute "arrayBuffer" on "IsomorphicRequest": body buffer already read');
                this._bodyUsed = true;
                return [2 /*return*/, this._body];
            });
        });
    };
    IsomorphicRequest.prototype.clone = function () {
        return new IsomorphicRequest(this);
    };
    return IsomorphicRequest;
}());
exports.IsomorphicRequest = IsomorphicRequest;
//# sourceMappingURL=IsomorphicRequest.js.map