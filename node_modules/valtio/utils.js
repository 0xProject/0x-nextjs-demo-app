'use strict';

var utils = require('valtio/vanilla/utils');
var utils$1 = require('valtio/react/utils');



Object.keys(utils).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return utils[k]; }
	});
});
Object.keys(utils$1).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return utils$1[k]; }
	});
});
