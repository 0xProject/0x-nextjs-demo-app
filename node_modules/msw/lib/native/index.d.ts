import { c as RequestHandler } from '../glossary-de6278a9.js';
import { a as SetupServerApi } from '../SetupServerApi-1855d9c6.js';
import 'strict-event-emitter';
import 'type-fest';
import '@mswjs/interceptors';
import 'headers-polyfill';

/**
 * Sets up a requests interception in React Native with the given request handlers.
 * @param {RequestHandler[]} handlers List of request handlers.
 * @see {@link https://mswjs.io/docs/api/setup-server `setupServer`}
 */
declare function setupServer(...handlers: Array<RequestHandler>): SetupServerApi;

export { setupServer };
