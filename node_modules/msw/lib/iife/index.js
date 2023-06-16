"use strict";
var MockServiceWorker = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/.pnpm/cookie@0.4.2/node_modules/cookie/index.js
  var require_cookie = __commonJS({
    "node_modules/.pnpm/cookie@0.4.2/node_modules/cookie/index.js"(exports) {
      "use strict";
      exports.parse = parse5;
      exports.serialize = serialize2;
      var decode = decodeURIComponent;
      var encode = encodeURIComponent;
      var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function parse5(str, options) {
        if (typeof str !== "string") {
          throw new TypeError("argument str must be a string");
        }
        var obj = {};
        var opt = options || {};
        var pairs = str.split(";");
        var dec = opt.decode || decode;
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i];
          var index = pair.indexOf("=");
          if (index < 0) {
            continue;
          }
          var key = pair.substring(0, index).trim();
          if (void 0 == obj[key]) {
            var val = pair.substring(index + 1, pair.length).trim();
            if (val[0] === '"') {
              val = val.slice(1, -1);
            }
            obj[key] = tryDecode(val, dec);
          }
        }
        return obj;
      }
      function serialize2(name, val, options) {
        var opt = options || {};
        var enc = opt.encode || encode;
        if (typeof enc !== "function") {
          throw new TypeError("option encode is invalid");
        }
        if (!fieldContentRegExp.test(name)) {
          throw new TypeError("argument name is invalid");
        }
        var value = enc(val);
        if (value && !fieldContentRegExp.test(value)) {
          throw new TypeError("argument val is invalid");
        }
        var str = name + "=" + value;
        if (null != opt.maxAge) {
          var maxAge = opt.maxAge - 0;
          if (isNaN(maxAge) || !isFinite(maxAge)) {
            throw new TypeError("option maxAge is invalid");
          }
          str += "; Max-Age=" + Math.floor(maxAge);
        }
        if (opt.domain) {
          if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError("option domain is invalid");
          }
          str += "; Domain=" + opt.domain;
        }
        if (opt.path) {
          if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError("option path is invalid");
          }
          str += "; Path=" + opt.path;
        }
        if (opt.expires) {
          if (typeof opt.expires.toUTCString !== "function") {
            throw new TypeError("option expires is invalid");
          }
          str += "; Expires=" + opt.expires.toUTCString();
        }
        if (opt.httpOnly) {
          str += "; HttpOnly";
        }
        if (opt.secure) {
          str += "; Secure";
        }
        if (opt.sameSite) {
          var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
          switch (sameSite) {
            case true:
              str += "; SameSite=Strict";
              break;
            case "lax":
              str += "; SameSite=Lax";
              break;
            case "strict":
              str += "; SameSite=Strict";
              break;
            case "none":
              str += "; SameSite=None";
              break;
            default:
              throw new TypeError("option sameSite is invalid");
          }
        }
        return str;
      }
      function tryDecode(str, decode2) {
        try {
          return decode2(str);
        } catch (e) {
          return str;
        }
      }
    }
  });

  // node_modules/.pnpm/node-fetch@2.6.9/node_modules/node-fetch/browser.js
  var require_browser = __commonJS({
    "node_modules/.pnpm/node-fetch@2.6.9/node_modules/node-fetch/browser.js"(exports, module) {
      "use strict";
      var getGlobal = function() {
        if (typeof self !== "undefined") {
          return self;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof global !== "undefined") {
          return global;
        }
        throw new Error("unable to locate global object");
      };
      var globalObject = getGlobal();
      module.exports = exports = globalObject.fetch;
      if (globalObject.fetch) {
        exports.default = globalObject.fetch.bind(globalObject);
      }
      exports.Headers = globalObject.Headers;
      exports.Request = globalObject.Request;
      exports.Response = globalObject.Response;
    }
  });

  // node_modules/.pnpm/@open-draft+until@1.0.3/node_modules/@open-draft/until/lib/until.js
  var require_until = __commonJS({
    "node_modules/.pnpm/@open-draft+until@1.0.3/node_modules/@open-draft/until/lib/until.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.until = async (promise) => {
        try {
          const data2 = await promise().catch((error2) => {
            throw error2;
          });
          return [null, data2];
        } catch (error2) {
          return [error2, null];
        }
      };
    }
  });

  // node_modules/.pnpm/@open-draft+until@1.0.3/node_modules/@open-draft/until/lib/index.js
  var require_lib = __commonJS({
    "node_modules/.pnpm/@open-draft+until@1.0.3/node_modules/@open-draft/until/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var until_1 = require_until();
      exports.until = until_1.until;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/glossary.js
  var require_glossary = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/glossary.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IS_PATCHED_MODULE = void 0;
      exports.IS_PATCHED_MODULE = Symbol("isPatchedModule");
    }
  });

  // node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
  var require_ms = __commonJS({
    "node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"(exports, module) {
      var s = 1e3;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse5(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
        );
      };
      function parse5(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match2 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          str
        );
        if (!match2) {
          return;
        }
        var n = parseFloat(match2[1]);
        var type = (match2[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "weeks":
          case "week":
          case "w":
            return n * w;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return void 0;
        }
      }
      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return Math.round(ms / d) + "d";
        }
        if (msAbs >= h) {
          return Math.round(ms / h) + "h";
        }
        if (msAbs >= m) {
          return Math.round(ms / m) + "m";
        }
        if (msAbs >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }
      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return plural(ms, msAbs, d, "day");
        }
        if (msAbs >= h) {
          return plural(ms, msAbs, h, "hour");
        }
        if (msAbs >= m) {
          return plural(ms, msAbs, m, "minute");
        }
        if (msAbs >= s) {
          return plural(ms, msAbs, s, "second");
        }
        return ms + " ms";
      }
      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
      }
    }
  });

  // node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js
  var require_common = __commonJS({
    "node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js"(exports, module) {
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = require_ms();
        createDebug.destroy = destroy;
        Object.keys(env).forEach((key) => {
          createDebug[key] = env[key];
        });
        createDebug.names = [];
        createDebug.skips = [];
        createDebug.formatters = {};
        function selectColor(namespace) {
          let hash = 0;
          for (let i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0;
          }
          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }
        createDebug.selectColor = selectColor;
        function createDebug(namespace) {
          let prevTime;
          let enableOverride = null;
          let namespacesCache;
          let enabledCache;
          function debug(...args) {
            if (!debug.enabled) {
              return;
            }
            const self2 = debug;
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self2.diff = ms;
            self2.prev = prevTime;
            self2.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
              args.unshift("%O");
            }
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match2, format2) => {
              if (match2 === "%%") {
                return "%";
              }
              index++;
              const formatter = createDebug.formatters[format2];
              if (typeof formatter === "function") {
                const val = args[index];
                match2 = formatter.call(self2, val);
                args.splice(index, 1);
                index--;
              }
              return match2;
            });
            createDebug.formatArgs.call(self2, args);
            const logFn = self2.log || createDebug.log;
            logFn.apply(self2, args);
          }
          debug.namespace = namespace;
          debug.useColors = createDebug.useColors();
          debug.color = createDebug.selectColor(namespace);
          debug.extend = extend;
          debug.destroy = createDebug.destroy;
          Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: () => {
              if (enableOverride !== null) {
                return enableOverride;
              }
              if (namespacesCache !== createDebug.namespaces) {
                namespacesCache = createDebug.namespaces;
                enabledCache = createDebug.enabled(namespace);
              }
              return enabledCache;
            },
            set: (v) => {
              enableOverride = v;
            }
          });
          if (typeof createDebug.init === "function") {
            createDebug.init(debug);
          }
          return debug;
        }
        function extend(namespace, delimiter) {
          const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.namespaces = namespaces;
          createDebug.names = [];
          createDebug.skips = [];
          let i;
          const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
          const len = split.length;
          for (i = 0; i < len; i++) {
            if (!split[i]) {
              continue;
            }
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") {
              createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
            } else {
              createDebug.names.push(new RegExp("^" + namespaces + "$"));
            }
          }
        }
        function disable() {
          const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
          ].join(",");
          createDebug.enable("");
          return namespaces;
        }
        function enabled(name) {
          if (name[name.length - 1] === "*") {
            return true;
          }
          let i;
          let len;
          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }
          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }
          return false;
        }
        function toNamespace(regexp) {
          return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }
          return val;
        }
        function destroy() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        createDebug.enable(createDebug.load());
        return createDebug;
      }
      module.exports = setup;
    }
  });

  // node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js
  var require_browser2 = __commonJS({
    "node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"(exports, module) {
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      exports.destroy = (() => {
        let warned = false;
        return () => {
          if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      exports.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function useColors() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function formatArgs(args) {
        args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");
        let index = 0;
        let lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, (match2) => {
          if (match2 === "%%") {
            return;
          }
          index++;
          if (match2 === "%c") {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      exports.log = console.debug || console.log || (() => {
      });
      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem("debug", namespaces);
          } else {
            exports.storage.removeItem("debug");
          }
        } catch (error2) {
        }
      }
      function load() {
        let r;
        try {
          r = exports.storage.getItem("debug");
        } catch (error2) {
        }
        if (!r && typeof process !== "undefined" && "env" in process) {
          r = process.env.DEBUG;
        }
        return r;
      }
      function localstorage() {
        try {
          return localStorage;
        } catch (error2) {
        }
      }
      module.exports = require_common()(exports);
      var { formatters } = module.exports;
      formatters.j = function(v) {
        try {
          return JSON.stringify(v);
        } catch (error2) {
          return "[UnexpectedJSONParseError]: " + error2.message;
        }
      };
    }
  });

  // node_modules/.pnpm/events@3.3.0/node_modules/events/events.js
  var require_events = __commonJS({
    "node_modules/.pnpm/events@3.3.0/node_modules/events/events.js"(exports, module) {
      "use strict";
      var R = typeof Reflect === "object" ? Reflect : null;
      var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      };
      var ReflectOwnKeys;
      if (R && typeof R.ownKeys === "function") {
        ReflectOwnKeys = R.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        };
      } else {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target);
        };
      }
      function ProcessEmitWarning(warning) {
        if (console && console.warn)
          console.warn(warning);
      }
      var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
        return value !== value;
      };
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      module.exports = EventEmitter;
      module.exports.once = once;
      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = void 0;
      EventEmitter.prototype._eventsCount = 0;
      EventEmitter.prototype._maxListeners = void 0;
      var defaultMaxListeners = 10;
      function checkListener(listener) {
        if (typeof listener !== "function") {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
      }
      Object.defineProperty(EventEmitter, "defaultMaxListeners", {
        enumerable: true,
        get: function() {
          return defaultMaxListeners;
        },
        set: function(arg) {
          if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
          }
          defaultMaxListeners = arg;
        }
      });
      EventEmitter.init = function() {
        if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || void 0;
      };
      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
        if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
        }
        this._maxListeners = n;
        return this;
      };
      function _getMaxListeners(that) {
        if (that._maxListeners === void 0)
          return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }
      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
        return _getMaxListeners(this);
      };
      EventEmitter.prototype.emit = function emit(type) {
        var args = [];
        for (var i = 1; i < arguments.length; i++)
          args.push(arguments[i]);
        var doError = type === "error";
        var events = this._events;
        if (events !== void 0)
          doError = doError && events.error === void 0;
        else if (!doError)
          return false;
        if (doError) {
          var er;
          if (args.length > 0)
            er = args[0];
          if (er instanceof Error) {
            throw er;
          }
          var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
          err.context = er;
          throw err;
        }
        var handler = events[type];
        if (handler === void 0)
          return false;
        if (typeof handler === "function") {
          ReflectApply(handler, this, args);
        } else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);
          for (var i = 0; i < len; ++i)
            ReflectApply(listeners[i], this, args);
        }
        return true;
      };
      function _addListener(target, type, listener, prepend) {
        var m;
        var events;
        var existing;
        checkListener(listener);
        events = target._events;
        if (events === void 0) {
          events = target._events = /* @__PURE__ */ Object.create(null);
          target._eventsCount = 0;
        } else {
          if (events.newListener !== void 0) {
            target.emit(
              "newListener",
              type,
              listener.listener ? listener.listener : listener
            );
            events = target._events;
          }
          existing = events[type];
        }
        if (existing === void 0) {
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === "function") {
            existing = events[type] = prepend ? [listener, existing] : [existing, listener];
          } else if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
          m = _getMaxListeners(target);
          if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
          }
        }
        return target;
      }
      EventEmitter.prototype.addListener = function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      };
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.prependListener = function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };
      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0)
            return this.listener.call(this.target);
          return this.listener.apply(this.target, arguments);
        }
      }
      function _onceWrap(target, type, listener) {
        var state = { fired: false, wrapFn: void 0, target, type, listener };
        var wrapped = onceWrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }
      EventEmitter.prototype.once = function once2(type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.removeListener = function removeListener(type, listener) {
        var list, events, position, i, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === void 0)
          return this;
        list = events[type];
        if (list === void 0)
          return this;
        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit("removeListener", type, list.listener || listener);
          }
        } else if (typeof list !== "function") {
          position = -1;
          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }
          if (position < 0)
            return this;
          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }
          if (list.length === 1)
            events[type] = list[0];
          if (events.removeListener !== void 0)
            this.emit("removeListener", type, originalListener || listener);
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
        var listeners, events, i;
        events = this._events;
        if (events === void 0)
          return this;
        if (events.removeListener === void 0) {
          if (arguments.length === 0) {
            this._events = /* @__PURE__ */ Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== void 0) {
            if (--this._eventsCount === 0)
              this._events = /* @__PURE__ */ Object.create(null);
            else
              delete events[type];
          }
          return this;
        }
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === "removeListener")
              continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners("removeListener");
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
          return this;
        }
        listeners = events[type];
        if (typeof listeners === "function") {
          this.removeListener(type, listeners);
        } else if (listeners !== void 0) {
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }
        return this;
      };
      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (events === void 0)
          return [];
        var evlistener = events[type];
        if (evlistener === void 0)
          return [];
        if (typeof evlistener === "function")
          return unwrap ? [evlistener.listener || evlistener] : [evlistener];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }
      EventEmitter.prototype.listeners = function listeners(type) {
        return _listeners(this, type, true);
      };
      EventEmitter.prototype.rawListeners = function rawListeners(type) {
        return _listeners(this, type, false);
      };
      EventEmitter.listenerCount = function(emitter, type) {
        if (typeof emitter.listenerCount === "function") {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };
      EventEmitter.prototype.listenerCount = listenerCount;
      function listenerCount(type) {
        var events = this._events;
        if (events !== void 0) {
          var evlistener = events[type];
          if (typeof evlistener === "function") {
            return 1;
          } else if (evlistener !== void 0) {
            return evlistener.length;
          }
        }
        return 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
      };
      function arrayClone(arr, n) {
        var copy = new Array(n);
        for (var i = 0; i < n; ++i)
          copy[i] = arr[i];
        return copy;
      }
      function spliceOne(list, index) {
        for (; index + 1 < list.length; index++)
          list[index] = list[index + 1];
        list.pop();
      }
      function unwrapListeners(arr) {
        var ret = new Array(arr.length);
        for (var i = 0; i < ret.length; ++i) {
          ret[i] = arr[i].listener || arr[i];
        }
        return ret;
      }
      function once(emitter, name) {
        return new Promise(function(resolve, reject) {
          function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
          }
          function resolver() {
            if (typeof emitter.removeListener === "function") {
              emitter.removeListener("error", errorListener);
            }
            resolve([].slice.call(arguments));
          }
          ;
          eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
          if (name !== "error") {
            addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
          }
        });
      }
      function addErrorHandlerIfEventEmitter(emitter, handler, flags2) {
        if (typeof emitter.on === "function") {
          eventTargetAgnosticAddListener(emitter, "error", handler, flags2);
        }
      }
      function eventTargetAgnosticAddListener(emitter, name, listener, flags2) {
        if (typeof emitter.on === "function") {
          if (flags2.once) {
            emitter.once(name, listener);
          } else {
            emitter.on(name, listener);
          }
        } else if (typeof emitter.addEventListener === "function") {
          emitter.addEventListener(name, function wrapListener(arg) {
            if (flags2.once) {
              emitter.removeEventListener(name, wrapListener);
            }
            listener(arg);
          });
        } else {
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
        }
      }
    }
  });

  // node_modules/.pnpm/strict-event-emitter@0.2.8/node_modules/strict-event-emitter/lib/StrictEventEmitter.js
  var require_StrictEventEmitter = __commonJS({
    "node_modules/.pnpm/strict-event-emitter@0.2.8/node_modules/strict-event-emitter/lib/StrictEventEmitter.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __spreadArrays = exports && exports.__spreadArrays || function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      exports.__esModule = true;
      exports.StrictEventEmitter = void 0;
      var events_1 = require_events();
      var StrictEventEmitter = function(_super) {
        __extends(StrictEventEmitter2, _super);
        function StrictEventEmitter2() {
          return _super.call(this) || this;
        }
        StrictEventEmitter2.prototype.on = function(event, listener) {
          return _super.prototype.on.call(this, event.toString(), listener);
        };
        StrictEventEmitter2.prototype.once = function(event, listener) {
          return _super.prototype.once.call(this, event.toString(), listener);
        };
        StrictEventEmitter2.prototype.off = function(event, listener) {
          return _super.prototype.off.call(this, event.toString(), listener);
        };
        StrictEventEmitter2.prototype.emit = function(event) {
          var data2 = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            data2[_i - 1] = arguments[_i];
          }
          return _super.prototype.emit.apply(this, __spreadArrays([event.toString()], data2));
        };
        StrictEventEmitter2.prototype.addListener = function(event, listener) {
          return _super.prototype.addListener.call(this, event.toString(), listener);
        };
        StrictEventEmitter2.prototype.prependListener = function(event, listener) {
          return _super.prototype.prependListener.call(this, event.toString(), listener);
        };
        StrictEventEmitter2.prototype.prependOnceListener = function(event, listener) {
          return _super.prototype.prependOnceListener.call(this, event.toString(), listener);
        };
        StrictEventEmitter2.prototype.removeListener = function(event, listener) {
          return _super.prototype.removeListener.call(this, event.toString(), listener);
        };
        StrictEventEmitter2.prototype.removeAllListeners = function(event) {
          if (event) {
            return _super.prototype.removeAllListeners.call(this, event.toString());
          }
          return _super.prototype.removeAllListeners.call(this);
        };
        StrictEventEmitter2.prototype.eventNames = function() {
          return _super.prototype.eventNames.call(this);
        };
        StrictEventEmitter2.prototype.listeners = function(event) {
          return _super.prototype.listeners.call(this, event.toString());
        };
        StrictEventEmitter2.prototype.rawListeners = function(event) {
          return _super.prototype.rawListeners.call(this, event.toString());
        };
        StrictEventEmitter2.prototype.listenerCount = function(event) {
          return _super.prototype.listenerCount.call(this, event.toString());
        };
        return StrictEventEmitter2;
      }(events_1.EventEmitter);
      exports.StrictEventEmitter = StrictEventEmitter;
    }
  });

  // node_modules/.pnpm/strict-event-emitter@0.2.8/node_modules/strict-event-emitter/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/.pnpm/strict-event-emitter@0.2.8/node_modules/strict-event-emitter/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      exports.__esModule = true;
      __exportStar(require_StrictEventEmitter(), exports);
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/nextTick.js
  var require_nextTick = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/nextTick.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.nextTickAsync = exports.nextTick = void 0;
      function nextTick(callback) {
        setTimeout(callback, 0);
      }
      exports.nextTick = nextTick;
      function nextTickAsync(callback) {
        return new Promise(function(resolve) {
          setTimeout(function() {
            resolve(callback());
          }, 0);
        });
      }
      exports.nextTickAsync = nextTickAsync;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/AsyncEventEmitter.js
  var require_AsyncEventEmitter = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/AsyncEventEmitter.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body2) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body2.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __read = exports && exports.__read || function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error2) {
          e = { error: error2 };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
        return to;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AsyncEventEmitter = exports.AsyncEventEmitterReadyState = void 0;
      var debug_1 = require_browser2();
      var strict_event_emitter_1 = require_lib2();
      var nextTick_1 = require_nextTick();
      var AsyncEventEmitterReadyState;
      (function(AsyncEventEmitterReadyState2) {
        AsyncEventEmitterReadyState2["ACTIVE"] = "ACTIVE";
        AsyncEventEmitterReadyState2["DEACTIVATED"] = "DEACTIVATED";
      })(AsyncEventEmitterReadyState = exports.AsyncEventEmitterReadyState || (exports.AsyncEventEmitterReadyState = {}));
      var AsyncEventEmitter = function(_super) {
        __extends(AsyncEventEmitter2, _super);
        function AsyncEventEmitter2() {
          var _this = _super.call(this) || this;
          _this.log = debug_1.debug("async-event-emitter");
          _this.queue = /* @__PURE__ */ new Map();
          _this.readyState = AsyncEventEmitterReadyState.ACTIVE;
          return _this;
        }
        AsyncEventEmitter2.prototype.on = function(event, listener) {
          var _this = this;
          var log = this.log.extend("on");
          log('adding "%s" listener...', event);
          if (this.readyState === AsyncEventEmitterReadyState.DEACTIVATED) {
            log("the emitter is destroyed, skipping!");
            return this;
          }
          return _super.prototype.on.call(this, event, function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function() {
              var queue;
              var _this2 = this;
              return __generator(this, function(_a2) {
                queue = this.openListenerQueue(event);
                log('awaiting the "%s" listener...', event);
                queue.push({
                  args,
                  done: new Promise(function(resolve, reject) {
                    return __awaiter(_this2, void 0, void 0, function() {
                      var error_1;
                      return __generator(this, function(_a3) {
                        switch (_a3.label) {
                          case 0:
                            _a3.trys.push([0, 2, , 3]);
                            return [4, listener.apply(void 0, __spreadArray([], __read(args)))];
                          case 1:
                            _a3.sent();
                            resolve();
                            log('"%s" listener has resolved!', event);
                            return [3, 3];
                          case 2:
                            error_1 = _a3.sent();
                            log('"%s" listener has rejected!', error_1);
                            reject(error_1);
                            return [3, 3];
                          case 3:
                            return [2];
                        }
                      });
                    });
                  })
                });
                return [2];
              });
            });
          });
        };
        AsyncEventEmitter2.prototype.emit = function(event) {
          var _this = this;
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }
          var log = this.log.extend("emit");
          log('emitting "%s" event...', event);
          if (this.readyState === AsyncEventEmitterReadyState.DEACTIVATED) {
            log("the emitter is destroyed, skipping!");
            return false;
          }
          this.openListenerQueue(event);
          log('appending a one-time cleanup "%s" listener...', event);
          this.once(event, function() {
            nextTick_1.nextTick(function() {
              _this.queue.delete(event);
              log('cleaned up "%s" listeners queue!', event);
            });
          });
          return _super.prototype.emit.apply(this, __spreadArray([event], __read(args)));
        };
        AsyncEventEmitter2.prototype.untilIdle = function(event, filter) {
          if (filter === void 0) {
            filter = function() {
              return true;
            };
          }
          return __awaiter(this, void 0, void 0, function() {
            var listenersQueue;
            var _this = this;
            return __generator(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  listenersQueue = this.queue.get(event) || [];
                  return [4, Promise.all(listenersQueue.filter(filter).map(function(_a3) {
                    var done = _a3.done;
                    return done;
                  })).finally(function() {
                    _this.queue.delete(event);
                  })];
                case 1:
                  _a2.sent();
                  return [2];
              }
            });
          });
        };
        AsyncEventEmitter2.prototype.openListenerQueue = function(event) {
          var log = this.log.extend("openListenerQueue");
          log('opening "%s" listeners queue...', event);
          var queue = this.queue.get(event);
          if (!queue) {
            log("no queue found, creating one...");
            this.queue.set(event, []);
            return [];
          }
          log("returning an exising queue:", queue);
          return queue;
        };
        AsyncEventEmitter2.prototype.removeAllListeners = function(event) {
          var log = this.log.extend("removeAllListeners");
          log("event:", event);
          if (event) {
            this.queue.delete(event);
            log('cleared the "%s" listeners queue!', event, this.queue.get(event));
          } else {
            this.queue.clear();
            log("cleared the listeners queue!", this.queue);
          }
          return _super.prototype.removeAllListeners.call(this, event);
        };
        AsyncEventEmitter2.prototype.activate = function() {
          var log = this.log.extend("activate");
          this.readyState = AsyncEventEmitterReadyState.ACTIVE;
          log("set state to:", this.readyState);
        };
        AsyncEventEmitter2.prototype.deactivate = function() {
          var log = this.log.extend("deactivate");
          log("removing all listeners...");
          this.removeAllListeners();
          this.readyState = AsyncEventEmitterReadyState.DEACTIVATED;
          log("set state to:", this.readyState);
        };
        return AsyncEventEmitter2;
      }(strict_event_emitter_1.StrictEventEmitter);
      exports.AsyncEventEmitter = AsyncEventEmitter;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/Interceptor.js
  var require_Interceptor = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/Interceptor.js"(exports) {
      "use strict";
      var __values = exports && exports.__values || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Interceptor = exports.InterceptorReadyState = exports.deleteGlobalSymbol = exports.getGlobalSymbol = void 0;
      var debug_1 = require_browser2();
      var AsyncEventEmitter_1 = require_AsyncEventEmitter();
      var nextTick_1 = require_nextTick();
      function getGlobalSymbol(symbol) {
        return globalThis[symbol] || void 0;
      }
      exports.getGlobalSymbol = getGlobalSymbol;
      function setGlobalSymbol(symbol, value) {
        globalThis[symbol] = value;
      }
      function deleteGlobalSymbol(symbol) {
        delete globalThis[symbol];
      }
      exports.deleteGlobalSymbol = deleteGlobalSymbol;
      var InterceptorReadyState;
      (function(InterceptorReadyState2) {
        InterceptorReadyState2["IDLE"] = "IDLE";
        InterceptorReadyState2["APPLYING"] = "APPLYING";
        InterceptorReadyState2["APPLIED"] = "APPLIED";
        InterceptorReadyState2["DISPOSING"] = "DISPOSING";
        InterceptorReadyState2["DISPOSED"] = "DISPOSED";
      })(InterceptorReadyState = exports.InterceptorReadyState || (exports.InterceptorReadyState = {}));
      var Interceptor2 = function() {
        function Interceptor3(symbol) {
          this.symbol = symbol;
          this.readyState = InterceptorReadyState.IDLE;
          this.emitter = new AsyncEventEmitter_1.AsyncEventEmitter();
          this.subscriptions = [];
          this.log = debug_1.debug(symbol.description);
          this.emitter.setMaxListeners(0);
          this.log("constructing the interceptor...");
        }
        Interceptor3.prototype.checkEnvironment = function() {
          return true;
        };
        Interceptor3.prototype.apply = function() {
          var _this = this;
          var log = this.log.extend("apply");
          log("applying the interceptor...");
          if (this.readyState === InterceptorReadyState.APPLIED) {
            log("intercepted already applied!");
            return;
          }
          var shouldApply = this.checkEnvironment();
          if (!shouldApply) {
            log("the interceptor cannot be applied in this environment!");
            return;
          }
          this.readyState = InterceptorReadyState.APPLYING;
          this.emitter.activate();
          log("activated the emiter!", this.emitter.readyState);
          var runningInstance = this.getInstance();
          if (runningInstance) {
            log("found a running instance, reusing...");
            this.on = function(event, listener) {
              log('proxying the "%s" listener', event);
              runningInstance.emitter.addListener(event, listener);
              _this.subscriptions.push(function() {
                runningInstance.emitter.removeListener(event, listener);
                log('removed proxied "%s" listener!', event);
              });
            };
            nextTick_1.nextTick(function() {
              _this.readyState = InterceptorReadyState.APPLIED;
            });
            return;
          }
          log("no running instance found, setting up a new instance...");
          this.setup();
          this.setInstance();
          nextTick_1.nextTick(function() {
            _this.readyState = InterceptorReadyState.APPLIED;
          });
        };
        Interceptor3.prototype.setup = function() {
        };
        Interceptor3.prototype.on = function(event, listener) {
          var log = this.log.extend("on");
          if (this.readyState === InterceptorReadyState.DISPOSING || this.readyState === InterceptorReadyState.DISPOSED) {
            log("cannot listen to events, already disposed!");
            return;
          }
          log('adding "%s" event listener:', event, listener.name);
          this.emitter.on(event, listener);
        };
        Interceptor3.prototype.dispose = function() {
          var e_1, _a2;
          var _this = this;
          var log = this.log.extend("dispose");
          if (this.readyState === InterceptorReadyState.DISPOSED) {
            log("cannot dispose, already disposed!");
            return;
          }
          log("disposing the interceptor...");
          this.readyState = InterceptorReadyState.DISPOSING;
          if (!this.getInstance()) {
            log("no interceptors running, skipping dispose...");
            return;
          }
          this.clearInstance();
          log("global symbol deleted:", getGlobalSymbol(this.symbol));
          if (this.subscriptions.length > 0) {
            log("disposing of %d subscriptions...", this.subscriptions.length);
            try {
              for (var _b2 = __values(this.subscriptions), _c = _b2.next(); !_c.done; _c = _b2.next()) {
                var dispose = _c.value;
                dispose();
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a2 = _b2.return))
                  _a2.call(_b2);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
            this.subscriptions = [];
            log("disposed of all subscriptions!", this.subscriptions.length);
          }
          this.emitter.deactivate();
          log("destroyed the listener!");
          nextTick_1.nextTick(function() {
            _this.readyState = InterceptorReadyState.DISPOSED;
          });
        };
        Interceptor3.prototype.getInstance = function() {
          var _a2;
          var instance = getGlobalSymbol(this.symbol);
          this.log("retrieved global instance:", (_a2 = instance === null || instance === void 0 ? void 0 : instance.constructor) === null || _a2 === void 0 ? void 0 : _a2.name);
          return instance;
        };
        Interceptor3.prototype.setInstance = function() {
          setGlobalSymbol(this.symbol, this);
          this.log("set global instance!", this.symbol.description);
        };
        Interceptor3.prototype.clearInstance = function() {
          deleteGlobalSymbol(this.symbol);
          this.log("cleared global instance!", this.symbol.description);
        };
        return Interceptor3;
      }();
      exports.Interceptor = Interceptor2;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/BatchInterceptor.js
  var require_BatchInterceptor = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/BatchInterceptor.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __values = exports && exports.__values || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BatchInterceptor = void 0;
      var Interceptor_1 = require_Interceptor();
      var BatchInterceptor2 = function(_super) {
        __extends(BatchInterceptor3, _super);
        function BatchInterceptor3(options) {
          var _this = this;
          BatchInterceptor3.symbol = Symbol(options.name);
          _this = _super.call(this, BatchInterceptor3.symbol) || this;
          _this.interceptors = options.interceptors;
          return _this;
        }
        BatchInterceptor3.prototype.setup = function() {
          var e_1, _a2;
          var log = this.log.extend("setup");
          log("applying all %d interceptors...", this.interceptors.length);
          var _loop_1 = function(interceptor2) {
            log('applying "%s" interceptor...', interceptor2.constructor.name);
            interceptor2.apply();
            log("adding interceptor dispose subscription");
            this_1.subscriptions.push(function() {
              return interceptor2.dispose();
            });
          };
          var this_1 = this;
          try {
            for (var _b2 = __values(this.interceptors), _c = _b2.next(); !_c.done; _c = _b2.next()) {
              var interceptor = _c.value;
              _loop_1(interceptor);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a2 = _b2.return))
                _a2.call(_b2);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        };
        BatchInterceptor3.prototype.on = function(event, listener) {
          this.interceptors.forEach(function(interceptor) {
            interceptor.on(event, listener);
          });
        };
        return BatchInterceptor3;
      }(Interceptor_1.Interceptor);
      exports.BatchInterceptor = BatchInterceptor2;
    }
  });

  // node_modules/.pnpm/headers-polyfill@3.1.2/node_modules/headers-polyfill/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/.pnpm/headers-polyfill@3.1.2/node_modules/headers-polyfill/lib/index.js"(exports, module) {
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
      var src_exports2 = {};
      __export2(src_exports2, {
        Headers: () => HeadersPolyfill2,
        flattenHeadersList: () => flattenHeadersList,
        flattenHeadersObject: () => flattenHeadersObject2,
        headersToList: () => headersToList,
        headersToObject: () => headersToObject2,
        headersToString: () => headersToString,
        listToHeaders: () => listToHeaders,
        objectToHeaders: () => objectToHeaders2,
        reduceHeadersObject: () => reduceHeadersObject2,
        stringToHeaders: () => stringToHeaders2
      });
      module.exports = __toCommonJS2(src_exports2);
      var HEADERS_INVALID_CHARACTERS2 = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
      function normalizeHeaderName2(name) {
        if (typeof name !== "string") {
          name = String(name);
        }
        if (HEADERS_INVALID_CHARACTERS2.test(name) || name.trim() === "") {
          throw new TypeError("Invalid character in header field name");
        }
        return name.toLowerCase();
      }
      function normalizeHeaderValue2(value) {
        if (typeof value !== "string") {
          value = String(value);
        }
        return value;
      }
      var NORMALIZED_HEADERS2 = Symbol("normalizedHeaders");
      var RAW_HEADER_NAMES2 = Symbol("rawHeaderNames");
      var _a2;
      var _b2;
      var HeadersPolyfill2 = class {
        constructor(init) {
          this[_a2] = {};
          this[_b2] = /* @__PURE__ */ new Map();
          if (["Headers", "HeadersPolyfill"].includes(init == null ? void 0 : init.constructor.name) || init instanceof HeadersPolyfill2) {
            const initialHeaders = init;
            initialHeaders.forEach((value, name) => {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(init)) {
            init.forEach(([name, value]) => {
              this.append(name, Array.isArray(value) ? value.join(", ") : value);
            });
          } else if (init) {
            Object.getOwnPropertyNames(init).forEach((name) => {
              const value = init[name];
              this.append(name, Array.isArray(value) ? value.join(", ") : value);
            });
          }
        }
        [(_a2 = NORMALIZED_HEADERS2, _b2 = RAW_HEADER_NAMES2, Symbol.iterator)]() {
          return this.entries();
        }
        *keys() {
          for (const name of Object.keys(this[NORMALIZED_HEADERS2])) {
            yield name;
          }
        }
        *values() {
          for (const value of Object.values(this[NORMALIZED_HEADERS2])) {
            yield value;
          }
        }
        *entries() {
          for (const name of Object.keys(this[NORMALIZED_HEADERS2])) {
            yield [name, this.get(name)];
          }
        }
        get(name) {
          return this[NORMALIZED_HEADERS2][normalizeHeaderName2(name)] || null;
        }
        set(name, value) {
          const normalizedName = normalizeHeaderName2(name);
          this[NORMALIZED_HEADERS2][normalizedName] = normalizeHeaderValue2(value);
          this[RAW_HEADER_NAMES2].set(normalizedName, name);
        }
        append(name, value) {
          const normalizedName = normalizeHeaderName2(name);
          let resolvedValue = this.has(normalizedName) ? `${this.get(normalizedName)}, ${value}` : value;
          this.set(name, resolvedValue);
        }
        delete(name) {
          if (!this.has(name)) {
            return;
          }
          const normalizedName = normalizeHeaderName2(name);
          delete this[NORMALIZED_HEADERS2][normalizedName];
          this[RAW_HEADER_NAMES2].delete(normalizedName);
        }
        all() {
          return this[NORMALIZED_HEADERS2];
        }
        raw() {
          const rawHeaders = {};
          for (const [name, value] of this.entries()) {
            rawHeaders[this[RAW_HEADER_NAMES2].get(name)] = value;
          }
          return rawHeaders;
        }
        has(name) {
          return this[NORMALIZED_HEADERS2].hasOwnProperty(normalizeHeaderName2(name));
        }
        forEach(callback, thisArg) {
          for (const name in this[NORMALIZED_HEADERS2]) {
            if (this[NORMALIZED_HEADERS2].hasOwnProperty(name)) {
              callback.call(thisArg, this[NORMALIZED_HEADERS2][name], name, this);
            }
          }
        }
      };
      function headersToList(headers) {
        const headersList = [];
        headers.forEach((value, name) => {
          const resolvedValue = value.includes(",") ? value.split(",").map((value2) => value2.trim()) : value;
          headersList.push([name, resolvedValue]);
        });
        return headersList;
      }
      function headersToString(headers) {
        const list = headersToList(headers);
        const lines = list.map(([name, value]) => {
          const values = [].concat(value);
          return `${name}: ${values.join(", ")}`;
        });
        return lines.join("\r\n");
      }
      var singleValueHeaders2 = ["user-agent"];
      function headersToObject2(headers) {
        const headersObject = {};
        headers.forEach((value, name) => {
          const isMultiValue = !singleValueHeaders2.includes(name.toLowerCase()) && value.includes(",");
          headersObject[name] = isMultiValue ? value.split(",").map((s) => s.trim()) : value;
        });
        return headersObject;
      }
      function stringToHeaders2(str) {
        const lines = str.trim().split(/[\r\n]+/);
        return lines.reduce((headers, line) => {
          if (line.trim() === "") {
            return headers;
          }
          const parts = line.split(": ");
          const name = parts.shift();
          const value = parts.join(": ");
          headers.append(name, value);
          return headers;
        }, new HeadersPolyfill2());
      }
      function listToHeaders(list) {
        const headers = new HeadersPolyfill2();
        list.forEach(([name, value]) => {
          const values = [].concat(value);
          values.forEach((value2) => {
            headers.append(name, value2);
          });
        });
        return headers;
      }
      function reduceHeadersObject2(headers, reducer, initialState) {
        return Object.keys(headers).reduce((nextHeaders, name) => {
          return reducer(nextHeaders, name, headers[name]);
        }, initialState);
      }
      function objectToHeaders2(headersObject) {
        return reduceHeadersObject2(
          headersObject,
          (headers, name, value) => {
            const values = [].concat(value).filter(Boolean);
            values.forEach((value2) => {
              headers.append(name, value2);
            });
            return headers;
          },
          new HeadersPolyfill2()
        );
      }
      function flattenHeadersList(list) {
        return list.map(([name, values]) => {
          return [name, [].concat(values).join(", ")];
        });
      }
      function flattenHeadersObject2(headersObject) {
        return reduceHeadersObject2(
          headersObject,
          (headers, name, value) => {
            headers[name] = [].concat(value).join(", ");
            return headers;
          },
          {}
        );
      }
    }
  });

  // node_modules/.pnpm/outvariant@1.4.0/node_modules/outvariant/lib/index.js
  var require_lib4 = __commonJS({
    "node_modules/.pnpm/outvariant@1.4.0/node_modules/outvariant/lib/index.js"(exports, module) {
      "use strict";
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
      var src_exports2 = {};
      __export2(src_exports2, {
        InvariantError: () => InvariantError2,
        format: () => format2,
        invariant: () => invariant3
      });
      module.exports = __toCommonJS2(src_exports2);
      var POSITIONALS_EXP2 = /(%?)(%([sdjo]))/g;
      function serializePositional2(positional, flag) {
        switch (flag) {
          case "s":
            return positional;
          case "d":
          case "i":
            return Number(positional);
          case "j":
            return JSON.stringify(positional);
          case "o": {
            if (typeof positional === "string") {
              return positional;
            }
            const json2 = JSON.stringify(positional);
            if (json2 === "{}" || json2 === "[]" || /^\[object .+?\]$/.test(json2)) {
              return positional;
            }
            return json2;
          }
        }
      }
      function format2(message, ...positionals) {
        if (positionals.length === 0) {
          return message;
        }
        let positionalIndex = 0;
        let formattedMessage = message.replace(
          POSITIONALS_EXP2,
          (match2, isEscaped, _, flag) => {
            const positional = positionals[positionalIndex];
            const value = serializePositional2(positional, flag);
            if (!isEscaped) {
              positionalIndex++;
              return value;
            }
            return match2;
          }
        );
        if (positionalIndex < positionals.length) {
          formattedMessage += ` ${positionals.slice(positionalIndex).join(" ")}`;
        }
        formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
        return formattedMessage;
      }
      var STACK_FRAMES_TO_IGNORE2 = 2;
      function cleanErrorStack2(error2) {
        if (!error2.stack) {
          return;
        }
        const nextStack = error2.stack.split("\n");
        nextStack.splice(1, STACK_FRAMES_TO_IGNORE2);
        error2.stack = nextStack.join("\n");
      }
      var InvariantError2 = class extends Error {
        constructor(message, ...positionals) {
          super(message);
          this.message = message;
          this.name = "Invariant Violation";
          this.message = format2(message, ...positionals);
          cleanErrorStack2(this);
        }
      };
      var invariant3 = (predicate, message, ...positionals) => {
        if (!predicate) {
          throw new InvariantError2(message, ...positionals);
        }
      };
      invariant3.as = (ErrorConstructor, predicate, message, ...positionals) => {
        if (!predicate) {
          const isConstructor = ErrorConstructor.prototype.name != null;
          const error2 = isConstructor ? new ErrorConstructor(format2(message, positionals)) : ErrorConstructor(format2(message, positionals));
          throw error2;
        }
      };
    }
  });

  // node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js"(exports, module) {
      "use strict";
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/.pnpm/has-tostringtag@1.0.0/node_modules/has-tostringtag/shams.js
  var require_shams2 = __commonJS({
    "node_modules/.pnpm/has-tostringtag@1.0.0/node_modules/has-tostringtag/shams.js"(exports, module) {
      "use strict";
      var hasSymbols = require_shams();
      module.exports = function hasToStringTagShams() {
        return hasSymbols() && !!Symbol.toStringTag;
      };
    }
  });

  // node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js"(exports, module) {
      "use strict";
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js"(exports, module) {
      "use strict";
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var slice = Array.prototype.slice;
      var toStr = Object.prototype.toString;
      var funcType = "[object Function]";
      module.exports = function bind(that) {
        var target = this;
        if (typeof target !== "function" || toStr.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slice.call(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(
              this,
              args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
              return result;
            }
            return this;
          } else {
            return target.apply(
              that,
              args.concat(slice.call(arguments))
            );
          }
        };
        var boundLength = Math.max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs.push("$" + i);
        }
        bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js"(exports, module) {
      "use strict";
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js
  var require_src = __commonJS({
    "node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js"(exports, module) {
      "use strict";
      var bind = require_function_bind();
      module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/.pnpm/get-intrinsic@1.2.0/node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/.pnpm/get-intrinsic@1.2.0/node_modules/get-intrinsic/index.js"(exports, module) {
      "use strict";
      var undefined2;
      var $SyntaxError = SyntaxError;
      var $Function = Function;
      var $TypeError = TypeError;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = Object.getOwnPropertyDescriptor;
      if ($gOPD) {
        try {
          $gOPD({}, "");
        } catch (e) {
          $gOPD = null;
        }
      }
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      }() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var getProto = Object.getPrototypeOf || function(x) {
        return x.__proto__;
      };
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
      var INTRINSICS = {
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
      };
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
      var errorProto;
      var doEval = function doEval2(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn = doEval2("%AsyncGeneratorFunction%");
          if (fn) {
            value = fn.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind = require_function_bind();
      var hasOwn = require_src();
      var $concat = bind.call(Function.call, Array.prototype.concat);
      var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
      var $replace = bind.call(Function.call, String.prototype.replace);
      var $strSlice = bind.call(Function.call, String.prototype.slice);
      var $exec = bind.call(Function.call, RegExp.prototype.exec);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match2, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match2;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        if ($exec(/^%?[^%]*%?$/, name) === null) {
          throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js"(exports, module) {
      "use strict";
      var bind = require_function_bind();
      var GetIntrinsic = require_get_intrinsic();
      var $apply = GetIntrinsic("%Function.prototype.apply%");
      var $call = GetIntrinsic("%Function.prototype.call%");
      var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
      var $max = GetIntrinsic("%Math.max%");
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = null;
        }
      }
      module.exports = function callBind(originalFunction) {
        var func = $reflectApply(bind, $call, arguments);
        if ($gOPD && $defineProperty) {
          var desc = $gOPD(func, "length");
          if (desc.configurable) {
            $defineProperty(
              func,
              "length",
              { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
            );
          }
        }
        return func;
      };
      var applyBind = function applyBind2() {
        return $reflectApply(bind, $apply, arguments);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js
  var require_callBound = __commonJS({
    "node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBind = require_call_bind();
      var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = GetIntrinsic(name, !!allowMissing);
        if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
          return callBind(intrinsic);
        }
        return intrinsic;
      };
    }
  });

  // node_modules/.pnpm/is-arguments@1.1.1/node_modules/is-arguments/index.js
  var require_is_arguments = __commonJS({
    "node_modules/.pnpm/is-arguments@1.1.1/node_modules/is-arguments/index.js"(exports, module) {
      "use strict";
      var hasToStringTag = require_shams2()();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var isStandardArguments = function isArguments(value) {
        if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
          return false;
        }
        return $toString(value) === "[object Arguments]";
      };
      var isLegacyArguments = function isArguments(value) {
        if (isStandardArguments(value)) {
          return true;
        }
        return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
      };
      var supportsStandardArguments = function() {
        return isStandardArguments(arguments);
      }();
      isStandardArguments.isLegacyArguments = isLegacyArguments;
      module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
    }
  });

  // node_modules/.pnpm/is-generator-function@1.0.10/node_modules/is-generator-function/index.js
  var require_is_generator_function = __commonJS({
    "node_modules/.pnpm/is-generator-function@1.0.10/node_modules/is-generator-function/index.js"(exports, module) {
      "use strict";
      var toStr = Object.prototype.toString;
      var fnToStr = Function.prototype.toString;
      var isFnRegex = /^\s*(?:function)?\*/;
      var hasToStringTag = require_shams2()();
      var getProto = Object.getPrototypeOf;
      var getGeneratorFunc = function() {
        if (!hasToStringTag) {
          return false;
        }
        try {
          return Function("return function*() {}")();
        } catch (e) {
        }
      };
      var GeneratorFunction;
      module.exports = function isGeneratorFunction(fn) {
        if (typeof fn !== "function") {
          return false;
        }
        if (isFnRegex.test(fnToStr.call(fn))) {
          return true;
        }
        if (!hasToStringTag) {
          var str = toStr.call(fn);
          return str === "[object GeneratorFunction]";
        }
        if (!getProto) {
          return false;
        }
        if (typeof GeneratorFunction === "undefined") {
          var generatorFunc = getGeneratorFunc();
          GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
        }
        return getProto(fn) === GeneratorFunction;
      };
    }
  });

  // node_modules/.pnpm/is-callable@1.2.7/node_modules/is-callable/index.js
  var require_is_callable = __commonJS({
    "node_modules/.pnpm/is-callable@1.2.7/node_modules/is-callable/index.js"(exports, module) {
      "use strict";
      var fnToStr = Function.prototype.toString;
      var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
      var badArrayLike;
      var isCallableMarker;
      if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
        try {
          badArrayLike = Object.defineProperty({}, "length", {
            get: function() {
              throw isCallableMarker;
            }
          });
          isCallableMarker = {};
          reflectApply(function() {
            throw 42;
          }, null, badArrayLike);
        } catch (_) {
          if (_ !== isCallableMarker) {
            reflectApply = null;
          }
        }
      } else {
        reflectApply = null;
      }
      var constructorRegex = /^\s*class\b/;
      var isES6ClassFn = function isES6ClassFunction(value) {
        try {
          var fnStr = fnToStr.call(value);
          return constructorRegex.test(fnStr);
        } catch (e) {
          return false;
        }
      };
      var tryFunctionObject = function tryFunctionToStr(value) {
        try {
          if (isES6ClassFn(value)) {
            return false;
          }
          fnToStr.call(value);
          return true;
        } catch (e) {
          return false;
        }
      };
      var toStr = Object.prototype.toString;
      var objectClass = "[object Object]";
      var fnClass = "[object Function]";
      var genClass = "[object GeneratorFunction]";
      var ddaClass = "[object HTMLAllCollection]";
      var ddaClass2 = "[object HTML document.all class]";
      var ddaClass3 = "[object HTMLCollection]";
      var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
      var isIE68 = !(0 in [,]);
      var isDDA = function isDocumentDotAll() {
        return false;
      };
      if (typeof document === "object") {
        all = document.all;
        if (toStr.call(all) === toStr.call(document.all)) {
          isDDA = function isDocumentDotAll(value) {
            if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
              try {
                var str = toStr.call(value);
                return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
              } catch (e) {
              }
            }
            return false;
          };
        }
      }
      var all;
      module.exports = reflectApply ? function isCallable(value) {
        if (isDDA(value)) {
          return true;
        }
        if (!value) {
          return false;
        }
        if (typeof value !== "function" && typeof value !== "object") {
          return false;
        }
        try {
          reflectApply(value, null, badArrayLike);
        } catch (e) {
          if (e !== isCallableMarker) {
            return false;
          }
        }
        return !isES6ClassFn(value) && tryFunctionObject(value);
      } : function isCallable(value) {
        if (isDDA(value)) {
          return true;
        }
        if (!value) {
          return false;
        }
        if (typeof value !== "function" && typeof value !== "object") {
          return false;
        }
        if (hasToStringTag) {
          return tryFunctionObject(value);
        }
        if (isES6ClassFn(value)) {
          return false;
        }
        var strClass = toStr.call(value);
        if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
          return false;
        }
        return tryFunctionObject(value);
      };
    }
  });

  // node_modules/.pnpm/for-each@0.3.3/node_modules/for-each/index.js
  var require_for_each = __commonJS({
    "node_modules/.pnpm/for-each@0.3.3/node_modules/for-each/index.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var toStr = Object.prototype.toString;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var forEachArray = function forEachArray2(array, iterator, receiver) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
              iterator(array[i], i, array);
            } else {
              iterator.call(receiver, array[i], i, array);
            }
          }
        }
      };
      var forEachString = function forEachString2(string, iterator, receiver) {
        for (var i = 0, len = string.length; i < len; i++) {
          if (receiver == null) {
            iterator(string.charAt(i), i, string);
          } else {
            iterator.call(receiver, string.charAt(i), i, string);
          }
        }
      };
      var forEachObject = function forEachObject2(object, iterator, receiver) {
        for (var k in object) {
          if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
              iterator(object[k], k, object);
            } else {
              iterator.call(receiver, object[k], k, object);
            }
          }
        }
      };
      var forEach = function forEach2(list, iterator, thisArg) {
        if (!isCallable(iterator)) {
          throw new TypeError("iterator must be a function");
        }
        var receiver;
        if (arguments.length >= 3) {
          receiver = thisArg;
        }
        if (toStr.call(list) === "[object Array]") {
          forEachArray(list, iterator, receiver);
        } else if (typeof list === "string") {
          forEachString(list, iterator, receiver);
        } else {
          forEachObject(list, iterator, receiver);
        }
      };
      module.exports = forEach;
    }
  });

  // node_modules/.pnpm/available-typed-arrays@1.0.5/node_modules/available-typed-arrays/index.js
  var require_available_typed_arrays = __commonJS({
    "node_modules/.pnpm/available-typed-arrays@1.0.5/node_modules/available-typed-arrays/index.js"(exports, module) {
      "use strict";
      var possibleNames = [
        "BigInt64Array",
        "BigUint64Array",
        "Float32Array",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray"
      ];
      var g = typeof globalThis === "undefined" ? global : globalThis;
      module.exports = function availableTypedArrays() {
        var out = [];
        for (var i = 0; i < possibleNames.length; i++) {
          if (typeof g[possibleNames[i]] === "function") {
            out[out.length] = possibleNames[i];
          }
        }
        return out;
      };
    }
  });

  // node_modules/.pnpm/gopd@1.0.1/node_modules/gopd/index.js
  var require_gopd = __commonJS({
    "node_modules/.pnpm/gopd@1.0.1/node_modules/gopd/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // node_modules/.pnpm/is-typed-array@1.1.10/node_modules/is-typed-array/index.js
  var require_is_typed_array = __commonJS({
    "node_modules/.pnpm/is-typed-array@1.1.10/node_modules/is-typed-array/index.js"(exports, module) {
      "use strict";
      var forEach = require_for_each();
      var availableTypedArrays = require_available_typed_arrays();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var gOPD = require_gopd();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays = availableTypedArrays();
      var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
        for (var i = 0; i < array.length; i += 1) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      };
      var $slice = callBound("String.prototype.slice");
      var toStrTags = {};
      var getPrototypeOf = Object.getPrototypeOf;
      if (hasToStringTag && gOPD && getPrototypeOf) {
        forEach(typedArrays, function(typedArray) {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
          }
        });
      }
      var tryTypedArrays = function tryAllTypedArrays(value) {
        var anyTrue = false;
        forEach(toStrTags, function(getter, typedArray) {
          if (!anyTrue) {
            try {
              anyTrue = getter.call(value) === typedArray;
            } catch (e) {
            }
          }
        });
        return anyTrue;
      };
      module.exports = function isTypedArray(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        if (!hasToStringTag || !(Symbol.toStringTag in value)) {
          var tag = $slice($toString(value), 8, -1);
          return $indexOf(typedArrays, tag) > -1;
        }
        if (!gOPD) {
          return false;
        }
        return tryTypedArrays(value);
      };
    }
  });

  // node_modules/.pnpm/which-typed-array@1.1.9/node_modules/which-typed-array/index.js
  var require_which_typed_array = __commonJS({
    "node_modules/.pnpm/which-typed-array@1.1.9/node_modules/which-typed-array/index.js"(exports, module) {
      "use strict";
      var forEach = require_for_each();
      var availableTypedArrays = require_available_typed_arrays();
      var callBound = require_callBound();
      var gOPD = require_gopd();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays = availableTypedArrays();
      var $slice = callBound("String.prototype.slice");
      var toStrTags = {};
      var getPrototypeOf = Object.getPrototypeOf;
      if (hasToStringTag && gOPD && getPrototypeOf) {
        forEach(typedArrays, function(typedArray) {
          if (typeof g[typedArray] === "function") {
            var arr = new g[typedArray]();
            if (Symbol.toStringTag in arr) {
              var proto = getPrototypeOf(arr);
              var descriptor = gOPD(proto, Symbol.toStringTag);
              if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
              }
              toStrTags[typedArray] = descriptor.get;
            }
          }
        });
      }
      var tryTypedArrays = function tryAllTypedArrays(value) {
        var foundName = false;
        forEach(toStrTags, function(getter, typedArray) {
          if (!foundName) {
            try {
              var name = getter.call(value);
              if (name === typedArray) {
                foundName = name;
              }
            } catch (e) {
            }
          }
        });
        return foundName;
      };
      var isTypedArray = require_is_typed_array();
      module.exports = function whichTypedArray(value) {
        if (!isTypedArray(value)) {
          return false;
        }
        if (!hasToStringTag || !(Symbol.toStringTag in value)) {
          return $slice($toString(value), 8, -1);
        }
        return tryTypedArrays(value);
      };
    }
  });

  // node_modules/.pnpm/util@0.12.5/node_modules/util/support/types.js
  var require_types = __commonJS({
    "node_modules/.pnpm/util@0.12.5/node_modules/util/support/types.js"(exports) {
      "use strict";
      var isArgumentsObject = require_is_arguments();
      var isGeneratorFunction = require_is_generator_function();
      var whichTypedArray = require_which_typed_array();
      var isTypedArray = require_is_typed_array();
      function uncurryThis(f) {
        return f.call.bind(f);
      }
      var BigIntSupported = typeof BigInt !== "undefined";
      var SymbolSupported = typeof Symbol !== "undefined";
      var ObjectToString = uncurryThis(Object.prototype.toString);
      var numberValue = uncurryThis(Number.prototype.valueOf);
      var stringValue = uncurryThis(String.prototype.valueOf);
      var booleanValue = uncurryThis(Boolean.prototype.valueOf);
      if (BigIntSupported) {
        bigIntValue = uncurryThis(BigInt.prototype.valueOf);
      }
      var bigIntValue;
      if (SymbolSupported) {
        symbolValue = uncurryThis(Symbol.prototype.valueOf);
      }
      var symbolValue;
      function checkBoxedPrimitive(value, prototypeValueOf) {
        if (typeof value !== "object") {
          return false;
        }
        try {
          prototypeValueOf(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports.isArgumentsObject = isArgumentsObject;
      exports.isGeneratorFunction = isGeneratorFunction;
      exports.isTypedArray = isTypedArray;
      function isPromise(input) {
        return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
      }
      exports.isPromise = isPromise;
      function isArrayBufferView(value) {
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          return ArrayBuffer.isView(value);
        }
        return isTypedArray(value) || isDataView(value);
      }
      exports.isArrayBufferView = isArrayBufferView;
      function isUint8Array(value) {
        return whichTypedArray(value) === "Uint8Array";
      }
      exports.isUint8Array = isUint8Array;
      function isUint8ClampedArray(value) {
        return whichTypedArray(value) === "Uint8ClampedArray";
      }
      exports.isUint8ClampedArray = isUint8ClampedArray;
      function isUint16Array(value) {
        return whichTypedArray(value) === "Uint16Array";
      }
      exports.isUint16Array = isUint16Array;
      function isUint32Array(value) {
        return whichTypedArray(value) === "Uint32Array";
      }
      exports.isUint32Array = isUint32Array;
      function isInt8Array(value) {
        return whichTypedArray(value) === "Int8Array";
      }
      exports.isInt8Array = isInt8Array;
      function isInt16Array(value) {
        return whichTypedArray(value) === "Int16Array";
      }
      exports.isInt16Array = isInt16Array;
      function isInt32Array(value) {
        return whichTypedArray(value) === "Int32Array";
      }
      exports.isInt32Array = isInt32Array;
      function isFloat32Array(value) {
        return whichTypedArray(value) === "Float32Array";
      }
      exports.isFloat32Array = isFloat32Array;
      function isFloat64Array(value) {
        return whichTypedArray(value) === "Float64Array";
      }
      exports.isFloat64Array = isFloat64Array;
      function isBigInt64Array(value) {
        return whichTypedArray(value) === "BigInt64Array";
      }
      exports.isBigInt64Array = isBigInt64Array;
      function isBigUint64Array(value) {
        return whichTypedArray(value) === "BigUint64Array";
      }
      exports.isBigUint64Array = isBigUint64Array;
      function isMapToString(value) {
        return ObjectToString(value) === "[object Map]";
      }
      isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
      function isMap(value) {
        if (typeof Map === "undefined") {
          return false;
        }
        return isMapToString.working ? isMapToString(value) : value instanceof Map;
      }
      exports.isMap = isMap;
      function isSetToString(value) {
        return ObjectToString(value) === "[object Set]";
      }
      isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
      function isSet(value) {
        if (typeof Set === "undefined") {
          return false;
        }
        return isSetToString.working ? isSetToString(value) : value instanceof Set;
      }
      exports.isSet = isSet;
      function isWeakMapToString(value) {
        return ObjectToString(value) === "[object WeakMap]";
      }
      isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
      function isWeakMap(value) {
        if (typeof WeakMap === "undefined") {
          return false;
        }
        return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
      }
      exports.isWeakMap = isWeakMap;
      function isWeakSetToString(value) {
        return ObjectToString(value) === "[object WeakSet]";
      }
      isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
      function isWeakSet(value) {
        return isWeakSetToString(value);
      }
      exports.isWeakSet = isWeakSet;
      function isArrayBufferToString(value) {
        return ObjectToString(value) === "[object ArrayBuffer]";
      }
      isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
      function isArrayBuffer(value) {
        if (typeof ArrayBuffer === "undefined") {
          return false;
        }
        return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
      }
      exports.isArrayBuffer = isArrayBuffer;
      function isDataViewToString(value) {
        return ObjectToString(value) === "[object DataView]";
      }
      isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
      function isDataView(value) {
        if (typeof DataView === "undefined") {
          return false;
        }
        return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
      }
      exports.isDataView = isDataView;
      var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
      function isSharedArrayBufferToString(value) {
        return ObjectToString(value) === "[object SharedArrayBuffer]";
      }
      function isSharedArrayBuffer(value) {
        if (typeof SharedArrayBufferCopy === "undefined") {
          return false;
        }
        if (typeof isSharedArrayBufferToString.working === "undefined") {
          isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
        }
        return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
      }
      exports.isSharedArrayBuffer = isSharedArrayBuffer;
      function isAsyncFunction(value) {
        return ObjectToString(value) === "[object AsyncFunction]";
      }
      exports.isAsyncFunction = isAsyncFunction;
      function isMapIterator(value) {
        return ObjectToString(value) === "[object Map Iterator]";
      }
      exports.isMapIterator = isMapIterator;
      function isSetIterator(value) {
        return ObjectToString(value) === "[object Set Iterator]";
      }
      exports.isSetIterator = isSetIterator;
      function isGeneratorObject(value) {
        return ObjectToString(value) === "[object Generator]";
      }
      exports.isGeneratorObject = isGeneratorObject;
      function isWebAssemblyCompiledModule(value) {
        return ObjectToString(value) === "[object WebAssembly.Module]";
      }
      exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
      function isNumberObject(value) {
        return checkBoxedPrimitive(value, numberValue);
      }
      exports.isNumberObject = isNumberObject;
      function isStringObject(value) {
        return checkBoxedPrimitive(value, stringValue);
      }
      exports.isStringObject = isStringObject;
      function isBooleanObject(value) {
        return checkBoxedPrimitive(value, booleanValue);
      }
      exports.isBooleanObject = isBooleanObject;
      function isBigIntObject(value) {
        return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
      }
      exports.isBigIntObject = isBigIntObject;
      function isSymbolObject(value) {
        return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
      }
      exports.isSymbolObject = isSymbolObject;
      function isBoxedPrimitive(value) {
        return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
      }
      exports.isBoxedPrimitive = isBoxedPrimitive;
      function isAnyArrayBuffer(value) {
        return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
      }
      exports.isAnyArrayBuffer = isAnyArrayBuffer;
      ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
        Object.defineProperty(exports, method, {
          enumerable: false,
          value: function() {
            throw new Error(method + " is not supported in userland");
          }
        });
      });
    }
  });

  // node_modules/.pnpm/util@0.12.5/node_modules/util/support/isBufferBrowser.js
  var require_isBufferBrowser = __commonJS({
    "node_modules/.pnpm/util@0.12.5/node_modules/util/support/isBufferBrowser.js"(exports, module) {
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
      };
    }
  });

  // node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js"(exports, module) {
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // node_modules/.pnpm/util@0.12.5/node_modules/util/util.js
  var require_util = __commonJS({
    "node_modules/.pnpm/util@0.12.5/node_modules/util/util.js"(exports) {
      var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
        var keys = Object.keys(obj);
        var descriptors = {};
        for (var i = 0; i < keys.length; i++) {
          descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
        }
        return descriptors;
      };
      var formatRegExp = /%[sdj%]/g;
      exports.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect2(arguments[i]));
          }
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x2) {
          if (x2 === "%%")
            return "%";
          if (i >= len)
            return x2;
          switch (x2) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
            default:
              return x2;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) {
          if (isNull(x) || !isObject2(x)) {
            str += " " + x;
          } else {
            str += " " + inspect2(x);
          }
        }
        return str;
      };
      exports.deprecate = function(fn, msg) {
        if (typeof process !== "undefined" && process.noDeprecation === true) {
          return fn;
        }
        if (typeof process === "undefined") {
          return function() {
            return exports.deprecate(fn, msg).apply(this, arguments);
          };
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process.throwDeprecation) {
              throw new Error(msg);
            } else if (process.traceDeprecation) {
              console.trace(msg);
            } else {
              console.error(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnvRegex = /^$/;
      if (process.env.NODE_DEBUG) {
        debugEnv = process.env.NODE_DEBUG;
        debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
        debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
      }
      var debugEnv;
      exports.debuglog = function(set2) {
        set2 = set2.toUpperCase();
        if (!debugs[set2]) {
          if (debugEnvRegex.test(set2)) {
            var pid = process.pid;
            debugs[set2] = function() {
              var msg = exports.format.apply(exports, arguments);
              console.error("%s %d: %s", set2, pid, msg);
            };
          } else {
            debugs[set2] = function() {
            };
          }
        }
        return debugs[set2];
      };
      function inspect2(obj, opts) {
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        };
        if (arguments.length >= 3)
          ctx.depth = arguments[2];
        if (arguments.length >= 4)
          ctx.colors = arguments[3];
        if (isBoolean(opts)) {
          ctx.showHidden = opts;
        } else if (opts) {
          exports._extend(ctx, opts);
        }
        if (isUndefined(ctx.showHidden))
          ctx.showHidden = false;
        if (isUndefined(ctx.depth))
          ctx.depth = 2;
        if (isUndefined(ctx.colors))
          ctx.colors = false;
        if (isUndefined(ctx.customInspect))
          ctx.customInspect = true;
        if (ctx.colors)
          ctx.stylize = stylizeWithColor;
        return formatValue2(ctx, obj, ctx.depth);
      }
      exports.inspect = inspect2;
      inspect2.colors = {
        "bold": [1, 22],
        "italic": [3, 23],
        "underline": [4, 24],
        "inverse": [7, 27],
        "white": [37, 39],
        "grey": [90, 39],
        "black": [30, 39],
        "blue": [34, 39],
        "cyan": [36, 39],
        "green": [32, 39],
        "magenta": [35, 39],
        "red": [31, 39],
        "yellow": [33, 39]
      };
      inspect2.styles = {
        "special": "cyan",
        "number": "yellow",
        "boolean": "yellow",
        "undefined": "grey",
        "null": "bold",
        "string": "green",
        "date": "magenta",
        "regexp": "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect2.styles[styleType];
        if (style) {
          return "\x1B[" + inspect2.colors[style][0] + "m" + str + "\x1B[" + inspect2.colors[style][1] + "m";
        } else {
          return str;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue2(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);
          if (!isString(ret)) {
            ret = formatValue2(ctx, ret, recurseTimes);
          }
          return ret;
        }
        var primitive = formatPrimitive(ctx, value);
        if (primitive) {
          return primitive;
        }
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
        if (ctx.showHidden) {
          keys = Object.getOwnPropertyNames(value);
        }
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
          return formatError(value);
        }
        if (keys.length === 0) {
          if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          }
          if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), "date");
          }
          if (isError(value)) {
            return formatError(value);
          }
        }
        var base = "", array = false, braces = ["{", "}"];
        if (isArray(value)) {
          array = true;
          braces = ["[", "]"];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        if (isRegExp(value)) {
          base = " " + RegExp.prototype.toString.call(value);
        }
        if (isDate(value)) {
          base = " " + Date.prototype.toUTCString.call(value);
        }
        if (isError(value)) {
          base = " " + formatError(value);
        }
        if (keys.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }
        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          } else {
            return ctx.stylize("[Object]", "special");
          }
        }
        ctx.seen.push(value);
        var output;
        if (array) {
          output = formatArray2(ctx, value, recurseTimes, visibleKeys, keys);
        } else {
          output = keys.map(function(key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
          });
        }
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx, value) {
        if (isUndefined(value))
          return ctx.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber(value))
          return ctx.stylize("" + value, "number");
        if (isBoolean(value))
          return ctx.stylize("" + value, "boolean");
        if (isNull(value))
          return ctx.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray2(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) {
          if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(
              ctx,
              value,
              recurseTimes,
              visibleKeys,
              String(i),
              true
            ));
          } else {
            output.push("");
          }
        }
        keys.forEach(function(key) {
          if (!key.match(/^\d+$/)) {
            output.push(formatProperty(
              ctx,
              value,
              recurseTimes,
              visibleKeys,
              key,
              true
            ));
          }
        });
        return output;
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
        if (desc.get) {
          if (desc.set) {
            str = ctx.stylize("[Getter/Setter]", "special");
          } else {
            str = ctx.stylize("[Getter]", "special");
          }
        } else {
          if (desc.set) {
            str = ctx.stylize("[Setter]", "special");
          }
        }
        if (!hasOwnProperty(visibleKeys, key)) {
          name = "[" + key + "]";
        }
        if (!str) {
          if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue2(ctx, desc.value, null);
            } else {
              str = formatValue2(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
              if (array) {
                str = str.split("\n").map(function(line) {
                  return "  " + line;
                }).join("\n").slice(2);
              } else {
                str = "\n" + str.split("\n").map(function(line) {
                  return "   " + line;
                }).join("\n");
              }
            }
          } else {
            str = ctx.stylize("[Circular]", "special");
          }
        }
        if (isUndefined(name)) {
          if (array && key.match(/^\d+$/)) {
            return str;
          }
          name = JSON.stringify("" + key);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.slice(1, -1);
            name = ctx.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
          numLinesEst++;
          if (cur.indexOf("\n") >= 0)
            numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) {
          return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        }
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      exports.types = require_types();
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports.isArray = isArray;
      function isBoolean(arg) {
        return typeof arg === "boolean";
      }
      exports.isBoolean = isBoolean;
      function isNull(arg) {
        return arg === null;
      }
      exports.isNull = isNull;
      function isNullOrUndefined(arg) {
        return arg == null;
      }
      exports.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return typeof arg === "number";
      }
      exports.isNumber = isNumber;
      function isString(arg) {
        return typeof arg === "string";
      }
      exports.isString = isString;
      function isSymbol(arg) {
        return typeof arg === "symbol";
      }
      exports.isSymbol = isSymbol;
      function isUndefined(arg) {
        return arg === void 0;
      }
      exports.isUndefined = isUndefined;
      function isRegExp(re) {
        return isObject2(re) && objectToString(re) === "[object RegExp]";
      }
      exports.isRegExp = isRegExp;
      exports.types.isRegExp = isRegExp;
      function isObject2(arg) {
        return typeof arg === "object" && arg !== null;
      }
      exports.isObject = isObject2;
      function isDate(d) {
        return isObject2(d) && objectToString(d) === "[object Date]";
      }
      exports.isDate = isDate;
      exports.types.isDate = isDate;
      function isError(e) {
        return isObject2(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
      }
      exports.isError = isError;
      exports.types.isNativeError = isError;
      function isFunction(arg) {
        return typeof arg === "function";
      }
      exports.isFunction = isFunction;
      function isPrimitive(arg) {
        return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
      }
      exports.isPrimitive = isPrimitive;
      exports.isBuffer = require_isBufferBrowser();
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function timestamp() {
        var d = new Date();
        var time = [
          pad(d.getHours()),
          pad(d.getMinutes()),
          pad(d.getSeconds())
        ].join(":");
        return [d.getDate(), months[d.getMonth()], time].join(" ");
      }
      exports.log = function() {
        console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
      };
      exports.inherits = require_inherits_browser();
      exports._extend = function(origin, add) {
        if (!add || !isObject2(add))
          return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
          origin[keys[i]] = add[keys[i]];
        }
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
      exports.promisify = function promisify(original) {
        if (typeof original !== "function")
          throw new TypeError('The "original" argument must be of type Function');
        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn = original[kCustomPromisifiedSymbol];
          if (typeof fn !== "function") {
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          }
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
          return fn;
        }
        function fn() {
          var promiseResolve, promiseReject;
          var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
          });
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          args.push(function(err, value) {
            if (err) {
              promiseReject(err);
            } else {
              promiseResolve(value);
            }
          });
          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }
          return promise;
        }
        Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
        if (kCustomPromisifiedSymbol)
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
        return Object.defineProperties(
          fn,
          getOwnPropertyDescriptors(original)
        );
      };
      exports.promisify.custom = kCustomPromisifiedSymbol;
      function callbackifyOnRejected(reason, cb) {
        if (!reason) {
          var newReason = new Error("Promise was rejected with a falsy value");
          newReason.reason = reason;
          reason = newReason;
        }
        return cb(reason);
      }
      function callbackify(original) {
        if (typeof original !== "function") {
          throw new TypeError('The "original" argument must be of type Function');
        }
        function callbackified() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          var maybeCb = args.pop();
          if (typeof maybeCb !== "function") {
            throw new TypeError("The last argument must be of type Function");
          }
          var self2 = this;
          var cb = function() {
            return maybeCb.apply(self2, arguments);
          };
          original.apply(this, args).then(
            function(ret) {
              process.nextTick(cb.bind(null, null, ret));
            },
            function(rej) {
              process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
            }
          );
        }
        Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
        Object.defineProperties(
          callbackified,
          getOwnPropertyDescriptors(original)
        );
        return callbackified;
      }
      exports.callbackify = callbackify;
    }
  });

  // node_modules/.pnpm/web-encoding@1.1.5/node_modules/web-encoding/src/lib.js
  var require_lib5 = __commonJS({
    "node_modules/.pnpm/web-encoding@1.1.5/node_modules/web-encoding/src/lib.js"(exports) {
      "use strict";
      exports.TextEncoder = typeof TextEncoder !== "undefined" ? TextEncoder : require_util().TextEncoder;
      exports.TextDecoder = typeof TextDecoder !== "undefined" ? TextDecoder : require_util().TextDecoder;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/bufferUtils.js
  var require_bufferUtils = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/bufferUtils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getArrayBuffer = exports.decodeBuffer = exports.encodeBuffer = void 0;
      var web_encoding_1 = require_lib5();
      function encodeBuffer3(text2) {
        var encoder = new web_encoding_1.TextEncoder();
        var encoded = encoder.encode(text2);
        return getArrayBuffer(encoded);
      }
      exports.encodeBuffer = encodeBuffer3;
      function decodeBuffer2(buffer, encoding) {
        var decoder = new web_encoding_1.TextDecoder(encoding);
        return decoder.decode(buffer);
      }
      exports.decodeBuffer = decodeBuffer2;
      function getArrayBuffer(array) {
        return array.buffer.slice(array.byteOffset, array.byteOffset + array.byteLength);
      }
      exports.getArrayBuffer = getArrayBuffer;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/uuid.js
  var require_uuid = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/uuid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.uuidv4 = void 0;
      function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0;
          var v = c == "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      }
      exports.uuidv4 = uuidv4;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/IsomorphicRequest.js
  var require_IsomorphicRequest = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/IsomorphicRequest.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body2) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body2.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IsomorphicRequest = void 0;
      var headers_polyfill_1 = require_lib3();
      var outvariant_1 = require_lib4();
      var bufferUtils_1 = require_bufferUtils();
      var uuid_1 = require_uuid();
      var IsomorphicRequest2 = function() {
        function IsomorphicRequest3(input, init) {
          if (init === void 0) {
            init = {};
          }
          var defaultBody = new ArrayBuffer(0);
          this._bodyUsed = false;
          if (input instanceof IsomorphicRequest3) {
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
          this.method = init.method || "GET";
          this.headers = new headers_polyfill_1.Headers(init.headers);
          this.credentials = init.credentials || "same-origin";
          this._body = init.body || defaultBody;
        }
        Object.defineProperty(IsomorphicRequest3.prototype, "bodyUsed", {
          get: function() {
            return this._bodyUsed;
          },
          enumerable: false,
          configurable: true
        });
        IsomorphicRequest3.prototype.text = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a2) {
              outvariant_1.invariant(!this.bodyUsed, 'Failed to execute "text" on "IsomorphicRequest": body buffer already read');
              this._bodyUsed = true;
              return [2, bufferUtils_1.decodeBuffer(this._body)];
            });
          });
        };
        IsomorphicRequest3.prototype.json = function() {
          return __awaiter(this, void 0, void 0, function() {
            var text2;
            return __generator(this, function(_a2) {
              outvariant_1.invariant(!this.bodyUsed, 'Failed to execute "json" on "IsomorphicRequest": body buffer already read');
              this._bodyUsed = true;
              text2 = bufferUtils_1.decodeBuffer(this._body);
              return [2, JSON.parse(text2)];
            });
          });
        };
        IsomorphicRequest3.prototype.arrayBuffer = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a2) {
              outvariant_1.invariant(!this.bodyUsed, 'Failed to execute "arrayBuffer" on "IsomorphicRequest": body buffer already read');
              this._bodyUsed = true;
              return [2, this._body];
            });
          });
        };
        IsomorphicRequest3.prototype.clone = function() {
          return new IsomorphicRequest3(this);
        };
        return IsomorphicRequest3;
      }();
      exports.IsomorphicRequest = IsomorphicRequest2;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/createLazyCallback.js
  var require_createLazyCallback = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/createLazyCallback.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body2) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body2.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createLazyCallback = void 0;
      function createLazyCallback(options) {
        var _this = this;
        if (options === void 0) {
          options = {};
        }
        var calledTimes = 0;
        var autoResolveTimeout;
        var remoteResolve;
        var callPromise = new Promise(function(resolve) {
          remoteResolve = resolve;
        }).finally(function() {
          clearTimeout(autoResolveTimeout);
        });
        var fn = function() {
          var _a2;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (options.maxCalls && calledTimes >= options.maxCalls) {
            (_a2 = options.maxCallsCallback) === null || _a2 === void 0 ? void 0 : _a2.call(options);
          }
          remoteResolve(args);
          calledTimes++;
        };
        fn.invoked = function() {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a2) {
              autoResolveTimeout = setTimeout(function() {
                remoteResolve([]);
              }, 0);
              return [2, callPromise];
            });
          });
        };
        return fn;
      }
      exports.createLazyCallback = createLazyCallback;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/InteractiveIsomorphicRequest.js
  var require_InteractiveIsomorphicRequest = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/InteractiveIsomorphicRequest.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InteractiveIsomorphicRequest = void 0;
      var outvariant_1 = require_lib4();
      var IsomorphicRequest_1 = require_IsomorphicRequest();
      var createLazyCallback_1 = require_createLazyCallback();
      var InteractiveIsomorphicRequest = function(_super) {
        __extends(InteractiveIsomorphicRequest2, _super);
        function InteractiveIsomorphicRequest2(request) {
          var _this = _super.call(this, request) || this;
          _this.respondWith = createLazyCallback_1.createLazyCallback({
            maxCalls: 1,
            maxCallsCallback: function() {
              outvariant_1.invariant(false, 'Failed to respond to "%s %s" request: the "request" event has already been responded to.', _this.method, _this.url.href);
            }
          });
          return _this;
        }
        return InteractiveIsomorphicRequest2;
      }(IsomorphicRequest_1.IsomorphicRequest);
      exports.InteractiveIsomorphicRequest = InteractiveIsomorphicRequest;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/getCleanUrl.js
  var require_getCleanUrl = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/getCleanUrl.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getCleanUrl = void 0;
      function getCleanUrl2(url, isAbsolute) {
        if (isAbsolute === void 0) {
          isAbsolute = true;
        }
        return [isAbsolute && url.origin, url.pathname].filter(Boolean).join("");
      }
      exports.getCleanUrl = getCleanUrl2;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/index.js
  var require_lib6 = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeBuffer = exports.encodeBuffer = exports.getCleanUrl = void 0;
      __exportStar(require_glossary(), exports);
      __exportStar(require_Interceptor(), exports);
      __exportStar(require_BatchInterceptor(), exports);
      __exportStar(require_IsomorphicRequest(), exports);
      __exportStar(require_InteractiveIsomorphicRequest(), exports);
      var getCleanUrl_1 = require_getCleanUrl();
      Object.defineProperty(exports, "getCleanUrl", { enumerable: true, get: function() {
        return getCleanUrl_1.getCleanUrl;
      } });
      var bufferUtils_1 = require_bufferUtils();
      Object.defineProperty(exports, "encodeBuffer", { enumerable: true, get: function() {
        return bufferUtils_1.encodeBuffer;
      } });
      Object.defineProperty(exports, "decodeBuffer", { enumerable: true, get: function() {
        return bufferUtils_1.decodeBuffer;
      } });
    }
  });

  // node_modules/.pnpm/set-cookie-parser@2.5.1/node_modules/set-cookie-parser/lib/set-cookie.js
  var require_set_cookie = __commonJS({
    "node_modules/.pnpm/set-cookie-parser@2.5.1/node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
      "use strict";
      var defaultParseOptions = {
        decodeValues: true,
        map: false,
        silent: false
      };
      function isNonEmptyString(str) {
        return typeof str === "string" && !!str.trim();
      }
      function parseString(setCookieValue, options) {
        var parts = setCookieValue.split(";").filter(isNonEmptyString);
        var nameValuePairStr = parts.shift();
        var parsed = parseNameValuePair(nameValuePairStr);
        var name = parsed.name;
        var value = parsed.value;
        options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
        try {
          value = options.decodeValues ? decodeURIComponent(value) : value;
        } catch (e) {
          console.error(
            "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
            e
          );
        }
        var cookie2 = {
          name,
          value
        };
        parts.forEach(function(part) {
          var sides = part.split("=");
          var key = sides.shift().trimLeft().toLowerCase();
          var value2 = sides.join("=");
          if (key === "expires") {
            cookie2.expires = new Date(value2);
          } else if (key === "max-age") {
            cookie2.maxAge = parseInt(value2, 10);
          } else if (key === "secure") {
            cookie2.secure = true;
          } else if (key === "httponly") {
            cookie2.httpOnly = true;
          } else if (key === "samesite") {
            cookie2.sameSite = value2;
          } else {
            cookie2[key] = value2;
          }
        });
        return cookie2;
      }
      function parseNameValuePair(nameValuePairStr) {
        var name = "";
        var value = "";
        var nameValueArr = nameValuePairStr.split("=");
        if (nameValueArr.length > 1) {
          name = nameValueArr.shift();
          value = nameValueArr.join("=");
        } else {
          value = nameValuePairStr;
        }
        return { name, value };
      }
      function parse5(input, options) {
        options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
        if (!input) {
          if (!options.map) {
            return [];
          } else {
            return {};
          }
        }
        if (input.headers && input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else if (input.headers) {
          var sch = input.headers[Object.keys(input.headers).find(function(key) {
            return key.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
        if (!Array.isArray(input)) {
          input = [input];
        }
        options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
        if (!options.map) {
          return input.filter(isNonEmptyString).map(function(str) {
            return parseString(str, options);
          });
        } else {
          var cookies = {};
          return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
            var cookie2 = parseString(str, options);
            cookies2[cookie2.name] = cookie2;
            return cookies2;
          }, cookies);
        }
      }
      function splitCookiesString(cookiesString) {
        if (Array.isArray(cookiesString)) {
          return cookiesString;
        }
        if (typeof cookiesString !== "string") {
          return [];
        }
        var cookiesStrings = [];
        var pos = 0;
        var start;
        var ch;
        var lastComma;
        var nextStart;
        var cookiesSeparatorFound;
        function skipWhitespace() {
          while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
            pos += 1;
          }
          return pos < cookiesString.length;
        }
        function notSpecialChar() {
          ch = cookiesString.charAt(pos);
          return ch !== "=" && ch !== ";" && ch !== ",";
        }
        while (pos < cookiesString.length) {
          start = pos;
          cookiesSeparatorFound = false;
          while (skipWhitespace()) {
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
              lastComma = pos;
              pos += 1;
              skipWhitespace();
              nextStart = pos;
              while (pos < cookiesString.length && notSpecialChar()) {
                pos += 1;
              }
              if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                cookiesSeparatorFound = true;
                pos = nextStart;
                cookiesStrings.push(cookiesString.substring(start, lastComma));
                start = pos;
              } else {
                pos = lastComma + 1;
              }
            } else {
              pos += 1;
            }
          }
          if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
          }
        }
        return cookiesStrings;
      }
      module.exports = parse5;
      module.exports.parse = parse5;
      module.exports.parseString = parseString;
      module.exports.splitCookiesString = splitCookiesString;
    }
  });

  // node_modules/.pnpm/@mswjs+cookies@0.2.2/node_modules/@mswjs/cookies/lib/store.js
  var require_store = __commonJS({
    "node_modules/.pnpm/@mswjs+cookies@0.2.2/node_modules/@mswjs/cookies/lib/store.js"(exports) {
      "use strict";
      var __rest = exports && exports.__rest || function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.store = exports.PERSISTENCY_KEY = void 0;
      var set_cookie_parser_1 = require_set_cookie();
      exports.PERSISTENCY_KEY = "MSW_COOKIE_STORE";
      function supportsLocalStorage() {
        try {
          if (localStorage == null) {
            return false;
          }
          const testKey = exports.PERSISTENCY_KEY + "_test";
          localStorage.setItem(testKey, "test");
          localStorage.getItem(testKey);
          localStorage.removeItem(testKey);
          return true;
        } catch (error2) {
          return false;
        }
      }
      var CookieStore = class {
        constructor() {
          this.store = /* @__PURE__ */ new Map();
        }
        add(request, response2) {
          if (request.credentials === "omit") {
            return;
          }
          const requestUrl = new URL(request.url);
          const responseCookies = response2.headers.get("set-cookie");
          if (!responseCookies) {
            return;
          }
          const now = Date.now();
          const parsedResponseCookies = set_cookie_parser_1.parse(responseCookies).map((_a2) => {
            var { maxAge } = _a2, cookie2 = __rest(_a2, ["maxAge"]);
            return Object.assign(Object.assign({}, cookie2), { expires: maxAge === void 0 ? cookie2.expires : new Date(now + maxAge * 1e3), maxAge });
          });
          const prevCookies = this.store.get(requestUrl.origin) || /* @__PURE__ */ new Map();
          parsedResponseCookies.forEach((cookie2) => {
            this.store.set(requestUrl.origin, prevCookies.set(cookie2.name, cookie2));
          });
        }
        get(request) {
          this.deleteExpiredCookies();
          const requestUrl = new URL(request.url);
          const originCookies = this.store.get(requestUrl.origin) || /* @__PURE__ */ new Map();
          switch (request.credentials) {
            case "include": {
              if (typeof document === "undefined") {
                return originCookies;
              }
              const documentCookies = set_cookie_parser_1.parse(document.cookie);
              documentCookies.forEach((cookie2) => {
                originCookies.set(cookie2.name, cookie2);
              });
              return originCookies;
            }
            case "same-origin": {
              return originCookies;
            }
            default:
              return /* @__PURE__ */ new Map();
          }
        }
        getAll() {
          this.deleteExpiredCookies();
          return this.store;
        }
        deleteAll(request) {
          const requestUrl = new URL(request.url);
          this.store.delete(requestUrl.origin);
        }
        clear() {
          this.store.clear();
        }
        hydrate() {
          if (!supportsLocalStorage()) {
            return;
          }
          const persistedCookies = localStorage.getItem(exports.PERSISTENCY_KEY);
          if (!persistedCookies) {
            return;
          }
          try {
            const parsedCookies = JSON.parse(persistedCookies);
            parsedCookies.forEach(([origin, cookies]) => {
              this.store.set(origin, new Map(cookies.map((_a2) => {
                var [token, _b2] = _a2, { expires } = _b2, cookie2 = __rest(_b2, ["expires"]);
                return [
                  token,
                  expires === void 0 ? cookie2 : Object.assign(Object.assign({}, cookie2), { expires: new Date(expires) })
                ];
              })));
            });
          } catch (error2) {
            console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${exports.PERSISTENCY_KEY}").

Stored value:
${localStorage.getItem(exports.PERSISTENCY_KEY)}

Thrown exception:
${error2}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`);
            localStorage.removeItem(exports.PERSISTENCY_KEY);
          }
        }
        persist() {
          if (!supportsLocalStorage()) {
            return;
          }
          const serializedCookies = Array.from(this.store.entries()).map(([origin, cookies]) => {
            return [origin, Array.from(cookies.entries())];
          });
          localStorage.setItem(exports.PERSISTENCY_KEY, JSON.stringify(serializedCookies));
        }
        deleteExpiredCookies() {
          const now = Date.now();
          this.store.forEach((originCookies, origin) => {
            originCookies.forEach(({ expires, name }) => {
              if (expires !== void 0 && expires.getTime() <= now) {
                originCookies.delete(name);
              }
            });
            if (originCookies.size === 0) {
              this.store.delete(origin);
            }
          });
        }
      };
      exports.store = new CookieStore();
    }
  });

  // node_modules/.pnpm/@mswjs+cookies@0.2.2/node_modules/@mswjs/cookies/lib/index.js
  var require_lib7 = __commonJS({
    "node_modules/.pnpm/@mswjs+cookies@0.2.2/node_modules/@mswjs/cookies/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_store(), exports);
    }
  });

  // node_modules/.pnpm/js-levenshtein@1.1.6/node_modules/js-levenshtein/index.js
  var require_js_levenshtein = __commonJS({
    "node_modules/.pnpm/js-levenshtein@1.1.6/node_modules/js-levenshtein/index.js"(exports, module) {
      "use strict";
      module.exports = function() {
        function _min(d0, d1, d2, bx, ay) {
          return d0 < d1 || d2 < d1 ? d0 > d2 ? d2 + 1 : d0 + 1 : bx === ay ? d1 : d1 + 1;
        }
        return function(a, b) {
          if (a === b) {
            return 0;
          }
          if (a.length > b.length) {
            var tmp = a;
            a = b;
            b = tmp;
          }
          var la = a.length;
          var lb = b.length;
          while (la > 0 && a.charCodeAt(la - 1) === b.charCodeAt(lb - 1)) {
            la--;
            lb--;
          }
          var offset = 0;
          while (offset < la && a.charCodeAt(offset) === b.charCodeAt(offset)) {
            offset++;
          }
          la -= offset;
          lb -= offset;
          if (la === 0 || lb < 3) {
            return lb;
          }
          var x = 0;
          var y;
          var d0;
          var d1;
          var d2;
          var d3;
          var dd;
          var dy;
          var ay;
          var bx0;
          var bx1;
          var bx2;
          var bx3;
          var vector = [];
          for (y = 0; y < la; y++) {
            vector.push(y + 1);
            vector.push(a.charCodeAt(offset + y));
          }
          var len = vector.length - 1;
          for (; x < lb - 3; ) {
            bx0 = b.charCodeAt(offset + (d0 = x));
            bx1 = b.charCodeAt(offset + (d1 = x + 1));
            bx2 = b.charCodeAt(offset + (d2 = x + 2));
            bx3 = b.charCodeAt(offset + (d3 = x + 3));
            dd = x += 4;
            for (y = 0; y < len; y += 2) {
              dy = vector[y];
              ay = vector[y + 1];
              d0 = _min(dy, d0, d1, bx0, ay);
              d1 = _min(d0, d1, d2, bx1, ay);
              d2 = _min(d1, d2, d3, bx2, ay);
              dd = _min(d2, d3, dd, bx3, ay);
              vector[y] = dd;
              d3 = d2;
              d2 = d1;
              d1 = d0;
              d0 = dy;
            }
          }
          for (; x < lb; ) {
            bx0 = b.charCodeAt(offset + (d0 = x));
            dd = ++x;
            for (y = 0; y < len; y += 2) {
              dy = vector[y];
              vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);
              d0 = dy;
            }
          }
          return dd;
        };
      }();
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/toIsoResponse.js
  var require_toIsoResponse = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/toIsoResponse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toIsoResponse = void 0;
      var headers_polyfill_1 = require_lib3();
      function toIsoResponse(response2) {
        var _a2;
        return {
          status: (_a2 = response2.status) !== null && _a2 !== void 0 ? _a2 : 200,
          statusText: response2.statusText || "OK",
          headers: headers_polyfill_1.objectToHeaders(response2.headers || {}),
          body: response2.body
        };
      }
      exports.toIsoResponse = toIsoResponse;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js
  var require_fetch = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body2) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body2.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __read = exports && exports.__read || function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error2) {
          e = { error: error2 };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FetchInterceptor = void 0;
      var headers_polyfill_1 = require_lib3();
      var outvariant_1 = require_lib4();
      var IsomorphicRequest_1 = require_IsomorphicRequest();
      var glossary_1 = require_glossary();
      var Interceptor_1 = require_Interceptor();
      var toIsoResponse_1 = require_toIsoResponse();
      var InteractiveIsomorphicRequest_1 = require_InteractiveIsomorphicRequest();
      var FetchInterceptor2 = function(_super) {
        __extends(FetchInterceptor3, _super);
        function FetchInterceptor3() {
          return _super.call(this, FetchInterceptor3.symbol) || this;
        }
        FetchInterceptor3.prototype.checkEnvironment = function() {
          return typeof globalThis !== "undefined" && typeof globalThis.fetch !== "undefined";
        };
        FetchInterceptor3.prototype.setup = function() {
          var _this = this;
          var pureFetch = globalThis.fetch;
          outvariant_1.invariant(!pureFetch[glossary_1.IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.');
          globalThis.fetch = function(input, init) {
            return __awaiter(_this, void 0, void 0, function() {
              var request, url, method, body2, isomorphicRequest, interactiveIsomorphicRequest, _a2, mockedResponse, isomorphicResponse, response2;
              var _this2 = this;
              return __generator(this, function(_b2) {
                switch (_b2.label) {
                  case 0:
                    request = new Request(input, init);
                    url = typeof input === "string" ? input : input.url;
                    method = request.method;
                    this.log("[%s] %s", method, url);
                    return [4, request.clone().arrayBuffer()];
                  case 1:
                    body2 = _b2.sent();
                    isomorphicRequest = new IsomorphicRequest_1.IsomorphicRequest(new URL(url, location.origin), {
                      body: body2,
                      method,
                      headers: new headers_polyfill_1.Headers(request.headers),
                      credentials: request.credentials
                    });
                    interactiveIsomorphicRequest = new InteractiveIsomorphicRequest_1.InteractiveIsomorphicRequest(isomorphicRequest);
                    this.log("isomorphic request", interactiveIsomorphicRequest);
                    this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount("request"));
                    this.emitter.emit("request", interactiveIsomorphicRequest);
                    this.log("awaiting for the mocked response...");
                    return [4, this.emitter.untilIdle("request", function(_a3) {
                      var _b3 = __read(_a3.args, 1), request2 = _b3[0];
                      return request2.id === interactiveIsomorphicRequest.id;
                    })];
                  case 2:
                    _b2.sent();
                    this.log("all request listeners have been resolved!");
                    return [4, interactiveIsomorphicRequest.respondWith.invoked()];
                  case 3:
                    _a2 = __read.apply(void 0, [_b2.sent(), 1]), mockedResponse = _a2[0];
                    this.log("event.respondWith called with:", mockedResponse);
                    if (mockedResponse) {
                      this.log("received mocked response:", mockedResponse);
                      isomorphicResponse = toIsoResponse_1.toIsoResponse(mockedResponse);
                      this.log("derived isomorphic response:", isomorphicResponse);
                      this.emitter.emit("response", interactiveIsomorphicRequest, isomorphicResponse);
                      response2 = new Response(mockedResponse.body, __assign(__assign({}, isomorphicResponse), {
                        headers: headers_polyfill_1.flattenHeadersObject(mockedResponse.headers || {})
                      }));
                      Object.defineProperty(response2, "url", {
                        writable: false,
                        enumerable: true,
                        configurable: false,
                        value: interactiveIsomorphicRequest.url.href
                      });
                      return [2, response2];
                    }
                    this.log("no mocked response received!");
                    return [2, pureFetch(request).then(function(response3) {
                      return __awaiter(_this2, void 0, void 0, function() {
                        var cloneResponse, _a3, _b3, _c;
                        return __generator(this, function(_d) {
                          switch (_d.label) {
                            case 0:
                              cloneResponse = response3.clone();
                              this.log("original fetch performed", cloneResponse);
                              _b3 = (_a3 = this.emitter).emit;
                              _c = [
                                "response",
                                interactiveIsomorphicRequest
                              ];
                              return [4, normalizeFetchResponse(cloneResponse)];
                            case 1:
                              _b3.apply(_a3, _c.concat([_d.sent()]));
                              return [2, response3];
                          }
                        });
                      });
                    })];
                }
              });
            });
          };
          Object.defineProperty(globalThis.fetch, glossary_1.IS_PATCHED_MODULE, {
            enumerable: true,
            configurable: true,
            value: true
          });
          this.subscriptions.push(function() {
            Object.defineProperty(globalThis.fetch, glossary_1.IS_PATCHED_MODULE, {
              value: void 0
            });
            globalThis.fetch = pureFetch;
            _this.log('restored native "globalThis.fetch"!', globalThis.fetch.name);
          });
        };
        FetchInterceptor3.symbol = Symbol("fetch");
        return FetchInterceptor3;
      }(Interceptor_1.Interceptor);
      exports.FetchInterceptor = FetchInterceptor2;
      function normalizeFetchResponse(response2) {
        return __awaiter(this, void 0, void 0, function() {
          var _a2;
          return __generator(this, function(_b2) {
            switch (_b2.label) {
              case 0:
                _a2 = {
                  status: response2.status,
                  statusText: response2.statusText,
                  headers: headers_polyfill_1.objectToHeaders(headers_polyfill_1.headersToObject(response2.headers))
                };
                return [4, response2.text()];
              case 1:
                return [2, (_a2.body = _b2.sent(), _a2)];
            }
          });
        });
      }
    }
  });

  // node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/conventions.js
  var require_conventions = __commonJS({
    "node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
      "use strict";
      function find(list, predicate, ac) {
        if (ac === void 0) {
          ac = Array.prototype;
        }
        if (list && typeof ac.find === "function") {
          return ac.find.call(list, predicate);
        }
        for (var i = 0; i < list.length; i++) {
          if (Object.prototype.hasOwnProperty.call(list, i)) {
            var item = list[i];
            if (predicate.call(void 0, item, i, list)) {
              return item;
            }
          }
        }
      }
      function freeze(object, oc) {
        if (oc === void 0) {
          oc = Object;
        }
        return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
      }
      function assign(target, source) {
        if (target === null || typeof target !== "object") {
          throw new TypeError("target is not an object");
        }
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
        return target;
      }
      var MIME_TYPE = freeze({
        HTML: "text/html",
        isHTML: function(value) {
          return value === MIME_TYPE.HTML;
        },
        XML_APPLICATION: "application/xml",
        XML_TEXT: "text/xml",
        XML_XHTML_APPLICATION: "application/xhtml+xml",
        XML_SVG_IMAGE: "image/svg+xml"
      });
      var NAMESPACE = freeze({
        HTML: "http://www.w3.org/1999/xhtml",
        isHTML: function(uri) {
          return uri === NAMESPACE.HTML;
        },
        SVG: "http://www.w3.org/2000/svg",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/"
      });
      exports.assign = assign;
      exports.find = find;
      exports.freeze = freeze;
      exports.MIME_TYPE = MIME_TYPE;
      exports.NAMESPACE = NAMESPACE;
    }
  });

  // node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/dom.js
  var require_dom = __commonJS({
    "node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
      var conventions = require_conventions();
      var find = conventions.find;
      var NAMESPACE = conventions.NAMESPACE;
      function notEmptyString(input) {
        return input !== "";
      }
      function splitOnASCIIWhitespace(input) {
        return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
      }
      function orderedSetReducer(current, element) {
        if (!current.hasOwnProperty(element)) {
          current[element] = true;
        }
        return current;
      }
      function toOrderedSet(input) {
        if (!input)
          return [];
        var list = splitOnASCIIWhitespace(input);
        return Object.keys(list.reduce(orderedSetReducer, {}));
      }
      function arrayIncludes(list) {
        return function(element) {
          return list && list.indexOf(element) !== -1;
        };
      }
      function copy(src, dest) {
        for (var p in src) {
          if (Object.prototype.hasOwnProperty.call(src, p)) {
            dest[p] = src[p];
          }
        }
      }
      function _extends(Class, Super) {
        var pt = Class.prototype;
        if (!(pt instanceof Super)) {
          let t2 = function() {
          };
          var t = t2;
          ;
          t2.prototype = Super.prototype;
          t2 = new t2();
          copy(pt, t2);
          Class.prototype = pt = t2;
        }
        if (pt.constructor != Class) {
          if (typeof Class != "function") {
            console.error("unknown Class:" + Class);
          }
          pt.constructor = Class;
        }
      }
      var NodeType = {};
      var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
      var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
      var TEXT_NODE = NodeType.TEXT_NODE = 3;
      var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
      var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
      var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
      var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
      var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
      var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
      var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
      var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
      var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
      var ExceptionCode = {};
      var ExceptionMessage = {};
      var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
      var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
      var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
      var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
      var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
      var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
      var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
      var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
      var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
      var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
      var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
      var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
      var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
      var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
      var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
      function DOMException(code, message) {
        if (message instanceof Error) {
          var error2 = message;
        } else {
          error2 = this;
          Error.call(this, ExceptionMessage[code]);
          this.message = ExceptionMessage[code];
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, DOMException);
        }
        error2.code = code;
        if (message)
          this.message = this.message + ": " + message;
        return error2;
      }
      DOMException.prototype = Error.prototype;
      copy(ExceptionCode, DOMException);
      function NodeList() {
      }
      NodeList.prototype = {
        length: 0,
        item: function(index) {
          return this[index] || null;
        },
        toString: function(isHTML, nodeFilter) {
          for (var buf = [], i = 0; i < this.length; i++) {
            serializeToString(this[i], buf, isHTML, nodeFilter);
          }
          return buf.join("");
        },
        filter: function(predicate) {
          return Array.prototype.filter.call(this, predicate);
        },
        indexOf: function(item) {
          return Array.prototype.indexOf.call(this, item);
        }
      };
      function LiveNodeList(node, refresh) {
        this._node = node;
        this._refresh = refresh;
        _updateLiveList(this);
      }
      function _updateLiveList(list) {
        var inc = list._node._inc || list._node.ownerDocument._inc;
        if (list._inc != inc) {
          var ls = list._refresh(list._node);
          __set__(list, "length", ls.length);
          copy(ls, list);
          list._inc = inc;
        }
      }
      LiveNodeList.prototype.item = function(i) {
        _updateLiveList(this);
        return this[i];
      };
      _extends(LiveNodeList, NodeList);
      function NamedNodeMap() {
      }
      function _findNodeIndex(list, node) {
        var i = list.length;
        while (i--) {
          if (list[i] === node) {
            return i;
          }
        }
      }
      function _addNamedNode(el, list, newAttr, oldAttr) {
        if (oldAttr) {
          list[_findNodeIndex(list, oldAttr)] = newAttr;
        } else {
          list[list.length++] = newAttr;
        }
        if (el) {
          newAttr.ownerElement = el;
          var doc = el.ownerDocument;
          if (doc) {
            oldAttr && _onRemoveAttribute(doc, el, oldAttr);
            _onAddAttribute(doc, el, newAttr);
          }
        }
      }
      function _removeNamedNode(el, list, attr) {
        var i = _findNodeIndex(list, attr);
        if (i >= 0) {
          var lastIndex = list.length - 1;
          while (i < lastIndex) {
            list[i] = list[++i];
          }
          list.length = lastIndex;
          if (el) {
            var doc = el.ownerDocument;
            if (doc) {
              _onRemoveAttribute(doc, el, attr);
              attr.ownerElement = null;
            }
          }
        } else {
          throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
        }
      }
      NamedNodeMap.prototype = {
        length: 0,
        item: NodeList.prototype.item,
        getNamedItem: function(key) {
          var i = this.length;
          while (i--) {
            var attr = this[i];
            if (attr.nodeName == key) {
              return attr;
            }
          }
        },
        setNamedItem: function(attr) {
          var el = attr.ownerElement;
          if (el && el != this._ownerElement) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          var oldAttr = this.getNamedItem(attr.nodeName);
          _addNamedNode(this._ownerElement, this, attr, oldAttr);
          return oldAttr;
        },
        setNamedItemNS: function(attr) {
          var el = attr.ownerElement, oldAttr;
          if (el && el != this._ownerElement) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
          _addNamedNode(this._ownerElement, this, attr, oldAttr);
          return oldAttr;
        },
        removeNamedItem: function(key) {
          var attr = this.getNamedItem(key);
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        removeNamedItemNS: function(namespaceURI, localName) {
          var attr = this.getNamedItemNS(namespaceURI, localName);
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        getNamedItemNS: function(namespaceURI, localName) {
          var i = this.length;
          while (i--) {
            var node = this[i];
            if (node.localName == localName && node.namespaceURI == namespaceURI) {
              return node;
            }
          }
          return null;
        }
      };
      function DOMImplementation() {
      }
      DOMImplementation.prototype = {
        hasFeature: function(feature, version) {
          return true;
        },
        createDocument: function(namespaceURI, qualifiedName, doctype) {
          var doc = new Document();
          doc.implementation = this;
          doc.childNodes = new NodeList();
          doc.doctype = doctype || null;
          if (doctype) {
            doc.appendChild(doctype);
          }
          if (qualifiedName) {
            var root = doc.createElementNS(namespaceURI, qualifiedName);
            doc.appendChild(root);
          }
          return doc;
        },
        createDocumentType: function(qualifiedName, publicId, systemId) {
          var node = new DocumentType();
          node.name = qualifiedName;
          node.nodeName = qualifiedName;
          node.publicId = publicId || "";
          node.systemId = systemId || "";
          return node;
        }
      };
      function Node() {
      }
      Node.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function(newChild, refChild) {
          return _insertBefore(this, newChild, refChild);
        },
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          if (oldChild) {
            this.removeChild(oldChild);
          }
        },
        removeChild: function(oldChild) {
          return _removeChild(this, oldChild);
        },
        appendChild: function(newChild) {
          return this.insertBefore(newChild, null);
        },
        hasChildNodes: function() {
          return this.firstChild != null;
        },
        cloneNode: function(deep) {
          return cloneNode(this.ownerDocument || this, this, deep);
        },
        normalize: function() {
          var child = this.firstChild;
          while (child) {
            var next = child.nextSibling;
            if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
              this.removeChild(next);
              child.appendData(next.data);
            } else {
              child.normalize();
              child = next;
            }
          }
        },
        isSupported: function(feature, version) {
          return this.ownerDocument.implementation.hasFeature(feature, version);
        },
        hasAttributes: function() {
          return this.attributes.length > 0;
        },
        lookupPrefix: function(namespaceURI) {
          var el = this;
          while (el) {
            var map = el._nsMap;
            if (map) {
              for (var n in map) {
                if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
                  return n;
                }
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        lookupNamespaceURI: function(prefix) {
          var el = this;
          while (el) {
            var map = el._nsMap;
            if (map) {
              if (Object.prototype.hasOwnProperty.call(map, prefix)) {
                return map[prefix];
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        isDefaultNamespace: function(namespaceURI) {
          var prefix = this.lookupPrefix(namespaceURI);
          return prefix == null;
        }
      };
      function _xmlEncoder(c) {
        return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
      }
      copy(NodeType, Node);
      copy(NodeType, Node.prototype);
      function _visitNode(node, callback) {
        if (callback(node)) {
          return true;
        }
        if (node = node.firstChild) {
          do {
            if (_visitNode(node, callback)) {
              return true;
            }
          } while (node = node.nextSibling);
        }
      }
      function Document() {
        this.ownerDocument = this;
      }
      function _onAddAttribute(doc, el, newAttr) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
        }
      }
      function _onRemoveAttribute(doc, el, newAttr, remove) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
        }
      }
      function _onUpdateChild(doc, el, newChild) {
        if (doc && doc._inc) {
          doc._inc++;
          var cs = el.childNodes;
          if (newChild) {
            cs[cs.length++] = newChild;
          } else {
            var child = el.firstChild;
            var i = 0;
            while (child) {
              cs[i++] = child;
              child = child.nextSibling;
            }
            cs.length = i;
            delete cs[cs.length];
          }
        }
      }
      function _removeChild(parentNode, child) {
        var previous = child.previousSibling;
        var next = child.nextSibling;
        if (previous) {
          previous.nextSibling = next;
        } else {
          parentNode.firstChild = next;
        }
        if (next) {
          next.previousSibling = previous;
        } else {
          parentNode.lastChild = previous;
        }
        child.parentNode = null;
        child.previousSibling = null;
        child.nextSibling = null;
        _onUpdateChild(parentNode.ownerDocument, parentNode);
        return child;
      }
      function hasValidParentNodeType(node) {
        return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
      }
      function hasInsertableNodeType(node) {
        return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
      }
      function isDocTypeNode(node) {
        return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
      }
      function isElementNode(node) {
        return node && node.nodeType === Node.ELEMENT_NODE;
      }
      function isTextNode(node) {
        return node && node.nodeType === Node.TEXT_NODE;
      }
      function isElementInsertionPossible(doc, child) {
        var parentChildNodes = doc.childNodes || [];
        if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
      }
      function isElementReplacementPossible(doc, child) {
        var parentChildNodes = doc.childNodes || [];
        function hasElementChildThatIsNotChild(node) {
          return isElementNode(node) && node !== child;
        }
        if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
      }
      function assertPreInsertionValidity1to5(parent, node, child) {
        if (!hasValidParentNodeType(parent)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
        }
        if (child && child.parentNode !== parent) {
          throw new DOMException(NOT_FOUND_ERR, "child not in parent");
        }
        if (!hasInsertableNodeType(node) || isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE) {
          throw new DOMException(
            HIERARCHY_REQUEST_ERR,
            "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
          );
        }
      }
      function assertPreInsertionValidityInDocument(parent, node, child) {
        var parentChildNodes = parent.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementInsertionPossible(parent, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          if (find(parentChildNodes, isDocTypeNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
          if (!child && parentElementChild) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
          }
        }
      }
      function assertPreReplacementValidityInDocument(parent, node, child) {
        var parentChildNodes = parent.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementReplacementPossible(parent, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          let hasDoctypeChildThatIsNotChild2 = function(node2) {
            return isDocTypeNode(node2) && node2 !== child;
          };
          var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
          if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
        }
      }
      function _insertBefore(parent, node, child, _inDocumentAssertion) {
        assertPreInsertionValidity1to5(parent, node, child);
        if (parent.nodeType === Node.DOCUMENT_NODE) {
          (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
        }
        var cp = node.parentNode;
        if (cp) {
          cp.removeChild(node);
        }
        if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
          var newFirst = node.firstChild;
          if (newFirst == null) {
            return node;
          }
          var newLast = node.lastChild;
        } else {
          newFirst = newLast = node;
        }
        var pre = child ? child.previousSibling : parent.lastChild;
        newFirst.previousSibling = pre;
        newLast.nextSibling = child;
        if (pre) {
          pre.nextSibling = newFirst;
        } else {
          parent.firstChild = newFirst;
        }
        if (child == null) {
          parent.lastChild = newLast;
        } else {
          child.previousSibling = newLast;
        }
        do {
          newFirst.parentNode = parent;
        } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
        _onUpdateChild(parent.ownerDocument || parent, parent);
        if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
          node.firstChild = node.lastChild = null;
        }
        return node;
      }
      function _appendSingleChild(parentNode, newChild) {
        if (newChild.parentNode) {
          newChild.parentNode.removeChild(newChild);
        }
        newChild.parentNode = parentNode;
        newChild.previousSibling = parentNode.lastChild;
        newChild.nextSibling = null;
        if (newChild.previousSibling) {
          newChild.previousSibling.nextSibling = newChild;
        } else {
          parentNode.firstChild = newChild;
        }
        parentNode.lastChild = newChild;
        _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
        return newChild;
      }
      Document.prototype = {
        nodeName: "#document",
        nodeType: DOCUMENT_NODE,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function(newChild, refChild) {
          if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
            var child = newChild.firstChild;
            while (child) {
              var next = child.nextSibling;
              this.insertBefore(child, refChild);
              child = next;
            }
            return newChild;
          }
          _insertBefore(this, newChild, refChild);
          newChild.ownerDocument = this;
          if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
            this.documentElement = newChild;
          }
          return newChild;
        },
        removeChild: function(oldChild) {
          if (this.documentElement == oldChild) {
            this.documentElement = null;
          }
          return _removeChild(this, oldChild);
        },
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          newChild.ownerDocument = this;
          if (oldChild) {
            this.removeChild(oldChild);
          }
          if (isElementNode(newChild)) {
            this.documentElement = newChild;
          }
        },
        importNode: function(importedNode, deep) {
          return importNode(this, importedNode, deep);
        },
        getElementById: function(id) {
          var rtv = null;
          _visitNode(this.documentElement, function(node) {
            if (node.nodeType == ELEMENT_NODE) {
              if (node.getAttribute("id") == id) {
                rtv = node;
                return true;
              }
            }
          });
          return rtv;
        },
        getElementsByClassName: function(classNames) {
          var classNamesSet = toOrderedSet(classNames);
          return new LiveNodeList(this, function(base) {
            var ls = [];
            if (classNamesSet.length > 0) {
              _visitNode(base.documentElement, function(node) {
                if (node !== base && node.nodeType === ELEMENT_NODE) {
                  var nodeClassNames = node.getAttribute("class");
                  if (nodeClassNames) {
                    var matches = classNames === nodeClassNames;
                    if (!matches) {
                      var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                      matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                    }
                    if (matches) {
                      ls.push(node);
                    }
                  }
                }
              });
            }
            return ls;
          });
        },
        createElement: function(tagName) {
          var node = new Element();
          node.ownerDocument = this;
          node.nodeName = tagName;
          node.tagName = tagName;
          node.localName = tagName;
          node.childNodes = new NodeList();
          var attrs = node.attributes = new NamedNodeMap();
          attrs._ownerElement = node;
          return node;
        },
        createDocumentFragment: function() {
          var node = new DocumentFragment();
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          return node;
        },
        createTextNode: function(data2) {
          var node = new Text();
          node.ownerDocument = this;
          node.appendData(data2);
          return node;
        },
        createComment: function(data2) {
          var node = new Comment();
          node.ownerDocument = this;
          node.appendData(data2);
          return node;
        },
        createCDATASection: function(data2) {
          var node = new CDATASection();
          node.ownerDocument = this;
          node.appendData(data2);
          return node;
        },
        createProcessingInstruction: function(target, data2) {
          var node = new ProcessingInstruction();
          node.ownerDocument = this;
          node.tagName = node.target = target;
          node.nodeValue = node.data = data2;
          return node;
        },
        createAttribute: function(name) {
          var node = new Attr();
          node.ownerDocument = this;
          node.name = name;
          node.nodeName = name;
          node.localName = name;
          node.specified = true;
          return node;
        },
        createEntityReference: function(name) {
          var node = new EntityReference();
          node.ownerDocument = this;
          node.nodeName = name;
          return node;
        },
        createElementNS: function(namespaceURI, qualifiedName) {
          var node = new Element();
          var pl = qualifiedName.split(":");
          var attrs = node.attributes = new NamedNodeMap();
          node.childNodes = new NodeList();
          node.ownerDocument = this;
          node.nodeName = qualifiedName;
          node.tagName = qualifiedName;
          node.namespaceURI = namespaceURI;
          if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
          } else {
            node.localName = qualifiedName;
          }
          attrs._ownerElement = node;
          return node;
        },
        createAttributeNS: function(namespaceURI, qualifiedName) {
          var node = new Attr();
          var pl = qualifiedName.split(":");
          node.ownerDocument = this;
          node.nodeName = qualifiedName;
          node.name = qualifiedName;
          node.namespaceURI = namespaceURI;
          node.specified = true;
          if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
          } else {
            node.localName = qualifiedName;
          }
          return node;
        }
      };
      _extends(Document, Node);
      function Element() {
        this._nsMap = {};
      }
      Element.prototype = {
        nodeType: ELEMENT_NODE,
        hasAttribute: function(name) {
          return this.getAttributeNode(name) != null;
        },
        getAttribute: function(name) {
          var attr = this.getAttributeNode(name);
          return attr && attr.value || "";
        },
        getAttributeNode: function(name) {
          return this.attributes.getNamedItem(name);
        },
        setAttribute: function(name, value) {
          var attr = this.ownerDocument.createAttribute(name);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        },
        removeAttribute: function(name) {
          var attr = this.getAttributeNode(name);
          attr && this.removeAttributeNode(attr);
        },
        appendChild: function(newChild) {
          if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
            return this.insertBefore(newChild, null);
          } else {
            return _appendSingleChild(this, newChild);
          }
        },
        setAttributeNode: function(newAttr) {
          return this.attributes.setNamedItem(newAttr);
        },
        setAttributeNodeNS: function(newAttr) {
          return this.attributes.setNamedItemNS(newAttr);
        },
        removeAttributeNode: function(oldAttr) {
          return this.attributes.removeNamedItem(oldAttr.nodeName);
        },
        removeAttributeNS: function(namespaceURI, localName) {
          var old = this.getAttributeNodeNS(namespaceURI, localName);
          old && this.removeAttributeNode(old);
        },
        hasAttributeNS: function(namespaceURI, localName) {
          return this.getAttributeNodeNS(namespaceURI, localName) != null;
        },
        getAttributeNS: function(namespaceURI, localName) {
          var attr = this.getAttributeNodeNS(namespaceURI, localName);
          return attr && attr.value || "";
        },
        setAttributeNS: function(namespaceURI, qualifiedName, value) {
          var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        },
        getAttributeNodeNS: function(namespaceURI, localName) {
          return this.attributes.getNamedItemNS(namespaceURI, localName);
        },
        getElementsByTagName: function(tagName) {
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
                ls.push(node);
              }
            });
            return ls;
          });
        },
        getElementsByTagNameNS: function(namespaceURI, localName) {
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
                ls.push(node);
              }
            });
            return ls;
          });
        }
      };
      Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
      Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
      _extends(Element, Node);
      function Attr() {
      }
      Attr.prototype.nodeType = ATTRIBUTE_NODE;
      _extends(Attr, Node);
      function CharacterData() {
      }
      CharacterData.prototype = {
        data: "",
        substringData: function(offset, count) {
          return this.data.substring(offset, offset + count);
        },
        appendData: function(text2) {
          text2 = this.data + text2;
          this.nodeValue = this.data = text2;
          this.length = text2.length;
        },
        insertData: function(offset, text2) {
          this.replaceData(offset, 0, text2);
        },
        appendChild: function(newChild) {
          throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
        },
        deleteData: function(offset, count) {
          this.replaceData(offset, count, "");
        },
        replaceData: function(offset, count, text2) {
          var start = this.data.substring(0, offset);
          var end = this.data.substring(offset + count);
          text2 = start + text2 + end;
          this.nodeValue = this.data = text2;
          this.length = text2.length;
        }
      };
      _extends(CharacterData, Node);
      function Text() {
      }
      Text.prototype = {
        nodeName: "#text",
        nodeType: TEXT_NODE,
        splitText: function(offset) {
          var text2 = this.data;
          var newText = text2.substring(offset);
          text2 = text2.substring(0, offset);
          this.data = this.nodeValue = text2;
          this.length = text2.length;
          var newNode = this.ownerDocument.createTextNode(newText);
          if (this.parentNode) {
            this.parentNode.insertBefore(newNode, this.nextSibling);
          }
          return newNode;
        }
      };
      _extends(Text, CharacterData);
      function Comment() {
      }
      Comment.prototype = {
        nodeName: "#comment",
        nodeType: COMMENT_NODE
      };
      _extends(Comment, CharacterData);
      function CDATASection() {
      }
      CDATASection.prototype = {
        nodeName: "#cdata-section",
        nodeType: CDATA_SECTION_NODE
      };
      _extends(CDATASection, CharacterData);
      function DocumentType() {
      }
      DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
      _extends(DocumentType, Node);
      function Notation() {
      }
      Notation.prototype.nodeType = NOTATION_NODE;
      _extends(Notation, Node);
      function Entity() {
      }
      Entity.prototype.nodeType = ENTITY_NODE;
      _extends(Entity, Node);
      function EntityReference() {
      }
      EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
      _extends(EntityReference, Node);
      function DocumentFragment() {
      }
      DocumentFragment.prototype.nodeName = "#document-fragment";
      DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
      _extends(DocumentFragment, Node);
      function ProcessingInstruction() {
      }
      ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
      _extends(ProcessingInstruction, Node);
      function XMLSerializer() {
      }
      XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter) {
        return nodeSerializeToString.call(node, isHtml, nodeFilter);
      };
      Node.prototype.toString = nodeSerializeToString;
      function nodeSerializeToString(isHtml, nodeFilter) {
        var buf = [];
        var refNode = this.nodeType == 9 && this.documentElement || this;
        var prefix = refNode.prefix;
        var uri = refNode.namespaceURI;
        if (uri && prefix == null) {
          var prefix = refNode.lookupPrefix(uri);
          if (prefix == null) {
            var visibleNamespaces = [
              { namespace: uri, prefix: null }
            ];
          }
        }
        serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
        return buf.join("");
      }
      function needNamespaceDefine(node, isHTML, visibleNamespaces) {
        var prefix = node.prefix || "";
        var uri = node.namespaceURI;
        if (!uri) {
          return false;
        }
        if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
          return false;
        }
        var i = visibleNamespaces.length;
        while (i--) {
          var ns = visibleNamespaces[i];
          if (ns.prefix === prefix) {
            return ns.namespace !== uri;
          }
        }
        return true;
      }
      function addSerializedAttribute(buf, qualifiedName, value) {
        buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
      }
      function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
        if (!visibleNamespaces) {
          visibleNamespaces = [];
        }
        if (nodeFilter) {
          node = nodeFilter(node);
          if (node) {
            if (typeof node == "string") {
              buf.push(node);
              return;
            }
          } else {
            return;
          }
        }
        switch (node.nodeType) {
          case ELEMENT_NODE:
            var attrs = node.attributes;
            var len = attrs.length;
            var child = node.firstChild;
            var nodeName = node.tagName;
            isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
            var prefixedNodeName = nodeName;
            if (!isHTML && !node.prefix && node.namespaceURI) {
              var defaultNS;
              for (var ai = 0; ai < attrs.length; ai++) {
                if (attrs.item(ai).name === "xmlns") {
                  defaultNS = attrs.item(ai).value;
                  break;
                }
              }
              if (!defaultNS) {
                for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                  var namespace = visibleNamespaces[nsi];
                  if (namespace.prefix === "" && namespace.namespace === node.namespaceURI) {
                    defaultNS = namespace.namespace;
                    break;
                  }
                }
              }
              if (defaultNS !== node.namespaceURI) {
                for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                  var namespace = visibleNamespaces[nsi];
                  if (namespace.namespace === node.namespaceURI) {
                    if (namespace.prefix) {
                      prefixedNodeName = namespace.prefix + ":" + nodeName;
                    }
                    break;
                  }
                }
              }
            }
            buf.push("<", prefixedNodeName);
            for (var i = 0; i < len; i++) {
              var attr = attrs.item(i);
              if (attr.prefix == "xmlns") {
                visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
              } else if (attr.nodeName == "xmlns") {
                visibleNamespaces.push({ prefix: "", namespace: attr.value });
              }
            }
            for (var i = 0; i < len; i++) {
              var attr = attrs.item(i);
              if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
                var prefix = attr.prefix || "";
                var uri = attr.namespaceURI;
                addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
                visibleNamespaces.push({ prefix, namespace: uri });
              }
              serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
            }
            if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
              var prefix = node.prefix || "";
              var uri = node.namespaceURI;
              addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
              buf.push(">");
              if (isHTML && /^script$/i.test(nodeName)) {
                while (child) {
                  if (child.data) {
                    buf.push(child.data);
                  } else {
                    serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                  }
                  child = child.nextSibling;
                }
              } else {
                while (child) {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                  child = child.nextSibling;
                }
              }
              buf.push("</", prefixedNodeName, ">");
            } else {
              buf.push("/>");
            }
            return;
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            var child = node.firstChild;
            while (child) {
              serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
              child = child.nextSibling;
            }
            return;
          case ATTRIBUTE_NODE:
            return addSerializedAttribute(buf, node.name, node.value);
          case TEXT_NODE:
            return buf.push(
              node.data.replace(/[<&>]/g, _xmlEncoder)
            );
          case CDATA_SECTION_NODE:
            return buf.push("<![CDATA[", node.data, "]]>");
          case COMMENT_NODE:
            return buf.push("<!--", node.data, "-->");
          case DOCUMENT_TYPE_NODE:
            var pubid = node.publicId;
            var sysid = node.systemId;
            buf.push("<!DOCTYPE ", node.name);
            if (pubid) {
              buf.push(" PUBLIC ", pubid);
              if (sysid && sysid != ".") {
                buf.push(" ", sysid);
              }
              buf.push(">");
            } else if (sysid && sysid != ".") {
              buf.push(" SYSTEM ", sysid, ">");
            } else {
              var sub = node.internalSubset;
              if (sub) {
                buf.push(" [", sub, "]");
              }
              buf.push(">");
            }
            return;
          case PROCESSING_INSTRUCTION_NODE:
            return buf.push("<?", node.target, " ", node.data, "?>");
          case ENTITY_REFERENCE_NODE:
            return buf.push("&", node.nodeName, ";");
          default:
            buf.push("??", node.nodeName);
        }
      }
      function importNode(doc, node, deep) {
        var node2;
        switch (node.nodeType) {
          case ELEMENT_NODE:
            node2 = node.cloneNode(false);
            node2.ownerDocument = doc;
          case DOCUMENT_FRAGMENT_NODE:
            break;
          case ATTRIBUTE_NODE:
            deep = true;
            break;
        }
        if (!node2) {
          node2 = node.cloneNode(false);
        }
        node2.ownerDocument = doc;
        node2.parentNode = null;
        if (deep) {
          var child = node.firstChild;
          while (child) {
            node2.appendChild(importNode(doc, child, deep));
            child = child.nextSibling;
          }
        }
        return node2;
      }
      function cloneNode(doc, node, deep) {
        var node2 = new node.constructor();
        for (var n in node) {
          if (Object.prototype.hasOwnProperty.call(node, n)) {
            var v = node[n];
            if (typeof v != "object") {
              if (v != node2[n]) {
                node2[n] = v;
              }
            }
          }
        }
        if (node.childNodes) {
          node2.childNodes = new NodeList();
        }
        node2.ownerDocument = doc;
        switch (node2.nodeType) {
          case ELEMENT_NODE:
            var attrs = node.attributes;
            var attrs2 = node2.attributes = new NamedNodeMap();
            var len = attrs.length;
            attrs2._ownerElement = node2;
            for (var i = 0; i < len; i++) {
              node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
            }
            break;
            ;
          case ATTRIBUTE_NODE:
            deep = true;
        }
        if (deep) {
          var child = node.firstChild;
          while (child) {
            node2.appendChild(cloneNode(doc, child, deep));
            child = child.nextSibling;
          }
        }
        return node2;
      }
      function __set__(object, key, value) {
        object[key] = value;
      }
      try {
        if (Object.defineProperty) {
          let getTextContent2 = function(node) {
            switch (node.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                var buf = [];
                node = node.firstChild;
                while (node) {
                  if (node.nodeType !== 7 && node.nodeType !== 8) {
                    buf.push(getTextContent2(node));
                  }
                  node = node.nextSibling;
                }
                return buf.join("");
              default:
                return node.nodeValue;
            }
          };
          getTextContent = getTextContent2;
          Object.defineProperty(LiveNodeList.prototype, "length", {
            get: function() {
              _updateLiveList(this);
              return this.$$length;
            }
          });
          Object.defineProperty(Node.prototype, "textContent", {
            get: function() {
              return getTextContent2(this);
            },
            set: function(data2) {
              switch (this.nodeType) {
                case ELEMENT_NODE:
                case DOCUMENT_FRAGMENT_NODE:
                  while (this.firstChild) {
                    this.removeChild(this.firstChild);
                  }
                  if (data2 || String(data2)) {
                    this.appendChild(this.ownerDocument.createTextNode(data2));
                  }
                  break;
                default:
                  this.data = data2;
                  this.value = data2;
                  this.nodeValue = data2;
              }
            }
          });
          __set__ = function(object, key, value) {
            object["$$" + key] = value;
          };
        }
      } catch (e) {
      }
      var getTextContent;
      exports.DocumentType = DocumentType;
      exports.DOMException = DOMException;
      exports.DOMImplementation = DOMImplementation;
      exports.Element = Element;
      exports.Node = Node;
      exports.NodeList = NodeList;
      exports.XMLSerializer = XMLSerializer;
    }
  });

  // node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/entities.js
  var require_entities = __commonJS({
    "node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
      var freeze = require_conventions().freeze;
      exports.XML_ENTITIES = freeze({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' });
      exports.HTML_ENTITIES = freeze({
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'",
        Agrave: "\xC0",
        Aacute: "\xC1",
        Acirc: "\xC2",
        Atilde: "\xC3",
        Auml: "\xC4",
        Aring: "\xC5",
        AElig: "\xC6",
        Ccedil: "\xC7",
        Egrave: "\xC8",
        Eacute: "\xC9",
        Ecirc: "\xCA",
        Euml: "\xCB",
        Igrave: "\xCC",
        Iacute: "\xCD",
        Icirc: "\xCE",
        Iuml: "\xCF",
        ETH: "\xD0",
        Ntilde: "\xD1",
        Ograve: "\xD2",
        Oacute: "\xD3",
        Ocirc: "\xD4",
        Otilde: "\xD5",
        Ouml: "\xD6",
        Oslash: "\xD8",
        Ugrave: "\xD9",
        Uacute: "\xDA",
        Ucirc: "\xDB",
        Uuml: "\xDC",
        Yacute: "\xDD",
        THORN: "\xDE",
        szlig: "\xDF",
        agrave: "\xE0",
        aacute: "\xE1",
        acirc: "\xE2",
        atilde: "\xE3",
        auml: "\xE4",
        aring: "\xE5",
        aelig: "\xE6",
        ccedil: "\xE7",
        egrave: "\xE8",
        eacute: "\xE9",
        ecirc: "\xEA",
        euml: "\xEB",
        igrave: "\xEC",
        iacute: "\xED",
        icirc: "\xEE",
        iuml: "\xEF",
        eth: "\xF0",
        ntilde: "\xF1",
        ograve: "\xF2",
        oacute: "\xF3",
        ocirc: "\xF4",
        otilde: "\xF5",
        ouml: "\xF6",
        oslash: "\xF8",
        ugrave: "\xF9",
        uacute: "\xFA",
        ucirc: "\xFB",
        uuml: "\xFC",
        yacute: "\xFD",
        thorn: "\xFE",
        yuml: "\xFF",
        nbsp: "\xA0",
        iexcl: "\xA1",
        cent: "\xA2",
        pound: "\xA3",
        curren: "\xA4",
        yen: "\xA5",
        brvbar: "\xA6",
        sect: "\xA7",
        uml: "\xA8",
        copy: "\xA9",
        ordf: "\xAA",
        laquo: "\xAB",
        not: "\xAC",
        shy: "\xAD\xAD",
        reg: "\xAE",
        macr: "\xAF",
        deg: "\xB0",
        plusmn: "\xB1",
        sup2: "\xB2",
        sup3: "\xB3",
        acute: "\xB4",
        micro: "\xB5",
        para: "\xB6",
        middot: "\xB7",
        cedil: "\xB8",
        sup1: "\xB9",
        ordm: "\xBA",
        raquo: "\xBB",
        frac14: "\xBC",
        frac12: "\xBD",
        frac34: "\xBE",
        iquest: "\xBF",
        times: "\xD7",
        divide: "\xF7",
        forall: "\u2200",
        part: "\u2202",
        exist: "\u2203",
        empty: "\u2205",
        nabla: "\u2207",
        isin: "\u2208",
        notin: "\u2209",
        ni: "\u220B",
        prod: "\u220F",
        sum: "\u2211",
        minus: "\u2212",
        lowast: "\u2217",
        radic: "\u221A",
        prop: "\u221D",
        infin: "\u221E",
        ang: "\u2220",
        and: "\u2227",
        or: "\u2228",
        cap: "\u2229",
        cup: "\u222A",
        "int": "\u222B",
        there4: "\u2234",
        sim: "\u223C",
        cong: "\u2245",
        asymp: "\u2248",
        ne: "\u2260",
        equiv: "\u2261",
        le: "\u2264",
        ge: "\u2265",
        sub: "\u2282",
        sup: "\u2283",
        nsub: "\u2284",
        sube: "\u2286",
        supe: "\u2287",
        oplus: "\u2295",
        otimes: "\u2297",
        perp: "\u22A5",
        sdot: "\u22C5",
        Alpha: "\u0391",
        Beta: "\u0392",
        Gamma: "\u0393",
        Delta: "\u0394",
        Epsilon: "\u0395",
        Zeta: "\u0396",
        Eta: "\u0397",
        Theta: "\u0398",
        Iota: "\u0399",
        Kappa: "\u039A",
        Lambda: "\u039B",
        Mu: "\u039C",
        Nu: "\u039D",
        Xi: "\u039E",
        Omicron: "\u039F",
        Pi: "\u03A0",
        Rho: "\u03A1",
        Sigma: "\u03A3",
        Tau: "\u03A4",
        Upsilon: "\u03A5",
        Phi: "\u03A6",
        Chi: "\u03A7",
        Psi: "\u03A8",
        Omega: "\u03A9",
        alpha: "\u03B1",
        beta: "\u03B2",
        gamma: "\u03B3",
        delta: "\u03B4",
        epsilon: "\u03B5",
        zeta: "\u03B6",
        eta: "\u03B7",
        theta: "\u03B8",
        iota: "\u03B9",
        kappa: "\u03BA",
        lambda: "\u03BB",
        mu: "\u03BC",
        nu: "\u03BD",
        xi: "\u03BE",
        omicron: "\u03BF",
        pi: "\u03C0",
        rho: "\u03C1",
        sigmaf: "\u03C2",
        sigma: "\u03C3",
        tau: "\u03C4",
        upsilon: "\u03C5",
        phi: "\u03C6",
        chi: "\u03C7",
        psi: "\u03C8",
        omega: "\u03C9",
        thetasym: "\u03D1",
        upsih: "\u03D2",
        piv: "\u03D6",
        OElig: "\u0152",
        oelig: "\u0153",
        Scaron: "\u0160",
        scaron: "\u0161",
        Yuml: "\u0178",
        fnof: "\u0192",
        circ: "\u02C6",
        tilde: "\u02DC",
        ensp: "\u2002",
        emsp: "\u2003",
        thinsp: "\u2009",
        zwnj: "\u200C",
        zwj: "\u200D",
        lrm: "\u200E",
        rlm: "\u200F",
        ndash: "\u2013",
        mdash: "\u2014",
        lsquo: "\u2018",
        rsquo: "\u2019",
        sbquo: "\u201A",
        ldquo: "\u201C",
        rdquo: "\u201D",
        bdquo: "\u201E",
        dagger: "\u2020",
        Dagger: "\u2021",
        bull: "\u2022",
        hellip: "\u2026",
        permil: "\u2030",
        prime: "\u2032",
        Prime: "\u2033",
        lsaquo: "\u2039",
        rsaquo: "\u203A",
        oline: "\u203E",
        euro: "\u20AC",
        trade: "\u2122",
        larr: "\u2190",
        uarr: "\u2191",
        rarr: "\u2192",
        darr: "\u2193",
        harr: "\u2194",
        crarr: "\u21B5",
        lceil: "\u2308",
        rceil: "\u2309",
        lfloor: "\u230A",
        rfloor: "\u230B",
        loz: "\u25CA",
        spades: "\u2660",
        clubs: "\u2663",
        hearts: "\u2665",
        diams: "\u2666"
      });
      exports.entityMap = exports.HTML_ENTITIES;
    }
  });

  // node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/sax.js
  var require_sax = __commonJS({
    "node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
      var NAMESPACE = require_conventions().NAMESPACE;
      var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
      var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
      var S_TAG = 0;
      var S_ATTR = 1;
      var S_ATTR_SPACE = 2;
      var S_EQ = 3;
      var S_ATTR_NOQUOT_VALUE = 4;
      var S_ATTR_END = 5;
      var S_TAG_SPACE = 6;
      var S_TAG_CLOSE = 7;
      function ParseError(message, locator) {
        this.message = message;
        this.locator = locator;
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, ParseError);
      }
      ParseError.prototype = new Error();
      ParseError.prototype.name = ParseError.name;
      function XMLReader() {
      }
      XMLReader.prototype = {
        parse: function(source, defaultNSMap, entityMap) {
          var domBuilder = this.domBuilder;
          domBuilder.startDocument();
          _copy(defaultNSMap, defaultNSMap = {});
          parse5(
            source,
            defaultNSMap,
            entityMap,
            domBuilder,
            this.errorHandler
          );
          domBuilder.endDocument();
        }
      };
      function parse5(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
        function fixedFromCharCode(code) {
          if (code > 65535) {
            code -= 65536;
            var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
            return String.fromCharCode(surrogate1, surrogate2);
          } else {
            return String.fromCharCode(code);
          }
        }
        function entityReplacer(a2) {
          var k = a2.slice(1, -1);
          if (Object.hasOwnProperty.call(entityMap, k)) {
            return entityMap[k];
          } else if (k.charAt(0) === "#") {
            return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
          } else {
            errorHandler.error("entity not found:" + a2);
            return a2;
          }
        }
        function appendText(end2) {
          if (end2 > start) {
            var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
            locator && position(start);
            domBuilder.characters(xt, 0, end2 - start);
            start = end2;
          }
        }
        function position(p, m) {
          while (p >= lineEnd && (m = linePattern.exec(source))) {
            lineStart = m.index;
            lineEnd = lineStart + m[0].length;
            locator.lineNumber++;
          }
          locator.columnNumber = p - lineStart + 1;
        }
        var lineStart = 0;
        var lineEnd = 0;
        var linePattern = /.*(?:\r\n?|\n)|.*$/g;
        var locator = domBuilder.locator;
        var parseStack = [{ currentNSMap: defaultNSMapCopy }];
        var closeMap = {};
        var start = 0;
        while (true) {
          try {
            var tagStart = source.indexOf("<", start);
            if (tagStart < 0) {
              if (!source.substr(start).match(/^\s*$/)) {
                var doc = domBuilder.doc;
                var text2 = doc.createTextNode(source.substr(start));
                doc.appendChild(text2);
                domBuilder.currentElement = text2;
              }
              return;
            }
            if (tagStart > start) {
              appendText(tagStart);
            }
            switch (source.charAt(tagStart + 1)) {
              case "/":
                var end = source.indexOf(">", tagStart + 3);
                var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
                var config = parseStack.pop();
                if (end < 0) {
                  tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                  errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                  end = tagStart + 1 + tagName.length;
                } else if (tagName.match(/\s</)) {
                  tagName = tagName.replace(/[\s<].*/, "");
                  errorHandler.error("end tag name: " + tagName + " maybe not complete");
                  end = tagStart + 1 + tagName.length;
                }
                var localNSMap = config.localNSMap;
                var endMatch = config.tagName == tagName;
                var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
                if (endIgnoreCaseMach) {
                  domBuilder.endElement(config.uri, config.localName, tagName);
                  if (localNSMap) {
                    for (var prefix in localNSMap) {
                      if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                        domBuilder.endPrefixMapping(prefix);
                      }
                    }
                  }
                  if (!endMatch) {
                    errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                  }
                } else {
                  parseStack.push(config);
                }
                end++;
                break;
              case "?":
                locator && position(tagStart);
                end = parseInstruction(source, tagStart, domBuilder);
                break;
              case "!":
                locator && position(tagStart);
                end = parseDCC(source, tagStart, domBuilder, errorHandler);
                break;
              default:
                locator && position(tagStart);
                var el = new ElementAttributes();
                var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
                var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
                var len = el.length;
                if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                  el.closed = true;
                  if (!entityMap.nbsp) {
                    errorHandler.warning("unclosed xml attribute");
                  }
                }
                if (locator && len) {
                  var locator2 = copyLocator(locator, {});
                  for (var i = 0; i < len; i++) {
                    var a = el[i];
                    position(a.offset);
                    a.locator = copyLocator(locator, {});
                  }
                  domBuilder.locator = locator2;
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                  domBuilder.locator = locator;
                } else {
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                }
                if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                  end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
                } else {
                  end++;
                }
            }
          } catch (e) {
            if (e instanceof ParseError) {
              throw e;
            }
            errorHandler.error("element parse error: " + e);
            end = -1;
          }
          if (end > start) {
            start = end;
          } else {
            appendText(Math.max(tagStart, start) + 1);
          }
        }
      }
      function copyLocator(f, t) {
        t.lineNumber = f.lineNumber;
        t.columnNumber = f.columnNumber;
        return t;
      }
      function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
        function addAttribute(qname, value2, startIndex) {
          if (el.attributeNames.hasOwnProperty(qname)) {
            errorHandler.fatalError("Attribute " + qname + " redefined");
          }
          el.addValue(
            qname,
            value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer),
            startIndex
          );
        }
        var attrName;
        var value;
        var p = ++start;
        var s = S_TAG;
        while (true) {
          var c = source.charAt(p);
          switch (c) {
            case "=":
              if (s === S_ATTR) {
                attrName = source.slice(start, p);
                s = S_EQ;
              } else if (s === S_ATTR_SPACE) {
                s = S_EQ;
              } else {
                throw new Error("attribute equal must after attrName");
              }
              break;
            case "'":
            case '"':
              if (s === S_EQ || s === S_ATTR) {
                if (s === S_ATTR) {
                  errorHandler.warning('attribute value must after "="');
                  attrName = source.slice(start, p);
                }
                start = p + 1;
                p = source.indexOf(c, start);
                if (p > 0) {
                  value = source.slice(start, p);
                  addAttribute(attrName, value, start - 1);
                  s = S_ATTR_END;
                } else {
                  throw new Error("attribute value no end '" + c + "' match");
                }
              } else if (s == S_ATTR_NOQUOT_VALUE) {
                value = source.slice(start, p);
                addAttribute(attrName, value, start);
                errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
                start = p + 1;
                s = S_ATTR_END;
              } else {
                throw new Error('attribute value must after "="');
              }
              break;
            case "/":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  s = S_TAG_CLOSE;
                  el.closed = true;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                case S_ATTR_SPACE:
                  break;
                default:
                  throw new Error("attribute invalid close char('/')");
              }
              break;
            case "":
              errorHandler.error("unexpected end of input");
              if (s == S_TAG) {
                el.setTagName(source.slice(start, p));
              }
              return p;
            case ">":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  break;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                  value = source.slice(start, p);
                  if (value.slice(-1) === "/") {
                    el.closed = true;
                    value = value.slice(0, -1);
                  }
                case S_ATTR_SPACE:
                  if (s === S_ATTR_SPACE) {
                    value = attrName;
                  }
                  if (s == S_ATTR_NOQUOT_VALUE) {
                    errorHandler.warning('attribute "' + value + '" missed quot(")!');
                    addAttribute(attrName, value, start);
                  } else {
                    if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                      errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                    }
                    addAttribute(value, value, start);
                  }
                  break;
                case S_EQ:
                  throw new Error("attribute value missed!!");
              }
              return p;
            case "\x80":
              c = " ";
            default:
              if (c <= " ") {
                switch (s) {
                  case S_TAG:
                    el.setTagName(source.slice(start, p));
                    s = S_TAG_SPACE;
                    break;
                  case S_ATTR:
                    attrName = source.slice(start, p);
                    s = S_ATTR_SPACE;
                    break;
                  case S_ATTR_NOQUOT_VALUE:
                    var value = source.slice(start, p);
                    errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                    addAttribute(attrName, value, start);
                  case S_ATTR_END:
                    s = S_TAG_SPACE;
                    break;
                }
              } else {
                switch (s) {
                  case S_ATTR_SPACE:
                    var tagName = el.tagName;
                    if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                      errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                    }
                    addAttribute(attrName, attrName, start);
                    start = p;
                    s = S_ATTR;
                    break;
                  case S_ATTR_END:
                    errorHandler.warning('attribute space is required"' + attrName + '"!!');
                  case S_TAG_SPACE:
                    s = S_ATTR;
                    start = p;
                    break;
                  case S_EQ:
                    s = S_ATTR_NOQUOT_VALUE;
                    start = p;
                    break;
                  case S_TAG_CLOSE:
                    throw new Error("elements closed character '/' and '>' must be connected to");
                }
              }
          }
          p++;
        }
      }
      function appendElement(el, domBuilder, currentNSMap) {
        var tagName = el.tagName;
        var localNSMap = null;
        var i = el.length;
        while (i--) {
          var a = el[i];
          var qName = a.qName;
          var value = a.value;
          var nsp = qName.indexOf(":");
          if (nsp > 0) {
            var prefix = a.prefix = qName.slice(0, nsp);
            var localName = qName.slice(nsp + 1);
            var nsPrefix = prefix === "xmlns" && localName;
          } else {
            localName = qName;
            prefix = null;
            nsPrefix = qName === "xmlns" && "";
          }
          a.localName = localName;
          if (nsPrefix !== false) {
            if (localNSMap == null) {
              localNSMap = {};
              _copy(currentNSMap, currentNSMap = {});
            }
            currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
            a.uri = NAMESPACE.XMLNS;
            domBuilder.startPrefixMapping(nsPrefix, value);
          }
        }
        var i = el.length;
        while (i--) {
          a = el[i];
          var prefix = a.prefix;
          if (prefix) {
            if (prefix === "xml") {
              a.uri = NAMESPACE.XML;
            }
            if (prefix !== "xmlns") {
              a.uri = currentNSMap[prefix || ""];
            }
          }
        }
        var nsp = tagName.indexOf(":");
        if (nsp > 0) {
          prefix = el.prefix = tagName.slice(0, nsp);
          localName = el.localName = tagName.slice(nsp + 1);
        } else {
          prefix = null;
          localName = el.localName = tagName;
        }
        var ns = el.uri = currentNSMap[prefix || ""];
        domBuilder.startElement(ns, localName, tagName, el);
        if (el.closed) {
          domBuilder.endElement(ns, localName, tagName);
          if (localNSMap) {
            for (prefix in localNSMap) {
              if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                domBuilder.endPrefixMapping(prefix);
              }
            }
          }
        } else {
          el.currentNSMap = currentNSMap;
          el.localNSMap = localNSMap;
          return true;
        }
      }
      function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
        if (/^(?:script|textarea)$/i.test(tagName)) {
          var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
          var text2 = source.substring(elStartEnd + 1, elEndStart);
          if (/[&<]/.test(text2)) {
            if (/^script$/i.test(tagName)) {
              domBuilder.characters(text2, 0, text2.length);
              return elEndStart;
            }
            text2 = text2.replace(/&#?\w+;/g, entityReplacer);
            domBuilder.characters(text2, 0, text2.length);
            return elEndStart;
          }
        }
        return elStartEnd + 1;
      }
      function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
        var pos = closeMap[tagName];
        if (pos == null) {
          pos = source.lastIndexOf("</" + tagName + ">");
          if (pos < elStartEnd) {
            pos = source.lastIndexOf("</" + tagName);
          }
          closeMap[tagName] = pos;
        }
        return pos < elStartEnd;
      }
      function _copy(source, target) {
        for (var n in source) {
          if (Object.prototype.hasOwnProperty.call(source, n)) {
            target[n] = source[n];
          }
        }
      }
      function parseDCC(source, start, domBuilder, errorHandler) {
        var next = source.charAt(start + 2);
        switch (next) {
          case "-":
            if (source.charAt(start + 3) === "-") {
              var end = source.indexOf("-->", start + 4);
              if (end > start) {
                domBuilder.comment(source, start + 4, end - start - 4);
                return end + 3;
              } else {
                errorHandler.error("Unclosed comment");
                return -1;
              }
            } else {
              return -1;
            }
          default:
            if (source.substr(start + 3, 6) == "CDATA[") {
              var end = source.indexOf("]]>", start + 9);
              domBuilder.startCDATA();
              domBuilder.characters(source, start + 9, end - start - 9);
              domBuilder.endCDATA();
              return end + 3;
            }
            var matchs = split(source, start);
            var len = matchs.length;
            if (len > 1 && /!doctype/i.test(matchs[0][0])) {
              var name = matchs[1][0];
              var pubid = false;
              var sysid = false;
              if (len > 3) {
                if (/^public$/i.test(matchs[2][0])) {
                  pubid = matchs[3][0];
                  sysid = len > 4 && matchs[4][0];
                } else if (/^system$/i.test(matchs[2][0])) {
                  sysid = matchs[3][0];
                }
              }
              var lastMatch = matchs[len - 1];
              domBuilder.startDTD(name, pubid, sysid);
              domBuilder.endDTD();
              return lastMatch.index + lastMatch[0].length;
            }
        }
        return -1;
      }
      function parseInstruction(source, start, domBuilder) {
        var end = source.indexOf("?>", start);
        if (end) {
          var match2 = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
          if (match2) {
            var len = match2[0].length;
            domBuilder.processingInstruction(match2[1], match2[2]);
            return end + 2;
          } else {
            return -1;
          }
        }
        return -1;
      }
      function ElementAttributes() {
        this.attributeNames = {};
      }
      ElementAttributes.prototype = {
        setTagName: function(tagName) {
          if (!tagNamePattern.test(tagName)) {
            throw new Error("invalid tagName:" + tagName);
          }
          this.tagName = tagName;
        },
        addValue: function(qName, value, offset) {
          if (!tagNamePattern.test(qName)) {
            throw new Error("invalid attribute:" + qName);
          }
          this.attributeNames[qName] = this.length;
          this[this.length++] = { qName, value, offset };
        },
        length: 0,
        getLocalName: function(i) {
          return this[i].localName;
        },
        getLocator: function(i) {
          return this[i].locator;
        },
        getQName: function(i) {
          return this[i].qName;
        },
        getURI: function(i) {
          return this[i].uri;
        },
        getValue: function(i) {
          return this[i].value;
        }
      };
      function split(source, start) {
        var match2;
        var buf = [];
        var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
        reg.lastIndex = start;
        reg.exec(source);
        while (match2 = reg.exec(source)) {
          buf.push(match2);
          if (match2[1])
            return buf;
        }
      }
      exports.XMLReader = XMLReader;
      exports.ParseError = ParseError;
    }
  });

  // node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/dom-parser.js
  var require_dom_parser = __commonJS({
    "node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
      var conventions = require_conventions();
      var dom = require_dom();
      var entities = require_entities();
      var sax = require_sax();
      var DOMImplementation = dom.DOMImplementation;
      var NAMESPACE = conventions.NAMESPACE;
      var ParseError = sax.ParseError;
      var XMLReader = sax.XMLReader;
      function normalizeLineEndings(input) {
        return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
      }
      function DOMParser(options) {
        this.options = options || { locator: {} };
      }
      DOMParser.prototype.parseFromString = function(source, mimeType) {
        var options = this.options;
        var sax2 = new XMLReader();
        var domBuilder = options.domBuilder || new DOMHandler();
        var errorHandler = options.errorHandler;
        var locator = options.locator;
        var defaultNSMap = options.xmlns || {};
        var isHTML = /\/x?html?$/.test(mimeType);
        var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
        if (locator) {
          domBuilder.setDocumentLocator(locator);
        }
        sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
        sax2.domBuilder = options.domBuilder || domBuilder;
        if (isHTML) {
          defaultNSMap[""] = NAMESPACE.HTML;
        }
        defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
        var normalize = options.normalizeLineEndings || normalizeLineEndings;
        if (source && typeof source === "string") {
          sax2.parse(
            normalize(source),
            defaultNSMap,
            entityMap
          );
        } else {
          sax2.errorHandler.error("invalid doc source");
        }
        return domBuilder.doc;
      };
      function buildErrorHandler(errorImpl, domBuilder, locator) {
        if (!errorImpl) {
          if (domBuilder instanceof DOMHandler) {
            return domBuilder;
          }
          errorImpl = domBuilder;
        }
        var errorHandler = {};
        var isCallback = errorImpl instanceof Function;
        locator = locator || {};
        function build(key) {
          var fn = errorImpl[key];
          if (!fn && isCallback) {
            fn = errorImpl.length == 2 ? function(msg) {
              errorImpl(key, msg);
            } : errorImpl;
          }
          errorHandler[key] = fn && function(msg) {
            fn("[xmldom " + key + "]	" + msg + _locator(locator));
          } || function() {
          };
        }
        build("warning");
        build("error");
        build("fatalError");
        return errorHandler;
      }
      function DOMHandler() {
        this.cdata = false;
      }
      function position(locator, node) {
        node.lineNumber = locator.lineNumber;
        node.columnNumber = locator.columnNumber;
      }
      DOMHandler.prototype = {
        startDocument: function() {
          this.doc = new DOMImplementation().createDocument(null, null, null);
          if (this.locator) {
            this.doc.documentURI = this.locator.systemId;
          }
        },
        startElement: function(namespaceURI, localName, qName, attrs) {
          var doc = this.doc;
          var el = doc.createElementNS(namespaceURI, qName || localName);
          var len = attrs.length;
          appendElement(this, el);
          this.currentElement = el;
          this.locator && position(this.locator, el);
          for (var i = 0; i < len; i++) {
            var namespaceURI = attrs.getURI(i);
            var value = attrs.getValue(i);
            var qName = attrs.getQName(i);
            var attr = doc.createAttributeNS(namespaceURI, qName);
            this.locator && position(attrs.getLocator(i), attr);
            attr.value = attr.nodeValue = value;
            el.setAttributeNode(attr);
          }
        },
        endElement: function(namespaceURI, localName, qName) {
          var current = this.currentElement;
          var tagName = current.tagName;
          this.currentElement = current.parentNode;
        },
        startPrefixMapping: function(prefix, uri) {
        },
        endPrefixMapping: function(prefix) {
        },
        processingInstruction: function(target, data2) {
          var ins = this.doc.createProcessingInstruction(target, data2);
          this.locator && position(this.locator, ins);
          appendElement(this, ins);
        },
        ignorableWhitespace: function(ch, start, length) {
        },
        characters: function(chars, start, length) {
          chars = _toString.apply(this, arguments);
          if (chars) {
            if (this.cdata) {
              var charNode = this.doc.createCDATASection(chars);
            } else {
              var charNode = this.doc.createTextNode(chars);
            }
            if (this.currentElement) {
              this.currentElement.appendChild(charNode);
            } else if (/^\s*$/.test(chars)) {
              this.doc.appendChild(charNode);
            }
            this.locator && position(this.locator, charNode);
          }
        },
        skippedEntity: function(name) {
        },
        endDocument: function() {
          this.doc.normalize();
        },
        setDocumentLocator: function(locator) {
          if (this.locator = locator) {
            locator.lineNumber = 0;
          }
        },
        comment: function(chars, start, length) {
          chars = _toString.apply(this, arguments);
          var comm = this.doc.createComment(chars);
          this.locator && position(this.locator, comm);
          appendElement(this, comm);
        },
        startCDATA: function() {
          this.cdata = true;
        },
        endCDATA: function() {
          this.cdata = false;
        },
        startDTD: function(name, publicId, systemId) {
          var impl = this.doc.implementation;
          if (impl && impl.createDocumentType) {
            var dt = impl.createDocumentType(name, publicId, systemId);
            this.locator && position(this.locator, dt);
            appendElement(this, dt);
            this.doc.doctype = dt;
          }
        },
        warning: function(error2) {
          console.warn("[xmldom warning]	" + error2, _locator(this.locator));
        },
        error: function(error2) {
          console.error("[xmldom error]	" + error2, _locator(this.locator));
        },
        fatalError: function(error2) {
          throw new ParseError(error2, this.locator);
        }
      };
      function _locator(l) {
        if (l) {
          return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
        }
      }
      function _toString(chars, start, length) {
        if (typeof chars == "string") {
          return chars.substr(start, length);
        } else {
          if (chars.length >= start + length || start) {
            return new java.lang.String(chars, start, length) + "";
          }
          return chars;
        }
      }
      "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
        DOMHandler.prototype[key] = function() {
          return null;
        };
      });
      function appendElement(hander, node) {
        if (!hander.currentElement) {
          hander.doc.appendChild(node);
        } else {
          hander.currentElement.appendChild(node);
        }
      }
      exports.__DOMHandler = DOMHandler;
      exports.normalizeLineEndings = normalizeLineEndings;
      exports.DOMParser = DOMParser;
    }
  });

  // node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/index.js
  var require_lib8 = __commonJS({
    "node_modules/.pnpm/@xmldom+xmldom@0.8.6/node_modules/@xmldom/xmldom/lib/index.js"(exports) {
      var dom = require_dom();
      exports.DOMImplementation = dom.DOMImplementation;
      exports.XMLSerializer = dom.XMLSerializer;
      exports.DOMParser = require_dom_parser().DOMParser;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/parseJson.js
  var require_parseJson = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/utils/parseJson.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseJson = void 0;
      function parseJson(data2) {
        try {
          var json2 = JSON.parse(data2);
          return json2;
        } catch (_) {
          return null;
        }
      }
      exports.parseJson = parseJson;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/utils/bufferFrom.js
  var require_bufferFrom = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/utils/bufferFrom.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bufferFrom = void 0;
      function bufferFrom(init) {
        var encodedString = encodeURIComponent(init);
        var binaryString = encodedString.replace(/%([0-9A-F]{2})/g, function(_, char) {
          return String.fromCharCode("0x" + char);
        });
        var buffer = new Uint8Array(binaryString.length);
        Array.prototype.forEach.call(binaryString, function(char, index) {
          buffer[index] = char.charCodeAt(0);
        });
        return buffer;
      }
      exports.bufferFrom = bufferFrom;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/polyfills/EventPolyfill.js
  var require_EventPolyfill = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/polyfills/EventPolyfill.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.EventPolyfill = void 0;
      var EventPolyfill = function() {
        function EventPolyfill2(type, options) {
          this.AT_TARGET = 0;
          this.BUBBLING_PHASE = 0;
          this.CAPTURING_PHASE = 0;
          this.NONE = 0;
          this.type = "";
          this.srcElement = null;
          this.currentTarget = null;
          this.eventPhase = 0;
          this.isTrusted = true;
          this.composed = false;
          this.cancelable = true;
          this.defaultPrevented = false;
          this.bubbles = true;
          this.lengthComputable = true;
          this.loaded = 0;
          this.total = 0;
          this.cancelBubble = false;
          this.returnValue = true;
          this.type = type;
          this.target = (options === null || options === void 0 ? void 0 : options.target) || null;
          this.currentTarget = (options === null || options === void 0 ? void 0 : options.currentTarget) || null;
          this.timeStamp = Date.now();
        }
        EventPolyfill2.prototype.composedPath = function() {
          return [];
        };
        EventPolyfill2.prototype.initEvent = function(type, bubbles, cancelable) {
          this.type = type;
          this.bubbles = !!bubbles;
          this.cancelable = !!cancelable;
        };
        EventPolyfill2.prototype.preventDefault = function() {
          this.defaultPrevented = true;
        };
        EventPolyfill2.prototype.stopPropagation = function() {
        };
        EventPolyfill2.prototype.stopImmediatePropagation = function() {
        };
        return EventPolyfill2;
      }();
      exports.EventPolyfill = EventPolyfill;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/polyfills/ProgressEventPolyfill.js
  var require_ProgressEventPolyfill = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/polyfills/ProgressEventPolyfill.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ProgressEventPolyfill = void 0;
      var EventPolyfill_1 = require_EventPolyfill();
      var ProgressEventPolyfill = function(_super) {
        __extends(ProgressEventPolyfill2, _super);
        function ProgressEventPolyfill2(type, init) {
          var _this = _super.call(this, type) || this;
          _this.lengthComputable = (init === null || init === void 0 ? void 0 : init.lengthComputable) || false;
          _this.composed = (init === null || init === void 0 ? void 0 : init.composed) || false;
          _this.loaded = (init === null || init === void 0 ? void 0 : init.loaded) || 0;
          _this.total = (init === null || init === void 0 ? void 0 : init.total) || 0;
          return _this;
        }
        return ProgressEventPolyfill2;
      }(EventPolyfill_1.EventPolyfill);
      exports.ProgressEventPolyfill = ProgressEventPolyfill;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/utils/createEvent.js
  var require_createEvent = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/utils/createEvent.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createEvent = void 0;
      var EventPolyfill_1 = require_EventPolyfill();
      var ProgressEventPolyfill_1 = require_ProgressEventPolyfill();
      var SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== "undefined";
      function createEvent(target, type, init) {
        var progressEvents = [
          "error",
          "progress",
          "loadstart",
          "loadend",
          "load",
          "timeout",
          "abort"
        ];
        var ProgressEventClass = SUPPORTS_PROGRESS_EVENT ? ProgressEvent : ProgressEventPolyfill_1.ProgressEventPolyfill;
        var event = progressEvents.includes(type) ? new ProgressEventClass(type, {
          lengthComputable: true,
          loaded: (init === null || init === void 0 ? void 0 : init.loaded) || 0,
          total: (init === null || init === void 0 ? void 0 : init.total) || 0
        }) : new EventPolyfill_1.EventPolyfill(type, {
          target,
          currentTarget: target
        });
        return event;
      }
      exports.createEvent = createEvent;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/XMLHttpRequestOverride.js
  var require_XMLHttpRequestOverride = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/XMLHttpRequestOverride.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body2) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body2.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __values = exports && exports.__values || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      var __read = exports && exports.__read || function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error2) {
          e = { error: error2 };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createXMLHttpRequestOverride = void 0;
      var until_1 = require_lib();
      var headers_polyfill_1 = require_lib3();
      var xmldom_1 = require_lib8();
      var parseJson_1 = require_parseJson();
      var toIsoResponse_1 = require_toIsoResponse();
      var bufferFrom_1 = require_bufferFrom();
      var createEvent_1 = require_createEvent();
      var IsomorphicRequest_1 = require_IsomorphicRequest();
      var bufferUtils_1 = require_bufferUtils();
      var InteractiveIsomorphicRequest_1 = require_InteractiveIsomorphicRequest();
      var createXMLHttpRequestOverride = function(options) {
        var _a2;
        var XMLHttpRequest = options.XMLHttpRequest, emitter = options.emitter, log = options.log;
        return _a2 = function() {
          function XMLHttpRequestOverride() {
            this._events = [];
            this.log = log;
            this.UNSENT = 0;
            this.OPENED = 1;
            this.HEADERS_RECEIVED = 2;
            this.LOADING = 3;
            this.DONE = 4;
            this.onreadystatechange = null;
            this.onabort = null;
            this.onerror = null;
            this.onload = null;
            this.onloadend = null;
            this.onloadstart = null;
            this.onprogress = null;
            this.ontimeout = null;
            this.url = "";
            this.method = "GET";
            this.readyState = this.UNSENT;
            this.withCredentials = false;
            this.status = 200;
            this.statusText = "OK";
            this.response = "";
            this.responseType = "text";
            this.responseText = "";
            this.responseXML = null;
            this.responseURL = "";
            this.upload = {};
            this.timeout = 0;
            this._requestHeaders = new headers_polyfill_1.Headers();
            this._responseHeaders = new headers_polyfill_1.Headers();
          }
          XMLHttpRequestOverride.prototype.setReadyState = function(nextState) {
            if (nextState === this.readyState) {
              return;
            }
            this.log("readyState change %d -> %d", this.readyState, nextState);
            this.readyState = nextState;
            if (nextState !== this.UNSENT) {
              this.log("triggering readystate change...");
              this.trigger("readystatechange");
            }
          };
          XMLHttpRequestOverride.prototype.trigger = function(eventName, options2) {
            var e_1, _a3;
            this.log('trigger "%s" (%d)', eventName, this.readyState);
            this.log('resolve listener for event "%s"', eventName);
            var callback = this["on" + eventName];
            callback === null || callback === void 0 ? void 0 : callback.call(this, createEvent_1.createEvent(this, eventName, options2));
            try {
              for (var _b2 = __values(this._events), _c = _b2.next(); !_c.done; _c = _b2.next()) {
                var event_1 = _c.value;
                if (event_1.name === eventName) {
                  log('calling mock event listener "%s" (%d)', eventName, this.readyState);
                  event_1.listener.call(this, createEvent_1.createEvent(this, eventName, options2));
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a3 = _b2.return))
                  _a3.call(_b2);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
            return this;
          };
          XMLHttpRequestOverride.prototype.reset = function() {
            this.log("reset");
            this.setReadyState(this.UNSENT);
            this.status = 200;
            this.statusText = "OK";
            this.response = null;
            this.responseText = null;
            this.responseXML = null;
            this._requestHeaders = new headers_polyfill_1.Headers();
            this._responseHeaders = new headers_polyfill_1.Headers();
          };
          XMLHttpRequestOverride.prototype.open = function(method, url, async, user, password) {
            if (async === void 0) {
              async = true;
            }
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a3) {
                this.log = this.log.extend("request " + method + " " + url);
                this.log("open", { method, url, async, user, password });
                this.reset();
                this.setReadyState(this.OPENED);
                if (typeof url === "undefined") {
                  this.url = method;
                  this.method = "GET";
                } else {
                  this.url = url;
                  this.method = method;
                  this.async = async;
                  this.user = user;
                  this.password = password;
                }
                return [2];
              });
            });
          };
          XMLHttpRequestOverride.prototype.send = function(data2) {
            var _this = this;
            this.log("send %s %s", this.method, this.url);
            var buffer;
            if (typeof data2 === "string") {
              buffer = bufferUtils_1.encodeBuffer(data2);
            } else {
              buffer = data2 || new ArrayBuffer(0);
            }
            var url;
            try {
              url = new URL(this.url);
            } catch (error2) {
              url = new URL(this.url, window.location.href);
            }
            this.log("request headers", this._requestHeaders);
            var isomorphicRequest = new IsomorphicRequest_1.IsomorphicRequest(url, {
              body: buffer,
              method: this.method,
              headers: this._requestHeaders,
              credentials: this.withCredentials ? "include" : "omit"
            });
            var interactiveIsomorphicRequest = new InteractiveIsomorphicRequest_1.InteractiveIsomorphicRequest(isomorphicRequest);
            this.log('emitting the "request" event for %d listener(s)...', emitter.listenerCount("request"));
            emitter.emit("request", interactiveIsomorphicRequest);
            this.log("awaiting mocked response...");
            Promise.resolve(until_1.until(function() {
              return __awaiter(_this, void 0, void 0, function() {
                var _a3, mockedResponse;
                return __generator(this, function(_b2) {
                  switch (_b2.label) {
                    case 0:
                      return [4, emitter.untilIdle("request", function(_a4) {
                        var _b3 = __read(_a4.args, 1), request = _b3[0];
                        return request.id === interactiveIsomorphicRequest.id;
                      })];
                    case 1:
                      _b2.sent();
                      this.log("all request listeners have been resolved!");
                      return [4, interactiveIsomorphicRequest.respondWith.invoked()];
                    case 2:
                      _a3 = __read.apply(void 0, [_b2.sent(), 1]), mockedResponse = _a3[0];
                      this.log("event.respondWith called with:", mockedResponse);
                      return [2, mockedResponse];
                  }
                });
              });
            })).then(function(_a3) {
              var _b2, _c;
              var _d = __read(_a3, 2), middlewareException = _d[0], mockedResponse = _d[1];
              if (middlewareException) {
                _this.log("middleware function threw an exception!", middlewareException);
                _this.trigger("error");
                _this.abort();
                return;
              }
              if (mockedResponse) {
                _this.log("received mocked response", mockedResponse);
                _this.trigger("loadstart");
                _this.status = (_b2 = mockedResponse.status) !== null && _b2 !== void 0 ? _b2 : 200;
                _this.statusText = mockedResponse.statusText || "OK";
                _this._responseHeaders = mockedResponse.headers ? headers_polyfill_1.objectToHeaders(mockedResponse.headers) : new headers_polyfill_1.Headers();
                _this.log("set response status", _this.status, _this.statusText);
                _this.log("set response headers", _this._responseHeaders);
                _this.setReadyState(_this.HEADERS_RECEIVED);
                _this.log("response type", _this.responseType);
                _this.response = _this.getResponseBody(mockedResponse.body);
                _this.responseURL = _this.url;
                _this.responseText = mockedResponse.body || "";
                _this.responseXML = _this.getResponseXML();
                _this.log("set response body", _this.response);
                if (mockedResponse.body && _this.response) {
                  _this.setReadyState(_this.LOADING);
                  var bodyBuffer = bufferFrom_1.bufferFrom(mockedResponse.body);
                  _this.trigger("progress", {
                    loaded: bodyBuffer.length,
                    total: bodyBuffer.length
                  });
                }
                _this.setReadyState(_this.DONE);
                _this.trigger("load");
                _this.trigger("loadend");
                emitter.emit("response", isomorphicRequest, toIsoResponse_1.toIsoResponse(mockedResponse));
              } else {
                _this.log("no mocked response received!");
                var originalRequest_1 = new XMLHttpRequest();
                _this.log("opening an original request %s %s", _this.method, _this.url);
                originalRequest_1.open(_this.method, _this.url, (_c = _this.async) !== null && _c !== void 0 ? _c : true, _this.user, _this.password);
                originalRequest_1.addEventListener("load", function() {
                  _this.log('original "onload"');
                  _this.status = originalRequest_1.status;
                  _this.statusText = originalRequest_1.statusText;
                  _this.responseURL = originalRequest_1.responseURL;
                  _this.responseType = originalRequest_1.responseType;
                  _this.response = originalRequest_1.response;
                  _this.responseText = originalRequest_1.responseText;
                  _this.responseXML = originalRequest_1.responseXML;
                  _this.log("set mock request readyState to DONE");
                  _this.setReadyState(_this.DONE);
                  _this.log("received original response", _this.status, _this.statusText);
                  _this.log("original response body:", _this.response);
                  var responseHeaders = originalRequest_1.getAllResponseHeaders();
                  _this.log("original response headers:\n", responseHeaders);
                  _this._responseHeaders = headers_polyfill_1.stringToHeaders(responseHeaders);
                  _this.log("original response headers (normalized)", _this._responseHeaders);
                  _this.log("original response finished");
                  emitter.emit("response", isomorphicRequest, {
                    status: originalRequest_1.status,
                    statusText: originalRequest_1.statusText,
                    headers: _this._responseHeaders,
                    body: originalRequest_1.response
                  });
                });
                _this.propagateCallbacks(originalRequest_1);
                _this.propagateListeners(originalRequest_1);
                _this.propagateHeaders(originalRequest_1, _this._requestHeaders);
                if (_this.async) {
                  originalRequest_1.timeout = _this.timeout;
                }
                _this.log("send", data2);
                originalRequest_1.send(data2);
              }
            });
          };
          XMLHttpRequestOverride.prototype.abort = function() {
            this.log("abort");
            if (this.readyState > this.UNSENT && this.readyState < this.DONE) {
              this.setReadyState(this.UNSENT);
              this.trigger("abort");
            }
          };
          XMLHttpRequestOverride.prototype.dispatchEvent = function() {
            return false;
          };
          XMLHttpRequestOverride.prototype.setRequestHeader = function(name, value) {
            this.log('set request header "%s" to "%s"', name, value);
            this._requestHeaders.append(name, value);
          };
          XMLHttpRequestOverride.prototype.getResponseHeader = function(name) {
            this.log('get response header "%s"', name);
            if (this.readyState < this.HEADERS_RECEIVED) {
              this.log("cannot return a header: headers not received (state: %s)", this.readyState);
              return null;
            }
            var headerValue = this._responseHeaders.get(name);
            this.log('resolved response header "%s" to "%s"', name, headerValue, this._responseHeaders);
            return headerValue;
          };
          XMLHttpRequestOverride.prototype.getAllResponseHeaders = function() {
            this.log("get all response headers");
            if (this.readyState < this.HEADERS_RECEIVED) {
              this.log("cannot return headers: headers not received (state: %s)", this.readyState);
              return "";
            }
            return headers_polyfill_1.headersToString(this._responseHeaders);
          };
          XMLHttpRequestOverride.prototype.addEventListener = function(name, listener) {
            this.log("addEventListener", name, listener);
            this._events.push({
              name,
              listener
            });
          };
          XMLHttpRequestOverride.prototype.removeEventListener = function(name, listener) {
            this.log("removeEventListener", name, listener);
            this._events = this._events.filter(function(storedEvent) {
              return storedEvent.name !== name && storedEvent.listener !== listener;
            });
          };
          XMLHttpRequestOverride.prototype.overrideMimeType = function() {
          };
          XMLHttpRequestOverride.prototype.getResponseBody = function(body2) {
            var textBody = body2 !== null && body2 !== void 0 ? body2 : "";
            this.log("coerced response body to", textBody);
            switch (this.responseType) {
              case "json": {
                this.log("resolving response body as JSON");
                return parseJson_1.parseJson(textBody);
              }
              case "blob": {
                var blobType = this.getResponseHeader("content-type") || "text/plain";
                this.log("resolving response body as Blob", { type: blobType });
                return new Blob([textBody], {
                  type: blobType
                });
              }
              case "arraybuffer": {
                this.log("resolving response body as ArrayBuffer");
                var arrayBuffer = bufferFrom_1.bufferFrom(textBody);
                return arrayBuffer;
              }
              default:
                return textBody;
            }
          };
          XMLHttpRequestOverride.prototype.getResponseXML = function() {
            var contentType = this.getResponseHeader("Content-Type");
            if (contentType === "application/xml" || contentType === "text/xml") {
              return new xmldom_1.DOMParser().parseFromString(this.responseText, contentType);
            }
            return null;
          };
          XMLHttpRequestOverride.prototype.propagateCallbacks = function(request) {
            var e_2, _a3;
            this.log("propagating request callbacks to the original request");
            var callbackNames = [
              "abort",
              "onerror",
              "ontimeout",
              "onload",
              "onloadstart",
              "onloadend",
              "onprogress",
              "onreadystatechange"
            ];
            try {
              for (var callbackNames_1 = __values(callbackNames), callbackNames_1_1 = callbackNames_1.next(); !callbackNames_1_1.done; callbackNames_1_1 = callbackNames_1.next()) {
                var callbackName = callbackNames_1_1.value;
                var callback = this[callbackName];
                if (callback) {
                  request[callbackName] = this[callbackName];
                  this.log('propagated the "%s" callback', callbackName, callback);
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (callbackNames_1_1 && !callbackNames_1_1.done && (_a3 = callbackNames_1.return))
                  _a3.call(callbackNames_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
            request.onabort = this.abort;
            request.onerror = this.onerror;
            request.ontimeout = this.ontimeout;
            request.onload = this.onload;
            request.onloadstart = this.onloadstart;
            request.onloadend = this.onloadend;
            request.onprogress = this.onprogress;
            request.onreadystatechange = this.onreadystatechange;
          };
          XMLHttpRequestOverride.prototype.propagateListeners = function(request) {
            this.log("propagating request listeners (%d) to the original request", this._events.length, this._events);
            this._events.forEach(function(_a3) {
              var name = _a3.name, listener = _a3.listener;
              request.addEventListener(name, listener);
            });
          };
          XMLHttpRequestOverride.prototype.propagateHeaders = function(request, headers) {
            var _this = this;
            this.log("propagating request headers to the original request", headers);
            Object.entries(headers.raw()).forEach(function(_a3) {
              var _b2 = __read(_a3, 2), name = _b2[0], value = _b2[1];
              _this.log('setting "%s" (%s) header on the original request', name, value);
              request.setRequestHeader(name, value);
            });
          };
          return XMLHttpRequestOverride;
        }(), _a2.UNSENT = 0, _a2.OPENED = 1, _a2.HEADERS_RECEIVED = 2, _a2.LOADING = 3, _a2.DONE = 4, _a2;
      };
      exports.createXMLHttpRequestOverride = createXMLHttpRequestOverride;
    }
  });

  // node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/index.js
  var require_XMLHttpRequest = __commonJS({
    "node_modules/.pnpm/@mswjs+interceptors@0.17.7/node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/index.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.XMLHttpRequestInterceptor = void 0;
      var outvariant_1 = require_lib4();
      var glossary_1 = require_glossary();
      var Interceptor_1 = require_Interceptor();
      var XMLHttpRequestOverride_1 = require_XMLHttpRequestOverride();
      var XMLHttpRequestInterceptor2 = function(_super) {
        __extends(XMLHttpRequestInterceptor3, _super);
        function XMLHttpRequestInterceptor3() {
          return _super.call(this, XMLHttpRequestInterceptor3.symbol) || this;
        }
        XMLHttpRequestInterceptor3.prototype.checkEnvironment = function() {
          return typeof window !== "undefined" && typeof window.XMLHttpRequest !== "undefined";
        };
        XMLHttpRequestInterceptor3.prototype.setup = function() {
          var log = this.log.extend("setup");
          log('patching "XMLHttpRequest" module...');
          var PureXMLHttpRequest = window.XMLHttpRequest;
          outvariant_1.invariant(!PureXMLHttpRequest[glossary_1.IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.');
          window.XMLHttpRequest = XMLHttpRequestOverride_1.createXMLHttpRequestOverride({
            XMLHttpRequest: PureXMLHttpRequest,
            emitter: this.emitter,
            log: this.log
          });
          log('native "XMLHttpRequest" module patched!', window.XMLHttpRequest.name);
          Object.defineProperty(window.XMLHttpRequest, glossary_1.IS_PATCHED_MODULE, {
            enumerable: true,
            configurable: true,
            value: true
          });
          this.subscriptions.push(function() {
            Object.defineProperty(window.XMLHttpRequest, glossary_1.IS_PATCHED_MODULE, {
              value: void 0
            });
            window.XMLHttpRequest = PureXMLHttpRequest;
            log('native "XMLHttpRequest" module restored!', window.XMLHttpRequest.name);
          });
        };
        XMLHttpRequestInterceptor3.symbol = Symbol("xhr");
        return XMLHttpRequestInterceptor3;
      }(Interceptor_1.Interceptor);
      exports.XMLHttpRequestInterceptor = XMLHttpRequestInterceptor2;
    }
  });

  // node_modules/.pnpm/strict-event-emitter@0.4.6/node_modules/strict-event-emitter/lib/MemoryLeakError.js
  var require_MemoryLeakError = __commonJS({
    "node_modules/.pnpm/strict-event-emitter@0.4.6/node_modules/strict-event-emitter/lib/MemoryLeakError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MemoryLeakError = void 0;
      var MemoryLeakError = class extends Error {
        constructor(emitter, type, count) {
          super(`Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`);
          this.emitter = emitter;
          this.type = type;
          this.count = count;
          this.name = "MaxListenersExceededWarning";
        }
      };
      exports.MemoryLeakError = MemoryLeakError;
    }
  });

  // node_modules/.pnpm/strict-event-emitter@0.4.6/node_modules/strict-event-emitter/lib/Emitter.js
  var require_Emitter = __commonJS({
    "node_modules/.pnpm/strict-event-emitter@0.4.6/node_modules/strict-event-emitter/lib/Emitter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Emitter = void 0;
      var MemoryLeakError_1 = require_MemoryLeakError();
      var Emitter2 = class {
        constructor() {
          this.events = /* @__PURE__ */ new Map();
          this.maxListeners = Emitter2.defaultMaxListeners;
          this.hasWarnedAboutPotentialMemoryLeak = false;
        }
        static listenerCount(emitter, eventName) {
          return emitter.listenerCount(eventName);
        }
        _emitInternalEvent(internalEventName, eventName, listener) {
          this.emit(
            internalEventName,
            ...[eventName, listener]
          );
        }
        _getListeners(eventName) {
          return this.events.get(eventName) || [];
        }
        _removeListener(listeners, listener) {
          const index = listeners.indexOf(listener);
          if (index > -1) {
            listeners.splice(index, 1);
          }
          return [];
        }
        _wrapOnceListener(eventName, listener) {
          const onceListener = (...data2) => {
            this.removeListener(eventName, onceListener);
            listener.apply(this, data2);
          };
          return onceListener;
        }
        setMaxListeners(maxListeners) {
          this.maxListeners = maxListeners;
          return this;
        }
        getMaxListeners() {
          return this.maxListeners;
        }
        eventNames() {
          return Array.from(this.events.keys());
        }
        emit(eventName, ...data2) {
          const listeners = this._getListeners(eventName);
          listeners.forEach((listener) => {
            listener.apply(this, data2);
          });
          return listeners.length > 0;
        }
        addListener(eventName, listener) {
          this._emitInternalEvent("newListener", eventName, listener);
          const nextListeners = this._getListeners(eventName).concat(listener);
          this.events.set(eventName, nextListeners);
          if (this.maxListeners > 0 && this.listenerCount(eventName) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
            this.hasWarnedAboutPotentialMemoryLeak = true;
            const memoryLeakWarning = new MemoryLeakError_1.MemoryLeakError(this, eventName, this.listenerCount(eventName));
            console.warn(memoryLeakWarning);
          }
          return this;
        }
        on(eventName, listener) {
          return this.addListener(eventName, listener);
        }
        once(eventName, listener) {
          return this.addListener(eventName, this._wrapOnceListener(eventName, listener));
        }
        prependListener(eventName, listener) {
          const listeners = this._getListeners(eventName);
          if (listeners.length > 0) {
            const nextListeners = [listener].concat(listeners);
            this.events.set(eventName, nextListeners);
          } else {
            this.events.set(eventName, listeners.concat(listener));
          }
          return this;
        }
        prependOnceListener(eventName, listener) {
          return this.prependListener(eventName, this._wrapOnceListener(eventName, listener));
        }
        removeListener(eventName, listener) {
          const listeners = this._getListeners(eventName);
          if (listeners.length > 0) {
            this._removeListener(listeners, listener);
            this.events.set(eventName, listeners);
            this._emitInternalEvent("removeListener", eventName, listener);
          }
          return this;
        }
        off(eventName, listener) {
          return this.removeListener(eventName, listener);
        }
        removeAllListeners(eventName) {
          if (eventName) {
            this.events.delete(eventName);
          } else {
            this.events.clear();
          }
          return this;
        }
        listeners(eventName) {
          return Array.from(this._getListeners(eventName));
        }
        listenerCount(eventName) {
          return this._getListeners(eventName).length;
        }
        rawListeners(eventName) {
          return this.listeners(eventName);
        }
      };
      exports.Emitter = Emitter2;
      Emitter2.defaultMaxListeners = 10;
    }
  });

  // node_modules/.pnpm/strict-event-emitter@0.4.6/node_modules/strict-event-emitter/lib/index.js
  var require_lib9 = __commonJS({
    "node_modules/.pnpm/strict-event-emitter@0.4.6/node_modules/strict-event-emitter/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Emitter(), exports);
      __exportStar(require_MemoryLeakError(), exports);
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    GraphQLHandler: () => GraphQLHandler,
    MockedRequest: () => MockedRequest,
    RESTMethods: () => RESTMethods,
    RequestHandler: () => RequestHandler,
    RestHandler: () => RestHandler,
    SetupApi: () => SetupApi,
    SetupWorkerApi: () => SetupWorkerApi,
    cleanUrl: () => cleanUrl,
    compose: () => compose,
    context: () => context_exports,
    createResponseComposition: () => createResponseComposition,
    defaultContext: () => defaultContext,
    defaultResponse: () => defaultResponse,
    graphql: () => graphql,
    graphqlContext: () => graphqlContext,
    handleRequest: () => handleRequest,
    matchRequestUrl: () => matchRequestUrl,
    response: () => response,
    rest: () => rest,
    restContext: () => restContext,
    setupWorker: () => setupWorker
  });

  // src/context/index.ts
  var context_exports = {};
  __export(context_exports, {
    body: () => body,
    cookie: () => cookie,
    data: () => data,
    delay: () => delay,
    errors: () => errors,
    extensions: () => extensions,
    fetch: () => fetch,
    json: () => json,
    set: () => set,
    status: () => status,
    text: () => text,
    xml: () => xml
  });

  // node_modules/.pnpm/statuses@2.0.1/node_modules/statuses/codes.json
  var codes_default = {
    "100": "Continue",
    "101": "Switching Protocols",
    "102": "Processing",
    "103": "Early Hints",
    "200": "OK",
    "201": "Created",
    "202": "Accepted",
    "203": "Non-Authoritative Information",
    "204": "No Content",
    "205": "Reset Content",
    "206": "Partial Content",
    "207": "Multi-Status",
    "208": "Already Reported",
    "226": "IM Used",
    "300": "Multiple Choices",
    "301": "Moved Permanently",
    "302": "Found",
    "303": "See Other",
    "304": "Not Modified",
    "305": "Use Proxy",
    "307": "Temporary Redirect",
    "308": "Permanent Redirect",
    "400": "Bad Request",
    "401": "Unauthorized",
    "402": "Payment Required",
    "403": "Forbidden",
    "404": "Not Found",
    "405": "Method Not Allowed",
    "406": "Not Acceptable",
    "407": "Proxy Authentication Required",
    "408": "Request Timeout",
    "409": "Conflict",
    "410": "Gone",
    "411": "Length Required",
    "412": "Precondition Failed",
    "413": "Payload Too Large",
    "414": "URI Too Long",
    "415": "Unsupported Media Type",
    "416": "Range Not Satisfiable",
    "417": "Expectation Failed",
    "418": "I'm a Teapot",
    "421": "Misdirected Request",
    "422": "Unprocessable Entity",
    "423": "Locked",
    "424": "Failed Dependency",
    "425": "Too Early",
    "426": "Upgrade Required",
    "428": "Precondition Required",
    "429": "Too Many Requests",
    "431": "Request Header Fields Too Large",
    "451": "Unavailable For Legal Reasons",
    "500": "Internal Server Error",
    "501": "Not Implemented",
    "502": "Bad Gateway",
    "503": "Service Unavailable",
    "504": "Gateway Timeout",
    "505": "HTTP Version Not Supported",
    "506": "Variant Also Negotiates",
    "507": "Insufficient Storage",
    "508": "Loop Detected",
    "509": "Bandwidth Limit Exceeded",
    "510": "Not Extended",
    "511": "Network Authentication Required"
  };

  // src/context/status.ts
  var status = (statusCode, statusText) => {
    return (res) => {
      res.status = statusCode;
      res.statusText = statusText || codes_default[String(statusCode)];
      return res;
    };
  };

  // node_modules/.pnpm/headers-polyfill@3.1.2/node_modules/headers-polyfill/lib/index.mjs
  var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
  function normalizeHeaderName(name) {
    if (typeof name !== "string") {
      name = String(name);
    }
    if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === "") {
      throw new TypeError("Invalid character in header field name");
    }
    return name.toLowerCase();
  }
  function normalizeHeaderValue(value) {
    if (typeof value !== "string") {
      value = String(value);
    }
    return value;
  }
  var NORMALIZED_HEADERS = Symbol("normalizedHeaders");
  var RAW_HEADER_NAMES = Symbol("rawHeaderNames");
  var _a;
  var _b;
  var HeadersPolyfill = class {
    constructor(init) {
      this[_a] = {};
      this[_b] = /* @__PURE__ */ new Map();
      if (["Headers", "HeadersPolyfill"].includes(init == null ? void 0 : init.constructor.name) || init instanceof HeadersPolyfill) {
        const initialHeaders = init;
        initialHeaders.forEach((value, name) => {
          this.append(name, value);
        }, this);
      } else if (Array.isArray(init)) {
        init.forEach(([name, value]) => {
          this.append(name, Array.isArray(value) ? value.join(", ") : value);
        });
      } else if (init) {
        Object.getOwnPropertyNames(init).forEach((name) => {
          const value = init[name];
          this.append(name, Array.isArray(value) ? value.join(", ") : value);
        });
      }
    }
    [(_a = NORMALIZED_HEADERS, _b = RAW_HEADER_NAMES, Symbol.iterator)]() {
      return this.entries();
    }
    *keys() {
      for (const name of Object.keys(this[NORMALIZED_HEADERS])) {
        yield name;
      }
    }
    *values() {
      for (const value of Object.values(this[NORMALIZED_HEADERS])) {
        yield value;
      }
    }
    *entries() {
      for (const name of Object.keys(this[NORMALIZED_HEADERS])) {
        yield [name, this.get(name)];
      }
    }
    get(name) {
      return this[NORMALIZED_HEADERS][normalizeHeaderName(name)] || null;
    }
    set(name, value) {
      const normalizedName = normalizeHeaderName(name);
      this[NORMALIZED_HEADERS][normalizedName] = normalizeHeaderValue(value);
      this[RAW_HEADER_NAMES].set(normalizedName, name);
    }
    append(name, value) {
      const normalizedName = normalizeHeaderName(name);
      let resolvedValue = this.has(normalizedName) ? `${this.get(normalizedName)}, ${value}` : value;
      this.set(name, resolvedValue);
    }
    delete(name) {
      if (!this.has(name)) {
        return;
      }
      const normalizedName = normalizeHeaderName(name);
      delete this[NORMALIZED_HEADERS][normalizedName];
      this[RAW_HEADER_NAMES].delete(normalizedName);
    }
    all() {
      return this[NORMALIZED_HEADERS];
    }
    raw() {
      const rawHeaders = {};
      for (const [name, value] of this.entries()) {
        rawHeaders[this[RAW_HEADER_NAMES].get(name)] = value;
      }
      return rawHeaders;
    }
    has(name) {
      return this[NORMALIZED_HEADERS].hasOwnProperty(normalizeHeaderName(name));
    }
    forEach(callback, thisArg) {
      for (const name in this[NORMALIZED_HEADERS]) {
        if (this[NORMALIZED_HEADERS].hasOwnProperty(name)) {
          callback.call(thisArg, this[NORMALIZED_HEADERS][name], name, this);
        }
      }
    }
  };
  var singleValueHeaders = ["user-agent"];
  function headersToObject(headers) {
    const headersObject = {};
    headers.forEach((value, name) => {
      const isMultiValue = !singleValueHeaders.includes(name.toLowerCase()) && value.includes(",");
      headersObject[name] = isMultiValue ? value.split(",").map((s) => s.trim()) : value;
    });
    return headersObject;
  }
  function stringToHeaders(str) {
    const lines = str.trim().split(/[\r\n]+/);
    return lines.reduce((headers, line) => {
      if (line.trim() === "") {
        return headers;
      }
      const parts = line.split(": ");
      const name = parts.shift();
      const value = parts.join(": ");
      headers.append(name, value);
      return headers;
    }, new HeadersPolyfill());
  }
  function reduceHeadersObject(headers, reducer, initialState) {
    return Object.keys(headers).reduce((nextHeaders, name) => {
      return reducer(nextHeaders, name, headers[name]);
    }, initialState);
  }
  function objectToHeaders(headersObject) {
    return reduceHeadersObject(
      headersObject,
      (headers, name, value) => {
        const values = [].concat(value).filter(Boolean);
        values.forEach((value2) => {
          headers.append(name, value2);
        });
        return headers;
      },
      new HeadersPolyfill()
    );
  }
  function flattenHeadersObject(headersObject) {
    return reduceHeadersObject(
      headersObject,
      (headers, name, value) => {
        headers[name] = [].concat(value).join(", ");
        return headers;
      },
      {}
    );
  }

  // src/context/set.ts
  function set(...args) {
    return (res) => {
      const [name, value] = args;
      if (typeof name === "string") {
        res.headers.append(name, value);
      } else {
        const headers = objectToHeaders(name);
        headers.forEach((value2, name2) => {
          res.headers.append(name2, value2);
        });
      }
      return res;
    };
  }

  // src/context/cookie.ts
  var cookieUtils = __toESM(require_cookie());
  var cookie = (name, value, options) => {
    return (res) => {
      const serializedCookie = cookieUtils.serialize(name, value, options);
      res.headers.append("Set-Cookie", serializedCookie);
      if (typeof document !== "undefined") {
        document.cookie = serializedCookie;
      }
      return res;
    };
  };

  // src/context/body.ts
  var body = (value) => {
    return (res) => {
      res.body = value;
      return res;
    };
  };

  // src/utils/internal/jsonParse.ts
  function jsonParse(value) {
    try {
      return JSON.parse(value);
    } catch (error2) {
      return void 0;
    }
  }

  // src/utils/internal/isObject.ts
  function isObject(value) {
    return value != null && typeof value === "object" && !Array.isArray(value);
  }

  // src/utils/internal/mergeRight.ts
  function mergeRight(left, right) {
    return Object.entries(right).reduce((result, [key, rightValue]) => {
      const leftValue = result[key];
      if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
        result[key] = leftValue.concat(rightValue);
        return result;
      }
      if (isObject(leftValue) && isObject(rightValue)) {
        result[key] = mergeRight(leftValue, rightValue);
        return result;
      }
      result[key] = rightValue;
      return result;
    }, Object.assign({}, left));
  }

  // src/context/json.ts
  var json = (body2) => {
    return (res) => {
      res.headers.set("Content-Type", "application/json");
      res.body = JSON.stringify(body2);
      return res;
    };
  };

  // src/context/data.ts
  var data = (payload) => {
    return (res) => {
      const prevBody = jsonParse(res.body) || {};
      const nextBody = mergeRight(prevBody, { data: payload });
      return json(nextBody)(res);
    };
  };

  // src/context/extensions.ts
  var extensions = (payload) => {
    return (res) => {
      const prevBody = jsonParse(res.body) || {};
      const nextBody = mergeRight(prevBody, { extensions: payload });
      return json(nextBody)(res);
    };
  };

  // node_modules/.pnpm/is-node-process@1.2.0/node_modules/is-node-process/lib/index.mjs
  function isNodeProcess() {
    if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
      return true;
    }
    if (typeof process !== "undefined") {
      const type = process.type;
      if (type === "renderer" || type === "worker") {
        return false;
      }
      return !!(process.versions && process.versions.node);
    }
    return false;
  }

  // src/context/delay.ts
  var SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
  var MIN_SERVER_RESPONSE_TIME = 100;
  var MAX_SERVER_RESPONSE_TIME = 400;
  var NODE_SERVER_RESPONSE_TIME = 5;
  var getRandomServerResponseTime = () => {
    if (isNodeProcess()) {
      return NODE_SERVER_RESPONSE_TIME;
    }
    return Math.floor(
      Math.random() * (MAX_SERVER_RESPONSE_TIME - MIN_SERVER_RESPONSE_TIME) + MIN_SERVER_RESPONSE_TIME
    );
  };
  var delay = (durationOrMode) => {
    return (res) => {
      let delayTime;
      if (typeof durationOrMode === "string") {
        switch (durationOrMode) {
          case "infinite": {
            delayTime = SET_TIMEOUT_MAX_ALLOWED_INT;
            break;
          }
          case "real": {
            delayTime = getRandomServerResponseTime();
            break;
          }
          default: {
            throw new Error(
              `Failed to delay a response: unknown delay mode "${durationOrMode}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`
            );
          }
        }
      } else if (typeof durationOrMode === "undefined") {
        delayTime = getRandomServerResponseTime();
      } else {
        if (durationOrMode > SET_TIMEOUT_MAX_ALLOWED_INT) {
          throw new Error(
            `Failed to delay a response: provided delay duration (${durationOrMode}) exceeds the maximum allowed duration for "setTimeout" (${SET_TIMEOUT_MAX_ALLOWED_INT}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`
          );
        }
        delayTime = durationOrMode;
      }
      res.delay = delayTime;
      return res;
    };
  };

  // src/context/errors.ts
  var errors = (errorsList) => {
    return (res) => {
      if (errorsList == null) {
        return res;
      }
      const prevBody = jsonParse(res.body) || {};
      const nextBody = mergeRight(prevBody, { errors: errorsList });
      return json(nextBody)(res);
    };
  };

  // src/context/fetch.ts
  var useFetch = isNodeProcess() ? (input, init) => Promise.resolve().then(() => __toESM(require_browser())).then(
    ({ default: nodeFetch }) => nodeFetch(input, init)
  ) : globalThis.fetch;
  var augmentRequestInit = (requestInit) => {
    const headers = new HeadersPolyfill(requestInit.headers);
    headers.set("x-msw-bypass", "true");
    return {
      ...requestInit,
      headers: headers.all()
    };
  };
  var createFetchRequestParameters = (input) => {
    const { body: body2, method } = input;
    const requestParameters = {
      ...input,
      body: void 0
    };
    if (["GET", "HEAD"].includes(method)) {
      return requestParameters;
    }
    if (typeof body2 === "object" || typeof body2 === "number" || typeof body2 === "boolean") {
      requestParameters.body = JSON.stringify(body2);
    } else {
      requestParameters.body = body2;
    }
    return requestParameters;
  };
  var fetch = (input, requestInit = {}) => {
    if (typeof input === "string") {
      return useFetch(input, augmentRequestInit(requestInit));
    }
    const requestParameters = createFetchRequestParameters(input);
    const derivedRequestInit = augmentRequestInit(requestParameters);
    return useFetch(input.url.href, derivedRequestInit);
  };

  // src/context/text.ts
  var text = (body2) => {
    return (res) => {
      res.headers.set("Content-Type", "text/plain");
      res.body = body2;
      return res;
    };
  };

  // src/context/xml.ts
  var xml = (body2) => {
    return (res) => {
      res.headers.set("Content-Type", "text/xml");
      res.body = body2;
      return res;
    };
  };

  // node_modules/.pnpm/outvariant@1.4.0/node_modules/outvariant/lib/index.mjs
  var POSITIONALS_EXP = /(%?)(%([sdjo]))/g;
  function serializePositional(positional, flag) {
    switch (flag) {
      case "s":
        return positional;
      case "d":
      case "i":
        return Number(positional);
      case "j":
        return JSON.stringify(positional);
      case "o": {
        if (typeof positional === "string") {
          return positional;
        }
        const json2 = JSON.stringify(positional);
        if (json2 === "{}" || json2 === "[]" || /^\[object .+?\]$/.test(json2)) {
          return positional;
        }
        return json2;
      }
    }
  }
  function format(message, ...positionals) {
    if (positionals.length === 0) {
      return message;
    }
    let positionalIndex = 0;
    let formattedMessage = message.replace(
      POSITIONALS_EXP,
      (match2, isEscaped, _, flag) => {
        const positional = positionals[positionalIndex];
        const value = serializePositional(positional, flag);
        if (!isEscaped) {
          positionalIndex++;
          return value;
        }
        return match2;
      }
    );
    if (positionalIndex < positionals.length) {
      formattedMessage += ` ${positionals.slice(positionalIndex).join(" ")}`;
    }
    formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
    return formattedMessage;
  }
  var STACK_FRAMES_TO_IGNORE = 2;
  function cleanErrorStack(error2) {
    if (!error2.stack) {
      return;
    }
    const nextStack = error2.stack.split("\n");
    nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
    error2.stack = nextStack.join("\n");
  }
  var InvariantError = class extends Error {
    constructor(message, ...positionals) {
      super(message);
      this.message = message;
      this.name = "Invariant Violation";
      this.message = format(message, ...positionals);
      cleanErrorStack(this);
    }
  };
  var invariant = (predicate, message, ...positionals) => {
    if (!predicate) {
      throw new InvariantError(message, ...positionals);
    }
  };
  invariant.as = (ErrorConstructor, predicate, message, ...positionals) => {
    if (!predicate) {
      const isConstructor = ErrorConstructor.prototype.name != null;
      const error2 = isConstructor ? new ErrorConstructor(format(message, positionals)) : ErrorConstructor(format(message, positionals));
      throw error2;
    }
  };

  // src/utils/internal/devUtils.ts
  var LIBRARY_PREFIX = "[MSW]";
  function formatMessage(message, ...positionals) {
    const interpolatedMessage = format(message, ...positionals);
    return `${LIBRARY_PREFIX} ${interpolatedMessage}`;
  }
  function warn(message, ...positionals) {
    console.warn(formatMessage(message, ...positionals));
  }
  function error(message, ...positionals) {
    console.error(formatMessage(message, ...positionals));
  }
  var devUtils = {
    formatMessage,
    warn,
    error
  };

  // src/utils/internal/checkGlobals.ts
  function checkGlobals() {
    invariant(
      typeof URL !== "undefined",
      devUtils.formatMessage(
        `Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`
      )
    );
  }

  // src/setupWorker/start/createStartHandler.ts
  var import_until4 = __toESM(require_lib());

  // src/setupWorker/start/utils/getWorkerInstance.ts
  var import_until = __toESM(require_lib());

  // src/setupWorker/start/utils/getWorkerByRegistration.ts
  function getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker) {
    const allStates = [
      registration.active,
      registration.installing,
      registration.waiting
    ];
    const relevantStates = allStates.filter((state) => {
      return state != null;
    });
    const worker = relevantStates.find((worker2) => {
      return findWorker(worker2.scriptURL, absoluteWorkerUrl);
    });
    return worker || null;
  }

  // src/utils/url/getAbsoluteWorkerUrl.ts
  function getAbsoluteWorkerUrl(workerUrl) {
    return new URL(workerUrl, location.href).href;
  }

  // src/setupWorker/start/utils/getWorkerInstance.ts
  var getWorkerInstance = async (url, options = {}, findWorker) => {
    const absoluteWorkerUrl = getAbsoluteWorkerUrl(url);
    const mockRegistrations = await navigator.serviceWorker.getRegistrations().then(
      (registrations) => registrations.filter(
        (registration) => getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker)
      )
    );
    if (!navigator.serviceWorker.controller && mockRegistrations.length > 0) {
      location.reload();
    }
    const [existingRegistration] = mockRegistrations;
    if (existingRegistration) {
      return existingRegistration.update().then(() => {
        return [
          getWorkerByRegistration(
            existingRegistration,
            absoluteWorkerUrl,
            findWorker
          ),
          existingRegistration
        ];
      });
    }
    const [error2, instance] = await (0, import_until.until)(
      async () => {
        const registration = await navigator.serviceWorker.register(url, options);
        return [
          getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker),
          registration
        ];
      }
    );
    if (error2) {
      const isWorkerMissing = error2.message.includes("(404)");
      if (isWorkerMissing) {
        const scopeUrl = new URL((options == null ? void 0 : options.scope) || "/", location.href);
        throw new Error(
          devUtils.formatMessage(`Failed to register a Service Worker for scope ('${scopeUrl.href}') with script ('${absoluteWorkerUrl}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
        );
      }
      throw new Error(
        devUtils.formatMessage(
          "Failed to register the Service Worker:\n\n%s",
          error2.message
        )
      );
    }
    return instance;
  };

  // src/setupWorker/start/utils/printStartMessage.ts
  function printStartMessage(args = {}) {
    if (args.quiet) {
      return;
    }
    const message = args.message || "Mocking enabled.";
    console.groupCollapsed(
      `%c${devUtils.formatMessage(message)}`,
      "color:orangered;font-weight:bold;"
    );
    console.log(
      "%cDocumentation: %chttps://mswjs.io/docs",
      "font-weight:bold",
      "font-weight:normal"
    );
    console.log("Found an issue? https://github.com/mswjs/msw/issues");
    if (args.workerUrl) {
      console.log("Worker script URL:", args.workerUrl);
    }
    if (args.workerScope) {
      console.log("Worker scope:", args.workerScope);
    }
    console.groupEnd();
  }

  // src/setupWorker/start/utils/enableMocking.ts
  async function enableMocking(context, options) {
    var _a2, _b2;
    context.workerChannel.send("MOCK_ACTIVATE");
    await context.events.once("MOCKING_ENABLED");
    if (context.isMockingEnabled) {
      devUtils.warn(
        `Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.`
      );
      return;
    }
    context.isMockingEnabled = true;
    printStartMessage({
      quiet: options.quiet,
      workerScope: (_a2 = context.registration) == null ? void 0 : _a2.scope,
      workerUrl: (_b2 = context.worker) == null ? void 0 : _b2.scriptURL
    });
  }

  // src/setupWorker/start/utils/createMessageChannel.ts
  var WorkerChannel = class {
    constructor(port) {
      this.port = port;
    }
    postMessage(event, ...rest2) {
      const [data2, transfer] = rest2;
      this.port.postMessage({ type: event, data: data2 }, { transfer });
    }
  };

  // src/utils/NetworkError.ts
  var NetworkError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "NetworkError";
    }
  };

  // src/utils/request/parseWorkerRequest.ts
  var import_interceptors2 = __toESM(require_lib6());

  // src/utils/request/MockedRequest.ts
  var cookieUtils3 = __toESM(require_cookie());
  var import_cookies = __toESM(require_lib7());
  var import_interceptors = __toESM(require_lib6());
  var import_bufferUtils = __toESM(require_bufferUtils());

  // src/utils/request/getRequestCookies.ts
  var cookieUtils2 = __toESM(require_cookie());
  function getAllCookies() {
    return cookieUtils2.parse(document.cookie);
  }
  function getRequestCookies(request) {
    if (typeof document === "undefined" || typeof location === "undefined") {
      return {};
    }
    switch (request.credentials) {
      case "same-origin": {
        return location.origin === request.url.origin ? getAllCookies() : {};
      }
      case "include": {
        return getAllCookies();
      }
      default: {
        return {};
      }
    }
  }

  // src/utils/internal/parseMultipartData.ts
  function parseContentHeaders(headersString) {
    var _a2, _b2;
    const headers = stringToHeaders(headersString);
    const contentType = headers.get("content-type") || "text/plain";
    const disposition = headers.get("content-disposition");
    if (!disposition) {
      throw new Error('"Content-Disposition" header is required.');
    }
    const directives = disposition.split(";").reduce((acc, chunk) => {
      const [name2, ...rest2] = chunk.trim().split("=");
      acc[name2] = rest2.join("=");
      return acc;
    }, {});
    const name = (_a2 = directives.name) == null ? void 0 : _a2.slice(1, -1);
    const filename = (_b2 = directives.filename) == null ? void 0 : _b2.slice(1, -1);
    return {
      name,
      filename,
      contentType
    };
  }
  function parseMultipartData(data2, headers) {
    const contentType = headers == null ? void 0 : headers.get("content-type");
    if (!contentType) {
      return void 0;
    }
    const [, ...directives] = contentType.split(/; */);
    const boundary = directives.filter((d) => d.startsWith("boundary=")).map((s) => s.replace(/^boundary=/, ""))[0];
    if (!boundary) {
      return void 0;
    }
    const boundaryRegExp = new RegExp(`--+${boundary}`);
    const fields = data2.split(boundaryRegExp).filter((chunk) => chunk.startsWith("\r\n") && chunk.endsWith("\r\n")).map((chunk) => chunk.trimStart().replace(/\r\n$/, ""));
    if (!fields.length) {
      return void 0;
    }
    const parsedBody = {};
    try {
      for (const field2 of fields) {
        const [contentHeaders, ...rest2] = field2.split("\r\n\r\n");
        const contentBody = rest2.join("\r\n\r\n");
        const { contentType: contentType2, filename, name } = parseContentHeaders(contentHeaders);
        const value = filename === void 0 ? contentBody : new File([contentBody], filename, { type: contentType2 });
        const parsedValue = parsedBody[name];
        if (parsedValue === void 0) {
          parsedBody[name] = value;
        } else if (Array.isArray(parsedValue)) {
          parsedBody[name] = [...parsedValue, value];
        } else {
          parsedBody[name] = [parsedValue, value];
        }
      }
      return parsedBody;
    } catch (error2) {
      return void 0;
    }
  }

  // src/utils/request/parseBody.ts
  function parseBody(body2, headers) {
    var _a2;
    if (!body2) {
      return body2;
    }
    const contentType = ((_a2 = headers == null ? void 0 : headers.get("content-type")) == null ? void 0 : _a2.toLowerCase()) || "";
    const hasMultipartContent = contentType.startsWith("multipart/form-data");
    if (hasMultipartContent && typeof body2 !== "object") {
      return parseMultipartData(body2.toString(), headers) || body2;
    }
    const hasJsonContent = contentType.includes("json");
    if (hasJsonContent && typeof body2 !== "object") {
      return jsonParse(body2.toString()) || body2;
    }
    return body2;
  }

  // src/utils/internal/isStringEqual.ts
  function isStringEqual(actual, expected) {
    return actual.toLowerCase() === expected.toLowerCase();
  }

  // src/utils/request/MockedRequest.ts
  var MockedRequest = class extends import_interceptors.IsomorphicRequest {
    constructor(url, init = {}) {
      super(url, init);
      if (init.id) {
        this.id = init.id;
      }
      this.cache = init.cache || "default";
      this.destination = init.destination || "";
      this.integrity = init.integrity || "";
      this.keepalive = init.keepalive || false;
      this.mode = init.mode || "cors";
      this.priority = init.priority || "auto";
      this.redirect = init.redirect || "follow";
      this.referrer = init.referrer || "";
      this.referrerPolicy = init.referrerPolicy || "no-referrer";
      this.cookies = init.cookies || this.getCookies();
    }
    get body() {
      const text2 = (0, import_bufferUtils.decodeBuffer)(this["_body"]);
      const body2 = parseBody(text2, this.headers);
      if (isStringEqual(this.method, "GET") && body2 === "") {
        return void 0;
      }
      return body2;
    }
    passthrough() {
      return {
        status: 101,
        statusText: "Continue",
        headers: new HeadersPolyfill(),
        body: null,
        passthrough: true,
        once: false
      };
    }
    getCookies() {
      var _a2;
      const requestCookiesString = this.headers.get("cookie");
      const ownCookies = requestCookiesString ? cookieUtils3.parse(requestCookiesString) : {};
      import_cookies.store.hydrate();
      const cookiesFromStore = Array.from(
        (_a2 = import_cookies.store.get({ ...this, url: this.url.href })) == null ? void 0 : _a2.entries()
      ).reduce((cookies, [name, { value }]) => {
        return Object.assign(cookies, { [name.trim()]: value });
      }, {});
      const cookiesFromDocument = getRequestCookies(this);
      const forwardedCookies = {
        ...cookiesFromDocument,
        ...cookiesFromStore
      };
      for (const [name, value] of Object.entries(forwardedCookies)) {
        this.headers.append("cookie", `${name}=${value}`);
      }
      return {
        ...forwardedCookies,
        ...ownCookies
      };
    }
  };

  // src/utils/request/parseWorkerRequest.ts
  function parseWorkerRequest(rawRequest) {
    const url = new URL(rawRequest.url);
    const headers = new HeadersPolyfill(rawRequest.headers);
    return new MockedRequest(url, {
      ...rawRequest,
      body: (0, import_interceptors2.encodeBuffer)(rawRequest.body || ""),
      headers
    });
  }

  // src/utils/handleRequest.ts
  var import_until2 = __toESM(require_lib());

  // src/utils/getResponse.ts
  var getResponse = async (request, handlers, resolutionContext) => {
    const relevantHandlers = handlers.filter((handler) => {
      return handler.test(request, resolutionContext);
    });
    if (relevantHandlers.length === 0) {
      return {
        handler: void 0,
        response: void 0
      };
    }
    const result = await relevantHandlers.reduce(async (executionResult, handler) => {
      const previousResults = await executionResult;
      if (!!(previousResults == null ? void 0 : previousResults.response)) {
        return executionResult;
      }
      const result2 = await handler.run(request, resolutionContext);
      if (result2 === null || result2.handler.shouldSkip) {
        return null;
      }
      if (!result2.response) {
        return {
          request: result2.request,
          handler: result2.handler,
          response: void 0,
          parsedResult: result2.parsedResult
        };
      }
      if (result2.response.once) {
        handler.markAsSkipped(true);
      }
      return result2;
    }, Promise.resolve(null));
    if (!result) {
      return {
        handler: void 0,
        response: void 0
      };
    }
    return {
      handler: result.handler,
      publicRequest: result.request,
      parsedRequest: result.parsedResult,
      response: result.response
    };
  };

  // src/utils/request/onUnhandledRequest.ts
  var import_js_levenshtein = __toESM(require_js_levenshtein());

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/jsutils/devAssert.mjs
  function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
      throw new Error(message);
    }
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/jsutils/isObjectLike.mjs
  function isObjectLike(value) {
    return typeof value == "object" && value !== null;
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/jsutils/invariant.mjs
  function invariant2(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
      throw new Error(
        message != null ? message : "Unexpected invariant triggered."
      );
    }
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/location.mjs
  var LineRegExp = /\r\n|[\n\r]/g;
  function getLocation(source, position) {
    let lastLineStart = 0;
    let line = 1;
    for (const match2 of source.body.matchAll(LineRegExp)) {
      typeof match2.index === "number" || invariant2(false);
      if (match2.index >= position) {
        break;
      }
      lastLineStart = match2.index + match2[0].length;
      line += 1;
    }
    return {
      line,
      column: position + 1 - lastLineStart
    };
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/printLocation.mjs
  function printLocation(location2) {
    return printSourceLocation(
      location2.source,
      getLocation(location2.source, location2.start)
    );
  }
  function printSourceLocation(source, sourceLocation) {
    const firstLineColumnOffset = source.locationOffset.column - 1;
    const body2 = "".padStart(firstLineColumnOffset) + source.body;
    const lineIndex = sourceLocation.line - 1;
    const lineOffset = source.locationOffset.line - 1;
    const lineNum = sourceLocation.line + lineOffset;
    const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    const columnNum = sourceLocation.column + columnOffset;
    const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
    const lines = body2.split(/\r\n|[\n\r]/g);
    const locationLine = lines[lineIndex];
    if (locationLine.length > 120) {
      const subLineIndex = Math.floor(columnNum / 80);
      const subLineColumnNum = columnNum % 80;
      const subLines = [];
      for (let i = 0; i < locationLine.length; i += 80) {
        subLines.push(locationLine.slice(i, i + 80));
      }
      return locationStr + printPrefixedLines([
        [`${lineNum} |`, subLines[0]],
        ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
        ["|", "^".padStart(subLineColumnNum)],
        ["|", subLines[subLineIndex + 1]]
      ]);
    }
    return locationStr + printPrefixedLines([
      [`${lineNum - 1} |`, lines[lineIndex - 1]],
      [`${lineNum} |`, locationLine],
      ["|", "^".padStart(columnNum)],
      [`${lineNum + 1} |`, lines[lineIndex + 1]]
    ]);
  }
  function printPrefixedLines(lines) {
    const existingLines = lines.filter(([_, line]) => line !== void 0);
    const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
    return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/error/GraphQLError.mjs
  function toNormalizedOptions(args) {
    const firstArg = args[0];
    if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
      return {
        nodes: firstArg,
        source: args[1],
        positions: args[2],
        path: args[3],
        originalError: args[4],
        extensions: args[5]
      };
    }
    return firstArg;
  }
  var GraphQLError = class extends Error {
    constructor(message, ...rawArgs) {
      var _this$nodes, _nodeLocations$, _ref;
      const { nodes, source, positions, path, originalError, extensions: extensions2 } = toNormalizedOptions(rawArgs);
      super(message);
      this.name = "GraphQLError";
      this.path = path !== null && path !== void 0 ? path : void 0;
      this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
      this.nodes = undefinedIfEmpty(
        Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
      );
      const nodeLocations = undefinedIfEmpty(
        (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
      );
      this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
      this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
      this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
      const originalExtensions = isObjectLike(
        originalError === null || originalError === void 0 ? void 0 : originalError.extensions
      ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
      this.extensions = (_ref = extensions2 !== null && extensions2 !== void 0 ? extensions2 : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
      Object.defineProperties(this, {
        message: {
          writable: true,
          enumerable: true
        },
        name: {
          enumerable: false
        },
        nodes: {
          enumerable: false
        },
        source: {
          enumerable: false
        },
        positions: {
          enumerable: false
        },
        originalError: {
          enumerable: false
        }
      });
      if (originalError !== null && originalError !== void 0 && originalError.stack) {
        Object.defineProperty(this, "stack", {
          value: originalError.stack,
          writable: true,
          configurable: true
        });
      } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, GraphQLError);
      } else {
        Object.defineProperty(this, "stack", {
          value: Error().stack,
          writable: true,
          configurable: true
        });
      }
    }
    get [Symbol.toStringTag]() {
      return "GraphQLError";
    }
    toString() {
      let output = this.message;
      if (this.nodes) {
        for (const node of this.nodes) {
          if (node.loc) {
            output += "\n\n" + printLocation(node.loc);
          }
        }
      } else if (this.source && this.locations) {
        for (const location2 of this.locations) {
          output += "\n\n" + printSourceLocation(this.source, location2);
        }
      }
      return output;
    }
    toJSON() {
      const formattedError = {
        message: this.message
      };
      if (this.locations != null) {
        formattedError.locations = this.locations;
      }
      if (this.path != null) {
        formattedError.path = this.path;
      }
      if (this.extensions != null && Object.keys(this.extensions).length > 0) {
        formattedError.extensions = this.extensions;
      }
      return formattedError;
    }
  };
  function undefinedIfEmpty(array) {
    return array === void 0 || array.length === 0 ? void 0 : array;
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/error/syntaxError.mjs
  function syntaxError(source, position, description) {
    return new GraphQLError(`Syntax Error: ${description}`, {
      source,
      positions: [position]
    });
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/ast.mjs
  var Location = class {
    constructor(startToken, endToken, source) {
      this.start = startToken.start;
      this.end = endToken.end;
      this.startToken = startToken;
      this.endToken = endToken;
      this.source = source;
    }
    get [Symbol.toStringTag]() {
      return "Location";
    }
    toJSON() {
      return {
        start: this.start,
        end: this.end
      };
    }
  };
  var Token = class {
    constructor(kind, start, end, line, column, value) {
      this.kind = kind;
      this.start = start;
      this.end = end;
      this.line = line;
      this.column = column;
      this.value = value;
      this.prev = null;
      this.next = null;
    }
    get [Symbol.toStringTag]() {
      return "Token";
    }
    toJSON() {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column
      };
    }
  };
  var QueryDocumentKeys = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: [
      "name",
      "variableDefinitions",
      "directives",
      "selectionSet"
    ],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "name",
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields"
    ],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: [
      "description",
      "name",
      "type",
      "defaultValue",
      "directives"
    ],
    InterfaceTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields"
    ],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"]
  };
  var kindValues = new Set(Object.keys(QueryDocumentKeys));
  var OperationTypeNode;
  (function(OperationTypeNode2) {
    OperationTypeNode2["QUERY"] = "query";
    OperationTypeNode2["MUTATION"] = "mutation";
    OperationTypeNode2["SUBSCRIPTION"] = "subscription";
  })(OperationTypeNode || (OperationTypeNode = {}));

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/directiveLocation.mjs
  var DirectiveLocation;
  (function(DirectiveLocation2) {
    DirectiveLocation2["QUERY"] = "QUERY";
    DirectiveLocation2["MUTATION"] = "MUTATION";
    DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
    DirectiveLocation2["FIELD"] = "FIELD";
    DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
    DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
    DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
    DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
    DirectiveLocation2["SCHEMA"] = "SCHEMA";
    DirectiveLocation2["SCALAR"] = "SCALAR";
    DirectiveLocation2["OBJECT"] = "OBJECT";
    DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
    DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
    DirectiveLocation2["INTERFACE"] = "INTERFACE";
    DirectiveLocation2["UNION"] = "UNION";
    DirectiveLocation2["ENUM"] = "ENUM";
    DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
    DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
    DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
  })(DirectiveLocation || (DirectiveLocation = {}));

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/kinds.mjs
  var Kind;
  (function(Kind2) {
    Kind2["NAME"] = "Name";
    Kind2["DOCUMENT"] = "Document";
    Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
    Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
    Kind2["SELECTION_SET"] = "SelectionSet";
    Kind2["FIELD"] = "Field";
    Kind2["ARGUMENT"] = "Argument";
    Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
    Kind2["INLINE_FRAGMENT"] = "InlineFragment";
    Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
    Kind2["VARIABLE"] = "Variable";
    Kind2["INT"] = "IntValue";
    Kind2["FLOAT"] = "FloatValue";
    Kind2["STRING"] = "StringValue";
    Kind2["BOOLEAN"] = "BooleanValue";
    Kind2["NULL"] = "NullValue";
    Kind2["ENUM"] = "EnumValue";
    Kind2["LIST"] = "ListValue";
    Kind2["OBJECT"] = "ObjectValue";
    Kind2["OBJECT_FIELD"] = "ObjectField";
    Kind2["DIRECTIVE"] = "Directive";
    Kind2["NAMED_TYPE"] = "NamedType";
    Kind2["LIST_TYPE"] = "ListType";
    Kind2["NON_NULL_TYPE"] = "NonNullType";
    Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
    Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
    Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
    Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
    Kind2["FIELD_DEFINITION"] = "FieldDefinition";
    Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
    Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
    Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
    Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
    Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
    Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
    Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
    Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
    Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
    Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
    Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
    Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
    Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
    Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
  })(Kind || (Kind = {}));

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/characterClasses.mjs
  function isWhiteSpace(code) {
    return code === 9 || code === 32;
  }
  function isDigit(code) {
    return code >= 48 && code <= 57;
  }
  function isLetter(code) {
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
  }
  function isNameStart(code) {
    return isLetter(code) || code === 95;
  }
  function isNameContinue(code) {
    return isLetter(code) || isDigit(code) || code === 95;
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/blockString.mjs
  function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;
    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;
    for (let i = 0; i < lines.length; ++i) {
      var _firstNonEmptyLine;
      const line = lines[i];
      const indent = leadingWhitespace(line);
      if (indent === line.length) {
        continue;
      }
      firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
      lastNonEmptyLine = i;
      if (i !== 0 && indent < commonIndent) {
        commonIndent = indent;
      }
    }
    return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
      (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
      lastNonEmptyLine + 1
    );
  }
  function leadingWhitespace(str) {
    let i = 0;
    while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
      ++i;
    }
    return i;
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/tokenKind.mjs
  var TokenKind;
  (function(TokenKind2) {
    TokenKind2["SOF"] = "<SOF>";
    TokenKind2["EOF"] = "<EOF>";
    TokenKind2["BANG"] = "!";
    TokenKind2["DOLLAR"] = "$";
    TokenKind2["AMP"] = "&";
    TokenKind2["PAREN_L"] = "(";
    TokenKind2["PAREN_R"] = ")";
    TokenKind2["SPREAD"] = "...";
    TokenKind2["COLON"] = ":";
    TokenKind2["EQUALS"] = "=";
    TokenKind2["AT"] = "@";
    TokenKind2["BRACKET_L"] = "[";
    TokenKind2["BRACKET_R"] = "]";
    TokenKind2["BRACE_L"] = "{";
    TokenKind2["PIPE"] = "|";
    TokenKind2["BRACE_R"] = "}";
    TokenKind2["NAME"] = "Name";
    TokenKind2["INT"] = "Int";
    TokenKind2["FLOAT"] = "Float";
    TokenKind2["STRING"] = "String";
    TokenKind2["BLOCK_STRING"] = "BlockString";
    TokenKind2["COMMENT"] = "Comment";
  })(TokenKind || (TokenKind = {}));

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/lexer.mjs
  var Lexer = class {
    constructor(source) {
      const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
      this.source = source;
      this.lastToken = startOfFileToken;
      this.token = startOfFileToken;
      this.line = 1;
      this.lineStart = 0;
    }
    get [Symbol.toStringTag]() {
      return "Lexer";
    }
    advance() {
      this.lastToken = this.token;
      const token = this.token = this.lookahead();
      return token;
    }
    lookahead() {
      let token = this.token;
      if (token.kind !== TokenKind.EOF) {
        do {
          if (token.next) {
            token = token.next;
          } else {
            const nextToken = readNextToken(this, token.end);
            token.next = nextToken;
            nextToken.prev = token;
            token = nextToken;
          }
        } while (token.kind === TokenKind.COMMENT);
      }
      return token;
    }
  };
  function isPunctuatorTokenKind(kind) {
    return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
  }
  function isUnicodeScalarValue(code) {
    return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
  }
  function isSupplementaryCodePoint(body2, location2) {
    return isLeadingSurrogate(body2.charCodeAt(location2)) && isTrailingSurrogate(body2.charCodeAt(location2 + 1));
  }
  function isLeadingSurrogate(code) {
    return code >= 55296 && code <= 56319;
  }
  function isTrailingSurrogate(code) {
    return code >= 56320 && code <= 57343;
  }
  function printCodePointAt(lexer2, location2) {
    const code = lexer2.source.body.codePointAt(location2);
    if (code === void 0) {
      return TokenKind.EOF;
    } else if (code >= 32 && code <= 126) {
      const char = String.fromCodePoint(code);
      return char === '"' ? `'"'` : `"${char}"`;
    }
    return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
  }
  function createToken(lexer2, kind, start, end, value) {
    const line = lexer2.line;
    const col = 1 + start - lexer2.lineStart;
    return new Token(kind, start, end, line, col, value);
  }
  function readNextToken(lexer2, start) {
    const body2 = lexer2.source.body;
    const bodyLength = body2.length;
    let position = start;
    while (position < bodyLength) {
      const code = body2.charCodeAt(position);
      switch (code) {
        case 65279:
        case 9:
        case 32:
        case 44:
          ++position;
          continue;
        case 10:
          ++position;
          ++lexer2.line;
          lexer2.lineStart = position;
          continue;
        case 13:
          if (body2.charCodeAt(position + 1) === 10) {
            position += 2;
          } else {
            ++position;
          }
          ++lexer2.line;
          lexer2.lineStart = position;
          continue;
        case 35:
          return readComment(lexer2, position);
        case 33:
          return createToken(lexer2, TokenKind.BANG, position, position + 1);
        case 36:
          return createToken(lexer2, TokenKind.DOLLAR, position, position + 1);
        case 38:
          return createToken(lexer2, TokenKind.AMP, position, position + 1);
        case 40:
          return createToken(lexer2, TokenKind.PAREN_L, position, position + 1);
        case 41:
          return createToken(lexer2, TokenKind.PAREN_R, position, position + 1);
        case 46:
          if (body2.charCodeAt(position + 1) === 46 && body2.charCodeAt(position + 2) === 46) {
            return createToken(lexer2, TokenKind.SPREAD, position, position + 3);
          }
          break;
        case 58:
          return createToken(lexer2, TokenKind.COLON, position, position + 1);
        case 61:
          return createToken(lexer2, TokenKind.EQUALS, position, position + 1);
        case 64:
          return createToken(lexer2, TokenKind.AT, position, position + 1);
        case 91:
          return createToken(lexer2, TokenKind.BRACKET_L, position, position + 1);
        case 93:
          return createToken(lexer2, TokenKind.BRACKET_R, position, position + 1);
        case 123:
          return createToken(lexer2, TokenKind.BRACE_L, position, position + 1);
        case 124:
          return createToken(lexer2, TokenKind.PIPE, position, position + 1);
        case 125:
          return createToken(lexer2, TokenKind.BRACE_R, position, position + 1);
        case 34:
          if (body2.charCodeAt(position + 1) === 34 && body2.charCodeAt(position + 2) === 34) {
            return readBlockString(lexer2, position);
          }
          return readString(lexer2, position);
      }
      if (isDigit(code) || code === 45) {
        return readNumber(lexer2, position, code);
      }
      if (isNameStart(code)) {
        return readName(lexer2, position);
      }
      throw syntaxError(
        lexer2.source,
        position,
        code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body2, position) ? `Unexpected character: ${printCodePointAt(lexer2, position)}.` : `Invalid character: ${printCodePointAt(lexer2, position)}.`
      );
    }
    return createToken(lexer2, TokenKind.EOF, bodyLength, bodyLength);
  }
  function readComment(lexer2, start) {
    const body2 = lexer2.source.body;
    const bodyLength = body2.length;
    let position = start + 1;
    while (position < bodyLength) {
      const code = body2.charCodeAt(position);
      if (code === 10 || code === 13) {
        break;
      }
      if (isUnicodeScalarValue(code)) {
        ++position;
      } else if (isSupplementaryCodePoint(body2, position)) {
        position += 2;
      } else {
        break;
      }
    }
    return createToken(
      lexer2,
      TokenKind.COMMENT,
      start,
      position,
      body2.slice(start + 1, position)
    );
  }
  function readNumber(lexer2, start, firstCode) {
    const body2 = lexer2.source.body;
    let position = start;
    let code = firstCode;
    let isFloat = false;
    if (code === 45) {
      code = body2.charCodeAt(++position);
    }
    if (code === 48) {
      code = body2.charCodeAt(++position);
      if (isDigit(code)) {
        throw syntaxError(
          lexer2.source,
          position,
          `Invalid number, unexpected digit after 0: ${printCodePointAt(
            lexer2,
            position
          )}.`
        );
      }
    } else {
      position = readDigits(lexer2, position, code);
      code = body2.charCodeAt(position);
    }
    if (code === 46) {
      isFloat = true;
      code = body2.charCodeAt(++position);
      position = readDigits(lexer2, position, code);
      code = body2.charCodeAt(position);
    }
    if (code === 69 || code === 101) {
      isFloat = true;
      code = body2.charCodeAt(++position);
      if (code === 43 || code === 45) {
        code = body2.charCodeAt(++position);
      }
      position = readDigits(lexer2, position, code);
      code = body2.charCodeAt(position);
    }
    if (code === 46 || isNameStart(code)) {
      throw syntaxError(
        lexer2.source,
        position,
        `Invalid number, expected digit but got: ${printCodePointAt(
          lexer2,
          position
        )}.`
      );
    }
    return createToken(
      lexer2,
      isFloat ? TokenKind.FLOAT : TokenKind.INT,
      start,
      position,
      body2.slice(start, position)
    );
  }
  function readDigits(lexer2, start, firstCode) {
    if (!isDigit(firstCode)) {
      throw syntaxError(
        lexer2.source,
        start,
        `Invalid number, expected digit but got: ${printCodePointAt(
          lexer2,
          start
        )}.`
      );
    }
    const body2 = lexer2.source.body;
    let position = start + 1;
    while (isDigit(body2.charCodeAt(position))) {
      ++position;
    }
    return position;
  }
  function readString(lexer2, start) {
    const body2 = lexer2.source.body;
    const bodyLength = body2.length;
    let position = start + 1;
    let chunkStart = position;
    let value = "";
    while (position < bodyLength) {
      const code = body2.charCodeAt(position);
      if (code === 34) {
        value += body2.slice(chunkStart, position);
        return createToken(lexer2, TokenKind.STRING, start, position + 1, value);
      }
      if (code === 92) {
        value += body2.slice(chunkStart, position);
        const escape = body2.charCodeAt(position + 1) === 117 ? body2.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer2, position) : readEscapedUnicodeFixedWidth(lexer2, position) : readEscapedCharacter(lexer2, position);
        value += escape.value;
        position += escape.size;
        chunkStart = position;
        continue;
      }
      if (code === 10 || code === 13) {
        break;
      }
      if (isUnicodeScalarValue(code)) {
        ++position;
      } else if (isSupplementaryCodePoint(body2, position)) {
        position += 2;
      } else {
        throw syntaxError(
          lexer2.source,
          position,
          `Invalid character within String: ${printCodePointAt(
            lexer2,
            position
          )}.`
        );
      }
    }
    throw syntaxError(lexer2.source, position, "Unterminated string.");
  }
  function readEscapedUnicodeVariableWidth(lexer2, position) {
    const body2 = lexer2.source.body;
    let point = 0;
    let size = 3;
    while (size < 12) {
      const code = body2.charCodeAt(position + size++);
      if (code === 125) {
        if (size < 5 || !isUnicodeScalarValue(point)) {
          break;
        }
        return {
          value: String.fromCodePoint(point),
          size
        };
      }
      point = point << 4 | readHexDigit(code);
      if (point < 0) {
        break;
      }
    }
    throw syntaxError(
      lexer2.source,
      position,
      `Invalid Unicode escape sequence: "${body2.slice(
        position,
        position + size
      )}".`
    );
  }
  function readEscapedUnicodeFixedWidth(lexer2, position) {
    const body2 = lexer2.source.body;
    const code = read16BitHexCode(body2, position + 2);
    if (isUnicodeScalarValue(code)) {
      return {
        value: String.fromCodePoint(code),
        size: 6
      };
    }
    if (isLeadingSurrogate(code)) {
      if (body2.charCodeAt(position + 6) === 92 && body2.charCodeAt(position + 7) === 117) {
        const trailingCode = read16BitHexCode(body2, position + 8);
        if (isTrailingSurrogate(trailingCode)) {
          return {
            value: String.fromCodePoint(code, trailingCode),
            size: 12
          };
        }
      }
    }
    throw syntaxError(
      lexer2.source,
      position,
      `Invalid Unicode escape sequence: "${body2.slice(position, position + 6)}".`
    );
  }
  function read16BitHexCode(body2, position) {
    return readHexDigit(body2.charCodeAt(position)) << 12 | readHexDigit(body2.charCodeAt(position + 1)) << 8 | readHexDigit(body2.charCodeAt(position + 2)) << 4 | readHexDigit(body2.charCodeAt(position + 3));
  }
  function readHexDigit(code) {
    return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
  }
  function readEscapedCharacter(lexer2, position) {
    const body2 = lexer2.source.body;
    const code = body2.charCodeAt(position + 1);
    switch (code) {
      case 34:
        return {
          value: '"',
          size: 2
        };
      case 92:
        return {
          value: "\\",
          size: 2
        };
      case 47:
        return {
          value: "/",
          size: 2
        };
      case 98:
        return {
          value: "\b",
          size: 2
        };
      case 102:
        return {
          value: "\f",
          size: 2
        };
      case 110:
        return {
          value: "\n",
          size: 2
        };
      case 114:
        return {
          value: "\r",
          size: 2
        };
      case 116:
        return {
          value: "	",
          size: 2
        };
    }
    throw syntaxError(
      lexer2.source,
      position,
      `Invalid character escape sequence: "${body2.slice(
        position,
        position + 2
      )}".`
    );
  }
  function readBlockString(lexer2, start) {
    const body2 = lexer2.source.body;
    const bodyLength = body2.length;
    let lineStart = lexer2.lineStart;
    let position = start + 3;
    let chunkStart = position;
    let currentLine = "";
    const blockLines = [];
    while (position < bodyLength) {
      const code = body2.charCodeAt(position);
      if (code === 34 && body2.charCodeAt(position + 1) === 34 && body2.charCodeAt(position + 2) === 34) {
        currentLine += body2.slice(chunkStart, position);
        blockLines.push(currentLine);
        const token = createToken(
          lexer2,
          TokenKind.BLOCK_STRING,
          start,
          position + 3,
          dedentBlockStringLines(blockLines).join("\n")
        );
        lexer2.line += blockLines.length - 1;
        lexer2.lineStart = lineStart;
        return token;
      }
      if (code === 92 && body2.charCodeAt(position + 1) === 34 && body2.charCodeAt(position + 2) === 34 && body2.charCodeAt(position + 3) === 34) {
        currentLine += body2.slice(chunkStart, position);
        chunkStart = position + 1;
        position += 4;
        continue;
      }
      if (code === 10 || code === 13) {
        currentLine += body2.slice(chunkStart, position);
        blockLines.push(currentLine);
        if (code === 13 && body2.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        currentLine = "";
        chunkStart = position;
        lineStart = position;
        continue;
      }
      if (isUnicodeScalarValue(code)) {
        ++position;
      } else if (isSupplementaryCodePoint(body2, position)) {
        position += 2;
      } else {
        throw syntaxError(
          lexer2.source,
          position,
          `Invalid character within String: ${printCodePointAt(
            lexer2,
            position
          )}.`
        );
      }
    }
    throw syntaxError(lexer2.source, position, "Unterminated string.");
  }
  function readName(lexer2, start) {
    const body2 = lexer2.source.body;
    const bodyLength = body2.length;
    let position = start + 1;
    while (position < bodyLength) {
      const code = body2.charCodeAt(position);
      if (isNameContinue(code)) {
        ++position;
      } else {
        break;
      }
    }
    return createToken(
      lexer2,
      TokenKind.NAME,
      start,
      position,
      body2.slice(start, position)
    );
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/jsutils/inspect.mjs
  var MAX_ARRAY_LENGTH = 10;
  var MAX_RECURSIVE_DEPTH = 2;
  function inspect(value) {
    return formatValue(value, []);
  }
  function formatValue(value, seenValues) {
    switch (typeof value) {
      case "string":
        return JSON.stringify(value);
      case "function":
        return value.name ? `[function ${value.name}]` : "[function]";
      case "object":
        return formatObjectValue(value, seenValues);
      default:
        return String(value);
    }
  }
  function formatObjectValue(value, previouslySeenValues) {
    if (value === null) {
      return "null";
    }
    if (previouslySeenValues.includes(value)) {
      return "[Circular]";
    }
    const seenValues = [...previouslySeenValues, value];
    if (isJSONable(value)) {
      const jsonValue = value.toJSON();
      if (jsonValue !== value) {
        return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
      }
    } else if (Array.isArray(value)) {
      return formatArray(value, seenValues);
    }
    return formatObject(value, seenValues);
  }
  function isJSONable(value) {
    return typeof value.toJSON === "function";
  }
  function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) {
      return "{}";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return "[" + getObjectTag(object) + "]";
    }
    const properties = entries.map(
      ([key, value]) => key + ": " + formatValue(value, seenValues)
    );
    return "{ " + properties.join(", ") + " }";
  }
  function formatArray(array, seenValues) {
    if (array.length === 0) {
      return "[]";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return "[Array]";
    }
    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];
    for (let i = 0; i < len; ++i) {
      items.push(formatValue(array[i], seenValues));
    }
    if (remaining === 1) {
      items.push("... 1 more item");
    } else if (remaining > 1) {
      items.push(`... ${remaining} more items`);
    }
    return "[" + items.join(", ") + "]";
  }
  function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
    if (tag === "Object" && typeof object.constructor === "function") {
      const name = object.constructor.name;
      if (typeof name === "string" && name !== "") {
        return name;
      }
    }
    return tag;
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/jsutils/instanceOf.mjs
  var instanceOf = false ? function instanceOf2(value, constructor) {
    return value instanceof constructor;
  } : function instanceOf3(value, constructor) {
    if (value instanceof constructor) {
      return true;
    }
    if (typeof value === "object" && value !== null) {
      var _value$constructor;
      const className = constructor.prototype[Symbol.toStringTag];
      const valueClassName = Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
      if (className === valueClassName) {
        const stringifiedValue = inspect(value);
        throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return false;
  };

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/source.mjs
  var Source = class {
    constructor(body2, name = "GraphQL request", locationOffset = {
      line: 1,
      column: 1
    }) {
      typeof body2 === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body2)}.`);
      this.body = body2;
      this.name = name;
      this.locationOffset = locationOffset;
      this.locationOffset.line > 0 || devAssert(
        false,
        "line in locationOffset is 1-indexed and must be positive."
      );
      this.locationOffset.column > 0 || devAssert(
        false,
        "column in locationOffset is 1-indexed and must be positive."
      );
    }
    get [Symbol.toStringTag]() {
      return "Source";
    }
  };
  function isSource(source) {
    return instanceOf(source, Source);
  }

  // node_modules/.pnpm/graphql@16.6.0/node_modules/graphql/language/parser.mjs
  function parse3(source, options) {
    const parser = new Parser(source, options);
    return parser.parseDocument();
  }
  var Parser = class {
    constructor(source, options = {}) {
      const sourceObj = isSource(source) ? source : new Source(source);
      this._lexer = new Lexer(sourceObj);
      this._options = options;
      this._tokenCounter = 0;
    }
    parseName() {
      const token = this.expectToken(TokenKind.NAME);
      return this.node(token, {
        kind: Kind.NAME,
        value: token.value
      });
    }
    parseDocument() {
      return this.node(this._lexer.token, {
        kind: Kind.DOCUMENT,
        definitions: this.many(
          TokenKind.SOF,
          this.parseDefinition,
          TokenKind.EOF
        )
      });
    }
    parseDefinition() {
      if (this.peek(TokenKind.BRACE_L)) {
        return this.parseOperationDefinition();
      }
      const hasDescription = this.peekDescription();
      const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
      if (keywordToken.kind === TokenKind.NAME) {
        switch (keywordToken.value) {
          case "schema":
            return this.parseSchemaDefinition();
          case "scalar":
            return this.parseScalarTypeDefinition();
          case "type":
            return this.parseObjectTypeDefinition();
          case "interface":
            return this.parseInterfaceTypeDefinition();
          case "union":
            return this.parseUnionTypeDefinition();
          case "enum":
            return this.parseEnumTypeDefinition();
          case "input":
            return this.parseInputObjectTypeDefinition();
          case "directive":
            return this.parseDirectiveDefinition();
        }
        if (hasDescription) {
          throw syntaxError(
            this._lexer.source,
            this._lexer.token.start,
            "Unexpected description, descriptions are supported only on type definitions."
          );
        }
        switch (keywordToken.value) {
          case "query":
          case "mutation":
          case "subscription":
            return this.parseOperationDefinition();
          case "fragment":
            return this.parseFragmentDefinition();
          case "extend":
            return this.parseTypeSystemExtension();
        }
      }
      throw this.unexpected(keywordToken);
    }
    parseOperationDefinition() {
      const start = this._lexer.token;
      if (this.peek(TokenKind.BRACE_L)) {
        return this.node(start, {
          kind: Kind.OPERATION_DEFINITION,
          operation: OperationTypeNode.QUERY,
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet()
        });
      }
      const operation = this.parseOperationType();
      let name;
      if (this.peek(TokenKind.NAME)) {
        name = this.parseName();
      }
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation,
        name,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    parseOperationType() {
      const operationToken = this.expectToken(TokenKind.NAME);
      switch (operationToken.value) {
        case "query":
          return OperationTypeNode.QUERY;
        case "mutation":
          return OperationTypeNode.MUTATION;
        case "subscription":
          return OperationTypeNode.SUBSCRIPTION;
      }
      throw this.unexpected(operationToken);
    }
    parseVariableDefinitions() {
      return this.optionalMany(
        TokenKind.PAREN_L,
        this.parseVariableDefinition,
        TokenKind.PAREN_R
      );
    }
    parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: Kind.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
        directives: this.parseConstDirectives()
      });
    }
    parseVariable() {
      const start = this._lexer.token;
      this.expectToken(TokenKind.DOLLAR);
      return this.node(start, {
        kind: Kind.VARIABLE,
        name: this.parseName()
      });
    }
    parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: Kind.SELECTION_SET,
        selections: this.many(
          TokenKind.BRACE_L,
          this.parseSelection,
          TokenKind.BRACE_R
        )
      });
    }
    parseSelection() {
      return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    }
    parseField() {
      const start = this._lexer.token;
      const nameOrAlias = this.parseName();
      let alias;
      let name;
      if (this.expectOptionalToken(TokenKind.COLON)) {
        alias = nameOrAlias;
        name = this.parseName();
      } else {
        name = nameOrAlias;
      }
      return this.node(start, {
        kind: Kind.FIELD,
        alias,
        name,
        arguments: this.parseArguments(false),
        directives: this.parseDirectives(false),
        selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
      });
    }
    parseArguments(isConst) {
      const item = isConst ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
    }
    parseArgument(isConst = false) {
      const start = this._lexer.token;
      const name = this.parseName();
      this.expectToken(TokenKind.COLON);
      return this.node(start, {
        kind: Kind.ARGUMENT,
        name,
        value: this.parseValueLiteral(isConst)
      });
    }
    parseConstArgument() {
      return this.parseArgument(true);
    }
    parseFragment() {
      const start = this._lexer.token;
      this.expectToken(TokenKind.SPREAD);
      const hasTypeCondition = this.expectOptionalKeyword("on");
      if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
        return this.node(start, {
          kind: Kind.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(false)
        });
      }
      return this.node(start, {
        kind: Kind.INLINE_FRAGMENT,
        typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    parseFragmentDefinition() {
      const start = this._lexer.token;
      this.expectKeyword("fragment");
      if (this._options.allowLegacyFragmentVariables === true) {
        return this.node(start, {
          kind: Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          variableDefinitions: this.parseVariableDefinitions(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    parseFragmentName() {
      if (this._lexer.token.value === "on") {
        throw this.unexpected();
      }
      return this.parseName();
    }
    parseValueLiteral(isConst) {
      const token = this._lexer.token;
      switch (token.kind) {
        case TokenKind.BRACKET_L:
          return this.parseList(isConst);
        case TokenKind.BRACE_L:
          return this.parseObject(isConst);
        case TokenKind.INT:
          this.advanceLexer();
          return this.node(token, {
            kind: Kind.INT,
            value: token.value
          });
        case TokenKind.FLOAT:
          this.advanceLexer();
          return this.node(token, {
            kind: Kind.FLOAT,
            value: token.value
          });
        case TokenKind.STRING:
        case TokenKind.BLOCK_STRING:
          return this.parseStringLiteral();
        case TokenKind.NAME:
          this.advanceLexer();
          switch (token.value) {
            case "true":
              return this.node(token, {
                kind: Kind.BOOLEAN,
                value: true
              });
            case "false":
              return this.node(token, {
                kind: Kind.BOOLEAN,
                value: false
              });
            case "null":
              return this.node(token, {
                kind: Kind.NULL
              });
            default:
              return this.node(token, {
                kind: Kind.ENUM,
                value: token.value
              });
          }
        case TokenKind.DOLLAR:
          if (isConst) {
            this.expectToken(TokenKind.DOLLAR);
            if (this._lexer.token.kind === TokenKind.NAME) {
              const varName = this._lexer.token.value;
              throw syntaxError(
                this._lexer.source,
                token.start,
                `Unexpected variable "$${varName}" in constant value.`
              );
            } else {
              throw this.unexpected(token);
            }
          }
          return this.parseVariable();
        default:
          throw this.unexpected();
      }
    }
    parseConstValueLiteral() {
      return this.parseValueLiteral(true);
    }
    parseStringLiteral() {
      const token = this._lexer.token;
      this.advanceLexer();
      return this.node(token, {
        kind: Kind.STRING,
        value: token.value,
        block: token.kind === TokenKind.BLOCK_STRING
      });
    }
    parseList(isConst) {
      const item = () => this.parseValueLiteral(isConst);
      return this.node(this._lexer.token, {
        kind: Kind.LIST,
        values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
      });
    }
    parseObject(isConst) {
      const item = () => this.parseObjectField(isConst);
      return this.node(this._lexer.token, {
        kind: Kind.OBJECT,
        fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
      });
    }
    parseObjectField(isConst) {
      const start = this._lexer.token;
      const name = this.parseName();
      this.expectToken(TokenKind.COLON);
      return this.node(start, {
        kind: Kind.OBJECT_FIELD,
        name,
        value: this.parseValueLiteral(isConst)
      });
    }
    parseDirectives(isConst) {
      const directives = [];
      while (this.peek(TokenKind.AT)) {
        directives.push(this.parseDirective(isConst));
      }
      return directives;
    }
    parseConstDirectives() {
      return this.parseDirectives(true);
    }
    parseDirective(isConst) {
      const start = this._lexer.token;
      this.expectToken(TokenKind.AT);
      return this.node(start, {
        kind: Kind.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(isConst)
      });
    }
    parseTypeReference() {
      const start = this._lexer.token;
      let type;
      if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
        const innerType = this.parseTypeReference();
        this.expectToken(TokenKind.BRACKET_R);
        type = this.node(start, {
          kind: Kind.LIST_TYPE,
          type: innerType
        });
      } else {
        type = this.parseNamedType();
      }
      if (this.expectOptionalToken(TokenKind.BANG)) {
        return this.node(start, {
          kind: Kind.NON_NULL_TYPE,
          type
        });
      }
      return type;
    }
    parseNamedType() {
      return this.node(this._lexer.token, {
        kind: Kind.NAMED_TYPE,
        name: this.parseName()
      });
    }
    peekDescription() {
      return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
    }
    parseDescription() {
      if (this.peekDescription()) {
        return this.parseStringLiteral();
      }
    }
    parseSchemaDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword("schema");
      const directives = this.parseConstDirectives();
      const operationTypes = this.many(
        TokenKind.BRACE_L,
        this.parseOperationTypeDefinition,
        TokenKind.BRACE_R
      );
      return this.node(start, {
        kind: Kind.SCHEMA_DEFINITION,
        description,
        directives,
        operationTypes
      });
    }
    parseOperationTypeDefinition() {
      const start = this._lexer.token;
      const operation = this.parseOperationType();
      this.expectToken(TokenKind.COLON);
      const type = this.parseNamedType();
      return this.node(start, {
        kind: Kind.OPERATION_TYPE_DEFINITION,
        operation,
        type
      });
    }
    parseScalarTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword("scalar");
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      return this.node(start, {
        kind: Kind.SCALAR_TYPE_DEFINITION,
        description,
        name,
        directives
      });
    }
    parseObjectTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword("type");
      const name = this.parseName();
      const interfaces = this.parseImplementsInterfaces();
      const directives = this.parseConstDirectives();
      const fields = this.parseFieldsDefinition();
      return this.node(start, {
        kind: Kind.OBJECT_TYPE_DEFINITION,
        description,
        name,
        interfaces,
        directives,
        fields
      });
    }
    parseImplementsInterfaces() {
      return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
    }
    parseFieldsDefinition() {
      return this.optionalMany(
        TokenKind.BRACE_L,
        this.parseFieldDefinition,
        TokenKind.BRACE_R
      );
    }
    parseFieldDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      const name = this.parseName();
      const args = this.parseArgumentDefs();
      this.expectToken(TokenKind.COLON);
      const type = this.parseTypeReference();
      const directives = this.parseConstDirectives();
      return this.node(start, {
        kind: Kind.FIELD_DEFINITION,
        description,
        name,
        arguments: args,
        type,
        directives
      });
    }
    parseArgumentDefs() {
      return this.optionalMany(
        TokenKind.PAREN_L,
        this.parseInputValueDef,
        TokenKind.PAREN_R
      );
    }
    parseInputValueDef() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      const name = this.parseName();
      this.expectToken(TokenKind.COLON);
      const type = this.parseTypeReference();
      let defaultValue;
      if (this.expectOptionalToken(TokenKind.EQUALS)) {
        defaultValue = this.parseConstValueLiteral();
      }
      const directives = this.parseConstDirectives();
      return this.node(start, {
        kind: Kind.INPUT_VALUE_DEFINITION,
        description,
        name,
        type,
        defaultValue,
        directives
      });
    }
    parseInterfaceTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword("interface");
      const name = this.parseName();
      const interfaces = this.parseImplementsInterfaces();
      const directives = this.parseConstDirectives();
      const fields = this.parseFieldsDefinition();
      return this.node(start, {
        kind: Kind.INTERFACE_TYPE_DEFINITION,
        description,
        name,
        interfaces,
        directives,
        fields
      });
    }
    parseUnionTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword("union");
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const types = this.parseUnionMemberTypes();
      return this.node(start, {
        kind: Kind.UNION_TYPE_DEFINITION,
        description,
        name,
        directives,
        types
      });
    }
    parseUnionMemberTypes() {
      return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
    }
    parseEnumTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword("enum");
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const values = this.parseEnumValuesDefinition();
      return this.node(start, {
        kind: Kind.ENUM_TYPE_DEFINITION,
        description,
        name,
        directives,
        values
      });
    }
    parseEnumValuesDefinition() {
      return this.optionalMany(
        TokenKind.BRACE_L,
        this.parseEnumValueDefinition,
        TokenKind.BRACE_R
      );
    }
    parseEnumValueDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      const name = this.parseEnumValueName();
      const directives = this.parseConstDirectives();
      return this.node(start, {
        kind: Kind.ENUM_VALUE_DEFINITION,
        description,
        name,
        directives
      });
    }
    parseEnumValueName() {
      if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
        throw syntaxError(
          this._lexer.source,
          this._lexer.token.start,
          `${getTokenDesc(
            this._lexer.token
          )} is reserved and cannot be used for an enum value.`
        );
      }
      return this.parseName();
    }
    parseInputObjectTypeDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword("input");
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const fields = this.parseInputFieldsDefinition();
      return this.node(start, {
        kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
        description,
        name,
        directives,
        fields
      });
    }
    parseInputFieldsDefinition() {
      return this.optionalMany(
        TokenKind.BRACE_L,
        this.parseInputValueDef,
        TokenKind.BRACE_R
      );
    }
    parseTypeSystemExtension() {
      const keywordToken = this._lexer.lookahead();
      if (keywordToken.kind === TokenKind.NAME) {
        switch (keywordToken.value) {
          case "schema":
            return this.parseSchemaExtension();
          case "scalar":
            return this.parseScalarTypeExtension();
          case "type":
            return this.parseObjectTypeExtension();
          case "interface":
            return this.parseInterfaceTypeExtension();
          case "union":
            return this.parseUnionTypeExtension();
          case "enum":
            return this.parseEnumTypeExtension();
          case "input":
            return this.parseInputObjectTypeExtension();
        }
      }
      throw this.unexpected(keywordToken);
    }
    parseSchemaExtension() {
      const start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("schema");
      const directives = this.parseConstDirectives();
      const operationTypes = this.optionalMany(
        TokenKind.BRACE_L,
        this.parseOperationTypeDefinition,
        TokenKind.BRACE_R
      );
      if (directives.length === 0 && operationTypes.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: Kind.SCHEMA_EXTENSION,
        directives,
        operationTypes
      });
    }
    parseScalarTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("scalar");
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      if (directives.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: Kind.SCALAR_TYPE_EXTENSION,
        name,
        directives
      });
    }
    parseObjectTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("type");
      const name = this.parseName();
      const interfaces = this.parseImplementsInterfaces();
      const directives = this.parseConstDirectives();
      const fields = this.parseFieldsDefinition();
      if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: Kind.OBJECT_TYPE_EXTENSION,
        name,
        interfaces,
        directives,
        fields
      });
    }
    parseInterfaceTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("interface");
      const name = this.parseName();
      const interfaces = this.parseImplementsInterfaces();
      const directives = this.parseConstDirectives();
      const fields = this.parseFieldsDefinition();
      if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: Kind.INTERFACE_TYPE_EXTENSION,
        name,
        interfaces,
        directives,
        fields
      });
    }
    parseUnionTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("union");
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const types = this.parseUnionMemberTypes();
      if (directives.length === 0 && types.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: Kind.UNION_TYPE_EXTENSION,
        name,
        directives,
        types
      });
    }
    parseEnumTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("enum");
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const values = this.parseEnumValuesDefinition();
      if (directives.length === 0 && values.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: Kind.ENUM_TYPE_EXTENSION,
        name,
        directives,
        values
      });
    }
    parseInputObjectTypeExtension() {
      const start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("input");
      const name = this.parseName();
      const directives = this.parseConstDirectives();
      const fields = this.parseInputFieldsDefinition();
      if (directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }
      return this.node(start, {
        kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
        name,
        directives,
        fields
      });
    }
    parseDirectiveDefinition() {
      const start = this._lexer.token;
      const description = this.parseDescription();
      this.expectKeyword("directive");
      this.expectToken(TokenKind.AT);
      const name = this.parseName();
      const args = this.parseArgumentDefs();
      const repeatable = this.expectOptionalKeyword("repeatable");
      this.expectKeyword("on");
      const locations = this.parseDirectiveLocations();
      return this.node(start, {
        kind: Kind.DIRECTIVE_DEFINITION,
        description,
        name,
        arguments: args,
        repeatable,
        locations
      });
    }
    parseDirectiveLocations() {
      return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
    }
    parseDirectiveLocation() {
      const start = this._lexer.token;
      const name = this.parseName();
      if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
        return name;
      }
      throw this.unexpected(start);
    }
    node(startToken, node) {
      if (this._options.noLocation !== true) {
        node.loc = new Location(
          startToken,
          this._lexer.lastToken,
          this._lexer.source
        );
      }
      return node;
    }
    peek(kind) {
      return this._lexer.token.kind === kind;
    }
    expectToken(kind) {
      const token = this._lexer.token;
      if (token.kind === kind) {
        this.advanceLexer();
        return token;
      }
      throw syntaxError(
        this._lexer.source,
        token.start,
        `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
      );
    }
    expectOptionalToken(kind) {
      const token = this._lexer.token;
      if (token.kind === kind) {
        this.advanceLexer();
        return true;
      }
      return false;
    }
    expectKeyword(value) {
      const token = this._lexer.token;
      if (token.kind === TokenKind.NAME && token.value === value) {
        this.advanceLexer();
      } else {
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Expected "${value}", found ${getTokenDesc(token)}.`
        );
      }
    }
    expectOptionalKeyword(value) {
      const token = this._lexer.token;
      if (token.kind === TokenKind.NAME && token.value === value) {
        this.advanceLexer();
        return true;
      }
      return false;
    }
    unexpected(atToken) {
      const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
      return syntaxError(
        this._lexer.source,
        token.start,
        `Unexpected ${getTokenDesc(token)}.`
      );
    }
    any(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      const nodes = [];
      while (!this.expectOptionalToken(closeKind)) {
        nodes.push(parseFn.call(this));
      }
      return nodes;
    }
    optionalMany(openKind, parseFn, closeKind) {
      if (this.expectOptionalToken(openKind)) {
        const nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));
        return nodes;
      }
      return [];
    }
    many(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    delimitedMany(delimiterKind, parseFn) {
      this.expectOptionalToken(delimiterKind);
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (this.expectOptionalToken(delimiterKind));
      return nodes;
    }
    advanceLexer() {
      const { maxTokens } = this._options;
      const token = this._lexer.advance();
      if (maxTokens !== void 0 && token.kind !== TokenKind.EOF) {
        ++this._tokenCounter;
        if (this._tokenCounter > maxTokens) {
          throw syntaxError(
            this._lexer.source,
            token.start,
            `Document contains more that ${maxTokens} tokens. Parsing aborted.`
          );
        }
      }
    }
  };
  function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
  }
  function getTokenKindDesc(kind) {
    return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
  }

  // src/utils/request/getPublicUrlFromRequest.ts
  var getPublicUrlFromRequest = (request) => {
    return request.referrer.startsWith(request.url.origin) ? request.url.pathname : new URL(
      request.url.pathname,
      `${request.url.protocol}//${request.url.host}`
    ).href;
  };

  // src/utils/internal/parseGraphQLRequest.ts
  function parseDocumentNode(node) {
    var _a2;
    const operationDef = node.definitions.find((def) => {
      return def.kind === "OperationDefinition";
    });
    return {
      operationType: operationDef == null ? void 0 : operationDef.operation,
      operationName: (_a2 = operationDef == null ? void 0 : operationDef.name) == null ? void 0 : _a2.value
    };
  }
  function parseQuery(query) {
    try {
      const ast = parse3(query);
      return parseDocumentNode(ast);
    } catch (error2) {
      return error2;
    }
  }
  function extractMultipartVariables(variables, map, files) {
    const operations = { variables };
    for (const [key, pathArray] of Object.entries(map)) {
      if (!(key in files)) {
        throw new Error(`Given files do not have a key '${key}' .`);
      }
      for (const dotPath of pathArray) {
        const [lastPath, ...reversedPaths] = dotPath.split(".").reverse();
        const paths = reversedPaths.reverse();
        let target = operations;
        for (const path of paths) {
          if (!(path in target)) {
            throw new Error(`Property '${paths}' is not in operations.`);
          }
          target = target[path];
        }
        target[lastPath] = files[key];
      }
    }
    return operations.variables;
  }
  function getGraphQLInput(request) {
    var _a2, _b2;
    switch (request.method) {
      case "GET": {
        const query = request.url.searchParams.get("query");
        const variables = request.url.searchParams.get("variables") || "";
        return {
          query,
          variables: jsonParse(variables)
        };
      }
      case "POST": {
        if ((_a2 = request.body) == null ? void 0 : _a2.query) {
          const { query, variables } = request.body;
          return {
            query,
            variables
          };
        }
        if ((_b2 = request.body) == null ? void 0 : _b2.operations) {
          const { operations, map, ...files } = request.body;
          const parsedOperations = jsonParse(
            operations
          ) || {};
          if (!parsedOperations.query) {
            return null;
          }
          const parsedMap = jsonParse(map || "") || {};
          const variables = parsedOperations.variables ? extractMultipartVariables(
            parsedOperations.variables,
            parsedMap,
            files
          ) : {};
          return {
            query: parsedOperations.query,
            variables
          };
        }
      }
      default:
        return null;
    }
  }
  function parseGraphQLRequest(request) {
    const input = getGraphQLInput(request);
    if (!input || !input.query) {
      return void 0;
    }
    const { query, variables } = input;
    const parsedResult = parseQuery(query);
    if (parsedResult instanceof Error) {
      const requestPublicUrl = getPublicUrlFromRequest(request);
      throw new Error(
        devUtils.formatMessage(
          'Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.\n\n%s',
          request.method,
          requestPublicUrl,
          parsedResult.message
        )
      );
    }
    return {
      operationType: parsedResult.operationType,
      operationName: parsedResult.operationName,
      variables
    };
  }

  // src/utils/logging/getStatusCodeColor.ts
  function getStatusCodeColor(status2) {
    if (status2 < 300) {
      return "#69AB32" /* Success */;
    }
    if (status2 < 400) {
      return "#F0BB4B" /* Warning */;
    }
    return "#E95F5D" /* Danger */;
  }

  // src/utils/logging/getTimestamp.ts
  function getTimestamp() {
    const now = new Date();
    return [now.getHours(), now.getMinutes(), now.getSeconds()].map(String).map((chunk) => chunk.slice(0, 2)).map((chunk) => chunk.padStart(2, "0")).join(":");
  }

  // src/utils/logging/prepareRequest.ts
  function prepareRequest(request) {
    return {
      ...request,
      body: request.body,
      headers: request.headers.all()
    };
  }

  // src/utils/logging/prepareResponse.ts
  function prepareResponse(res) {
    const responseHeaders = objectToHeaders(res.headers);
    return {
      ...res,
      body: parseBody(res.body, responseHeaders)
    };
  }

  // node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js
  function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
      var char = str[i];
      if (char === "*" || char === "+" || char === "?") {
        tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
        continue;
      }
      if (char === "\\") {
        tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
        continue;
      }
      if (char === "{") {
        tokens.push({ type: "OPEN", index: i, value: str[i++] });
        continue;
      }
      if (char === "}") {
        tokens.push({ type: "CLOSE", index: i, value: str[i++] });
        continue;
      }
      if (char === ":") {
        var name = "";
        var j = i + 1;
        while (j < str.length) {
          var code = str.charCodeAt(j);
          if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
            name += str[j++];
            continue;
          }
          break;
        }
        if (!name)
          throw new TypeError("Missing parameter name at ".concat(i));
        tokens.push({ type: "NAME", index: i, value: name });
        i = j;
        continue;
      }
      if (char === "(") {
        var count = 1;
        var pattern = "";
        var j = i + 1;
        if (str[j] === "?") {
          throw new TypeError('Pattern cannot start with "?" at '.concat(j));
        }
        while (j < str.length) {
          if (str[j] === "\\") {
            pattern += str[j++] + str[j++];
            continue;
          }
          if (str[j] === ")") {
            count--;
            if (count === 0) {
              j++;
              break;
            }
          } else if (str[j] === "(") {
            count++;
            if (str[j + 1] !== "?") {
              throw new TypeError("Capturing groups are not allowed at ".concat(j));
            }
          }
          pattern += str[j++];
        }
        if (count)
          throw new TypeError("Unbalanced pattern at ".concat(i));
        if (!pattern)
          throw new TypeError("Missing pattern at ".concat(i));
        tokens.push({ type: "PATTERN", index: i, value: pattern });
        i = j;
        continue;
      }
      tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
  }
  function parse4(str, options) {
    if (options === void 0) {
      options = {};
    }
    var tokens = lexer(str);
    var _a2 = options.prefixes, prefixes = _a2 === void 0 ? "./" : _a2;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
      if (i < tokens.length && tokens[i].type === type)
        return tokens[i++].value;
    };
    var mustConsume = function(type) {
      var value2 = tryConsume(type);
      if (value2 !== void 0)
        return value2;
      var _a3 = tokens[i], nextType = _a3.type, index = _a3.index;
      throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function() {
      var result2 = "";
      var value2;
      while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
        result2 += value2;
      }
      return result2;
    };
    while (i < tokens.length) {
      var char = tryConsume("CHAR");
      var name = tryConsume("NAME");
      var pattern = tryConsume("PATTERN");
      if (name || pattern) {
        var prefix = char || "";
        if (prefixes.indexOf(prefix) === -1) {
          path += prefix;
          prefix = "";
        }
        if (path) {
          result.push(path);
          path = "";
        }
        result.push({
          name: name || key++,
          prefix,
          suffix: "",
          pattern: pattern || defaultPattern,
          modifier: tryConsume("MODIFIER") || ""
        });
        continue;
      }
      var value = char || tryConsume("ESCAPED_CHAR");
      if (value) {
        path += value;
        continue;
      }
      if (path) {
        result.push(path);
        path = "";
      }
      var open = tryConsume("OPEN");
      if (open) {
        var prefix = consumeText();
        var name_1 = tryConsume("NAME") || "";
        var pattern_1 = tryConsume("PATTERN") || "";
        var suffix = consumeText();
        mustConsume("CLOSE");
        result.push({
          name: name_1 || (pattern_1 ? key++ : ""),
          pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
          prefix,
          suffix,
          modifier: tryConsume("MODIFIER") || ""
        });
        continue;
      }
      mustConsume("END");
    }
    return result;
  }
  function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
  }
  function regexpToFunction(re, keys, options) {
    if (options === void 0) {
      options = {};
    }
    var _a2 = options.decode, decode = _a2 === void 0 ? function(x) {
      return x;
    } : _a2;
    return function(pathname) {
      var m = re.exec(pathname);
      if (!m)
        return false;
      var path = m[0], index = m.index;
      var params = /* @__PURE__ */ Object.create(null);
      var _loop_1 = function(i2) {
        if (m[i2] === void 0)
          return "continue";
        var key = keys[i2 - 1];
        if (key.modifier === "*" || key.modifier === "+") {
          params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
            return decode(value, key);
          });
        } else {
          params[key.name] = decode(m[i2], key);
        }
      };
      for (var i = 1; i < m.length; i++) {
        _loop_1(i);
      }
      return { path, index, params };
    };
  }
  function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function flags(options) {
    return options && options.sensitive ? "" : "i";
  }
  function regexpToRegexp(path, keys) {
    if (!keys)
      return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
      keys.push({
        name: execResult[1] || index++,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
      execResult = groupsRegex.exec(path.source);
    }
    return path;
  }
  function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
      return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
  }
  function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse4(path, options), keys, options);
  }
  function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) {
      options = {};
    }
    var _a2 = options.strict, strict = _a2 === void 0 ? false : _a2, _b2 = options.start, start = _b2 === void 0 ? true : _b2, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
      return x;
    } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
      var token = tokens_1[_i];
      if (typeof token === "string") {
        route += escapeString(encode(token));
      } else {
        var prefix = escapeString(encode(token.prefix));
        var suffix = escapeString(encode(token.suffix));
        if (token.pattern) {
          if (keys)
            keys.push(token);
          if (prefix || suffix) {
            if (token.modifier === "+" || token.modifier === "*") {
              var mod = token.modifier === "*" ? "?" : "";
              route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
            } else {
              route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
            }
          } else {
            if (token.modifier === "+" || token.modifier === "*") {
              route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
            } else {
              route += "(".concat(token.pattern, ")").concat(token.modifier);
            }
          }
        } else {
          route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
        }
      }
    }
    if (end) {
      if (!strict)
        route += "".concat(delimiterRe, "?");
      route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    } else {
      var endToken = tokens[tokens.length - 1];
      var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
      if (!strict) {
        route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
      }
      if (!isEndDelimited) {
        route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
      }
    }
    return new RegExp(route, flags(options));
  }
  function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
      return regexpToRegexp(path, keys);
    if (Array.isArray(path))
      return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
  }

  // src/utils/matching/matchRequestUrl.ts
  var import_getCleanUrl = __toESM(require_getCleanUrl());

  // src/utils/url/cleanUrl.ts
  var REDUNDANT_CHARACTERS_EXP = /[\?|#].*$/g;
  function getSearchParams(path) {
    return new URL(`/${path}`, "http://localhost").searchParams;
  }
  function cleanUrl(path) {
    return path.replace(REDUNDANT_CHARACTERS_EXP, "");
  }

  // src/utils/url/isAbsoluteUrl.ts
  function isAbsoluteUrl(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  }

  // src/utils/url/getAbsoluteUrl.ts
  function getAbsoluteUrl(path, baseUrl) {
    if (isAbsoluteUrl(path)) {
      return path;
    }
    if (path.startsWith("*")) {
      return path;
    }
    const origin = baseUrl || typeof document !== "undefined" && document.baseURI;
    return origin ? decodeURI(new URL(encodeURI(path), origin).href) : path;
  }

  // src/utils/matching/normalizePath.ts
  function normalizePath(path, baseUrl) {
    if (path instanceof RegExp) {
      return path;
    }
    const maybeAbsoluteUrl = getAbsoluteUrl(path, baseUrl);
    return cleanUrl(maybeAbsoluteUrl);
  }

  // src/utils/matching/matchRequestUrl.ts
  function coercePath(path) {
    return path.replace(
      /([:a-zA-Z_-]*)(\*{1,2})+/g,
      (_, parameterName, wildcard) => {
        const expression = "(.*)";
        if (!parameterName) {
          return expression;
        }
        return parameterName.startsWith(":") ? `${parameterName}${wildcard}` : `${parameterName}${expression}`;
      }
    ).replace(/([^\/])(:)(?=\d+)/, "$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/, "$1\\$2");
  }
  function matchRequestUrl(url, path, baseUrl) {
    const normalizedPath = normalizePath(path, baseUrl);
    const cleanPath = typeof normalizedPath === "string" ? coercePath(normalizedPath) : normalizedPath;
    const cleanUrl2 = (0, import_getCleanUrl.getCleanUrl)(url);
    const result = match(cleanPath, { decode: decodeURIComponent })(cleanUrl2);
    const params = result && result.params || {};
    return {
      matches: result !== false,
      params
    };
  }

  // src/utils/internal/compose.ts
  function compose(...fns) {
    return (...args) => {
      return fns.reduceRight((leftFn, rightFn) => {
        return leftFn instanceof Promise ? Promise.resolve(leftFn).then(rightFn) : rightFn(leftFn);
      }, args[0]);
    };
  }

  // src/response.ts
  var defaultResponse = {
    status: 200,
    statusText: "OK",
    body: null,
    delay: 0,
    once: false,
    passthrough: false
  };
  var defaultResponseTransformers = [];
  function createResponseComposition(responseOverrides, defaultTransformers = defaultResponseTransformers) {
    return async (...transformers) => {
      const initialResponse = Object.assign(
        {},
        defaultResponse,
        {
          headers: new HeadersPolyfill({
            "x-powered-by": "msw"
          })
        },
        responseOverrides
      );
      const resolvedTransformers = [
        ...defaultTransformers,
        ...transformers
      ].filter(Boolean);
      const resolvedResponse = resolvedTransformers.length > 0 ? compose(...resolvedTransformers)(initialResponse) : initialResponse;
      return resolvedResponse;
    };
  }
  var response = Object.assign(createResponseComposition(), {
    once: createResponseComposition({ once: true }),
    networkError(message) {
      throw new NetworkError(message);
    }
  });

  // src/utils/internal/getCallFrame.ts
  var SOURCE_FRAME = /[\/\\]msw[\/\\]src[\/\\](.+)/;
  var BUILD_FRAME = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;
  function getCallFrame(error2) {
    const stack = error2.stack;
    if (!stack) {
      return;
    }
    const frames = stack.split("\n").slice(1);
    const declarationFrame = frames.find((frame) => {
      return !(SOURCE_FRAME.test(frame) || BUILD_FRAME.test(frame));
    });
    if (!declarationFrame) {
      return;
    }
    const declarationPath = declarationFrame.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "");
    return declarationPath;
  }

  // src/utils/internal/isIterable.ts
  function isIterable(fn) {
    if (!fn) {
      return false;
    }
    return typeof fn[Symbol.iterator] == "function";
  }

  // src/handlers/RequestHandler.ts
  var defaultContext = {
    status,
    set,
    delay,
    fetch
  };
  var RequestHandler = class {
    constructor(options) {
      this.shouldSkip = false;
      this.ctx = options.ctx || defaultContext;
      this.resolver = options.resolver;
      const callFrame = getCallFrame(new Error());
      this.info = {
        ...options.info,
        callFrame
      };
    }
    parse(_request, _resolutionContext) {
      return null;
    }
    test(request, resolutionContext) {
      return this.predicate(
        request,
        this.parse(request, resolutionContext),
        resolutionContext
      );
    }
    getPublicRequest(request, _parsedResult) {
      return request;
    }
    markAsSkipped(shouldSkip = true) {
      this.shouldSkip = shouldSkip;
    }
    async run(request, resolutionContext) {
      if (this.shouldSkip) {
        return null;
      }
      const parsedResult = this.parse(request, resolutionContext);
      const shouldIntercept = this.predicate(
        request,
        parsedResult,
        resolutionContext
      );
      if (!shouldIntercept) {
        return null;
      }
      const publicRequest = this.getPublicRequest(request, parsedResult);
      const executeResolver = this.wrapResolver(this.resolver);
      const mockedResponse = await executeResolver(
        publicRequest,
        response,
        this.ctx
      );
      return this.createExecutionResult(
        parsedResult,
        publicRequest,
        mockedResponse
      );
    }
    wrapResolver(resolver) {
      return async (req, res, ctx) => {
        const result = this.resolverGenerator || await resolver(req, res, ctx);
        if (isIterable(result)) {
          const { value, done } = result[Symbol.iterator]().next();
          const nextResponse = await value;
          if (!nextResponse && done) {
            return this.resolverGeneratorResult;
          }
          if (!this.resolverGenerator) {
            this.resolverGenerator = result;
          }
          this.resolverGeneratorResult = nextResponse;
          return nextResponse;
        }
        return result;
      };
    }
    createExecutionResult(parsedResult, request, response2) {
      return {
        handler: this,
        parsedResult: parsedResult || null,
        request,
        response: response2 || null
      };
    }
  };

  // src/handlers/RestHandler.ts
  var RESTMethods = /* @__PURE__ */ ((RESTMethods2) => {
    RESTMethods2["HEAD"] = "HEAD";
    RESTMethods2["GET"] = "GET";
    RESTMethods2["POST"] = "POST";
    RESTMethods2["PUT"] = "PUT";
    RESTMethods2["PATCH"] = "PATCH";
    RESTMethods2["OPTIONS"] = "OPTIONS";
    RESTMethods2["DELETE"] = "DELETE";
    return RESTMethods2;
  })(RESTMethods || {});
  var restContext = {
    ...defaultContext,
    cookie,
    body,
    text,
    json,
    xml
  };
  var RestRequest = class extends MockedRequest {
    constructor(request, params) {
      super(request.url, {
        ...request,
        body: request["_body"]
      });
      this.params = params;
      this.id = request.id;
    }
  };
  var RestHandler = class extends RequestHandler {
    constructor(method, path, resolver) {
      super({
        info: {
          header: `${method} ${path}`,
          path,
          method
        },
        ctx: restContext,
        resolver
      });
      this.checkRedundantQueryParameters();
    }
    checkRedundantQueryParameters() {
      const { method, path } = this.info;
      if (path instanceof RegExp) {
        return;
      }
      const url = cleanUrl(path);
      if (url === path) {
        return;
      }
      const searchParams = getSearchParams(path);
      const queryParams = [];
      searchParams.forEach((_, paramName) => {
        queryParams.push(paramName);
      });
      devUtils.warn(
        `Found a redundant usage of query parameters in the request handler URL for "${method} ${path}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`
      );
    }
    parse(request, resolutionContext) {
      return matchRequestUrl(
        request.url,
        this.info.path,
        resolutionContext == null ? void 0 : resolutionContext.baseUrl
      );
    }
    getPublicRequest(request, parsedResult) {
      return new RestRequest(request, parsedResult.params || {});
    }
    predicate(request, parsedResult) {
      const matchesMethod = this.info.method instanceof RegExp ? this.info.method.test(request.method) : isStringEqual(this.info.method, request.method);
      return matchesMethod && parsedResult.matches;
    }
    log(request, response2) {
      const publicUrl = getPublicUrlFromRequest(request);
      const loggedRequest = prepareRequest(request);
      const loggedResponse = prepareResponse(response2);
      const statusColor = getStatusCodeColor(response2.status);
      console.groupCollapsed(
        devUtils.formatMessage("%s %s %s (%c%s%c)"),
        getTimestamp(),
        request.method,
        publicUrl,
        `color:${statusColor}`,
        `${response2.status} ${response2.statusText}`,
        "color:inherit"
      );
      console.log("Request", loggedRequest);
      console.log("Handler:", this);
      console.log("Response", loggedResponse);
      console.groupEnd();
    }
  };

  // src/context/field.ts
  var field = (fieldName, fieldValue) => {
    return (res) => {
      validateFieldName(fieldName);
      const prevBody = jsonParse(res.body) || {};
      const nextBody = mergeRight(prevBody, { [fieldName]: fieldValue });
      return json(nextBody)(res);
    };
  };
  function validateFieldName(fieldName) {
    invariant(
      fieldName.trim() !== "",
      devUtils.formatMessage(
        "Failed to set a custom field on a GraphQL response: field name cannot be empty."
      )
    );
    invariant(
      fieldName !== "data",
      devUtils.formatMessage(
        'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?',
        fieldName
      )
    );
    invariant(
      fieldName !== "errors",
      devUtils.formatMessage(
        'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?',
        fieldName
      )
    );
    invariant(
      fieldName !== "extensions",
      devUtils.formatMessage(
        'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?',
        fieldName
      )
    );
  }

  // src/utils/internal/tryCatch.ts
  function tryCatch(fn, onException) {
    try {
      const result = fn();
      return result;
    } catch (error2) {
      onException == null ? void 0 : onException(error2);
    }
  }

  // src/handlers/GraphQLHandler.ts
  var graphqlContext = {
    ...defaultContext,
    data,
    extensions,
    errors,
    cookie,
    field
  };
  function isDocumentNode(value) {
    if (value == null) {
      return false;
    }
    return typeof value === "object" && "kind" in value && "definitions" in value;
  }
  var GraphQLRequest = class extends MockedRequest {
    constructor(request, variables, operationName) {
      super(request.url, {
        ...request,
        body: request["_body"]
      });
      this.variables = variables;
      this.operationName = operationName;
    }
  };
  var GraphQLHandler = class extends RequestHandler {
    constructor(operationType, operationName, endpoint, resolver) {
      let resolvedOperationName = operationName;
      if (isDocumentNode(operationName)) {
        const parsedNode = parseDocumentNode(operationName);
        if (parsedNode.operationType !== operationType) {
          throw new Error(
            `Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${operationType}", but got "${parsedNode.operationType}").`
          );
        }
        if (!parsedNode.operationName) {
          throw new Error(
            `Failed to create a GraphQL handler: provided a DocumentNode with no operation name.`
          );
        }
        resolvedOperationName = parsedNode.operationName;
      }
      const header = operationType === "all" ? `${operationType} (origin: ${endpoint.toString()})` : `${operationType} ${resolvedOperationName} (origin: ${endpoint.toString()})`;
      super({
        info: {
          header,
          operationType,
          operationName: resolvedOperationName
        },
        ctx: graphqlContext,
        resolver
      });
      this.endpoint = endpoint;
    }
    parse(request) {
      return tryCatch(
        () => parseGraphQLRequest(request),
        (error2) => console.error(error2.message)
      );
    }
    getPublicRequest(request, parsedResult) {
      var _a2, _b2;
      return new GraphQLRequest(
        request,
        (_a2 = parsedResult == null ? void 0 : parsedResult.variables) != null ? _a2 : {},
        (_b2 = parsedResult == null ? void 0 : parsedResult.operationName) != null ? _b2 : ""
      );
    }
    predicate(request, parsedResult) {
      if (!parsedResult) {
        return false;
      }
      if (!parsedResult.operationName && this.info.operationType !== "all") {
        const publicUrl = getPublicUrlFromRequest(request);
        devUtils.warn(`Failed to intercept a GraphQL request at "${request.method} ${publicUrl}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation()" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `);
        return false;
      }
      const hasMatchingUrl = matchRequestUrl(request.url, this.endpoint);
      const hasMatchingOperationType = this.info.operationType === "all" || parsedResult.operationType === this.info.operationType;
      const hasMatchingOperationName = this.info.operationName instanceof RegExp ? this.info.operationName.test(parsedResult.operationName || "") : parsedResult.operationName === this.info.operationName;
      return hasMatchingUrl.matches && hasMatchingOperationType && hasMatchingOperationName;
    }
    log(request, response2, parsedRequest) {
      const loggedRequest = prepareRequest(request);
      const loggedResponse = prepareResponse(response2);
      const statusColor = getStatusCodeColor(response2.status);
      const requestInfo = (parsedRequest == null ? void 0 : parsedRequest.operationName) ? `${parsedRequest == null ? void 0 : parsedRequest.operationType} ${parsedRequest == null ? void 0 : parsedRequest.operationName}` : `anonymous ${parsedRequest == null ? void 0 : parsedRequest.operationType}`;
      console.groupCollapsed(
        devUtils.formatMessage("%s %s (%c%s%c)"),
        getTimestamp(),
        `${requestInfo}`,
        `color:${statusColor}`,
        `${response2.status} ${response2.statusText}`,
        "color:inherit"
      );
      console.log("Request:", loggedRequest);
      console.log("Handler:", this);
      console.log("Response:", loggedResponse);
      console.groupEnd();
    }
  };

  // src/utils/request/onUnhandledRequest.ts
  var MAX_MATCH_SCORE = 3;
  var MAX_SUGGESTION_COUNT = 4;
  var TYPE_MATCH_DELTA = 0.5;
  function groupHandlersByType(handlers) {
    return handlers.reduce(
      (groups, handler) => {
        if (handler instanceof RestHandler) {
          groups.rest.push(handler);
        }
        if (handler instanceof GraphQLHandler) {
          groups.graphql.push(handler);
        }
        return groups;
      },
      {
        rest: [],
        graphql: []
      }
    );
  }
  function getRestHandlerScore() {
    return (request, handler) => {
      const { path, method } = handler.info;
      if (path instanceof RegExp || method instanceof RegExp) {
        return Infinity;
      }
      const hasSameMethod = isStringEqual(request.method, method);
      const methodScoreDelta = hasSameMethod ? TYPE_MATCH_DELTA : 0;
      const requestPublicUrl = getPublicUrlFromRequest(request);
      const score = (0, import_js_levenshtein.default)(requestPublicUrl, path);
      return score - methodScoreDelta;
    };
  }
  function getGraphQLHandlerScore(parsedQuery) {
    return (_, handler) => {
      if (typeof parsedQuery.operationName === "undefined") {
        return Infinity;
      }
      const { operationType, operationName } = handler.info;
      if (typeof operationName !== "string") {
        return Infinity;
      }
      const hasSameOperationType = parsedQuery.operationType === operationType;
      const operationTypeScoreDelta = hasSameOperationType ? TYPE_MATCH_DELTA : 0;
      const score = (0, import_js_levenshtein.default)(parsedQuery.operationName, operationName);
      return score - operationTypeScoreDelta;
    };
  }
  function getSuggestedHandler(request, handlers, getScore) {
    const suggestedHandlers = handlers.reduce((suggestions, handler) => {
      const score = getScore(request, handler);
      return suggestions.concat([[score, handler]]);
    }, []).sort(([leftScore], [rightScore]) => leftScore - rightScore).filter(([score]) => score <= MAX_MATCH_SCORE).slice(0, MAX_SUGGESTION_COUNT).map(([, handler]) => handler);
    return suggestedHandlers;
  }
  function getSuggestedHandlersMessage(handlers) {
    if (handlers.length > 1) {
      return `Did you mean to request one of the following resources instead?

${handlers.map((handler) => `  \u2022 ${handler.info.header}`).join("\n")}`;
    }
    return `Did you mean to request "${handlers[0].info.header}" instead?`;
  }
  function onUnhandledRequest(request, handlers, strategy = "warn") {
    const parsedGraphQLQuery = tryCatch(() => parseGraphQLRequest(request));
    function generateHandlerSuggestion() {
      const handlerGroups = groupHandlersByType(handlers);
      const relevantHandlers = parsedGraphQLQuery ? handlerGroups.graphql : handlerGroups.rest;
      const suggestedHandlers = getSuggestedHandler(
        request,
        relevantHandlers,
        parsedGraphQLQuery ? getGraphQLHandlerScore(parsedGraphQLQuery) : getRestHandlerScore()
      );
      return suggestedHandlers.length > 0 ? getSuggestedHandlersMessage(suggestedHandlers) : "";
    }
    function generateUnhandledRequestMessage() {
      const publicUrl = getPublicUrlFromRequest(request);
      const requestHeader = parsedGraphQLQuery ? `${parsedGraphQLQuery.operationType} ${parsedGraphQLQuery.operationName} (${request.method} ${publicUrl})` : `${request.method} ${publicUrl}`;
      const handlerSuggestion = generateHandlerSuggestion();
      const messageTemplate = [
        `captured a request without a matching request handler:`,
        `  \u2022 ${requestHeader}`,
        handlerSuggestion,
        `If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`
      ].filter(Boolean);
      return messageTemplate.join("\n\n");
    }
    function applyStrategy(strategy2) {
      const message = generateUnhandledRequestMessage();
      switch (strategy2) {
        case "error": {
          devUtils.error("Error: %s", message);
          throw new Error(
            devUtils.formatMessage(
              'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
            )
          );
        }
        case "warn": {
          devUtils.warn("Warning: %s", message);
          break;
        }
        case "bypass":
          break;
        default:
          throw new Error(
            devUtils.formatMessage(
              'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
              strategy2
            )
          );
      }
    }
    if (typeof strategy === "function") {
      strategy(request, {
        warning: applyStrategy.bind(null, "warn"),
        error: applyStrategy.bind(null, "error")
      });
      return;
    }
    applyStrategy(strategy);
  }

  // src/utils/request/readResponseCookies.ts
  var import_cookies2 = __toESM(require_lib7());
  function readResponseCookies(request, response2) {
    import_cookies2.store.add({ ...request, url: request.url.toString() }, response2);
    import_cookies2.store.persist();
  }

  // src/utils/handleRequest.ts
  async function handleRequest(request, handlers, options, emitter, handleRequestOptions) {
    var _a2, _b2, _c, _d, _e, _f;
    emitter.emit("request:start", request);
    if (request.headers.get("x-msw-bypass") === "true") {
      emitter.emit("request:end", request);
      (_a2 = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _a2.call(handleRequestOptions, request);
      return;
    }
    const [lookupError, lookupResult] = await (0, import_until2.until)(() => {
      return getResponse(
        request,
        handlers,
        handleRequestOptions == null ? void 0 : handleRequestOptions.resolutionContext
      );
    });
    if (lookupError) {
      emitter.emit("unhandledException", lookupError, request);
      throw lookupError;
    }
    const { handler, response: response2 } = lookupResult;
    if (!handler) {
      onUnhandledRequest(request, handlers, options.onUnhandledRequest);
      emitter.emit("request:unhandled", request);
      emitter.emit("request:end", request);
      (_b2 = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _b2.call(handleRequestOptions, request);
      return;
    }
    if (!response2) {
      devUtils.warn(
        `Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.

  \u2022 %s
    %s`,
        response2,
        handler.info.header,
        handler.info.callFrame
      );
      emitter.emit("request:end", request);
      (_c = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _c.call(handleRequestOptions, request);
      return;
    }
    if (response2.passthrough) {
      emitter.emit("request:end", request);
      (_d = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _d.call(handleRequestOptions, request);
      return;
    }
    readResponseCookies(request, response2);
    emitter.emit("request:match", request);
    const requiredLookupResult = lookupResult;
    const transformedResponse = ((_e = handleRequestOptions == null ? void 0 : handleRequestOptions.transformResponse) == null ? void 0 : _e.call(handleRequestOptions, response2)) || response2;
    (_f = handleRequestOptions == null ? void 0 : handleRequestOptions.onMockedResponse) == null ? void 0 : _f.call(
      handleRequestOptions,
      transformedResponse,
      requiredLookupResult
    );
    emitter.emit("request:end", request);
    return transformedResponse;
  }

  // src/utils/logging/serializeResponse.ts
  function serializeResponse(source) {
    return {
      status: source.status,
      statusText: source.statusText,
      headers: flattenHeadersObject(headersToObject(source.headers)),
      body: source.body
    };
  }

  // src/setupWorker/start/createRequestListener.ts
  var createRequestListener = (context, options) => {
    return async (event, message) => {
      var _a2;
      const messageChannel = new WorkerChannel(event.ports[0]);
      const request = parseWorkerRequest(message.payload);
      try {
        await handleRequest(
          request,
          context.requestHandlers,
          options,
          context.emitter,
          {
            transformResponse,
            onPassthroughResponse() {
              messageChannel.postMessage("NOT_FOUND");
            },
            async onMockedResponse(response2, { handler, publicRequest, parsedRequest }) {
              if (response2.body instanceof ReadableStream) {
                throw new Error(
                  devUtils.formatMessage(
                    'Failed to construct a mocked response with a "ReadableStream" body: mocked streams are not supported. Follow https://github.com/mswjs/msw/issues/1336 for more details.'
                  )
                );
              }
              const responseInstance = new Response(response2.body, response2);
              const responseBodyBuffer = await responseInstance.arrayBuffer();
              const responseBody = response2.body == null ? null : responseBodyBuffer;
              messageChannel.postMessage(
                "MOCK_RESPONSE",
                {
                  ...response2,
                  body: responseBody
                },
                [responseBodyBuffer]
              );
              if (!options.quiet) {
                context.emitter.once("response:mocked", (response3) => {
                  handler.log(
                    publicRequest,
                    serializeResponse(response3),
                    parsedRequest
                  );
                });
              }
            }
          }
        );
      } catch (error2) {
        if (error2 instanceof NetworkError) {
          messageChannel.postMessage("NETWORK_ERROR", {
            name: error2.name,
            message: error2.message
          });
          return;
        }
        if (error2 instanceof Error) {
          devUtils.error(
            `Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,
            request.method,
            request.url,
            (_a2 = error2.stack) != null ? _a2 : error2
          );
          messageChannel.postMessage("MOCK_RESPONSE", {
            status: 500,
            statusText: "Request Handler Error",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: error2.name,
              message: error2.message,
              stack: error2.stack
            })
          });
        }
      }
    };
  };
  function transformResponse(response2) {
    return {
      status: response2.status,
      statusText: response2.statusText,
      headers: response2.headers.all(),
      body: response2.body,
      delay: response2.delay
    };
  }

  // src/utils/internal/requestIntegrityCheck.ts
  async function requestIntegrityCheck(context, serviceWorker) {
    context.workerChannel.send("INTEGRITY_CHECK_REQUEST");
    const { payload: actualChecksum } = await context.events.once(
      "INTEGRITY_CHECK_RESPONSE"
    );
    if (actualChecksum !== "3d6b9f06410d179a7f7404d4bf4c3c70") {
      throw new Error(
        `Currently active Service Worker (${actualChecksum}) is behind the latest published one (${"3d6b9f06410d179a7f7404d4bf4c3c70"}).`
      );
    }
    return serviceWorker;
  }

  // src/utils/deferNetworkRequestsUntil.ts
  var import_until3 = __toESM(require_lib());
  function deferNetworkRequestsUntil(predicatePromise) {
    const originalXhrSend = window.XMLHttpRequest.prototype.send;
    window.XMLHttpRequest.prototype.send = function(...args) {
      (0, import_until3.until)(() => predicatePromise).then(() => {
        window.XMLHttpRequest.prototype.send = originalXhrSend;
        this.send(...args);
      });
    };
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      await (0, import_until3.until)(() => predicatePromise);
      window.fetch = originalFetch;
      return window.fetch(...args);
    };
  }

  // src/setupWorker/start/createResponseListener.ts
  function createResponseListener(context) {
    return (_, message) => {
      var _a2;
      const { payload: responseJson } = message;
      if ((_a2 = responseJson.type) == null ? void 0 : _a2.includes("opaque")) {
        return;
      }
      const response2 = new Response(responseJson.body || null, responseJson);
      const isMockedResponse = response2.headers.get("x-powered-by") === "msw";
      if (isMockedResponse) {
        context.emitter.emit("response:mocked", response2, responseJson.requestId);
      } else {
        context.emitter.emit("response:bypass", response2, responseJson.requestId);
      }
    };
  }

  // src/setupWorker/start/utils/validateWorkerScope.ts
  function validateWorkerScope(registration, options) {
    if (!(options == null ? void 0 : options.quiet) && !location.href.startsWith(registration.scope)) {
      devUtils.warn(
        `Cannot intercept requests on this page because it's outside of the worker's scope ("${registration.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`
      );
    }
  }

  // src/setupWorker/start/createStartHandler.ts
  var createStartHandler = (context) => {
    return function start(options, customOptions) {
      const startWorkerInstance = async () => {
        context.events.removeAllListeners();
        context.workerChannel.on(
          "REQUEST",
          createRequestListener(context, options)
        );
        context.workerChannel.on("RESPONSE", createResponseListener(context));
        const instance = await getWorkerInstance(
          options.serviceWorker.url,
          options.serviceWorker.options,
          options.findWorker
        );
        const [worker, registration] = instance;
        if (!worker) {
          const missingWorkerMessage = (customOptions == null ? void 0 : customOptions.findWorker) ? devUtils.formatMessage(
            `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
            options.serviceWorker.url
          ) : devUtils.formatMessage(
            `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
            options.serviceWorker.url,
            location.host
          );
          throw new Error(missingWorkerMessage);
        }
        context.worker = worker;
        context.registration = registration;
        context.events.addListener(window, "beforeunload", () => {
          if (worker.state !== "redundant") {
            context.workerChannel.send("CLIENT_CLOSED");
          }
          window.clearInterval(context.keepAliveInterval);
        });
        const [integrityError] = await (0, import_until4.until)(
          () => requestIntegrityCheck(context, worker)
        );
        if (integrityError) {
          devUtils.error(`Detected outdated Service Worker: ${integrityError.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues      `);
        }
        context.keepAliveInterval = window.setInterval(
          () => context.workerChannel.send("KEEPALIVE_REQUEST"),
          5e3
        );
        validateWorkerScope(registration, context.startOptions);
        return registration;
      };
      const workerRegistration = startWorkerInstance().then(
        async (registration) => {
          const pendingInstance = registration.installing || registration.waiting;
          if (pendingInstance) {
            await new Promise((resolve) => {
              pendingInstance.addEventListener("statechange", () => {
                if (pendingInstance.state === "activated") {
                  return resolve();
                }
              });
            });
          }
          await enableMocking(context, options).catch((error2) => {
            throw new Error(`Failed to enable mocking: ${error2 == null ? void 0 : error2.message}`);
          });
          return registration;
        }
      );
      if (options.waitUntilReady) {
        deferNetworkRequestsUntil(workerRegistration);
      }
      return workerRegistration;
    };
  };

  // src/setupWorker/stop/utils/printStopMessage.ts
  function printStopMessage(args = {}) {
    if (args.quiet) {
      return;
    }
    console.log(
      `%c${devUtils.formatMessage("Mocking disabled.")}`,
      "color:orangered;font-weight:bold;"
    );
  }

  // src/setupWorker/stop/createStop.ts
  var createStop = (context) => {
    return function stop() {
      var _a2;
      if (!context.isMockingEnabled) {
        devUtils.warn(
          'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.'
        );
        return;
      }
      context.workerChannel.send("MOCK_DEACTIVATE");
      context.isMockingEnabled = false;
      window.clearInterval(context.keepAliveInterval);
      printStopMessage({ quiet: (_a2 = context.startOptions) == null ? void 0 : _a2.quiet });
    };
  };

  // src/setupWorker/start/utils/prepareStartHandler.ts
  var DEFAULT_START_OPTIONS = {
    serviceWorker: {
      url: "/mockServiceWorker.js",
      options: null
    },
    quiet: false,
    waitUntilReady: true,
    onUnhandledRequest: "warn",
    findWorker(scriptURL, mockServiceWorkerUrl) {
      return scriptURL === mockServiceWorkerUrl;
    }
  };

  // src/setupWorker/start/createFallbackRequestListener.ts
  var import_interceptors4 = __toESM(require_lib6());
  var import_fetch3 = __toESM(require_fetch());
  var import_XMLHttpRequest = __toESM(require_XMLHttpRequest());

  // src/utils/request/createResponseFromIsomorphicResponse.ts
  var import_interceptors3 = __toESM(require_lib6());
  var noop = () => {
    throw new Error("Not implemented");
  };
  function createResponseFromIsomorphicResponse(response2) {
    return {
      ...response2,
      ok: response2.status >= 200 && response2.status < 300,
      url: "",
      type: "default",
      status: response2.status,
      statusText: response2.statusText,
      headers: response2.headers,
      body: new ReadableStream(),
      redirected: response2.headers.get("Location") != null,
      async text() {
        return response2.body || "";
      },
      async json() {
        return JSON.parse(response2.body || "");
      },
      async arrayBuffer() {
        return (0, import_interceptors3.encodeBuffer)(response2.body || "");
      },
      bodyUsed: false,
      formData: noop,
      blob: noop,
      clone: noop
    };
  }

  // src/setupWorker/start/createFallbackRequestListener.ts
  function createFallbackRequestListener(context, options) {
    const interceptor = new import_interceptors4.BatchInterceptor({
      name: "fallback",
      interceptors: [new import_fetch3.FetchInterceptor(), new import_XMLHttpRequest.XMLHttpRequestInterceptor()]
    });
    interceptor.on("request", async (request) => {
      const mockedRequest = new MockedRequest(request.url, {
        ...request,
        body: await request.arrayBuffer()
      });
      const response2 = await handleRequest(
        mockedRequest,
        context.requestHandlers,
        options,
        context.emitter,
        {
          transformResponse(response3) {
            return {
              status: response3.status,
              statusText: response3.statusText,
              headers: response3.headers.all(),
              body: response3.body,
              delay: response3.delay
            };
          },
          onMockedResponse(_, { handler, publicRequest, parsedRequest }) {
            if (!options.quiet) {
              context.emitter.once("response:mocked", (response3) => {
                handler.log(
                  publicRequest,
                  serializeResponse(response3),
                  parsedRequest
                );
              });
            }
          }
        }
      );
      if (response2) {
        request.respondWith(response2);
      }
    });
    interceptor.on("response", (request, response2) => {
      if (!request.id) {
        return;
      }
      const browserResponse = createResponseFromIsomorphicResponse(response2);
      if (response2.headers.get("x-powered-by") === "msw") {
        context.emitter.emit("response:mocked", browserResponse, request.id);
      } else {
        context.emitter.emit("response:bypass", browserResponse, request.id);
      }
    });
    interceptor.apply();
    return interceptor;
  }

  // src/setupWorker/start/createFallbackStart.ts
  function createFallbackStart(context) {
    return async function start(options) {
      context.fallbackInterceptor = createFallbackRequestListener(
        context,
        options
      );
      printStartMessage({
        message: "Mocking enabled (fallback mode).",
        quiet: options.quiet
      });
      return void 0;
    };
  }

  // src/setupWorker/stop/createFallbackStop.ts
  function createFallbackStop(context) {
    return function stop() {
      var _a2, _b2;
      (_a2 = context.fallbackInterceptor) == null ? void 0 : _a2.dispose();
      printStopMessage({ quiet: (_b2 = context.startOptions) == null ? void 0 : _b2.quiet });
    };
  }

  // src/SetupApi.ts
  var import_strict_event_emitter = __toESM(require_lib9());

  // src/utils/internal/pipeEvents.ts
  function pipeEvents(source, destination) {
    const rawEmit = source.emit;
    if (rawEmit._isPiped) {
      return;
    }
    source.emit = function(event, ...data2) {
      destination.emit(event, ...data2);
      return rawEmit.call(this, event, ...data2);
    };
    source.emit._isPiped = true;
  }

  // src/utils/internal/toReadonlyArray.ts
  function toReadonlyArray(source) {
    const clone = [...source];
    Object.freeze(clone);
    return clone;
  }

  // src/SetupApi.ts
  var SetupApi = class {
    constructor(...initialHandlers) {
      this.validateHandlers(...initialHandlers);
      this.initialHandlers = toReadonlyArray(initialHandlers);
      this.currentHandlers = [...initialHandlers];
      this.emitter = new import_strict_event_emitter.Emitter();
      this.publicEmitter = new import_strict_event_emitter.Emitter();
      pipeEvents(this.emitter, this.publicEmitter);
      this.events = this.createLifeCycleEvents();
    }
    validateHandlers(...handlers) {
      for (const handler of handlers) {
        invariant(
          !Array.isArray(handler),
          devUtils.formatMessage(
            'Failed to construct "%s" given an Array of request handlers. Make sure you spread the request handlers when calling the respective setup function.'
          ),
          this.constructor.name
        );
      }
    }
    dispose() {
      this.emitter.removeAllListeners();
      this.publicEmitter.removeAllListeners();
    }
    use(...runtimeHandlers) {
      this.currentHandlers.unshift(...runtimeHandlers);
    }
    restoreHandlers() {
      this.currentHandlers.forEach((handler) => {
        handler.markAsSkipped(false);
      });
    }
    resetHandlers(...nextHandlers) {
      this.currentHandlers = nextHandlers.length > 0 ? [...nextHandlers] : [...this.initialHandlers];
    }
    listHandlers() {
      return toReadonlyArray(this.currentHandlers);
    }
    createLifeCycleEvents() {
      return {
        on: (...args) => {
          return this.publicEmitter.on(...args);
        },
        removeListener: (...args) => {
          return this.publicEmitter.removeListener(...args);
        },
        removeAllListeners: (...args) => {
          return this.publicEmitter.removeAllListeners(...args);
        }
      };
    }
  };

  // src/setupWorker/setupWorker.ts
  var SetupWorkerApi = class extends SetupApi {
    constructor(...handlers) {
      super(...handlers);
      this.startHandler = null;
      this.stopHandler = null;
      invariant(
        !isNodeProcess(),
        devUtils.formatMessage(
          "Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."
        )
      );
      this.listeners = [];
      this.context = this.createWorkerContext();
    }
    createWorkerContext() {
      const context = {
        isMockingEnabled: false,
        startOptions: null,
        worker: null,
        registration: null,
        requestHandlers: this.currentHandlers,
        emitter: this.emitter,
        workerChannel: {
          on: (eventType, callback) => {
            this.context.events.addListener(
              navigator.serviceWorker,
              "message",
              (event) => {
                if (event.source !== this.context.worker) {
                  return;
                }
                const message = event.data;
                if (!message) {
                  return;
                }
                if (message.type === eventType) {
                  callback(event, message);
                }
              }
            );
          },
          send: (type) => {
            var _a2;
            (_a2 = this.context.worker) == null ? void 0 : _a2.postMessage(type);
          }
        },
        events: {
          addListener: (target, eventType, callback) => {
            target.addEventListener(eventType, callback);
            this.listeners.push({ eventType, target, callback });
            return () => {
              target.removeEventListener(eventType, callback);
            };
          },
          removeAllListeners: () => {
            for (const { target, eventType, callback } of this.listeners) {
              target.removeEventListener(eventType, callback);
            }
            this.listeners = [];
          },
          once: (eventType) => {
            const bindings = [];
            return new Promise((resolve, reject) => {
              const handleIncomingMessage = (event) => {
                try {
                  const message = event.data;
                  if (message.type === eventType) {
                    resolve(message);
                  }
                } catch (error2) {
                  reject(error2);
                }
              };
              bindings.push(
                this.context.events.addListener(
                  navigator.serviceWorker,
                  "message",
                  handleIncomingMessage
                ),
                this.context.events.addListener(
                  navigator.serviceWorker,
                  "messageerror",
                  reject
                )
              );
            }).finally(() => {
              bindings.forEach((unbind) => unbind());
            });
          }
        },
        useFallbackMode: !("serviceWorker" in navigator) || location.protocol === "file:"
      };
      Object.defineProperties(context, {
        requestHandlers: {
          get: () => this.currentHandlers
        }
      });
      this.startHandler = context.useFallbackMode ? createFallbackStart(context) : createStartHandler(context);
      this.stopHandler = context.useFallbackMode ? createFallbackStop(context) : createStop(context);
      return context;
    }
    async start(options = {}) {
      this.context.startOptions = mergeRight(
        DEFAULT_START_OPTIONS,
        options
      );
      return await this.startHandler(this.context.startOptions, options);
    }
    printHandlers() {
      const handlers = this.listHandlers();
      handlers.forEach((handler) => {
        const { header, callFrame } = handler.info;
        const pragma = handler.info.hasOwnProperty("operationType") ? "[graphql]" : "[rest]";
        console.groupCollapsed(`${pragma} ${header}`);
        if (callFrame) {
          console.log(`Declaration: ${callFrame}`);
        }
        console.log("Handler:", handler);
        console.groupEnd();
      });
    }
    stop() {
      super.dispose();
      this.context.events.removeAllListeners();
      this.context.emitter.removeAllListeners();
      this.stopHandler();
    }
  };
  function setupWorker(...handlers) {
    return new SetupWorkerApi(...handlers);
  }

  // src/rest.ts
  function createRestHandler(method) {
    return (path, resolver) => {
      return new RestHandler(method, path, resolver);
    };
  }
  var rest = {
    all: createRestHandler(/.+/),
    head: createRestHandler("HEAD" /* HEAD */),
    get: createRestHandler("GET" /* GET */),
    post: createRestHandler("POST" /* POST */),
    put: createRestHandler("PUT" /* PUT */),
    delete: createRestHandler("DELETE" /* DELETE */),
    patch: createRestHandler("PATCH" /* PATCH */),
    options: createRestHandler("OPTIONS" /* OPTIONS */)
  };

  // src/graphql.ts
  function createScopedGraphQLHandler(operationType, url) {
    return (operationName, resolver) => {
      return new GraphQLHandler(
        operationType,
        operationName,
        url,
        resolver
      );
    };
  }
  function createGraphQLOperationHandler(url) {
    return (resolver) => {
      return new GraphQLHandler(
        "all",
        new RegExp(".*"),
        url,
        resolver
      );
    };
  }
  var standardGraphQLHandlers = {
    operation: createGraphQLOperationHandler("*"),
    query: createScopedGraphQLHandler("query", "*"),
    mutation: createScopedGraphQLHandler("mutation", "*")
  };
  function createGraphQLLink(url) {
    return {
      operation: createGraphQLOperationHandler(url),
      query: createScopedGraphQLHandler("query", url),
      mutation: createScopedGraphQLHandler("mutation", url)
    };
  }
  var graphql = {
    ...standardGraphQLHandlers,
    link: createGraphQLLink
  };

  // src/index.ts
  checkGlobals();
  return __toCommonJS(src_exports);
})();
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=index.js.map