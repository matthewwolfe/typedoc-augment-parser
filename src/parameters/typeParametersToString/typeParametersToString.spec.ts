import { describe, expect, test } from 'vitest';
import { typeParametersToString } from './typeParametersToString';

describe('typeParametersToString', () => {
  test('type parameter with extends', () => {
    const result = typeParametersToString([
      {
        id: 41,
        name: 'T',
        variant: 'typeParam',
        kind: 131072,
        flags: {},
        type: {
          type: 'reference',
          target: {
            sourceFileName:
              '../../.nvm/versions/node/v20.9.0/lib/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts',
            qualifiedName: 'Record',
          },
          typeArguments: [
            {
              type: 'intrinsic',
              name: 'string',
            },
            {
              type: 'intrinsic',
              name: 'unknown',
            },
          ],
          name: 'Record',
          package: 'typescript',
        },
      },
    ]);

    expect(result).toEqual('<T extends Record<string, unknown>>');
  });

  test('multiple with extends', () => {
    const result = typeParametersToString([
      {
        id: 12,
        name: 'T',
        variant: 'typeParam',
        kind: 131072,
        flags: {},
        type: {
          type: 'array',
          elementType: {
            type: 'reference',
            target: {
              sourceFileName: 'src/types/array.ts',
              qualifiedName: 'TypeofArray',
            },
            typeArguments: [
              {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            ],
            name: 'TypeofArray',
            package: '@bedrock-ui/utils',
          },
        },
      },
      {
        id: 13,
        name: 'P',
        variant: 'typeParam',
        kind: 131072,
        flags: {},
        type: {
          type: 'reflection',
          declaration: {
            id: 14,
            name: '__type',
            variant: 'declaration',
            kind: 65536,
            flags: {},
            sources: [
              {
                fileName: 'utils/countByFn/countByFn.ts',
                line: 5,
                character: 12,
                url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/countByFn/countByFn.ts#L5',
              },
            ],
            signatures: [
              {
                id: 15,
                name: '__type',
                variant: 'signature',
                kind: 4096,
                flags: {},
                sources: [
                  {
                    fileName: 'utils/countByFn/countByFn.ts',
                    line: 5,
                    character: 12,
                    url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/countByFn/countByFn.ts#L5',
                  },
                ],
                parameters: [
                  {
                    id: 16,
                    name: 'element',
                    variant: 'param',
                    kind: 32768,
                    flags: {},
                    type: {
                      type: 'reference',
                      target: {
                        sourceFileName: 'src/types/array.ts',
                        qualifiedName: 'TypeofArray',
                      },
                      typeArguments: [
                        {
                          type: 'reference',
                          target: -1,
                          name: 'T',
                          refersToTypeParameter: true,
                        },
                      ],
                      name: 'TypeofArray',
                      package: '@bedrock-ui/utils',
                    },
                  },
                ],
                type: {
                  type: 'reference',
                  target: {
                    sourceFileName:
                      '../../.nvm/versions/node/v20.9.0/lib/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts',
                    qualifiedName: 'ReturnType',
                  },
                  typeArguments: [
                    {
                      type: 'reference',
                      target: -1,
                      name: 'P',
                      refersToTypeParameter: true,
                    },
                  ],
                  name: 'ReturnType',
                  package: 'typescript',
                },
              },
            ],
          },
        },
      },
    ]);

    expect(result).toEqual(
      '<T extends TypeofArray<T>[], P extends (element: TypeofArray<T>) => ReturnType<P>>'
    );
  });
});
