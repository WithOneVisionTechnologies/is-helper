export class ValuesStruct {
  /** Blank Values */
  public UNDEFINED = { label: "undefined", value: undefined };
  public NULL = { label: "null", value: null };

  /** Strings */
  public STRING_EMPTY = { label: "empty string", value: "" };
  public STRING_NUMBER = { label: "string of numbers", value: "123" };
  public STRING_NEGATIVE_NUMBER = {
    label: "string of negative numbers",
    value: "-123",
  };
  public STRING_DECIMAL_NUMBER = {
    label: "string of decimal number",
    value: "123.45",
  };
  public STRING_NEGATIVE_DECIMAL_NUMBER = {
    label: "string of negative decimal number",
    value: "-123.45",
  };
  public STRING_LETTERS = { label: "string of alpha characters", value: "abc" };
  public STRING_SPECIAL_CHARACTERS = {
    label: "string of special characters",
    value: "!@#$%^&*()",
  };
  public STRING_MIXED_CASE = {
    label: "string of mixed case alpha characters",
    value: "aBc",
  };
  public STRING_LEADING_WHITESPACE = {
    label: "string of whitespace followed by alpha characters",
    value: " abc",
  };
  public STRING_TRAILING_WHITESPACE = {
    label: "string of alpha characters trailed by whitespace",
    value: "abc ",
  };
  public STRING_LEADING_AND_TRAILING_WHITESPACE = {
    label: "string of alpha characters with leading and trailing whitespace",
    value: " abc ",
  };
  public STRING_LEADING_AND_TRAILING_WHITESPACE_MULTIPLE = {
    label:
      "string of alpha characters with leading and trailing multiple whitespace",
    value: "  abc  ",
  };
  public STRING_WHITESPACE = { label: "string of whitespace", value: " " };
  public STRING_WHITESPACE_MULTIPLE = {
    label: "string of multiple whitespace",
    value: "  ",
  };
  public STRING_TAB = { label: "string of tab", value: "\t" };
  public STRING_NEWLINE = { label: "string of new line", value: "\n" };
  public STRING_CARRIAGE_RETURN = {
    label: "string of carriage return",
    value: "\r",
  };
  public STRING_TAB_NEWLINE_CARRIAGE_RETURN = {
    label: "string of tab, new line, and carriage return",
    value: "\t\n\r",
  };
  public STRING_MIXED_WHITESPACE = {
    label:
      "string of tab, new line, and carriage return with leading whitespace",
    value: " \t\n\r",
  };
  public STRING_LEADING_WHITESPACE_MIXED = {
    label: "string of alpha characters with leading whitespace and tab",
    value: " \tabc",
  };
  public STRING_TRAILING_WHITESPACE_MIXED = {
    label: "string of alpha characters with trailing tab and whitespace",
    value: "abc\t ",
  };
  public STRING_LEADING_AND_TRAILING_WHITESPACE_MIXED = {
    label:
      "string of alpha characters with trailing and leading tab and whitespace",
    value: " \tabc\t ",
  };
  public STRING_LEADING_AND_TRAILING_WHITESPACE_MIXED_MULTIPLE = {
    label:
      "string of alpha characters with leading and trailing whitespace and tab combinations",
    value: " \t abc\t ",
  };
  public STRING_WHITESPACE_MIXED = {
    label: "string of tab with leading whitespace",
    value: " \t",
  };
  public STRING_WHITESPACE_MIXED_MULTIPLE = {
    label: "string of tab with leading and trailing whitespace",
    value: " \t ",
  };
  public STRING_TAB_MIXED = {
    label: "string of tab with trailing whitespace",
    value: "\t ",
  };
  public STRING_NEWLINE_MIXED = {
    label: "string of new line with trailing whitespace",
    value: "\n ",
  };
  public STRING_CARRIAGE_RETURN_MIXED = {
    label: "string of carriage return with trailing whitespace",
    value: "\r ",
  };
  public STRING_TAB_NEWLINE_CARRIAGE_RETURN_MIXED = {
    label:
      "string of tab, new line, and carriage return with whitespace separators",
    value: "\t \n \r ",
  };
  public STRING_NUMBER_LETTERS = {
    label: "string of alphanumeric characters",
    value: "123abc",
  };
  public STRING_NUMBER_SPECIAL_CHARACTERS = {
    label: "string of numeric and special characters",
    value: "123!@#",
  };
  public STRING_NUMBER_MIXED_CASE = {
    label: "string of alphanumeric characters mixed casing",
    value: "123aBc",
  };
  public STRING_LETTERS_SPECIAL_CHARACTERS = {
    label: "string of alpha and special characters",
    value: "abc!@#",
  };

  /** Numbers */
  public NUMBER_ZERO = { label: "numeric zero", value: 0 };
  public NUMBER_VALUE = { label: "numeric value", value: 7 };
  public NUMBER_NEGATIVE_VALUE = { label: "numeric negative value", value: -7 };
  public NUMBER_DECIMAL = { label: "numeric decimal value", value: 1.23 };
  public NUMBER_NEGATIVE_DECIMAL = {
    label: "numeric negative decimal value",
    value: -1.23,
  };
  public NUMBER_MAX_SAFE_INTEGER = {
    label: "numeric max safe integer",
    value: Number.MAX_SAFE_INTEGER,
  };
  public NUMBER_MIN_SAFE_INTEGER = {
    label: "numeric min safe integer",
    value: Number.MIN_SAFE_INTEGER,
  };
  public NUMBER_MAX_VALUE = {
    label: "numeric max value",
    value: Number.MAX_VALUE,
  };
  public NUMBER_MIN_VALUE = {
    label: "numeric min value",
    value: Number.MIN_VALUE,
  };
  public NUMBER_POSITIVE_INFINITY = {
    label: "numeric positive infinity",
    value: Number.POSITIVE_INFINITY,
  };
  public NUMBER_NEGATIVE_INFINITY = {
    label: "numeric negative infinity",
    value: Number.NEGATIVE_INFINITY,
  };
  public NUMBER_NAN = { label: "numeric not a number", value: Number.NaN };

  /** Booleans */
  public BOOLEAN_TRUE = { label: "boolean true", value: true };
  public BOOLEAN_FALSE = { label: "boolean false", value: false };
  public BOOLEAN_TRUE_STRING = { label: "boolean true string", value: "true" };
  public BOOLEAN_FALSE_STRING = {
    label: "boolean false string",
    value: "false",
  };
  public BOOLEAN_TRUE_NUMBER = { label: "boolean 1 numeric", value: 1 };
  public BOOLEAN_FALSE_NUMBER = { label: "boolean 0 numeric", value: 0 };
  public BOOLEAN_TRUE_NUMBER_STRING = { label: "boolean 1 string", value: "1" };
  public BOOLEAN_FALSE_NUMBER_STRING = {
    label: "boolean 0 string",
    value: "0",
  };
  public BOOLEAN_TRUE_CAPITAL_STRING = {
    label: "boolean true capitalized",
    value: "TRUE",
  };
  public BOOLEAN_FALSE_CAPITAL_STRING = {
    label: "boolean false capitalized",
    value: "FALSE",
  };
  public BOOLEAN_TRUE_MIXED_STRING = {
    label: "boolean true pascal case",
    value: "True",
  };
  public BOOLEAN_FALSE_MIXED_STRING = {
    label: "boolean false pascal case",
    value: "False",
  };
  public BOOLEAN_TRUE_MIXED = {
    label: "boolean true mix casing",
    value: "TrUe",
  };
  public BOOLEAN_FALSE_MIXED = {
    label: "boolean false mix casing",
    value: "FaLsE",
  };

  /** Arrays */
  public ARRAY_EMPTY = { label: "array empty", value: [] };
  public ARRAY_EMPTY_STRING = { label: "array empty string", value: [""] };
  public ARRAY_EMPTY_NUMBER = { label: "array 0 numeric", value: [0] };
  public ARRAY_EMPTY_BOOLEAN = { label: "array false", value: [false] };
  public ARRAY_EMPTY_OBJECT = { label: "array empty object", value: [{}] };
  public ARRAY_EMPTY_ARRAY = { label: "array empty sub-array", value: [[]] };
  public ARRAY_EMPTY_NULL = { label: "array with 1 null value", value: [null] };
  public ARRAY_EMPTY_UNDEFINED = {
    label: "array with 1 undefined value",
    value: [undefined],
  };
  public ARRAY_EMPTY_MIXED = {
    label: "array with all default empty values",
    value: ["", 0, false, {}, [], null, undefined],
  };
  public ARRAY_FILLED = { label: "array normal", value: [1, 2, 3] };
  public ARRAY_STRING = { label: "array single alpha string", value: ["abc"] };
  public ARRAY_NUMBER = { label: "array single numeric", value: [123] };
  public ARRAY_BOOLEAN = { label: "array single true value", value: [true] };
  public ARRAY_OBJECT = {
    label: "array normal object value",
    value: [{ a: 1 }],
  };
  public ARRAY_ARRAY = { label: "array 2d array normal", value: [[1, 2, 3]] };
  public ARRAY_MIXED = {
    label: "array mix value array",
    value: ["abc", 123, true, { a: 1 }, [1, 2, 3]],
  };

  /** Objects */
  public OBJECT_EMPTY = { label: "object empty", value: {} };
  public OBJECT_EMPTY_STRING = {
    label: "object single empty string",
    value: { a: "" },
  };
  public OBJECT_EMPTY_NUMBER = {
    label: "object single numeric",
    value: { a: 0 },
  };
  public OBJECT_EMPTY_BOOLEAN = {
    label: "object single false value",
    value: { a: false },
  };
  public OBJECT_EMPTY_OBJECT = {
    label: "object single empty sub-object",
    value: { a: {} },
  };
  public OBJECT_EMPTY_ARRAY = {
    label: "object single empty array",
    value: { a: [] },
  };
  public OBJECT_EMPTY_NULL = {
    label: "object single null value",
    value: { a: null },
  };
  public OBJECT_EMPTY_UNDEFINED = {
    label: "object single undefined value",
    value: { a: undefined },
  };
  public OBJECT_EMPTY_MIXED = {
    label: "object mix empty values",
    value: {
      a: "",
      b: 0,
      c: false,
      d: {},
      e: [],
      f: null,
      g: undefined,
    },
  };
  public OBJECT_FILLED = {
    label: "object normal fill",
    value: { a: 1, b: 2, c: 3 },
  };
  public OBJECT_STRING = {
    label: "object single alpha string",
    value: { a: "abc" },
  };
  public OBJECT_NUMBER = { label: "object single numeric", value: { a: 123 } };
  public OBJECT_BOOLEAN = {
    label: "object single true value",
    value: { a: true },
  };
  public OBJECT_OBJECT = {
    label: "object single nested object",
    value: { a: { b: 1 } },
  };
  public OBJECT_ARRAY = {
    label: "object single normal array",
    value: { a: [1, 2, 3] },
  };

  /** Functions */
  public FUNCTION_EMPTY = { label: "function empty", value: () => {} };
  public FUNCTION_RETURN_STRING = {
    label: "function return alpha string",
    value: () => "abc",
  };
  public FUNCTION_RETURN_NUMBER = {
    label: "function return numeric",
    value: () => 123,
  };
  public FUNCTION_RETURN_BOOLEAN = {
    label: "function return true",
    value: () => true,
  };
  public FUNCTION_RETURN_OBJECT = {
    label: "function return non-empty object",
    value: () => ({ a: 1 }),
  };
  public FUNCTION_RETURN_ARRAY = {
    label: "function return non-empty array",
    value: () => [1, 2, 3],
  };

  /** Dates */
  public DATE_NOW = { label: "date now", value: new Date() };
  public DATE_1970 = { label: "date 1970", value: new Date(0) };
  public DATE_STRING = {
    label: "date created by string",
    value: new Date("2021-01-01"),
  };
  public DATE_NUMBER = {
    label: "date created by epoch",
    value: new Date(1612147200000),
  };
  public DATE_YEAR_MONTH_DAY = {
    label: "date created by year, month, day",
    value: new Date(2021, 0, 1),
  };
  public DATE_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND = {
    label: "date created by year, month, day, hour, minute, second",
    value: new Date(
      2021,
      0,
      1,
      0,
      0,
      0,
    ),
  };
  public DATE_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND_MILLISECOND = {
    label:
      "date created by year, month, day, hour, minute, second, millisecond",
    value: new Date(
      2021,
      0,
      1,
      0,
      0,
      0,
      0,
    ),
  };

  /** Errors */
  public ERROR = { label: "error empty", value: new Error() };
  public ERROR_STRING = {
    label: "error alpha string message",
    value: new Error("abc"),
  };
  public ERROR_NUMBER = {
    label: "error numeric string message",
    value: new Error("123"),
  };
  public ERROR_BOOLEAN = {
    label: "error true string message",
    value: new Error("true"),
  };
  public ERROR_OBJECT = {
    label: "error non-empty object string message",
    value: new Error("{ a: 1 }"),
  };
  public ERROR_ARRAY = {
    label: "error non-empty array string message",
    value: new Error("[1, 2, 3]"),
  };
  public ERROR_DATE = {
    label: "error date string message",
    value: new Error("2021-01-01"),
  };
  public ERROR_FUNCTION = {
    label: "error function string message",
    value: new Error("() => {}"),
  };

  /** Int8Arrays */
  public INT8_ARRAY_EMPTY = {
    label: "Int8Array empty",
    value: new Int8Array(),
  };
  public INT8_ARRAY_FILLED = {
    label: "Int8Array non-empty",
    value: new Int8Array([1, 2, 3]),
  };

  /** Uint8Arrays */
  public UINT8_ARRAY_EMPTY = {
    label: "Uint8Array empty",
    value: new Uint8Array(),
  };
  public UINT8_ARRAY_FILLED = {
    label: "Uint8Array non-empty",
    value: new Uint8Array([1, 2, 3]),
  };

  /** Uint8ClampedArrays */
  public UINT8_CLAMPED_ARRAY_EMPTY = {
    label: "Uint8ClampedArray empty",
    value: new Uint8ClampedArray(),
  };
  public UINT8_CLAMPED_ARRAY_FILLED = {
    label: "Uint8ClampedArray non-empty",
    value: new Uint8ClampedArray([1, 2, 3]),
  };

  /** Int16Arrays */
  public INT16_ARRAY_EMPTY = {
    label: "Int16Array empty",
    value: new Int16Array(),
  };
  public INT16_ARRAY_FILLED = {
    label: "Int16Array non-empty",
    value: new Int16Array([1, 2, 3]),
  };

  /** Uint16Arrays */
  public UINT16_ARRAY_EMPTY = {
    label: "Uint16Array empty",
    value: new Uint16Array(),
  };
  public UINT16_ARRAY_FILLED = {
    label: "Uint16Array non-empty",
    value: new Uint16Array([1, 2, 3]),
  };

  /** Int32Arrays */
  public INT32_ARRAY_EMPTY = {
    label: "Int32Array empty",
    value: new Int32Array(),
  };
  public INT32_ARRAY_FILLED = {
    label: "Int32Array non-empty",
    value: new Int32Array([1, 2, 3]),
  };

  /** Uint32Arrays */
  public UINT32_ARRAY_EMPTY = {
    label: "Uint32Array empty",
    value: new Uint32Array(),
  };
  public UINT32_ARRAY_FILLED = {
    label: "Uint32Array non-empty",
    value: new Uint32Array([1, 2, 3]),
  };

  /** BigInt64Arrays */
  public BIG_INT64_ARRAY_EMPTY = {
    label: "BigInt64Array empty",
    value: new BigInt64Array(),
  };
  public BIG_INT64_ARRAY_FILLED = {
    label: "BigInt64Array non-empty",
    value: new BigInt64Array([1n, 2n, 3n]),
  };

  /** BigUint64Arrays */
  public BIG_UINT64_ARRAY_EMPTY = {
    label: "BigUint64Array empty",
    value: new BigUint64Array(),
  };
  public BIG_UINT64_ARRAY_FILLED = {
    label: "BigUint64Array non-empty",
    value: new BigUint64Array([1n, 2n, 3n]),
  };

  /** Float32Arrays */
  public FLOAT32_ARRAY_EMPTY = {
    label: "Float32Array empty",
    value: new Float32Array(),
  };
  public FLOAT32_ARRAY_FILLED = {
    label: "Float32Array non-empty",
    value: new Float32Array([1, 2, 3]),
  };

  /** Float64Arrays */
  public FLOAT64_ARRAY_EMPTY = {
    label: "Float64Array empty",
    value: new Float64Array(),
  };
  public FLOAT64_ARRAY_FILLED = {
    label: "Float64Array non-empty",
    value: new Float64Array([1, 2, 3]),
  };

  /** Symbols */
  public SYMBOL = { label: "symbol empty", value: Symbol() };
  public SYMBOL_STRING = { label: "symbol alpha string", value: Symbol("abc") };
  public SYMBOL_NUMBER = { label: "symbol numeric", value: Symbol(123) };

  /** Maps */
  public MAP_EMPTY = { label: "map empty", value: new Map() };
  public MAP_FILLED = {
    label: "map normal numeric fill",
    value: new Map([["a", 1], ["b", 2], ["c", 3]]),
  };
  public MAP_STRING = {
    label: "map alpha single",
    value: new Map([["a", "abc"]]),
  };
  public MAP_NUMBER = {
    label: "map numeric single",
    value: new Map([["a", 123]]),
  };
  public MAP_BOOLEAN = {
    label: "map boolean single",
    value: new Map([["a", true]]),
  };
  public MAP_OBJECT = {
    label: "map non-empty object single",
    value: new Map([["a", { b: 1 }]]),
  };
  public MAP_ARRAY = {
    label: "map non-empty array single",
    value: new Map([["a", [1, 2, 3]]]),
  };

  /** Sets */
  public SET_EMPTY = { label: "set empty", value: new Set() };
  public SET_FILLED = {
    label: "set non-empty numeric array",
    value: new Set([1, 2, 3]),
  };
  public SET_STRING = {
    label: "set alpha string single",
    value: new Set(["abc"]),
  };
  public SET_NUMBER = { label: "set numeric single", value: new Set([123]) };
  public SET_BOOLEAN = { label: "set boolean single", value: new Set([true]) };
  public SET_OBJECT = {
    label: "set non-empty object single",
    value: new Set([{ a: 1 }]),
  };
  public SET_ARRAY = {
    label: "set non-empty array single",
    value: new Set([[1, 2, 3]]),
  };

  /** WeakMaps */
  public WEAK_MAP_EMPTY = { label: "weak map empty", value: new WeakMap() };
  public WEAK_MAP_FILLED = {
    label: "weak map normal fill",
    value: new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2], [{
      c: 3,
    }, 3]]),
  };

  /** WeakSets */
  public WEAK_SET_EMPTY = { label: "weak set empty", value: new WeakSet() };
  public WEAK_SET_FILLED = {
    label: "weak set normal fill",
    value: new WeakSet([{ a: 1 }, { b: 2 }, { c: 3 }]),
  };

  /** Promises */
  public PROMISE_PENDING = {
    label: "promise empty",
    value: new Promise(() => {}),
  };
  public PROMISE_RESOLVE = {
    label: "promise empty resolve",
    value: Promise.resolve(),
  };
  public PROMISE_REJECT = {
    label: "promise empty reject",
    value: Promise.reject(),
  };
  public PROMISE_RESOLVE_STRING = {
    label: "promise resolve alpha string",
    value: Promise.resolve("abc"),
  };
  public PROMISE_RESOLVE_NUMBER = {
    label: "promise resolve numeric",
    value: Promise.resolve(123),
  };
  public PROMISE_RESOLVE_BOOLEAN = {
    label: "promise resolve boolean",
    value: Promise.resolve(true),
  };
  public PROMISE_RESOLVE_OBJECT = {
    label: "promise resolve non-empty object",
    value: Promise.resolve({ a: 1 }),
  };
  public PROMISE_RESOLVE_ARRAY = {
    label: "promise resolve non-empty array",
    value: Promise.resolve([1, 2, 3]),
  };
  public PROMISE_REJECT_STRING = {
    label: "promise reject alpha string",
    value: Promise.reject("abc"),
  };
  public PROMISE_REJECT_NUMBER = {
    label: "promise reject numeric",
    value: Promise.reject(123),
  };
  public PROMISE_REJECT_BOOLEAN = {
    label: "promise reject boolean",
    value: Promise.reject(true),
  };
  public PROMISE_REJECT_OBJECT = {
    label: "promise reject non-empty object",
    value: Promise.reject({ a: 1 }),
  };
  public PROMISE_REJECT_ARRAY = {
    label: "promise reject non-empty array",
    value: Promise.reject([1, 2, 3]),
  };

  /** Generators */
  public GENERATOR_EMPTY = { label: "generator empty", value: function* () {} };
  public GENERATOR_RETURN_STRING = {
    label: "generator return alpha string",
    value: function* () {
      yield "abc";
    },
  };
  public GENERATOR_RETURN_NUMBER = {
    label: "generator return numeric",
    value: function* () {
      yield 123;
    },
  };
  public GENERATOR_RETURN_BOOLEAN = {
    label: "generator return boolean",
    value: function* () {
      yield true;
    },
  };
  public GENERATOR_RETURN_OBJECT = {
    label: "generator return non-empty object",
    value: function* () {
      yield { a: 1 };
    },
  };
  public GENERATOR_RETURN_ARRAY = {
    label: "generator return non-empty array",
    value: function* () {
      yield [1, 2, 3];
    },
  };

  /** Async Generators */
  public ASYNC_GENERATOR_EMPTY = {
    label: "async generator empty",
    value: async function* () {},
  };
  public ASYNC_GENERATOR_RETURN_STRING = {
    label: "async generator return alpha string",
    value: async function* () {
      yield "abc";
    },
  };
  public ASYNC_GENERATOR_RETURN_NUMBER = {
    label: "async generator return numeric",
    value: async function* () {
      yield 123;
    },
  };
  public ASYNC_GENERATOR_RETURN_BOOLEAN = {
    label: "async generator return boolean",
    value: async function* () {
      yield true;
    },
  };
  public ASYNC_GENERATOR_RETURN_OBJECT = {
    label: "async generator return non-empty object",
    value: async function* () {
      yield { a: 1 };
    },
  };
  public ASYNC_GENERATOR_RETURN_ARRAY = {
    label: "async generator return non-empty array",
    value: async function* () {
      yield [1, 2, 3];
    },
  };

  /** Iterables */
  public ITERABLE_EMPTY = {
    label: "iterable empty",
    value: {
      [Symbol.iterator]: () => ({
        next: () => ({ done: true, value: undefined }),
      }),
    },
  };
  public ITERABLE_RETURN_STRING = {
    label: "iterable return alpha string",
    value: {
      [Symbol.iterator]: () => ({
        next: () => ({ done: false, value: "abc" }),
      }),
    },
  };
  public ITERABLE_RETURN_NUMBER = {
    label: "iterable return numeric",
    value: {
      [Symbol.iterator]: () => ({
        next: () => ({ done: false, value: 123 }),
      }),
    },
  };
  public ITERABLE_RETURN_BOOLEAN = {
    label: "iterable return boolean",
    value: {
      [Symbol.iterator]: () => ({
        next: () => ({ done: false, value: true }),
      }),
    },
  };
  public ITERABLE_RETURN_OBJECT = {
    label: "iterable return non-empty object",
    value: {
      [Symbol.iterator]: () => ({
        next: () => ({ done: false, value: { a: 1 } }),
      }),
    },
  };
  public ITERABLE_RETURN_ARRAY = {
    label: "iterable return non-empty array",
    value: {
      [Symbol.iterator]: () => ({
        next: () => ({ done: false, value: [1, 2, 3] }),
      }),
    },
  };

  /** Async Iterables */
  public ASYNC_ITERABLE_EMPTY = {
    label: "async iterable empty",
    value: {
      [Symbol.asyncIterator]: () => ({
        next: () => Promise.resolve({ done: true, value: undefined }),
      }),
    },
  };
  public ASYNC_ITERABLE_RETURN_STRING = {
    label: "async iterable return alpha string",
    value: {
      [Symbol.asyncIterator]: () => ({
        next: () => Promise.resolve({ done: false, value: "abc" }),
      }),
    },
  };
  public ASYNC_ITERABLE_RETURN_NUMBER = {
    label: "async iterable return numeric",
    value: {
      [Symbol.asyncIterator]: () => ({
        next: () => Promise.resolve({ done: false, value: 123 }),
      }),
    },
  };
  public ASYNC_ITERABLE_RETURN_BOOLEAN = {
    label: "async iterable return boolean",
    value: {
      [Symbol.asyncIterator]: () => ({
        next: () => Promise.resolve({ done: false, value: true }),
      }),
    },
  };
  public ASYNC_ITERABLE_RETURN_OBJECT = {
    label: "async iterable return non-empty object",
    value: {
      [Symbol.asyncIterator]: () => ({
        next: () => Promise.resolve({ done: false, value: { a: 1 } }),
      }),
    },
  };
  public ASYNC_ITERABLE_RETURN_ARRAY = {
    label: "async iterable return non-empty array",
    value: {
      [Symbol.asyncIterator]: () => ({
        next: () => Promise.resolve({ done: false, value: [1, 2, 3] }),
      }),
    },
  };

  /** Other */
  public REGEX = { label: "regex normal no flags", value: /abc/ };
  public REGEX_STRING = {
    label: "regex constructor function no flags",
    value: new RegExp("abc"),
  };
  public REGEX_FLAGS = {
    label: "regex constructor function with flags",
    value: new RegExp("abc", "g"),
  };
}

/** Copy Paste list for unit tests

    // Blank Values
    TestingValues.UNDEFINED,
    TestingValues.NULL,

    // Strings
    TestingValues.STRING_EMPTY,
    TestingValues.STRING_NUMBER,
    TestingValues.STRING_NEGATIVE_NUMBER,
    TestingValues.STRING_DECIMAL_NUMBER,
    TestingValues.STRING_NEGATIVE_DECIMAL_NUMBER,
    TestingValues.STRING_LETTERS,
    TestingValues.STRING_SPECIAL_CHARACTERS,
    TestingValues.STRING_MIXED_CASE,
    TestingValues.STRING_LEADING_WHITESPACE,
    TestingValues.STRING_TRAILING_WHITESPACE,
    TestingValues.STRING_LEADING_AND_TRAILING_WHITESPACE,
    TestingValues.STRING_LEADING_AND_TRAILING_WHITESPACE_MULTIPLE,
    TestingValues.STRING_WHITESPACE,
    TestingValues.STRING_WHITESPACE_MULTIPLE,
    TestingValues.STRING_TAB,
    TestingValues.STRING_NEWLINE,
    TestingValues.STRING_CARRIAGE_RETURN,
    TestingValues.STRING_TAB_NEWLINE_CARRIAGE_RETURN,
    TestingValues.STRING_MIXED_WHITESPACE,
    TestingValues.STRING_LEADING_WHITESPACE_MIXED,
    TestingValues.STRING_TRAILING_WHITESPACE_MIXED,
    TestingValues.STRING_LEADING_AND_TRAILING_WHITESPACE_MIXED,
    TestingValues.STRING_LEADING_AND_TRAILING_WHITESPACE_MIXED_MULTIPLE,
    TestingValues.STRING_WHITESPACE_MIXED,
    TestingValues.STRING_WHITESPACE_MIXED_MULTIPLE,
    TestingValues.STRING_TAB_MIXED,
    TestingValues.STRING_NEWLINE_MIXED,
    TestingValues.STRING_CARRIAGE_RETURN_MIXED,
    TestingValues.STRING_TAB_NEWLINE_CARRIAGE_RETURN_MIXED,
    TestingValues.STRING_NUMBER_LETTERS,
    TestingValues.STRING_NUMBER_SPECIAL_CHARACTERS,
    TestingValues.STRING_NUMBER_MIXED_CASE,
    TestingValues.STRING_LETTERS_SPECIAL_CHARACTERS,

    // Numbers
    TestingValues.NUMBER_ZERO,
    TestingValues.NUMBER_VALUE,
    TestingValues.NUMBER_NEGATIVE_VALUE,
    TestingValues.NUMBER_DECIMAL,
    TestingValues.NUMBER_NEGATIVE_DECIMAL,
    TestingValues.NUMBER_MAX_SAFE_INTEGER,
    TestingValues.NUMBER_MIN_SAFE_INTEGER,
    TestingValues.NUMBER_MAX_VALUE,
    TestingValues.NUMBER_MIN_VALUE,
    TestingValues.NUMBER_POSITIVE_INFINITY,
    TestingValues.NUMBER_NEGATIVE_INFINITY,
    TestingValues.NUMBER_NAN,

    // Booleans
    TestingValues.BOOLEAN_TRUE,
    TestingValues.BOOLEAN_FALSE,
    TestingValues.BOOLEAN_TRUE_STRING,
    TestingValues.BOOLEAN_FALSE_STRING,
    TestingValues.BOOLEAN_TRUE_NUMBER,
    TestingValues.BOOLEAN_FALSE_NUMBER,
    TestingValues.BOOLEAN_TRUE_NUMBER_STRING,
    TestingValues.BOOLEAN_FALSE_NUMBER_STRING,
    TestingValues.BOOLEAN_TRUE_CAPITAL_STRING,
    TestingValues.BOOLEAN_FALSE_CAPITAL_STRING,
    TestingValues.BOOLEAN_TRUE_MIXED_STRING,
    TestingValues.BOOLEAN_FALSE_MIXED_STRING,
    TestingValues.BOOLEAN_TRUE_MIXED,
    TestingValues.BOOLEAN_FALSE_MIXED,

    // Arrays
    TestingValues.ARRAY_EMPTY,
    TestingValues.ARRAY_EMPTY_STRING,
    TestingValues.ARRAY_EMPTY_NUMBER,
    TestingValues.ARRAY_EMPTY_BOOLEAN,
    TestingValues.ARRAY_EMPTY_OBJECT,
    TestingValues.ARRAY_EMPTY_ARRAY,
    TestingValues.ARRAY_EMPTY_NULL,
    TestingValues.ARRAY_EMPTY_UNDEFINED,
    TestingValues.ARRAY_EMPTY_MIXED,
    TestingValues.ARRAY_FILLED,
    TestingValues.ARRAY_STRING,
    TestingValues.ARRAY_NUMBER,
    TestingValues.ARRAY_BOOLEAN,
    TestingValues.ARRAY_OBJECT,
    TestingValues.ARRAY_ARRAY,
    TestingValues.ARRAY_MIXED,

    // Objects
    TestingValues.OBJECT_EMPTY,
    TestingValues.OBJECT_EMPTY_STRING,
    TestingValues.OBJECT_EMPTY_NUMBER,
    TestingValues.OBJECT_EMPTY_BOOLEAN,
    TestingValues.OBJECT_EMPTY_OBJECT,
    TestingValues.OBJECT_EMPTY_ARRAY,
    TestingValues.OBJECT_EMPTY_NULL,
    TestingValues.OBJECT_EMPTY_UNDEFINED,
    TestingValues.OBJECT_EMPTY_MIXED,
    TestingValues.OBJECT_FILLED,
    TestingValues.OBJECT_STRING,
    TestingValues.OBJECT_NUMBER,
    TestingValues.OBJECT_BOOLEAN,
    TestingValues.OBJECT_OBJECT,
    TestingValues.OBJECT_ARRAY,

    // Functions
    TestingValues.FUNCTION_EMPTY,
    TestingValues.FUNCTION_RETURN_STRING,
    TestingValues.FUNCTION_RETURN_NUMBER,
    TestingValues.FUNCTION_RETURN_BOOLEAN,
    TestingValues.FUNCTION_RETURN_OBJECT,
    TestingValues.FUNCTION_RETURN_ARRAY,

    // Dates
    TestingValues.DATE_NOW,
    TestingValues.DATE_1970,
    TestingValues.DATE_STRING,
    TestingValues.DATE_NUMBER,
    TestingValues.DATE_YEAR_MONTH_DAY,
    TestingValues.DATE_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND,
    TestingValues.DATE_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND_MILLISECOND,

    // Errors
    TestingValues.ERROR,
    TestingValues.ERROR_STRING,
    TestingValues.ERROR_NUMBER,
    TestingValues.ERROR_BOOLEAN,
    TestingValues.ERROR_OBJECT,
    TestingValues.ERROR_ARRAY,
    TestingValues.ERROR_DATE,
    TestingValues.ERROR_FUNCTION,

    // Int8Arrays
    TestingValues.INT8_ARRAY_EMPTY,
    TestingValues.INT8_ARRAY_FILLED,

    // Uint8Arrays
    TestingValues.UINT8_ARRAY_EMPTY,
    TestingValues.UINT8_ARRAY_FILLED,

    // Uint8ClampedArrays
    TestingValues.UINT8_CLAMPED_ARRAY_EMPTY,
    TestingValues.UINT8_CLAMPED_ARRAY_FILLED,

    // Int16Arrays
    TestingValues.INT16_ARRAY_EMPTY,
    TestingValues.INT16_ARRAY_FILLED,

    // Uint16Arrays
    TestingValues.UINT16_ARRAY_EMPTY,
    TestingValues.UINT16_ARRAY_FILLED,

    // Int32Arrays
    TestingValues.INT32_ARRAY_EMPTY,
    TestingValues.INT32_ARRAY_FILLED,

    // Uint32Arrays
    TestingValues.UINT32_ARRAY_EMPTY,
    TestingValues.UINT32_ARRAY_FILLED,

    // BigInt64Arrays
    TestingValues.BIG_INT64_ARRAY_EMPTY,
    TestingValues.BIG_INT64_ARRAY_FILLED,

    // BigUint64Arrays
    TestingValues.BIG_UINT64_ARRAY_EMPTY,
    TestingValues.BIG_UINT64_ARRAY_FILLED,

    // Float32Arrays
    TestingValues.FLOAT32_ARRAY_EMPTY,
    TestingValues.FLOAT32_ARRAY_FILLED,

    // Float64Arrays
    TestingValues.FLOAT64_ARRAY_EMPTY,
    TestingValues.FLOAT64_ARRAY_FILLED,

    // Symbols
    TestingValues.SYMBOL,
    TestingValues.SYMBOL_STRING,
    TestingValues.SYMBOL_NUMBER,

    // Maps
    TestingValues.MAP_EMPTY,
    TestingValues.MAP_FILLED,
    TestingValues.MAP_STRING,
    TestingValues.MAP_NUMBER,
    TestingValues.MAP_BOOLEAN,
    TestingValues.MAP_OBJECT,
    TestingValues.MAP_ARRAY,

    // Sets
    TestingValues.SET_EMPTY,
    TestingValues.SET_FILLED,
    TestingValues.SET_STRING,
    TestingValues.SET_NUMBER,
    TestingValues.SET_BOOLEAN,
    TestingValues.SET_OBJECT,
    TestingValues.SET_ARRAY,

    // WeakMaps
    TestingValues.WEAK_MAP_EMPTY,
    TestingValues.WEAK_MAP_FILLED,

    // WeakSets
    TestingValues.WEAK_SET_EMPTY,
    TestingValues.WEAK_SET_FILLED,

    // Promises
    TestingValues.PROMISE_PENDING,
    TestingValues.PROMISE_RESOLVE,
    TestingValues.PROMISE_REJECT,
    TestingValues.PROMISE_RESOLVE_STRING,
    TestingValues.PROMISE_RESOLVE_NUMBER,
    TestingValues.PROMISE_RESOLVE_BOOLEAN,
    TestingValues.PROMISE_RESOLVE_OBJECT,
    TestingValues.PROMISE_RESOLVE_ARRAY,
    TestingValues.PROMISE_REJECT_STRING,
    TestingValues.PROMISE_REJECT_NUMBER,
    TestingValues.PROMISE_REJECT_BOOLEAN,
    TestingValues.PROMISE_REJECT_OBJECT,
    TestingValues.PROMISE_REJECT_ARRAY,

    // Generators
    TestingValues.GENERATOR_EMPTY,
    TestingValues.GENERATOR_RETURN_STRING,
    TestingValues.GENERATOR_RETURN_NUMBER,
    TestingValues.GENERATOR_RETURN_BOOLEAN,
    TestingValues.GENERATOR_RETURN_OBJECT,
    TestingValues.GENERATOR_RETURN_ARRAY,

    // Async Generators
    TestingValues.ASYNC_GENERATOR_EMPTY,
    TestingValues.ASYNC_GENERATOR_RETURN_STRING,
    TestingValues.ASYNC_GENERATOR_RETURN_NUMBER,
    TestingValues.ASYNC_GENERATOR_RETURN_BOOLEAN,
    TestingValues.ASYNC_GENERATOR_RETURN_OBJECT,
    TestingValues.ASYNC_GENERATOR_RETURN_ARRAY,

    // Iterables
    TestingValues.ITERABLE_EMPTY,
    TestingValues.ITERABLE_RETURN_STRING,
    TestingValues.ITERABLE_RETURN_NUMBER,
    TestingValues.ITERABLE_RETURN_BOOLEAN,
    TestingValues.ITERABLE_RETURN_OBJECT,
    TestingValues.ITERABLE_RETURN_ARRAY,

    // Async Iterables
    TestingValues.ASYNC_ITERABLE_EMPTY,
    TestingValues.ASYNC_ITERABLE_RETURN_STRING,
    TestingValues.ASYNC_ITERABLE_RETURN_NUMBER,
    TestingValues.ASYNC_ITERABLE_RETURN_BOOLEAN,
    TestingValues.ASYNC_ITERABLE_RETURN_OBJECT,
    TestingValues.ASYNC_ITERABLE_RETURN_ARRAY,

    // Other
    TestingValues.REGEX,
    TestingValues.REGEX_STRING,
    TestingValues.REGEX_FLAGS,
 */
