import IsHelper from "../is-helper.ts";
import { ValuesStruct } from "./value.struct.ts";
import { assertEquals } from "@std/assert";

Deno.test({
  name: "isBoolean",
  fn: async function (t) {
    const testValues = new ValuesStruct();

    const positive = [
      testValues.BOOLEAN_TRUE,
      testValues.BOOLEAN_FALSE,
      testValues.BOOLEAN_TRUE_STRING,
      testValues.BOOLEAN_FALSE_STRING,
      testValues.BOOLEAN_TRUE_NUMBER,
      testValues.BOOLEAN_FALSE_NUMBER,
      testValues.BOOLEAN_TRUE_NUMBER_STRING,
      testValues.BOOLEAN_FALSE_NUMBER_STRING,
      testValues.BOOLEAN_TRUE_CAPITAL_STRING,
      testValues.BOOLEAN_FALSE_CAPITAL_STRING,
      testValues.BOOLEAN_TRUE_MIXED_STRING,
      testValues.BOOLEAN_FALSE_MIXED_STRING,
      testValues.BOOLEAN_TRUE_MIXED,
      testValues.BOOLEAN_FALSE_MIXED,
      testValues.NUMBER_ZERO,
    ];

    const negative = [
      /** Blank Values */
      testValues.UNDEFINED,
      testValues.NULL,

      /** Strings */
      testValues.STRING_EMPTY,
      testValues.STRING_NUMBER,
      testValues.STRING_NEGATIVE_NUMBER,
      testValues.STRING_DECIMAL_NUMBER,
      testValues.STRING_NEGATIVE_DECIMAL_NUMBER,
      testValues.STRING_LETTERS,
      testValues.STRING_SPECIAL_CHARACTERS,
      testValues.STRING_MIXED_CASE,
      testValues.STRING_LEADING_WHITESPACE,
      testValues.STRING_TRAILING_WHITESPACE,
      testValues.STRING_LEADING_AND_TRAILING_WHITESPACE,
      testValues.STRING_LEADING_AND_TRAILING_WHITESPACE_MULTIPLE,
      testValues.STRING_WHITESPACE,
      testValues.STRING_WHITESPACE_MULTIPLE,
      testValues.STRING_TAB,
      testValues.STRING_NEWLINE,
      testValues.STRING_CARRIAGE_RETURN,
      testValues.STRING_TAB_NEWLINE_CARRIAGE_RETURN,
      testValues.STRING_MIXED_WHITESPACE,
      testValues.STRING_LEADING_WHITESPACE_MIXED,
      testValues.STRING_TRAILING_WHITESPACE_MIXED,
      testValues.STRING_LEADING_AND_TRAILING_WHITESPACE_MIXED,
      testValues.STRING_LEADING_AND_TRAILING_WHITESPACE_MIXED_MULTIPLE,
      testValues.STRING_WHITESPACE_MIXED,
      testValues.STRING_WHITESPACE_MIXED_MULTIPLE,
      testValues.STRING_TAB_MIXED,
      testValues.STRING_NEWLINE_MIXED,
      testValues.STRING_CARRIAGE_RETURN_MIXED,
      testValues.STRING_TAB_NEWLINE_CARRIAGE_RETURN_MIXED,
      testValues.STRING_NUMBER_LETTERS,
      testValues.STRING_NUMBER_SPECIAL_CHARACTERS,
      testValues.STRING_NUMBER_MIXED_CASE,
      testValues.STRING_LETTERS_SPECIAL_CHARACTERS,

      /** Numbers */
      testValues.NUMBER_VALUE,
      testValues.NUMBER_NEGATIVE_VALUE,
      testValues.NUMBER_DECIMAL,
      testValues.NUMBER_NEGATIVE_DECIMAL,
      testValues.NUMBER_MAX_SAFE_INTEGER,
      testValues.NUMBER_MIN_SAFE_INTEGER,
      testValues.NUMBER_MAX_VALUE,
      testValues.NUMBER_MIN_VALUE,
      testValues.NUMBER_POSITIVE_INFINITY,
      testValues.NUMBER_NEGATIVE_INFINITY,
      testValues.NUMBER_NAN,

      /** Arrays */
      testValues.ARRAY_EMPTY,
      testValues.ARRAY_EMPTY_STRING,
      testValues.ARRAY_EMPTY_NUMBER,
      testValues.ARRAY_EMPTY_BOOLEAN,
      testValues.ARRAY_EMPTY_OBJECT,
      testValues.ARRAY_EMPTY_ARRAY,
      testValues.ARRAY_EMPTY_NULL,
      testValues.ARRAY_EMPTY_UNDEFINED,
      testValues.ARRAY_EMPTY_MIXED,
      testValues.ARRAY_FILLED,
      testValues.ARRAY_STRING,
      testValues.ARRAY_NUMBER,
      testValues.ARRAY_BOOLEAN,
      testValues.ARRAY_OBJECT,
      testValues.ARRAY_ARRAY,
      testValues.ARRAY_MIXED,

      /** Objects */
      testValues.OBJECT_EMPTY,
      testValues.OBJECT_EMPTY_STRING,
      testValues.OBJECT_EMPTY_NUMBER,
      testValues.OBJECT_EMPTY_BOOLEAN,
      testValues.OBJECT_EMPTY_OBJECT,
      testValues.OBJECT_EMPTY_ARRAY,
      testValues.OBJECT_EMPTY_NULL,
      testValues.OBJECT_EMPTY_UNDEFINED,
      testValues.OBJECT_EMPTY_MIXED,
      testValues.OBJECT_FILLED,
      testValues.OBJECT_STRING,
      testValues.OBJECT_NUMBER,
      testValues.OBJECT_BOOLEAN,
      testValues.OBJECT_OBJECT,
      testValues.OBJECT_ARRAY,

      /** Functions */
      testValues.FUNCTION_EMPTY,
      testValues.FUNCTION_RETURN_STRING,
      testValues.FUNCTION_RETURN_NUMBER,
      testValues.FUNCTION_RETURN_BOOLEAN,
      testValues.FUNCTION_RETURN_OBJECT,
      testValues.FUNCTION_RETURN_ARRAY,

      /** Dates */
      testValues.DATE_NOW,
      testValues.DATE_1970,
      testValues.DATE_STRING,
      testValues.DATE_NUMBER,
      testValues.DATE_YEAR_MONTH_DAY,
      testValues.DATE_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND,
      testValues.DATE_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND_MILLISECOND,

      /** Errors */
      testValues.ERROR,
      testValues.ERROR_STRING,
      testValues.ERROR_NUMBER,
      testValues.ERROR_BOOLEAN,
      testValues.ERROR_OBJECT,
      testValues.ERROR_ARRAY,
      testValues.ERROR_DATE,
      testValues.ERROR_FUNCTION,

      /** Int8Arrays */
      testValues.INT8_ARRAY_EMPTY,
      testValues.INT8_ARRAY_FILLED,

      /** Uint8Arrays */
      testValues.UINT8_ARRAY_EMPTY,
      testValues.UINT8_ARRAY_FILLED,

      /** Uint8ClampedArrays */
      testValues.UINT8_CLAMPED_ARRAY_EMPTY,
      testValues.UINT8_CLAMPED_ARRAY_FILLED,

      /** Int16Arrays */
      testValues.INT16_ARRAY_EMPTY,
      testValues.INT16_ARRAY_FILLED,

      /** Uint16Arrays */
      testValues.UINT16_ARRAY_EMPTY,
      testValues.UINT16_ARRAY_FILLED,

      /** Int32Arrays */
      testValues.INT32_ARRAY_EMPTY,
      testValues.INT32_ARRAY_FILLED,

      /** Uint32Arrays */
      testValues.UINT32_ARRAY_EMPTY,
      testValues.UINT32_ARRAY_FILLED,

      /** BigInt64Arrays */
      testValues.BIG_INT64_ARRAY_EMPTY,
      testValues.BIG_INT64_ARRAY_FILLED,

      /** BigUint64Arrays */
      testValues.BIG_UINT64_ARRAY_EMPTY,
      testValues.BIG_UINT64_ARRAY_FILLED,

      /** Float32Arrays */
      testValues.FLOAT32_ARRAY_EMPTY,
      testValues.FLOAT32_ARRAY_FILLED,

      /** Float64Arrays */
      testValues.FLOAT64_ARRAY_EMPTY,
      testValues.FLOAT64_ARRAY_FILLED,

      /** Symbols */
      testValues.SYMBOL,
      testValues.SYMBOL_STRING,
      testValues.SYMBOL_NUMBER,

      /** Maps */
      testValues.MAP_EMPTY,
      testValues.MAP_FILLED,
      testValues.MAP_STRING,
      testValues.MAP_NUMBER,
      testValues.MAP_BOOLEAN,
      testValues.MAP_OBJECT,
      testValues.MAP_ARRAY,

      /** Sets */
      testValues.SET_EMPTY,
      testValues.SET_FILLED,
      testValues.SET_STRING,
      testValues.SET_NUMBER,
      testValues.SET_BOOLEAN,
      testValues.SET_OBJECT,
      testValues.SET_ARRAY,

      /** WeakMaps */
      testValues.WEAK_MAP_EMPTY,
      testValues.WEAK_MAP_FILLED,

      /** WeakSets */
      testValues.WEAK_SET_EMPTY,
      testValues.WEAK_SET_FILLED,

      /** Promises */
      testValues.PROMISE_PENDING,
      testValues.PROMISE_RESOLVE,
      testValues.PROMISE_REJECT,
      testValues.PROMISE_RESOLVE_STRING,
      testValues.PROMISE_RESOLVE_NUMBER,
      testValues.PROMISE_RESOLVE_BOOLEAN,
      testValues.PROMISE_RESOLVE_OBJECT,
      testValues.PROMISE_RESOLVE_ARRAY,
      testValues.PROMISE_REJECT_STRING,
      testValues.PROMISE_REJECT_NUMBER,
      testValues.PROMISE_REJECT_BOOLEAN,
      testValues.PROMISE_REJECT_OBJECT,
      testValues.PROMISE_REJECT_ARRAY,

      /** Generators */
      testValues.GENERATOR_EMPTY,
      testValues.GENERATOR_RETURN_STRING,
      testValues.GENERATOR_RETURN_NUMBER,
      testValues.GENERATOR_RETURN_BOOLEAN,
      testValues.GENERATOR_RETURN_OBJECT,
      testValues.GENERATOR_RETURN_ARRAY,

      /** Async Generators */
      testValues.ASYNC_GENERATOR_EMPTY,
      testValues.ASYNC_GENERATOR_RETURN_STRING,
      testValues.ASYNC_GENERATOR_RETURN_NUMBER,
      testValues.ASYNC_GENERATOR_RETURN_BOOLEAN,
      testValues.ASYNC_GENERATOR_RETURN_OBJECT,
      testValues.ASYNC_GENERATOR_RETURN_ARRAY,

      /** Iterables */
      testValues.ITERABLE_EMPTY,
      testValues.ITERABLE_RETURN_STRING,
      testValues.ITERABLE_RETURN_NUMBER,
      testValues.ITERABLE_RETURN_BOOLEAN,
      testValues.ITERABLE_RETURN_OBJECT,
      testValues.ITERABLE_RETURN_ARRAY,

      /** Async Iterables */
      testValues.ASYNC_ITERABLE_EMPTY,
      testValues.ASYNC_ITERABLE_RETURN_STRING,
      testValues.ASYNC_ITERABLE_RETURN_NUMBER,
      testValues.ASYNC_ITERABLE_RETURN_BOOLEAN,
      testValues.ASYNC_ITERABLE_RETURN_OBJECT,
      testValues.ASYNC_ITERABLE_RETURN_ARRAY,

      /** Other */
      testValues.REGEX,
      testValues.REGEX_STRING,
      testValues.REGEX_FLAGS,
    ];

    await Promise.all(positive.map(async (test) =>
      await t.step({
        name: `should return true for ${test.label}`,
        fn: () => {
          const results = IsHelper.isBoolean(test.value);
          assertEquals(results, true);
        },
        sanitizeExit: true,
      })
    ));

    await Promise.all(negative.map(async (test) =>
      await t.step({
        name: `should return false for ${test.label}`,
        fn: () => {
          const results = IsHelper.isBoolean(test.value);
          assertEquals(results, false);
        },
        sanitizeExit: true,
      })
    ));
  },
});

// describe("getBooleanValue", () => {
//   describe("true test cases", () => {
//     it("should return true for a true boolean", () => {
//       expect(IsHelper.getBooleanValue(true)).toBe(true);
//     });

//     it("should return true for a string of 'true'", () => {
//       expect(IsHelper.getBooleanValue("true")).toBe(true);
//     });

//     it("should return true for a string of 'TRUE'", () => {
//       expect(IsHelper.getBooleanValue("TRUE")).toBe(true);
//     });

//     it("should return true for a string of '1'", () => {
//       expect(IsHelper.getBooleanValue("1")).toBe(true);
//     });

//     it("should return true for a number of 1", () => {
//       expect(IsHelper.getBooleanValue(1)).toBe(true);
//     });

//     it("should return true for a string of 'y'", () => {
//       expect(IsHelper.getBooleanValue("y")).toBe(true);
//     });

//     it("should return true for a string of 'yes'", () => {
//       expect(IsHelper.getBooleanValue("yes")).toBe(true);
//     });

//     it("should return true for a string of 'Y'", () => {
//       expect(IsHelper.getBooleanValue("Y")).toBe(true);
//     });

//     it("should return true for a string of 'YES'", () => {
//       expect(IsHelper.getBooleanValue("YES")).toBe(true);
//     });
//   });
//   describe("false test cases", () => {
//     it("should return true for a false boolean", () => {
//       expect(IsHelper.getBooleanValue(false)).toBe(false);
//     });

//     it("should return true for a string of 'false'", () => {
//       expect(IsHelper.getBooleanValue("false")).toBe(false);
//     });

//     it("should return true for a string of 'FALSE'", () => {
//       expect(IsHelper.getBooleanValue("FALSE")).toBe(false);
//     });

//     it("should return true for a string of '0'", () => {
//       expect(IsHelper.getBooleanValue("0")).toBe(false);
//     });

//     it("should return true for a number of 0", () => {
//       expect(IsHelper.getBooleanValue(0)).toBe(false);
//     });

//     it("should return true for a string of 'n'", () => {
//       expect(IsHelper.getBooleanValue("n")).toBe(false);
//     });

//     it("should return true for a string of 'no'", () => {
//       expect(IsHelper.getBooleanValue("no")).toBe(false);
//     });

//     it("should return true for a string of 'N'", () => {
//       expect(IsHelper.getBooleanValue("N")).toBe(false);
//     });

//     it("should return true for a string of 'NO'", () => {
//       expect(IsHelper.getBooleanValue("NO")).toBe(false);
//     });

//     it("should return false for a string", () => {
//       expect(IsHelper.getBooleanValue("")).toBe(false);
//     });

//     it("should return false for a non-binary number", () => {
//       expect(IsHelper.getBooleanValue(2)).toBe(false);
//     });

//     it("should return false for a null", () => {
//       expect(IsHelper.getBooleanValue(null)).toBe(false);
//     });

//     it("should return false for an undefined", () => {
//       expect(IsHelper.getBooleanValue(undefined)).toBe(false);
//     });

//     it("should return false for an empty object", () => {
//       expect(IsHelper.getBooleanValue({})).toBe(false);
//     });

//     it("should return false for an object", () => {
//       expect(IsHelper.getBooleanValue({ a: 1 })).toBe(false);
//     });

//     it("should return false for a function", () => {
//       expect(IsHelper.getBooleanValue(() => {})).toBe(false);
//     });

//     it("should return false for a Map", () => {
//       expect(IsHelper.getBooleanValue(new Map())).toBe(false);
//     });

//     it("should return false for a Set", () => {
//       expect(IsHelper.getBooleanValue(new Set())).toBe(false);
//     });

//     it("should return false for a Date", () => {
//       expect(IsHelper.getBooleanValue(new Date())).toBe(false);
//     });

//     it("should return false for a RegExp", () => {
//       expect(IsHelper.getBooleanValue(/.*/)).toBe(false);
//     });

//     it("should return false for a Symbol", () => {
//       expect(IsHelper.getBooleanValue(Symbol())).toBe(false);
//     });

//     it("should return false for a Date", () => {
//       expect(IsHelper.getBooleanValue(new Date())).toBe(false);
//     });

//     it("should return false for an empty array", () => {
//       expect(IsHelper.getBooleanValue([])).toBe(false);
//     });

//     it("should return false for an array", () => {
//       expect(IsHelper.getBooleanValue([1])).toBe(false);
//     });

//     it("should return false for an array or booleans", () => {
//       expect(IsHelper.getBooleanValue([true])).toBe(false);
//     });

//     it("should return false for an Error", () => {
//       expect(IsHelper.getBooleanValue(new Error())).toBe(false);
//     });

//     it("should return false for a Promise", () => {
//       expect(IsHelper.getBooleanValue(Promise.resolve())).toBe(false);
//     });

//     it("should return false for a WeakMap", () => {
//       expect(IsHelper.getBooleanValue(new WeakMap())).toBe(false);
//     });

//     it("should return false for a WeakSet", () => {
//       expect(IsHelper.getBooleanValue(new WeakSet())).toBe(false);
//     });

//     it("should return false for a Float16Array", () => {
//       expect(IsHelper.getBooleanValue(new Float16Array())).toBe(false);
//     });

//     it("should return false for a Float32Array", () => {
//       expect(IsHelper.getBooleanValue(new Float32Array())).toBe(false);
//     });

//     it("should return false for a Float64Array", () => {
//       expect(IsHelper.getBooleanValue(new Float64Array())).toBe(false);
//     });

//     it("should return false for an Int8Array", () => {
//       expect(IsHelper.getBooleanValue(new Int8Array())).toBe(false);
//     });

//     it("should return false for an Int16Array", () => {
//       expect(IsHelper.getBooleanValue(new Int16Array())).toBe(false);
//     });

//     it("should return false for an Int32Array", () => {
//       expect(IsHelper.getBooleanValue(new Int32Array())).toBe(false);
//     });

//     it("should return false for a Uint8Array", () => {
//       expect(IsHelper.getBooleanValue(new Uint8Array())).toBe(false);
//     });

//     it("should return false for a Uint16Array", () => {
//       expect(IsHelper.getBooleanValue(new Uint16Array())).toBe(false);
//     });

//     it("should return false for a Uint32Array", () => {
//       expect(IsHelper.getBooleanValue(new Uint32Array())).toBe(false);
//     });

//     it("should return false for a Uint8ClampedArray", () => {
//       expect(IsHelper.getBooleanValue(new Uint8ClampedArray())).toBe(false);
//     });

//     it("should return false for a BigInt64Array", () => {
//       expect(IsHelper.getBooleanValue(new BigInt64Array())).toBe(false);
//     });

//     it("should return false for a BigUint64Array", () => {
//       expect(IsHelper.getBooleanValue(new BigUint64Array())).toBe(false);
//     });
//   });
// });
