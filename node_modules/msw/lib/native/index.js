"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/native/index.ts
var native_exports = {};
__export(native_exports, {
  setupServer: () => setupServer
});
module.exports = __toCommonJS(native_exports);
var import_XMLHttpRequest = require("@mswjs/interceptors/lib/interceptors/XMLHttpRequest");

// src/node/SetupServerApi.ts
var import_chalk = __toESM(require("chalk"));
var import_outvariant4 = require("outvariant");
var import_interceptors2 = require("@mswjs/interceptors");

// src/SetupApi.ts
var import_outvariant2 = require("outvariant");
var import_strict_event_emitter = require("strict-event-emitter");

// src/utils/internal/devUtils.ts
var import_outvariant = require("outvariant");
var LIBRARY_PREFIX = "[MSW]";
function formatMessage(message, ...positionals) {
  const interpolatedMessage = (0, import_outvariant.format)(message, ...positionals);
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
      (0, import_outvariant2.invariant)(
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

// src/utils/request/MockedRequest.ts
var cookieUtils2 = __toESM(require("cookie"));
var import_cookies = require("@mswjs/cookies");
var import_interceptors = require("@mswjs/interceptors");
var import_bufferUtils = require("@mswjs/interceptors/lib/utils/bufferUtils.js");
var import_headers_polyfill2 = require("headers-polyfill");

// src/utils/request/getRequestCookies.ts
var cookieUtils = __toESM(require("cookie"));
function getAllCookies() {
  return cookieUtils.parse(document.cookie);
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

// src/utils/internal/jsonParse.ts
function jsonParse(value) {
  try {
    return JSON.parse(value);
  } catch (error2) {
    return void 0;
  }
}

// src/utils/internal/parseMultipartData.ts
var import_headers_polyfill = require("headers-polyfill");
function parseContentHeaders(headersString) {
  var _a, _b;
  const headers = (0, import_headers_polyfill.stringToHeaders)(headersString);
  const contentType = headers.get("content-type") || "text/plain";
  const disposition = headers.get("content-disposition");
  if (!disposition) {
    throw new Error('"Content-Disposition" header is required.');
  }
  const directives = disposition.split(";").reduce((acc, chunk) => {
    const [name2, ...rest] = chunk.trim().split("=");
    acc[name2] = rest.join("=");
    return acc;
  }, {});
  const name = (_a = directives.name) == null ? void 0 : _a.slice(1, -1);
  const filename = (_b = directives.filename) == null ? void 0 : _b.slice(1, -1);
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
      const [contentHeaders, ...rest] = field2.split("\r\n\r\n");
      const contentBody = rest.join("\r\n\r\n");
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
  var _a;
  if (!body2) {
    return body2;
  }
  const contentType = ((_a = headers == null ? void 0 : headers.get("content-type")) == null ? void 0 : _a.toLowerCase()) || "";
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
      headers: new import_headers_polyfill2.Headers(),
      body: null,
      passthrough: true,
      once: false
    };
  }
  getCookies() {
    var _a;
    const requestCookiesString = this.headers.get("cookie");
    const ownCookies = requestCookiesString ? cookieUtils2.parse(requestCookiesString) : {};
    import_cookies.store.hydrate();
    const cookiesFromStore = Array.from(
      (_a = import_cookies.store.get({ ...this, url: this.url.href })) == null ? void 0 : _a.entries()
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

// src/utils/handleRequest.ts
var import_until = require("@open-draft/until");

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
var import_js_levenshtein = __toESM(require("js-levenshtein"));

// src/utils/internal/parseGraphQLRequest.ts
var import_graphql = require("graphql");

// src/utils/request/getPublicUrlFromRequest.ts
var getPublicUrlFromRequest = (request) => {
  return request.referrer.startsWith(request.url.origin) ? request.url.pathname : new URL(
    request.url.pathname,
    `${request.url.protocol}//${request.url.host}`
  ).href;
};

// src/utils/internal/parseGraphQLRequest.ts
function parseDocumentNode(node) {
  var _a;
  const operationDef = node.definitions.find((def) => {
    return def.kind === "OperationDefinition";
  });
  return {
    operationType: operationDef == null ? void 0 : operationDef.operation,
    operationName: (_a = operationDef == null ? void 0 : operationDef.name) == null ? void 0 : _a.value
  };
}
function parseQuery(query) {
  try {
    const ast = (0, import_graphql.parse)(query);
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
  var _a, _b;
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
      if ((_a = request.body) == null ? void 0 : _a.query) {
        const { query, variables } = request.body;
        return {
          query,
          variables
        };
      }
      if ((_b = request.body) == null ? void 0 : _b.operations) {
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

// src/context/set.ts
var import_headers_polyfill3 = require("headers-polyfill");
function set(...args) {
  return (res) => {
    const [name, value] = args;
    if (typeof name === "string") {
      res.headers.append(name, value);
    } else {
      const headers = (0, import_headers_polyfill3.objectToHeaders)(name);
      headers.forEach((value2, name2) => {
        res.headers.append(name2, value2);
      });
    }
    return res;
  };
}

// src/context/cookie.ts
var cookieUtils3 = __toESM(require("cookie"));
var cookie = (name, value, options) => {
  return (res) => {
    const serializedCookie = cookieUtils3.serialize(name, value, options);
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

// src/context/delay.ts
var import_is_node_process = require("is-node-process");
var SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
var MIN_SERVER_RESPONSE_TIME = 100;
var MAX_SERVER_RESPONSE_TIME = 400;
var NODE_SERVER_RESPONSE_TIME = 5;
var getRandomServerResponseTime = () => {
  if ((0, import_is_node_process.isNodeProcess)()) {
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
var import_is_node_process2 = require("is-node-process");
var import_headers_polyfill4 = require("headers-polyfill");
var useFetch = (0, import_is_node_process2.isNodeProcess)() ? (input, init) => Promise.resolve().then(() => __toESM(require("node-fetch"))).then(
  ({ default: nodeFetch }) => nodeFetch(input, init)
) : globalThis.fetch;
var augmentRequestInit = (requestInit) => {
  const headers = new import_headers_polyfill4.Headers(requestInit.headers);
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
var import_headers_polyfill5 = require("headers-polyfill");
function prepareResponse(res) {
  const responseHeaders = (0, import_headers_polyfill5.objectToHeaders)(res.headers);
  return {
    ...res,
    body: parseBody(res.body, responseHeaders)
  };
}

// src/utils/matching/matchRequestUrl.ts
var import_path_to_regexp = require("path-to-regexp");
var import_getCleanUrl = require("@mswjs/interceptors/lib/utils/getCleanUrl.js");

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
  const result = (0, import_path_to_regexp.match)(cleanPath, { decode: decodeURIComponent })(cleanUrl2);
  const params = result && result.params || {};
  return {
    matches: result !== false,
    params
  };
}

// src/handlers/RequestHandler.ts
var import_headers_polyfill7 = require("headers-polyfill");

// src/response.ts
var import_headers_polyfill6 = require("headers-polyfill");

// src/utils/internal/compose.ts
function compose(...fns) {
  return (...args) => {
    return fns.reduceRight((leftFn, rightFn) => {
      return leftFn instanceof Promise ? Promise.resolve(leftFn).then(rightFn) : rightFn(leftFn);
    }, args[0]);
  };
}

// src/utils/NetworkError.ts
var NetworkError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
};

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
        headers: new import_headers_polyfill6.Headers({
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
var import_outvariant3 = require("outvariant");
var field = (fieldName, fieldValue) => {
  return (res) => {
    validateFieldName(fieldName);
    const prevBody = jsonParse(res.body) || {};
    const nextBody = mergeRight(prevBody, { [fieldName]: fieldValue });
    return json(nextBody)(res);
  };
};
function validateFieldName(fieldName) {
  (0, import_outvariant3.invariant)(
    fieldName.trim() !== "",
    devUtils.formatMessage(
      "Failed to set a custom field on a GraphQL response: field name cannot be empty."
    )
  );
  (0, import_outvariant3.invariant)(
    fieldName !== "data",
    devUtils.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?',
      fieldName
    )
  );
  (0, import_outvariant3.invariant)(
    fieldName !== "errors",
    devUtils.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?',
      fieldName
    )
  );
  (0, import_outvariant3.invariant)(
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
    var _a, _b;
    return new GraphQLRequest(
      request,
      (_a = parsedResult == null ? void 0 : parsedResult.variables) != null ? _a : {},
      (_b = parsedResult == null ? void 0 : parsedResult.operationName) != null ? _b : ""
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
var import_cookies2 = require("@mswjs/cookies");
function readResponseCookies(request, response2) {
  import_cookies2.store.add({ ...request, url: request.url.toString() }, response2);
  import_cookies2.store.persist();
}

// src/utils/handleRequest.ts
async function handleRequest(request, handlers, options, emitter, handleRequestOptions) {
  var _a, _b, _c, _d, _e, _f;
  emitter.emit("request:start", request);
  if (request.headers.get("x-msw-bypass") === "true") {
    emitter.emit("request:end", request);
    (_a = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _a.call(handleRequestOptions, request);
    return;
  }
  const [lookupError, lookupResult] = await (0, import_until.until)(() => {
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
    (_b = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _b.call(handleRequestOptions, request);
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

// src/node/SetupServerApi.ts
var { bold } = import_chalk.default;
var DEFAULT_LISTEN_OPTIONS = {
  onUnhandledRequest: "warn"
};
var SetupServerApi = class extends SetupApi {
  constructor(interceptors, ...handlers) {
    super(...handlers);
    this.interceptor = new import_interceptors2.BatchInterceptor({
      name: "setup-server",
      interceptors: interceptors.map((Interceptor2) => new Interceptor2())
    });
    this.resolvedOptions = {};
    this.init();
  }
  init() {
    this.interceptor.on("request", async (request) => {
      const mockedRequest = new MockedRequest(request.url, {
        ...request,
        body: await request.arrayBuffer()
      });
      const response2 = await handleRequest(
        mockedRequest,
        this.currentHandlers,
        this.resolvedOptions,
        this.emitter,
        {
          transformResponse(response3) {
            return {
              status: response3.status,
              statusText: response3.statusText,
              headers: response3.headers.all(),
              body: response3.body,
              delay: response3.delay
            };
          }
        }
      );
      if (response2) {
        if (response2.delay) {
          await new Promise((resolve) => {
            setTimeout(resolve, response2.delay);
          });
        }
        request.respondWith(response2);
      }
      return;
    });
    this.interceptor.on("response", (request, response2) => {
      if (!request.id) {
        return;
      }
      if (response2.headers.get("x-powered-by") === "msw") {
        this.emitter.emit("response:mocked", response2, request.id);
      } else {
        this.emitter.emit("response:bypass", response2, request.id);
      }
    });
  }
  listen(options = {}) {
    this.resolvedOptions = mergeRight(
      DEFAULT_LISTEN_OPTIONS,
      options
    );
    this.interceptor.apply();
    (0, import_outvariant4.invariant)(
      [import_interceptors2.InterceptorReadyState.APPLYING, import_interceptors2.InterceptorReadyState.APPLIED].includes(
        this.interceptor.readyState
      ),
      devUtils.formatMessage(
        'Failed to start "setupServer": the interceptor failed to apply. This is likely an issue with the library and you should report it at "%s".'
      ),
      "https://github.com/mswjs/msw/issues/new/choose"
    );
  }
  printHandlers() {
    const handlers = this.listHandlers();
    handlers.forEach((handler) => {
      const { header, callFrame } = handler.info;
      const pragma = handler.info.hasOwnProperty("operationType") ? "[graphql]" : "[rest]";
      console.log(`${bold(`${pragma} ${header}`)}
  Declaration: ${callFrame}
`);
    });
  }
  close() {
    super.dispose();
    this.interceptor.dispose();
  }
};

// src/native/index.ts
function setupServer(...handlers) {
  return new SetupServerApi([import_XMLHttpRequest.XMLHttpRequestInterceptor], ...handlers);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setupServer
});
