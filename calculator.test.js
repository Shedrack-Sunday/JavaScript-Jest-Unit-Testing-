const calculator = require('./calculator').default;

describe('Addition test', () => {
  test('Add 2 plus 3', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test('Add 4 plus 2', () => {
    expect(calculator.add(4, 2)).toBe(6);
  });
  test('Add 10 plus 3', () => {
    expect(calculator.add(10, 3)).toBe(13);
  });
});

describe('Subtraction test', () => {
  test('Add 2 plus 3', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
  });
  test('Add 4 plus 2', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });
  test('Add 10 plus 3', () => {
    expect(calculator.subtract(10, 3)).toBe(7);
  });
});

describe('Multiply test', () => {
  test('Add 2 plus 3', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test('Add 4 plus 2', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });
  test('Add 10 plus 3', () => {
    expect(calculator.multiply(10, 3)).toBe(30);
  });
});

describe('division test', () => {
  test('Add 2 plus 3', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });
  test('Add 4 plus 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test('Add 10 plus 3', () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });
});