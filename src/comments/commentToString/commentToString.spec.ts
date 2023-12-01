import { describe, expect, test } from 'vitest';
import { commentToString } from './commentToString';

import type { AugmentedDeclaration } from '@pkg/types/declarations';

describe('commentToString', () => {
  test('correct comment string', () => {
    const comment: AugmentedDeclaration['comment'] = {
      summary: [
        { kind: 'text', text: 'This comment contains inline ' },
        { kind: 'code', text: '`code snippets`' },
        { kind: 'text', text: ' in markdown' },
      ],
    };

    expect(commentToString(comment)).toEqual(
      'This comment contains inline `code snippets` in markdown'
    );
  });

  test('empty string when undefined', () => {
    expect(commentToString(undefined)).toEqual('');
  });
});
