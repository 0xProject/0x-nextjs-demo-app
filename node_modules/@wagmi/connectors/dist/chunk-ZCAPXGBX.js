import {
  __publicField
} from "./chunk-QYMCVNHT.js";

// src/errors.ts
var ChainNotConfiguredForConnectorError = class extends Error {
  constructor({
    chainId,
    connectorId
  }) {
    super(`Chain "${chainId}" not configured for connector "${connectorId}".`);
    __publicField(this, "name", "ChainNotConfiguredForConnectorError");
  }
};
var ConnectorNotFoundError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "ConnectorNotFoundError");
    __publicField(this, "message", "Connector not found");
  }
};

export {
  ChainNotConfiguredForConnectorError,
  ConnectorNotFoundError
};
