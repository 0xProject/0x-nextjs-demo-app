import { execTyped } from '../../regex.js';
const errorSignatureRegex = /^error (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)$/;
export function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
export function execErrorSignature(signature) {
    return execTyped(errorSignatureRegex, signature);
}
const eventSignatureRegex = /^event (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)$/;
export function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
export function execEventSignature(signature) {
    return execTyped(eventSignatureRegex, signature);
}
const functionSignatureRegex = /^function (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
export function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
export function execFunctionSignature(signature) {
    return execTyped(functionSignatureRegex, signature);
}
const structSignatureRegex = /^struct (?<name>[a-zA-Z0-9_]+) \{(?<properties>.*?)\}$/;
export function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
export function execStructSignature(signature) {
    return execTyped(structSignatureRegex, signature);
}
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
export function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
export function execConstructorSignature(signature) {
    return execTyped(constructorSignatureRegex, signature);
}
const fallbackSignatureRegex = /^fallback\(\)$/;
export function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
const receiveSignatureRegex = /^receive\(\) external payable$/;
export function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
export const modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata',
]);
export const eventModifiers = new Set(['indexed']);
export const functionModifiers = new Set([
    'calldata',
    'memory',
    'storage',
]);
//# sourceMappingURL=signatures.js.map