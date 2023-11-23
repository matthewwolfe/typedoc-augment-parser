import { describe, expect, test } from 'vitest';
import { project } from '@pkg/mocks/react-library';
import { augment } from './augmentDeclaration';

import type {
  InterfaceDeclaration,
  ReferenceDeclaration,
} from '@pkg/types/declarations';

describe('augmentDeclaration', () => {
  describe('reference declaration', () => {
    test('augments reference', () => {
      const reference = (project?.children || []).find(
        (child) => child.variant === 'reference'
      );

      if (!reference) {
        throw new Error('Unable to find reference');
      }

      const result = augment<ReferenceDeclaration<InterfaceDeclaration>>(
        project,
        reference
      );

      expect(result.reference.property('align')?.typeToString()).toEqual(
        'AlignType'
      );
    });
  });
});
