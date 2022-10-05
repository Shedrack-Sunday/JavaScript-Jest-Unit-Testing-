const { stringLength, reverseString, capitalize } = require("./index.js").default;

describe("TDD task 1", () => {
  test("should be print is 5", () => {
    expect(stringLength("house")).toBe(5);
  });
  test('should be print "String is empty"', () => {
    expect(stringLength("")).toBe("String is empty");
  });
  test('should be print is "String is to long"', () => {
    expect(stringLength("house of carts blue")).toBe("String is to long");
  });
});

describe("TDD task 2", () => {
  test('should be print is "esuoh"', () => {
    expect(reverseString("house")).toBe("esuoh");
  });
});

describe("TDD task 3", () => {
  test('should be print is "House"', () => {
    expect(capitalize("house")).toBe("House");
  });
});

describe("Addition test", () => {
  test("Add 2 plus 3", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test("Add 4 plus 2", () => {
    expect(calculator.add(4, 2)).toBe(6);
  });
  test("Add 10 plus 3", () => {
    expect(calculator.add(10, 3)).toBe(13);
  });
});

describe("Subtraction test", () => {
  test("Add 2 plus 3", () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });
  test("Add 4 plus 2", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });
  test("Add 10 plus 3", () => {
    expect(calculator.subtract(10, 3)).toBe(7);
  });
});

describe("Multiply test", () => {
  test("Add 2 plus 3", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test("Add 4 plus 2", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });
  test("Add 10 plus 3", () => {
    expect(calculator.multiply(10, 3)).toBe(30);
  });
});

describe("division test", () => {
  test("Add 2 plus 3", () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });
  test("Add 4 plus 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test("Add 10 plus 3", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });
});
