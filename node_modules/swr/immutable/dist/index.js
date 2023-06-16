Object.defineProperty(exports, '__esModule', { value: true });

var useSWR = require('swr');
var _internal = require('swr/_internal');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var useSWR__default = /*#__PURE__*/_interopDefault(useSWR);

const immutable = (useSWRNext)=>(key, fetcher, config)=>{
        // Always override all revalidate options.
        config.revalidateOnFocus = false;
        config.revalidateIfStale = false;
        config.revalidateOnReconnect = false;
        return useSWRNext(key, fetcher, config);
    };
const useSWRImmutable = _internal.withMiddleware(useSWR__default.default, immutable);

exports.default = useSWRImmutable;
exports.immutable = immutable;
