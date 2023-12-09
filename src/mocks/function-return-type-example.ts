import type { JSONOutput } from 'typedoc';

export const project: JSONOutput.ProjectReflection = {
  id: 0,
  name: 'function-return-type-example',
  variant: 'project',
  kind: 1,
  flags: {},
  children: [
    {
      id: 1,
      name: 'doSomethingFunction',
      variant: 'declaration',
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: 'index.ts',
          line: 1,
          character: 9,
        },
      ],
      signatures: [
        {
          id: 2,
          name: 'doSomethingFunction',
          variant: 'signature',
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: 'index.ts',
              line: 1,
              character: 9,
            },
          ],
          type: {
            type: 'reflection',
            declaration: {
              id: 3,
              name: '__type',
              variant: 'declaration',
              kind: 65536,
              flags: {},
              children: [
                {
                  id: 6,
                  name: 'isError',
                  variant: 'declaration',
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: 'index.ts',
                      line: 5,
                      character: 4,
                    },
                  ],
                  type: {
                    type: 'intrinsic',
                    name: 'boolean',
                  },
                },
                {
                  id: 5,
                  name: 'isFetching',
                  variant: 'declaration',
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: 'index.ts',
                      line: 4,
                      character: 4,
                    },
                  ],
                  type: {
                    type: 'intrinsic',
                    name: 'boolean',
                  },
                  defaultValue: 'true',
                },
                {
                  id: 4,
                  name: 'isLoading',
                  variant: 'declaration',
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: 'index.ts',
                      line: 3,
                      character: 4,
                    },
                  ],
                  type: {
                    type: 'intrinsic',
                    name: 'boolean',
                  },
                  defaultValue: 'true',
                },
                {
                  id: 7,
                  name: 'setData',
                  variant: 'declaration',
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: 'index.ts',
                      line: 6,
                      character: 4,
                    },
                  ],
                  type: {
                    type: 'reflection',
                    declaration: {
                      id: 8,
                      name: '__type',
                      variant: 'declaration',
                      kind: 65536,
                      flags: {},
                      sources: [
                        {
                          fileName: 'index.ts',
                          line: 6,
                          character: 13,
                        },
                      ],
                      signatures: [
                        {
                          id: 9,
                          name: '__type',
                          variant: 'signature',
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: 'index.ts',
                              line: 6,
                              character: 13,
                            },
                          ],
                          type: {
                            type: 'intrinsic',
                            name: 'void',
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: '...',
                },
              ],
              groups: [
                {
                  title: 'Properties',
                  children: [6, 5, 4, 7],
                },
              ],
              sources: [
                {
                  fileName: 'index.ts',
                  line: 2,
                  character: 9,
                },
              ],
            },
          },
        },
      ],
    },
  ],
  groups: [
    {
      title: 'Functions',
      children: [1],
    },
  ],
  packageName: 'function-return-type-example',
  symbolIdMap: {
    '0': {
      sourceFileName: 'src/index.ts',
      qualifiedName: '',
    },
    '1': {
      sourceFileName: 'src/index.ts',
      qualifiedName: 'doSomethingFunction',
    },
    '2': {
      sourceFileName: 'src/index.ts',
      qualifiedName: 'doSomethingFunction',
    },
    '3': {
      sourceFileName: 'src/index.ts',
      qualifiedName: '__object',
    },
    '4': {
      sourceFileName: 'src/index.ts',
      qualifiedName: '__object.isLoading',
    },
    '5': {
      sourceFileName: 'src/index.ts',
      qualifiedName: '__object.isFetching',
    },
    '6': {
      sourceFileName: 'src/index.ts',
      qualifiedName: '__object.isError',
    },
    '7': {
      sourceFileName: 'src/index.ts',
      qualifiedName: '__object.setData',
    },
    '8': {
      sourceFileName: 'src/index.ts',
      qualifiedName: '__function',
    },
    '9': {
      sourceFileName: 'src/index.ts',
      qualifiedName: '__function',
    },
  },
};
