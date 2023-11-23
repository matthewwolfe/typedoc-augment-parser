import { describe, expect, test } from 'vitest';
import { someTypeToString } from './someTypeToString';

describe('typeToString', () => {
  describe('union', () => {
    test('intrinsic', () => {
      const result = someTypeToString({
        type: 'union',
        types: [
          { type: 'intrinsic', name: 'number' },
          { type: 'intrinsic', name: 'string' },
        ],
      });

      expect(result).toEqual('number | string');
    });

    test('intrinsic multiple', () => {
      const result = someTypeToString({
        type: 'union',
        types: [
          { type: 'intrinsic', name: 'number' },
          { type: 'intrinsic', name: 'string' },
          { type: 'intrinsic', name: 'boolean' },
        ],
      });

      expect(result).toEqual('number | string | boolean');
    });

    test('references', () => {
      const result = someTypeToString({
        type: 'union',
        types: [
          { type: 'intrinsic', name: 'number' },
          {
            type: 'reference',
            target: {
              sourceFileName: 'mock-file.d.ts',
              qualifiedName: 'Partial',
            },
            typeArguments: [
              {
                type: 'reference',
                target: {
                  sourceFileName: 'mock-file.d.ts',
                  qualifiedName: 'Record',
                },
                typeArguments: [
                  {
                    type: 'reference',
                    target: 1,
                    name: 'Breakpoint',
                  },
                  { type: 'intrinsic', name: 'number' },
                ],
                name: 'Record',
              },
            ],
            name: 'Partial',
          },
        ],
      });

      expect(result).toEqual('number | Partial<Record<Breakpoint, number>>');
    });
  });
});
