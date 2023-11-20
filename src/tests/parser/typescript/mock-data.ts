import type { JSONOutput } from "typedoc";

export const project: JSONOutput.ProjectReflection = {
  id: 0,
  name: '@bedrock-ui/utils',
  variant: 'project',
  kind: 1,
  flags: {},
  children: [
    {
      id: 1,
      name: 'capitalize',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/capitalize/capitalize.ts',
          line: 1,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/capitalize/capitalize.ts#L1',
        },
      ],
      signatures: [
        {
          id: 2,
          name: 'capitalize',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/capitalize/capitalize.ts',
              line: 1,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/capitalize/capitalize.ts#L1',
            },
          ],
          parameters: [
            {
              id: 3,
              name: 'string',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'intrinsic',
                name: 'string',
              },
            },
          ],
          type: {
            type: 'intrinsic',
            name: 'string',
          },
        },
      ],
    },
    {
      id: 19,
      name: 'chunk',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/chunk/chunk.ts',
          line: 3,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/chunk/chunk.ts#L3',
        },
      ],
      signatures: [
        {
          id: 20,
          name: 'chunk',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/chunk/chunk.ts',
              line: 3,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/chunk/chunk.ts#L3',
            },
          ],
          typeParameter: [
            {
              id: 21,
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
          ],
          parameters: [
            {
              id: 22,
              name: 'array',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 23,
              name: 'size',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'intrinsic',
                name: 'number',
              },
            },
          ],
          type: {
            type: 'array',
            elementType: {
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
        },
      ],
    },
    {
      id: 4,
      name: 'countBy',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/countBy/countBy.ts',
          line: 5,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/countBy/countBy.ts#L5',
        },
      ],
      signatures: [
        {
          id: 5,
          name: 'countBy',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/countBy/countBy.ts',
              line: 5,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/countBy/countBy.ts#L5',
            },
          ],
          typeParameter: [
            {
              id: 6,
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
              id: 7,
              name: 'P',
              variant: 'typeParam',
              kind: 131072,
              flags: {},
              type: {
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
                  {
                    type: 'intrinsic',
                    name: 'symbol',
                  },
                ],
              },
            },
          ],
          parameters: [
            {
              id: 8,
              name: 'array',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 9,
              name: 'property',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'P',
                refersToTypeParameter: true,
              },
            },
          ],
          type: {
            type: 'reference',
            target: {
              sourceFileName:
                '../../.nvm/versions/node/v20.9.0/lib/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts',
              qualifiedName: 'Map',
            },
            typeArguments: [
              {
                type: 'indexedAccess',
                indexType: {
                  type: 'reference',
                  target: -1,
                  name: 'P',
                  refersToTypeParameter: true,
                },
                objectType: {
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
              {
                type: 'intrinsic',
                name: 'number',
              },
            ],
            name: 'Map',
            package: 'typescript',
          },
        },
      ],
    },
    {
      id: 10,
      name: 'countByFn',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/countByFn/countByFn.ts',
          line: 3,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/countByFn/countByFn.ts#L3',
        },
      ],
      signatures: [
        {
          id: 11,
          name: 'countByFn',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/countByFn/countByFn.ts',
              line: 3,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/countByFn/countByFn.ts#L3',
            },
          ],
          typeParameter: [
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
          ],
          parameters: [
            {
              id: 17,
              name: 'array',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 18,
              name: 'property',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'P',
                refersToTypeParameter: true,
              },
            },
          ],
          type: {
            type: 'reference',
            target: {
              sourceFileName:
                '../../.nvm/versions/node/v20.9.0/lib/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts',
              qualifiedName: 'Map',
            },
            typeArguments: [
              {
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
              {
                type: 'intrinsic',
                name: 'number',
              },
            ],
            name: 'Map',
            package: 'typescript',
          },
        },
      ],
    },
    {
      id: 24,
      name: 'groupBy',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/groupBy/groupBy.ts',
          line: 3,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/groupBy/groupBy.ts#L3',
        },
      ],
      signatures: [
        {
          id: 25,
          name: 'groupBy',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/groupBy/groupBy.ts',
              line: 3,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/groupBy/groupBy.ts#L3',
            },
          ],
          typeParameter: [
            {
              id: 26,
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
              id: 27,
              name: 'P',
              variant: 'typeParam',
              kind: 131072,
              flags: {},
              type: {
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
                  {
                    type: 'intrinsic',
                    name: 'symbol',
                  },
                ],
              },
            },
          ],
          parameters: [
            {
              id: 28,
              name: 'array',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 29,
              name: 'property',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'P',
                refersToTypeParameter: true,
              },
            },
          ],
          type: {
            type: 'reference',
            target: {
              sourceFileName:
                '../../.nvm/versions/node/v20.9.0/lib/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts',
              qualifiedName: 'Map',
            },
            typeArguments: [
              {
                type: 'indexedAccess',
                indexType: {
                  type: 'reference',
                  target: -1,
                  name: 'P',
                  refersToTypeParameter: true,
                },
                objectType: {
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
              {
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
            ],
            name: 'Map',
            package: 'typescript',
          },
        },
      ],
    },
    {
      id: 30,
      name: 'groupByFn',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/groupByFn/groupByFn.ts',
          line: 3,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/groupByFn/groupByFn.ts#L3',
        },
      ],
      signatures: [
        {
          id: 31,
          name: 'groupByFn',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/groupByFn/groupByFn.ts',
              line: 3,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/groupByFn/groupByFn.ts#L3',
            },
          ],
          typeParameter: [
            {
              id: 32,
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
              id: 33,
              name: 'P',
              variant: 'typeParam',
              kind: 131072,
              flags: {},
              type: {
                type: 'reflection',
                declaration: {
                  id: 34,
                  name: '__type',
                  variant: 'declaration',
                  kind: 65536,
                  flags: {},
                  sources: [
                    {
                      fileName: 'utils/groupByFn/groupByFn.ts',
                      line: 5,
                      character: 12,
                      url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/groupByFn/groupByFn.ts#L5',
                    },
                  ],
                  signatures: [
                    {
                      id: 35,
                      name: '__type',
                      variant: 'signature',
                      kind: 4096,
                      flags: {},
                      sources: [
                        {
                          fileName: 'utils/groupByFn/groupByFn.ts',
                          line: 5,
                          character: 12,
                          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/groupByFn/groupByFn.ts#L5',
                        },
                      ],
                      parameters: [
                        {
                          id: 36,
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
          ],
          parameters: [
            {
              id: 37,
              name: 'array',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 38,
              name: 'property',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'P',
                refersToTypeParameter: true,
              },
            },
          ],
          type: {
            type: 'reference',
            target: {
              sourceFileName:
                '../../.nvm/versions/node/v20.9.0/lib/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts',
              qualifiedName: 'Map',
            },
            typeArguments: [
              {
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
              {
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
            ],
            name: 'Map',
            package: 'typescript',
          },
        },
      ],
    },
    {
      id: 39,
      name: 'isEmptyObject',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/isEmptyObject/isEmptyObject.ts',
          line: 1,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/isEmptyObject/isEmptyObject.ts#L1',
        },
      ],
      signatures: [
        {
          id: 40,
          name: 'isEmptyObject',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/isEmptyObject/isEmptyObject.ts',
              line: 1,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/isEmptyObject/isEmptyObject.ts#L1',
            },
          ],
          typeParameter: [
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
          ],
          parameters: [
            {
              id: 42,
              name: 'object',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
          ],
          type: {
            type: 'intrinsic',
            name: 'boolean',
          },
        },
      ],
    },
    {
      id: 43,
      name: 'keyBy',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/keyBy/keyBy.ts',
          line: 3,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/keyBy/keyBy.ts#L3',
        },
      ],
      signatures: [
        {
          id: 44,
          name: 'keyBy',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/keyBy/keyBy.ts',
              line: 3,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/keyBy/keyBy.ts#L3',
            },
          ],
          typeParameter: [
            {
              id: 45,
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
              id: 46,
              name: 'P',
              variant: 'typeParam',
              kind: 131072,
              flags: {},
              type: {
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
                  {
                    type: 'intrinsic',
                    name: 'symbol',
                  },
                ],
              },
            },
          ],
          parameters: [
            {
              id: 47,
              name: 'array',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 48,
              name: 'property',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'P',
                refersToTypeParameter: true,
              },
            },
          ],
          type: {
            type: 'reference',
            target: {
              sourceFileName:
                '../../.nvm/versions/node/v20.9.0/lib/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts',
              qualifiedName: 'Map',
            },
            typeArguments: [
              {
                type: 'indexedAccess',
                indexType: {
                  type: 'reference',
                  target: -1,
                  name: 'P',
                  refersToTypeParameter: true,
                },
                objectType: {
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
              {
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
            ],
            name: 'Map',
            package: 'typescript',
          },
        },
      ],
    },
    {
      id: 49,
      name: 'keyByFn',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/keyByFn/keyByFn.ts',
          line: 3,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/keyByFn/keyByFn.ts#L3',
        },
      ],
      signatures: [
        {
          id: 50,
          name: 'keyByFn',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/keyByFn/keyByFn.ts',
              line: 3,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/keyByFn/keyByFn.ts#L3',
            },
          ],
          typeParameter: [
            {
              id: 51,
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
              id: 52,
              name: 'P',
              variant: 'typeParam',
              kind: 131072,
              flags: {},
              type: {
                type: 'reflection',
                declaration: {
                  id: 53,
                  name: '__type',
                  variant: 'declaration',
                  kind: 65536,
                  flags: {},
                  sources: [
                    {
                      fileName: 'utils/keyByFn/keyByFn.ts',
                      line: 3,
                      character: 55,
                      url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/keyByFn/keyByFn.ts#L3',
                    },
                  ],
                  signatures: [
                    {
                      id: 54,
                      name: '__type',
                      variant: 'signature',
                      kind: 4096,
                      flags: {},
                      sources: [
                        {
                          fileName: 'utils/keyByFn/keyByFn.ts',
                          line: 3,
                          character: 55,
                          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/keyByFn/keyByFn.ts#L3',
                        },
                      ],
                      parameters: [
                        {
                          id: 55,
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
          ],
          parameters: [
            {
              id: 56,
              name: 'array',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 57,
              name: 'property',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'P',
                refersToTypeParameter: true,
              },
            },
          ],
          type: {
            type: 'reference',
            target: {
              sourceFileName:
                '../../.nvm/versions/node/v20.9.0/lib/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.collection.d.ts',
              qualifiedName: 'Map',
            },
            typeArguments: [
              {
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
              {
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
            ],
            name: 'Map',
            package: 'typescript',
          },
        },
      ],
    },
    {
      id: 58,
      name: 'omit',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/omit/omit.ts',
          line: 1,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/omit/omit.ts#L1',
        },
      ],
      signatures: [
        {
          id: 59,
          name: 'omit',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/omit/omit.ts',
              line: 1,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/omit/omit.ts#L1',
            },
          ],
          typeParameter: [
            {
              id: 60,
              name: 'T',
              variant: 'typeParam',
              kind: 131072,
              flags: {},
              type: {
                type: 'intrinsic',
                name: 'object',
              },
            },
            {
              id: 61,
              name: 'P',
              variant: 'typeParam',
              kind: 131072,
              flags: {},
              type: {
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
                  {
                    type: 'intrinsic',
                    name: 'symbol',
                  },
                ],
              },
            },
          ],
          parameters: [
            {
              id: 62,
              name: 'object',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 63,
              name: 'properties',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'array',
                elementType: {
                  type: 'reference',
                  target: -1,
                  name: 'P',
                  refersToTypeParameter: true,
                },
              },
            },
          ],
          type: {
            type: 'reference',
            target: {
              sourceFileName:
                '../../.nvm/versions/node/v20.9.0/lib/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts',
              qualifiedName: 'Omit',
            },
            typeArguments: [
              {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
              {
                type: 'reference',
                target: -1,
                name: 'P',
                refersToTypeParameter: true,
              },
            ],
            name: 'Omit',
            package: 'typescript',
          },
        },
      ],
    },
    {
      id: 64,
      name: 'orderBy',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/orderBy/orderBy.ts',
          line: 21,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/orderBy/orderBy.ts#L21',
        },
      ],
      signatures: [
        {
          id: 65,
          name: 'orderBy',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/orderBy/orderBy.ts',
              line: 21,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/orderBy/orderBy.ts#L21',
            },
          ],
          typeParameter: [
            {
              id: 66,
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
              id: 67,
              name: 'P',
              variant: 'typeParam',
              kind: 131072,
              flags: {},
              type: {
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
                  {
                    type: 'intrinsic',
                    name: 'symbol',
                  },
                ],
              },
            },
          ],
          parameters: [
            {
              id: 68,
              name: 'array',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 69,
              name: 'properties',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'array',
                elementType: {
                  type: 'reference',
                  target: -1,
                  name: 'P',
                  refersToTypeParameter: true,
                },
              },
            },
            {
              id: 70,
              name: 'orders',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'array',
                elementType: {
                  type: 'reference',
                  target: {
                    sourceFileName: 'src/utils/orderBy/orderBy.ts',
                    qualifiedName: 'Order',
                  },
                  name: 'Order',
                  package: '@bedrock-ui/utils',
                },
              },
            },
          ],
          type: {
            type: 'array',
            elementType: {
              type: 'indexedAccess',
              indexType: {
                type: 'intrinsic',
                name: 'number',
              },
              objectType: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
          },
        },
      ],
    },
    {
      id: 71,
      name: 'orderByFn',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/orderByFn/orderByFn.ts',
          line: 21,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/orderByFn/orderByFn.ts#L21',
        },
      ],
      signatures: [
        {
          id: 72,
          name: 'orderByFn',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/orderByFn/orderByFn.ts',
              line: 21,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/orderByFn/orderByFn.ts#L21',
            },
          ],
          typeParameter: [
            {
              id: 73,
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
              id: 74,
              name: 'P',
              variant: 'typeParam',
              kind: 131072,
              flags: {},
              type: {
                type: 'reflection',
                declaration: {
                  id: 75,
                  name: '__type',
                  variant: 'declaration',
                  kind: 65536,
                  flags: {},
                  sources: [
                    {
                      fileName: 'utils/orderByFn/orderByFn.ts',
                      line: 23,
                      character: 12,
                      url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/orderByFn/orderByFn.ts#L23',
                    },
                  ],
                  signatures: [
                    {
                      id: 76,
                      name: '__type',
                      variant: 'signature',
                      kind: 4096,
                      flags: {},
                      sources: [
                        {
                          fileName: 'utils/orderByFn/orderByFn.ts',
                          line: 23,
                          character: 12,
                          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/orderByFn/orderByFn.ts#L23',
                        },
                      ],
                      parameters: [
                        {
                          id: 77,
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
          ],
          parameters: [
            {
              id: 78,
              name: 'array',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
            {
              id: 79,
              name: 'properties',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'array',
                elementType: {
                  type: 'reference',
                  target: -1,
                  name: 'P',
                  refersToTypeParameter: true,
                },
              },
            },
            {
              id: 80,
              name: 'orders',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'array',
                elementType: {
                  type: 'reference',
                  target: {
                    sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
                    qualifiedName: 'Order',
                  },
                  name: 'Order',
                  package: '@bedrock-ui/utils',
                },
              },
            },
          ],
          type: {
            type: 'array',
            elementType: {
              type: 'indexedAccess',
              indexType: {
                type: 'intrinsic',
                name: 'number',
              },
              objectType: {
                type: 'reference',
                target: -1,
                name: 'T',
                refersToTypeParameter: true,
              },
            },
          },
        },
      ],
    },
    {
      id: 81,
      name: 'range',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'utils/range/range.ts',
          line: 1,
          character: 9,
          url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/range/range.ts#L1',
        },
      ],
      signatures: [
        {
          id: 82,
          name: 'range',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'utils/range/range.ts',
              line: 1,
              character: 9,
              url: 'https://github.com/bedrock-ui/utils/blob/6714c7a/src/utils/range/range.ts#L1',
            },
          ],
          parameters: [
            {
              id: 83,
              name: 'start',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'intrinsic',
                name: 'number',
              },
            },
            {
              id: 84,
              name: 'end',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'intrinsic',
                name: 'number',
              },
            },
            {
              id: 85,
              name: 'step',
              variant: 'param',
              kind: 32768,
              flags: {},
              type: {
                type: 'intrinsic',
                name: 'number',
              },
              defaultValue: '1',
            },
          ],
          type: {
            type: 'array',
            elementType: {
              type: 'intrinsic',
              name: 'number',
            },
          },
        },
      ],
    },
  ],
  groups: [
    {
      title: 'Functions',
      children: [1, 19, 4, 10, 24, 30, 39, 43, 49, 58, 64, 71, 81],
    },
  ],
  packageName: '@bedrock-ui/utils',
  readme: [
    {
      kind: 'text',
      text: '# Bedrock UI\n\nCommon utils for all projects\n\n![license](https://badgen.net/npm/license/@bedrock-ui/utils)\n\n## @bedrock-ui/utils\n\n[npm](https://www.npmjs.com/package/@bedrock-ui/utils)\n\n![size](https://img.shields.io/bundlephobia/minzip/@bedrock-ui/utils)\n[![npm downloads](https://img.shields.io/npm/dt/@bedrock-ui/utils.svg)](https://www.npmjs.com/package/@bedrock-ui/utils)',
    },
  ],
  symbolIdMap: {
    '0': {
      sourceFileName: 'src/index.ts',
      qualifiedName: '',
    },
    '1': {
      sourceFileName: 'src/utils/capitalize/capitalize.ts',
      qualifiedName: 'capitalize',
    },
    '2': {
      sourceFileName: 'src/utils/capitalize/capitalize.ts',
      qualifiedName: 'capitalize',
    },
    '3': {
      sourceFileName: 'src/utils/capitalize/capitalize.ts',
      qualifiedName: 'string',
    },
    '4': {
      sourceFileName: 'src/utils/countBy/countBy.ts',
      qualifiedName: 'countBy',
    },
    '5': {
      sourceFileName: 'src/utils/countBy/countBy.ts',
      qualifiedName: 'countBy',
    },
    '6': {
      sourceFileName: 'src/utils/countBy/countBy.ts',
      qualifiedName: 'T',
    },
    '7': {
      sourceFileName: 'src/utils/countBy/countBy.ts',
      qualifiedName: 'P',
    },
    '8': {
      sourceFileName: 'src/utils/countBy/countBy.ts',
      qualifiedName: 'array',
    },
    '9': {
      sourceFileName: 'src/utils/countBy/countBy.ts',
      qualifiedName: 'property',
    },
    '10': {
      sourceFileName: 'src/utils/countByFn/countByFn.ts',
      qualifiedName: 'countByFn',
    },
    '11': {
      sourceFileName: 'src/utils/countByFn/countByFn.ts',
      qualifiedName: 'countByFn',
    },
    '12': {
      sourceFileName: 'src/utils/countByFn/countByFn.ts',
      qualifiedName: 'T',
    },
    '13': {
      sourceFileName: 'src/utils/countByFn/countByFn.ts',
      qualifiedName: 'P',
    },
    '14': {
      sourceFileName: 'src/utils/countByFn/countByFn.ts',
      qualifiedName: '__type',
    },
    '15': {
      sourceFileName: 'src/utils/countByFn/countByFn.ts',
      qualifiedName: '__type',
    },
    '16': {
      sourceFileName: 'src/utils/countByFn/countByFn.ts',
      qualifiedName: 'element',
    },
    '17': {
      sourceFileName: 'src/utils/countByFn/countByFn.ts',
      qualifiedName: 'array',
    },
    '18': {
      sourceFileName: 'src/utils/countByFn/countByFn.ts',
      qualifiedName: 'property',
    },
    '19': {
      sourceFileName: 'src/utils/chunk/chunk.ts',
      qualifiedName: 'chunk',
    },
    '20': {
      sourceFileName: 'src/utils/chunk/chunk.ts',
      qualifiedName: 'chunk',
    },
    '21': {
      sourceFileName: 'src/utils/chunk/chunk.ts',
      qualifiedName: 'T',
    },
    '22': {
      sourceFileName: 'src/utils/chunk/chunk.ts',
      qualifiedName: 'array',
    },
    '23': {
      sourceFileName: 'src/utils/chunk/chunk.ts',
      qualifiedName: 'size',
    },
    '24': {
      sourceFileName: 'src/utils/groupBy/groupBy.ts',
      qualifiedName: 'groupBy',
    },
    '25': {
      sourceFileName: 'src/utils/groupBy/groupBy.ts',
      qualifiedName: 'groupBy',
    },
    '26': {
      sourceFileName: 'src/utils/groupBy/groupBy.ts',
      qualifiedName: 'T',
    },
    '27': {
      sourceFileName: 'src/utils/groupBy/groupBy.ts',
      qualifiedName: 'P',
    },
    '28': {
      sourceFileName: 'src/utils/groupBy/groupBy.ts',
      qualifiedName: 'array',
    },
    '29': {
      sourceFileName: 'src/utils/groupBy/groupBy.ts',
      qualifiedName: 'property',
    },
    '30': {
      sourceFileName: 'src/utils/groupByFn/groupByFn.ts',
      qualifiedName: 'groupByFn',
    },
    '31': {
      sourceFileName: 'src/utils/groupByFn/groupByFn.ts',
      qualifiedName: 'groupByFn',
    },
    '32': {
      sourceFileName: 'src/utils/groupByFn/groupByFn.ts',
      qualifiedName: 'T',
    },
    '33': {
      sourceFileName: 'src/utils/groupByFn/groupByFn.ts',
      qualifiedName: 'P',
    },
    '34': {
      sourceFileName: 'src/utils/groupByFn/groupByFn.ts',
      qualifiedName: '__type',
    },
    '35': {
      sourceFileName: 'src/utils/groupByFn/groupByFn.ts',
      qualifiedName: '__type',
    },
    '36': {
      sourceFileName: 'src/utils/groupByFn/groupByFn.ts',
      qualifiedName: 'element',
    },
    '37': {
      sourceFileName: 'src/utils/groupByFn/groupByFn.ts',
      qualifiedName: 'array',
    },
    '38': {
      sourceFileName: 'src/utils/groupByFn/groupByFn.ts',
      qualifiedName: 'property',
    },
    '39': {
      sourceFileName: 'src/utils/isEmptyObject/isEmptyObject.ts',
      qualifiedName: 'isEmptyObject',
    },
    '40': {
      sourceFileName: 'src/utils/isEmptyObject/isEmptyObject.ts',
      qualifiedName: 'isEmptyObject',
    },
    '41': {
      sourceFileName: 'src/utils/isEmptyObject/isEmptyObject.ts',
      qualifiedName: 'T',
    },
    '42': {
      sourceFileName: 'src/utils/isEmptyObject/isEmptyObject.ts',
      qualifiedName: 'object',
    },
    '43': {
      sourceFileName: 'src/utils/keyBy/keyBy.ts',
      qualifiedName: 'keyBy',
    },
    '44': {
      sourceFileName: 'src/utils/keyBy/keyBy.ts',
      qualifiedName: 'keyBy',
    },
    '45': {
      sourceFileName: 'src/utils/keyBy/keyBy.ts',
      qualifiedName: 'T',
    },
    '46': {
      sourceFileName: 'src/utils/keyBy/keyBy.ts',
      qualifiedName: 'P',
    },
    '47': {
      sourceFileName: 'src/utils/keyBy/keyBy.ts',
      qualifiedName: 'array',
    },
    '48': {
      sourceFileName: 'src/utils/keyBy/keyBy.ts',
      qualifiedName: 'property',
    },
    '49': {
      sourceFileName: 'src/utils/keyByFn/keyByFn.ts',
      qualifiedName: 'keyByFn',
    },
    '50': {
      sourceFileName: 'src/utils/keyByFn/keyByFn.ts',
      qualifiedName: 'keyByFn',
    },
    '51': {
      sourceFileName: 'src/utils/keyByFn/keyByFn.ts',
      qualifiedName: 'T',
    },
    '52': {
      sourceFileName: 'src/utils/keyByFn/keyByFn.ts',
      qualifiedName: 'P',
    },
    '53': {
      sourceFileName: 'src/utils/keyByFn/keyByFn.ts',
      qualifiedName: '__type',
    },
    '54': {
      sourceFileName: 'src/utils/keyByFn/keyByFn.ts',
      qualifiedName: '__type',
    },
    '55': {
      sourceFileName: 'src/utils/keyByFn/keyByFn.ts',
      qualifiedName: 'element',
    },
    '56': {
      sourceFileName: 'src/utils/keyByFn/keyByFn.ts',
      qualifiedName: 'array',
    },
    '57': {
      sourceFileName: 'src/utils/keyByFn/keyByFn.ts',
      qualifiedName: 'property',
    },
    '58': {
      sourceFileName: 'src/utils/omit/omit.ts',
      qualifiedName: 'omit',
    },
    '59': {
      sourceFileName: 'src/utils/omit/omit.ts',
      qualifiedName: 'omit',
    },
    '60': {
      sourceFileName: 'src/utils/omit/omit.ts',
      qualifiedName: 'T',
    },
    '61': {
      sourceFileName: 'src/utils/omit/omit.ts',
      qualifiedName: 'P',
    },
    '62': {
      sourceFileName: 'src/utils/omit/omit.ts',
      qualifiedName: 'object',
    },
    '63': {
      sourceFileName: 'src/utils/omit/omit.ts',
      qualifiedName: 'properties',
    },
    '64': {
      sourceFileName: 'src/utils/orderBy/orderBy.ts',
      qualifiedName: 'orderBy',
    },
    '65': {
      sourceFileName: 'src/utils/orderBy/orderBy.ts',
      qualifiedName: 'orderBy',
    },
    '66': {
      sourceFileName: 'src/utils/orderBy/orderBy.ts',
      qualifiedName: 'T',
    },
    '67': {
      sourceFileName: 'src/utils/orderBy/orderBy.ts',
      qualifiedName: 'P',
    },
    '68': {
      sourceFileName: 'src/utils/orderBy/orderBy.ts',
      qualifiedName: 'array',
    },
    '69': {
      sourceFileName: 'src/utils/orderBy/orderBy.ts',
      qualifiedName: 'properties',
    },
    '70': {
      sourceFileName: 'src/utils/orderBy/orderBy.ts',
      qualifiedName: 'orders',
    },
    '71': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: 'orderByFn',
    },
    '72': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: 'orderByFn',
    },
    '73': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: 'T',
    },
    '74': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: 'P',
    },
    '75': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: '__type',
    },
    '76': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: '__type',
    },
    '77': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: 'element',
    },
    '78': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: 'array',
    },
    '79': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: 'properties',
    },
    '80': {
      sourceFileName: 'src/utils/orderByFn/orderByFn.ts',
      qualifiedName: 'orders',
    },
    '81': {
      sourceFileName: 'src/utils/range/range.ts',
      qualifiedName: 'range',
    },
    '82': {
      sourceFileName: 'src/utils/range/range.ts',
      qualifiedName: 'range',
    },
    '83': {
      sourceFileName: 'src/utils/range/range.ts',
      qualifiedName: 'start',
    },
    '84': {
      sourceFileName: 'src/utils/range/range.ts',
      qualifiedName: 'end',
    },
    '85': {
      sourceFileName: 'src/utils/range/range.ts',
      qualifiedName: 'step',
    },
  },
};
