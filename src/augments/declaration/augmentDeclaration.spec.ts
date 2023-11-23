import { ReflectionKind } from 'typedoc';
import { describe, expect, test } from 'vitest';
import { augment } from './augmentDeclaration';
import {
  InterfaceDeclaration,
  ReferenceDeclaration,
} from '@pkg/types/declarations';

describe('augmentDeclaration', () => {
  describe('reference declaration', () => {
    const project = {
      id: 0,
      name: 'mock-project',
      variant: 'project' as const,
      kind: ReflectionKind.Project,
      flags: {},
      children: [
        {
          id: 1,
          name: 'ReferenceProps',
          variant: 'reference' as const,
          kind: ReflectionKind.Reference,
          flags: {},
          target: 2,
        },
        {
          id: 2,
          name: 'RealInterfaceProps',
          variant: 'declaration' as const,
          kind: 256,
          flags: {},
          children: [
            {
              id: 1965,
              name: 'align',
              variant: 'declaration' as const,
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName:
                    'Projects/ant-design/components/dropdown/dropdown.tsx',
                  line: 54,
                  character: 2,
                  url: 'https://github.com/ant-design/ant-design/blob/d8d53f14c/components/dropdown/dropdown.tsx#L54',
                },
              ],
              type: {
                type: 'reference' as const,
                target: {
                  sourceFileName:
                    'node_modules/@rc-component/trigger/lib/interface.d.ts',
                  qualifiedName: 'AlignType',
                },
                name: 'AlignType',
                package: '@rc-component/trigger',
              },
            },
          ],
        },
      ],
      symbolIdMap: {},
    };

    test('augments reference', () => {
      const result = augment<ReferenceDeclaration<InterfaceDeclaration>>(
        project,
        project.children[0]
      );

      expect(result.reference.property('align')?.typeToString()).toEqual(
        'AlignType'
      );
    });
  });
});
