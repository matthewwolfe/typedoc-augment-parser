import { describe, expect, test } from 'vitest';
import { project } from '@pkg/mocks/typescript-library';
import { findSymbolById } from './findSymbolById';

describe('findSymbolById', () => {
  test('symbol', () => {
    const result = findSymbolById(project)(0);

    expect(result).toEqual({
      sourceFileName: 'src/index.ts',
      qualifiedName: '',
    });
  });

  test('undefined', () => {
    const result = findSymbolById(project)(-1);

    expect(result).toEqual(undefined);
  });
});
