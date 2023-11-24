import { describe, expect, test } from 'vitest';
import { indent } from './indent';

describe('indent', () => {
  test('adds correct number of spaces', () => {
    const result = indent('test', 1);

    expect(result.length).toEqual(6);
    expect(result).toEqual('  test');
  });
  test('adds correct number of spaces for deep indent', () => {
    const result = indent('test', 3);

    expect(result.length).toEqual(10);
    expect(result).toEqual('      test');
  });
});
