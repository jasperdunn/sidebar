import { describe, it, expect } from 'bun:test';
import { getTint, getTints } from './color';

describe('getTint', () => {
  it('should return a red tint', () => {
    const actual = getTint('#ff0000', 50);
    const expected = '#ff8080';
    expect(actual).toBe(expected);
  });

  it('should return black when given an empty string', () => {
    const actual = getTint('', 50);
    const expected = '#000000';
    expect(actual).toBe(expected);
  });

  it('should return black when given an invalid hex value', () => {
    const actual = getTint('#zzzzzz', 50);
    const expected = '#000000';
    expect(actual).toBe(expected);
  });
});

describe('getTints', () => {
  it('should return white when total is less than 2', () => {
    const actual = getTints('#ff0000', 1);
    const expected = ['#ffffff'];
    expect(actual).toStrictEqual(expected);
  });

  it('should return white and red when total is 2', () => {
    const actual = getTints('#ff0000', 2);
    const expected = ['#ffffff', '#ff0000'];
    expect(actual).toStrictEqual(expected);
  });

  it('should return 3 tints of red', () => {
    const actual = getTints('#ff0000', 3);
    const expected = ['#ffffff', '#ff8080', '#ff0000'];
    expect(actual).toStrictEqual(expected);
  });

  it('should return 4 tints of red', () => {
    const actual = getTints('#ff0000', 4);
    const expected = ['#ffffff', '#ffaaaa', '#ff5555', '#ff0000'];
    expect(actual).toStrictEqual(expected);
  });
});
