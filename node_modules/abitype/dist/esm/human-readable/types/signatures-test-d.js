import { assertType, expectTypeOf, test } from 'vitest';
test('IsErrorSignature', () => {
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(false);
    assertType(false);
    assertType(false);
    assertType(false);
});
test('IsEventSignature', () => {
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(false);
    assertType(false);
    assertType(false);
});
test('IsFunctionSignature', () => {
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(false);
    assertType(false);
    assertType(false);
    assertType(false);
    assertType(false);
    assertType(false);
});
test('IsStructSignature', () => {
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(false);
    assertType(false);
    assertType(false);
});
test('IsConstructorSignature', () => {
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(false);
    assertType(false);
});
test('IsSignature', () => {
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(true);
    assertType(false);
    assertType(false);
    assertType(false);
    assertType(false);
    assertType(false);
    assertType(false);
    assertType(false);
    assertType(false);
});
test('Signature', () => {
    assertType('function foo()');
    assertType([
        'Error: Signature "function foo ()" is invalid.',
    ]);
});
test('Signatures', () => {
    assertType(['function foo()']);
    assertType([
        ['Error: Signature "function foo ()" is invalid at position 0.'],
    ]);
});
test('IsName', () => {
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
});
test('ValidateName', () => {
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
});
test('IsSolidityKeyword', () => {
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
});
test('IsValidCharacter', () => {
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
    expectTypeOf().toEqualTypeOf();
});
//# sourceMappingURL=signatures-test-d.js.map