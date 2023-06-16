'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var queryPersistClientCore = require('@tanstack/query-persist-client-core');
var PersistQueryClientProvider = require('./PersistQueryClientProvider.js');



exports.PersistQueryClientProvider = PersistQueryClientProvider.PersistQueryClientProvider;
Object.keys(queryPersistClientCore).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return queryPersistClientCore[k]; }
	});
});
//# sourceMappingURL=index.js.map
