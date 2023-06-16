"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionModifiers = exports.eventModifiers = exports.modifiers = exports.isReceiveSignature = exports.isFallbackSignature = exports.execConstructorSignature = exports.isConstructorSignature = exports.execStructSignature = exports.isStructSignature = exports.execFunctionSignature = exports.isFunctionSignature = exports.execEventSignature = exports.isEventSignature = exports.execErrorSignature = exports.isErrorSignature = void 0;
const regex_js_1 = require("../../regex.js");
const errorSignatureRegex = /^error (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
exports.isErrorSignature = isErrorSignature;
function execErrorSignature(signature) {
    return (0, regex_js_1.execTyped)(errorSignatureRegex, signature);
}
exports.execErrorSignature = execErrorSignature;
const eventSignatureRegex = /^event (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
exports.isEventSignature = isEventSignature;
function execEventSignature(signature) {
    return (0, regex_js_1.execTyped)(eventSignatureRegex, signature);
}
exports.execEventSignature = execEventSignature;
const functionSignatureRegex = /^function (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
exports.isFunctionSignature = isFunctionSignature;
function execFunctionSignature(signature) {
    return (0, regex_js_1.execTyped)(functionSignatureRegex, signature);
}
exports.execFunctionSignature = execFunctionSignature;
const structSignatureRegex = /^struct (?<name>[a-zA-Z0-9_]+) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
exports.isStructSignature = isStructSignature;
function execStructSignature(signature) {
    return (0, regex_js_1.execTyped)(structSignatureRegex, signature);
}
exports.execStructSignature = execStructSignature;
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
exports.isConstructorSignature = isConstructorSignature;
function execConstructorSignature(signature) {
    return (0, regex_js_1.execTyped)(constructorSignatureRegex, signature);
}
exports.execConstructorSignature = execConstructorSignature;
const fallbackSignatureRegex = /^fallback\(\)$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
exports.isFallbackSignature = isFallbackSignature;
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
exports.isReceiveSignature = isReceiveSignature;
exports.modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata',
]);
exports.eventModifiers = new Set(['indexed']);
exports.functionModifiers = new Set([
    'calldata',
    'memory',
    'storage',
]);
//# sourceMappingURL=signatures.js.map