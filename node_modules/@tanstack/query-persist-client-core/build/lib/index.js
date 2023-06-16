'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var persist = require('./persist.js');
var retryStrategies = require('./retryStrategies.js');



exports.persistQueryClient = persist.persistQueryClient;
exports.persistQueryClientRestore = persist.persistQueryClientRestore;
exports.persistQueryClientSave = persist.persistQueryClientSave;
exports.persistQueryClientSubscribe = persist.persistQueryClientSubscribe;
exports.removeOldestQuery = retryStrategies.removeOldestQuery;
//# sourceMappingURL=index.js.map
