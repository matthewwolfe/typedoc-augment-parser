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

    test('literal - boolean', () => {
      const result = someTypeToString({
        type: 'literal',
        value: true,
      });

      expect(result).toEqual('true');
    });

    test('literal - null', () => {
      const result = someTypeToString({
        type: 'literal',
        value: null,
      });

      expect(result).toEqual('null');
    });

    test('literal - number', () => {
      const result = someTypeToString({
        type: 'literal',
        value: 10,
      });

      expect(result).toEqual('10');
    });

    test('literal - string', () => {
      const result = someTypeToString({
        type: 'literal',
        value: 'string-literal',
      });

      expect(result).toEqual("'string-literal'");
    });

    test('query', () => {
      const result = someTypeToString({
        type: 'typeOperator',
        operator: 'keyof',
        target: {
          type: 'query',
          queryType: {
            type: 'reference',
            target: {
              sourceFileName: 'mock-file.ts',
              qualifiedName: 'ColorFormat',
            },
            name: 'Example',
            package: 'mock-package',
          },
        },
      });

      expect(result).toEqual('keyof typeof Example');
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

    test('tuple', () => {
      const result = someTypeToString({
        type: 'tuple',
        elements: [
          {
            type: 'union',
            types: [
              {
                type: 'intrinsic',
                name: 'string',
              },
              {
                type: 'intrinsic',
                name: 'number',
              },
            ],
          },
          {
            type: 'union',
            types: [
              {
                type: 'intrinsic',
                name: 'string',
              },
              {
                type: 'intrinsic',
                name: 'number',
              },
            ],
          },
        ],
      });

      expect(result).toEqual('[string | number, string | number]');
    });

    test('nested', () => {
      const result = someTypeToString({
        type: 'reflection',
        declaration: {
          id: 423,
          name: '__type',
          variant: 'declaration',
          kind: 65536,
          flags: {},
          children: [
            {
              id: 424,
              name: 'icon',
              variant: 'declaration',
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: 'Projects/ant-design/components/button/button.tsx',
                  line: 47,
                  character: 17,
                  url: 'https://github.com/ant-design/ant-design/blob/d8d53f14c/components/button/button.tsx#L47',
                },
              ],
              type: {
                type: 'intrinsic',
                name: 'string',
              },
            },
          ],
          groups: [
            {
              title: 'Properties',
              children: [424],
            },
          ],
          sources: [
            {
              fileName: 'Projects/ant-design/components/button/button.tsx',
              line: 47,
              character: 15,
              url: 'https://github.com/ant-design/ant-design/blob/d8d53f14c/components/button/button.tsx#L47',
            },
          ],
        },
      });
    });
  });
});
