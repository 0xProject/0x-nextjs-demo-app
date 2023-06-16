"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelValue = exports.DetailedExecutionInfoType = exports.TransactionListItemType = exports.ConflictType = exports.TransactionInfoType = exports.SettingsInfoType = exports.TransactionTokenType = exports.TransferDirection = exports.TransactionStatus = exports.Operation = void 0;
var Operation;
(function (Operation) {
    Operation[Operation["CALL"] = 0] = "CALL";
    Operation[Operation["DELEGATE"] = 1] = "DELEGATE";
})(Operation = exports.Operation || (exports.Operation = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["AWAITING_CONFIRMATIONS"] = "AWAITING_CONFIRMATIONS";
    TransactionStatus["AWAITING_EXECUTION"] = "AWAITING_EXECUTION";
    TransactionStatus["CANCELLED"] = "CANCELLED";
    TransactionStatus["FAILED"] = "FAILED";
    TransactionStatus["SUCCESS"] = "SUCCESS";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var TransferDirection;
(function (TransferDirection) {
    TransferDirection["INCOMING"] = "INCOMING";
    TransferDirection["OUTGOING"] = "OUTGOING";
    TransferDirection["UNKNOWN"] = "UNKNOWN";
})(TransferDirection = exports.TransferDirection || (exports.TransferDirection = {}));
// https://safe.global/safe-client-gateway/docs/routes/transactions/models/enum.TransferInfo.html
var TransactionTokenType;
(function (TransactionTokenType) {
    TransactionTokenType["ERC20"] = "ERC20";
    TransactionTokenType["ERC721"] = "ERC721";
    TransactionTokenType["NATIVE_COIN"] = "NATIVE_COIN";
})(TransactionTokenType = exports.TransactionTokenType || (exports.TransactionTokenType = {}));
var SettingsInfoType;
(function (SettingsInfoType) {
    SettingsInfoType["SET_FALLBACK_HANDLER"] = "SET_FALLBACK_HANDLER";
    SettingsInfoType["ADD_OWNER"] = "ADD_OWNER";
    SettingsInfoType["REMOVE_OWNER"] = "REMOVE_OWNER";
    SettingsInfoType["SWAP_OWNER"] = "SWAP_OWNER";
    SettingsInfoType["CHANGE_THRESHOLD"] = "CHANGE_THRESHOLD";
    SettingsInfoType["CHANGE_IMPLEMENTATION"] = "CHANGE_IMPLEMENTATION";
    SettingsInfoType["ENABLE_MODULE"] = "ENABLE_MODULE";
    SettingsInfoType["DISABLE_MODULE"] = "DISABLE_MODULE";
    SettingsInfoType["SET_GUARD"] = "SET_GUARD";
    SettingsInfoType["DELETE_GUARD"] = "DELETE_GUARD";
})(SettingsInfoType = exports.SettingsInfoType || (exports.SettingsInfoType = {}));
// https://safe.global/safe-client-gateway/docs/routes/transactions/models/enum.TransactionInfo.html
var TransactionInfoType;
(function (TransactionInfoType) {
    TransactionInfoType["TRANSFER"] = "Transfer";
    TransactionInfoType["SETTINGS_CHANGE"] = "SettingsChange";
    TransactionInfoType["CUSTOM"] = "Custom";
    TransactionInfoType["CREATION"] = "Creation";
})(TransactionInfoType = exports.TransactionInfoType || (exports.TransactionInfoType = {}));
// https://safe.global/safe-client-gateway/docs/routes/transactions/models/summary/enum.ConflictType.html
var ConflictType;
(function (ConflictType) {
    ConflictType["NONE"] = "None";
    ConflictType["HAS_NEXT"] = "HasNext";
    ConflictType["END"] = "End";
})(ConflictType = exports.ConflictType || (exports.ConflictType = {}));
// https://safe.global/safe-client-gateway/docs/routes/transactions/models/summary/enum.TransactionListItem.html
var TransactionListItemType;
(function (TransactionListItemType) {
    TransactionListItemType["TRANSACTION"] = "TRANSACTION";
    TransactionListItemType["LABEL"] = "LABEL";
    TransactionListItemType["CONFLICT_HEADER"] = "CONFLICT_HEADER";
    TransactionListItemType["DATE_LABEL"] = "DATE_LABEL";
})(TransactionListItemType = exports.TransactionListItemType || (exports.TransactionListItemType = {}));
// https://safe.global/safe-client-gateway/docs/routes/transactions/models/details/enum.DetailedExecutionInfo.html
var DetailedExecutionInfoType;
(function (DetailedExecutionInfoType) {
    DetailedExecutionInfoType["MULTISIG"] = "MULTISIG";
    DetailedExecutionInfoType["MODULE"] = "MODULE";
})(DetailedExecutionInfoType = exports.DetailedExecutionInfoType || (exports.DetailedExecutionInfoType = {}));
/**
 * @see https://gnosis.github.io/safe-client-gateway/docs/routes/transactions/models/summary/enum.Label.html
 */
var LabelValue;
(function (LabelValue) {
    LabelValue["Queued"] = "Queued";
    LabelValue["Next"] = "Next";
})(LabelValue = exports.LabelValue || (exports.LabelValue = {}));
//# sourceMappingURL=transactions.js.map