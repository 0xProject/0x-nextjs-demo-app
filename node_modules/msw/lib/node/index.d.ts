export { S as ServerLifecycleEventsMap, a as SetupServerApi } from '../SetupServerApi-1855d9c6.js';
import { c as RequestHandler, K as SetupServer } from '../glossary-de6278a9.js';
export { K as SetupServer } from '../glossary-de6278a9.js';
import '@mswjs/interceptors';
import 'strict-event-emitter';
import 'type-fest';
import 'headers-polyfill';

/**
 * Sets up a requests interception in Node.js with the given request handlers.
 * @param {RequestHandler[]} handlers List of request handlers.
 * @see {@link https://mswjs.io/docs/api/setup-server `setupServer`}
 */
declare const setupServer: (...handlers: Array<RequestHandler>) => SetupServer;

export { setupServer };
