import * as swr from 'swr';
import { Middleware } from 'swr';

declare const immutable: Middleware;
declare const useSWRImmutable: swr.SWRHook;

export { useSWRImmutable as default, immutable };
