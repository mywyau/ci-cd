// math.test.ts
import { addNumbers, multiplyNumbers } from '../math';

describe('addNumbers function', () => {
  it('adds two positive numbers correctly', () => {
    const result = addNumbers(3, 5);
    expect(result).toBe(8);
  });

  it('adds a negative and a positive number correctly', () => {
    const result = addNumbers(-3, 5);
    expect(result).toBe(2);
  });

  it('adds two negative numbers correctly', () => {
    const result = addNumbers(-3, -5);
    expect(result).toBe(-8);
  });
});

describe('multiplyNumbers function', () => {
  it('multiplies two positive numbers correctly', () => {
    const result = multiplyNumbers(3, 5);
    expect(result).toBe(15);
  });

  it('multiplies a negative and a positive number correctly', () => {
    const result = multiplyNumbers(-3, 5);
    expect(result).toBe(-15);
  });

  it('multiplies two negative numbers correctly', () => {
    const result = multiplyNumbers(-3, -5);
    expect(result).toBe(15);
  });
});
