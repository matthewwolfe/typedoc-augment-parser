import { describe, expect, test } from 'vitest';
import { isDeprecated } from './isDeprecated';

import type { AugmentedDeclaration } from '@pkg/types/declarations';

describe('isDeprecated', () => {
  test('true when tag is set', () => {
    const child: Pick<AugmentedDeclaration, 'comment'> = {
      comment: {
        summary: [],
        blockTags: [
          {
            tag: '@deprecated',
            content: [
              {
                kind: 'text',
                text: 'please use ',
              },
              {
                kind: 'code',
                text: '`closeIcon`',
              },
              {
                kind: 'text',
                text: ' instead.\nClose text to show',
              },
            ],
          },
        ],
      },
    };

    expect(isDeprecated(child)).toEqual(true);
  });

  test('false when no tags', () => {
    const child: Pick<AugmentedDeclaration, 'comment'> = {
      comment: {
        summary: [],
        blockTags: [],
      },
    };

    expect(isDeprecated(child)).toEqual(false);
  });

  test('false when block tag is undefined', () => {
    const child: Pick<AugmentedDeclaration, 'comment'> = {
      comment: {
        summary: [],
        blockTags: undefined,
      },
    };

    expect(isDeprecated(child)).toEqual(false);
  });

  test('false when other tags', () => {
    const child: Pick<AugmentedDeclaration, 'comment'> = {
      comment: {
        summary: [],
        blockTags: [
          {
            tag: '@param',
            content: [
              {
                kind: 'text',
                text: 'mock parameter',
              },
            ],
          },
        ],
      },
    };

    expect(isDeprecated(child)).toEqual(false);
  });
});
