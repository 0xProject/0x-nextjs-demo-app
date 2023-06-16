import { MockedResponse } from './glossary';
import { IsomorphicRequest } from './IsomorphicRequest';
import { LazyCallback } from './utils/createLazyCallback';
export declare class InteractiveIsomorphicRequest extends IsomorphicRequest {
    respondWith: LazyCallback<(response: MockedResponse) => void>;
    constructor(request: IsomorphicRequest);
}
