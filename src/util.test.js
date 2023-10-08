import { describe, expect, test } from 'bun:test'
import { createAdditionProblem, createDivisionProblem, createMultiplicationProblem, createSubtractionProblem } from './util';

describe('problem builders', () => {
  test("addition problem", () => {
    const { solution, a, b } = createAdditionProblem()
    
    expect(a)
      .toBeLessThan(100)
      .toBeGreaterThanOrEqual(0);
    
      expect(b)
      .toBeLessThan(100)
      .toBeGreaterThanOrEqual(0);
    
      expect(solution)
      .toBe(a + b)
      .toBeLessThan(100)
      .toBeGreaterThanOrEqual(0)
  });

  test("subtraction problem", () => {
    const { solution, a, b } = createSubtractionProblem()
    
    expect(a)
      .toBeLessThan(100)
      .toBeGreaterThanOrEqual(0);
    
    expect(b)
      .toBeLessThanOrEqual(a)
      .toBeGreaterThanOrEqual(0);
    
    expect(solution)
      .toBe(a - b)
      .toBeLessThan(100)
      .toBeGreaterThanOrEqual(0)
  });

  test("multiplication problem", () => {
    const { solution, a, b } = createMultiplicationProblem()
    
    expect(a)
      .toBeLessThanOrEqual(10)
      .toBeGreaterThanOrEqual(1);
    
    expect(b)
      .toBeLessThan(10)
      .toBeGreaterThanOrEqual(1);
    
    expect(solution)
      .toBe(a * b)
      .toBeLessThanOrEqual(100)
      .toBeGreaterThanOrEqual(1)    
  });

  test("division problem", () => {
    const { 
      a: numerator, 
      b: denominator,
      solution, 
      remainder
    } = createDivisionProblem()

    expect(denominator)
      .toBeLessThanOrEqual(10)
      .toBeGreaterThanOrEqual(1);
    
    expect(numerator)
      .toBeLessThan(10 * denominator)
      .toBeGreaterThanOrEqual(1);
    
    expect(solution)
      .toBe(Math.floor(numerator / denominator))
      .toBeLessThanOrEqual(10)
      .toBeGreaterThanOrEqual(1);
    
    expect(remainder)
      .toBe(numerator % denominator)
      .toBeLessThan(denominator)
  });
})