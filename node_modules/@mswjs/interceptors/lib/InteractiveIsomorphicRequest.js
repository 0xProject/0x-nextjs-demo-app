"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveIsomorphicRequest = void 0;
var outvariant_1 = require("outvariant");
var IsomorphicRequest_1 = require("./IsomorphicRequest");
var createLazyCallback_1 = require("./utils/createLazyCallback");
var InteractiveIsomorphicRequest = /** @class */ (function (_super) {
    __extends(InteractiveIsomorphicRequest, _super);
    function InteractiveIsomorphicRequest(request) {
        var _this = _super.call(this, request) || this;
        _this.respondWith = createLazyCallback_1.createLazyCallback({
            maxCalls: 1,
            maxCallsCallback: function () {
                outvariant_1.invariant(false, 'Failed to respond to "%s %s" request: the "request" event has already been responded to.', _this.method, _this.url.href);
            },
        });
        return _this;
    }
    return InteractiveIsomorphicRequest;
}(IsomorphicRequest_1.IsomorphicRequest));
exports.InteractiveIsomorphicRequest = InteractiveIsomorphicRequest;
//# sourceMappingURL=InteractiveIsomorphicRequest.js.map