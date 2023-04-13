const addition = require('../calc');

describe("Calculator", () => {
  describe("Addition function", () => {
    test("should return 42 for 20 + 22", () => {
      expect(addition(20, 22)).toBe(42);
    });
    test("should return 73 for 42 + 31", () => {
      expect(addition(42, 31)).toBe(73);
    });
    /*
    Potential Test Ideas
    - no parameters
    - missing arguments
    - string as one or both arguments
    - null as one or both arguments
    - working with floating points
    - negative numbers
    */
    test("should return \"Please enter 2 numbers.\" for \"two\" + 2", () => {
      expect(addition("two", 2)).toBe('Please enter 2 numbers.');
    });
  });
  describe("Subtraction function", () => {

  });
  describe("Multiplication function", () => {

  });
  describe("Division function", () => {

  });
});