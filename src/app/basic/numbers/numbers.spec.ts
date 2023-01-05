import { increment } from "./numbers";

describe('Test for numbers', () => {
  it ('should return a number', () => {
    let numberToTest = 88;
    let result = increment(numberToTest);
    expect(typeof result).toBe('number');
  });
  it ('should return 100', () => {
    let numberToTest = 101;
    let result = increment(numberToTest);
    expect(result).toBe(100);
  });
  it ('should return the test number plus 1', () => {
    let numberToTest = 80;
    let result = increment(numberToTest);
    expect(result).toBe(81);
  });
})