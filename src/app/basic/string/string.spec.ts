import { sayHi } from "./string";

describe('test for strings', () => {
  it("should return a string", () => {
    // Arrange
    const nameToTest = 'carlos';
    // Act
    const result = sayHi(nameToTest);
    // Assert
    expect(typeof result).toBe('string');
  });

  it("should return a string with the name in params", () => {
    // Arrange
    const nameToTest = 'ramiro';
    // Act
    const result = sayHi(nameToTest);
    // Assert
    expect(result).toContain(nameToTest);
  });
  it("should return a undefined", () => {
    // Arrange
    const nameToTest = '';
    // Act
    const result = sayHi(nameToTest);
    // Assert
    expect(result).toBe(undefined);
  });
})