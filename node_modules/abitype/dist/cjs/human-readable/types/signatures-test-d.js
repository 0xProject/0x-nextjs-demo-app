"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
(0, vitest_1.test)('IsErrorSignature', () => {
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
});
(0, vitest_1.test)('IsEventSignature', () => {
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
});
(0, vitest_1.test)('IsFunctionSignature', () => {
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
});
(0, vitest_1.test)('IsStructSignature', () => {
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
});
(0, vitest_1.test)('IsConstructorSignature', () => {
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
});
(0, vitest_1.test)('IsSignature', () => {
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(true);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
    (0, vitest_1.assertType)(false);
});
(0, vitest_1.test)('Signature', () => {
    (0, vitest_1.assertType)('function foo()');
    (0, vitest_1.assertType)([
        'Error: Signature "function foo ()" is invalid.',
    ]);
});
(0, vitest_1.test)('Signatures', () => {
    (0, vitest_1.assertType)(['function foo()']);
    (0, vitest_1.assertType)([
        ['Error: Signature "function foo ()" is invalid at position 0.'],
    ]);
});
(0, vitest_1.test)('IsName', () => {
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
});
(0, vitest_1.test)('ValidateName', () => {
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
});
(0, vitest_1.test)('IsSolidityKeyword', () => {
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
});
(0, vitest_1.test)('IsValidCharacter', () => {
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
    (0, vitest_1.expectTypeOf)().toEqualTypeOf();
});
//# sourceMappingURL=signatures-test-d.js.map