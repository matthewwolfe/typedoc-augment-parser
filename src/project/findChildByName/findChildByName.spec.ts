import { describe, expect, test } from 'vitest';
import { isFunction } from '@pkg/declarations/isDeclarationKind';
import { findChildByName } from './findChildByName';

import type { JSONOutput } from 'typedoc';
import type { FunctionDeclarationReflection } from '@pkg/types/declarations';

const project: JSONOutput.ProjectReflection = {
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
  ],
  symbolIdMap: {},
};

describe('findChildByName', () => {
  test('function', () => {
    const result = findChildByName(project, 'capitalize');

    if (!isFunction(result)) {
      throw new Error('child must be a function');
    }

    expect(result?.typeToString()).toEqual('(string: string) => string');
  });

  test('function with generic', () => {
    const result = findChildByName<FunctionDeclarationReflection>(
      project,
      'capitalize'
    );

    expect(result?.typeToString()).toEqual('(string: string) => string');
  });
});
