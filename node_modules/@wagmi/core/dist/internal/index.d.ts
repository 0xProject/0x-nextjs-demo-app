import { CallParameters, SendTransactionParameters } from 'viem';

/**
 * Converts properties of {@link T} to never
 *
 * @param T - Object to convert
 * @returns Object with properties converted to `never`
 *
 * @example
 * type Result = Never<{ foo: string, bar: number }>
 * //   ^? { foo: never, bar: never }
 */
type Never<T> = {
    [K in keyof T]: never;
};
/**
 * Makes {@link TKeys} optional in {@link TType} while preserving type inference.
 */
type PartialBy<TType, TKeys extends keyof TType> = Partial<Pick<TType, TKeys>> & Omit<TType, TKeys>;

declare function getCallParameters(args: Omit<CallParameters, 'chain'>): CallParameters;
declare function getSendTransactionParameters(args: PartialBy<Omit<SendTransactionParameters, 'chain'>, 'account'>): PartialBy<Omit<SendTransactionParameters, 'chain'>, 'account'>;

export { Never, getCallParameters, getSendTransactionParameters };
