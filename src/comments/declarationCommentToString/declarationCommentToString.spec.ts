import { describe, expect, test } from 'vitest';
import { parser } from '@pkg/parser';
import { project } from '@pkg/mocks/typescript-library';
import { declarationCommentToString } from './declarationCommentToString';

describe('declarationCommentToString', () => {
  const parsed = parser.augment(project);

  test('correct comment string', () => {
    const child = parsed.findChildByName('chunk');

    if (!child) {
      throw new Error('Unable to find child');
    }

    expect(declarationCommentToString(child)).toEqual(
      'This comment describes the `chunk` function'
    );
  });

  test('empty string when no signatures is undefined', () => {
    const child = parsed.findChildByName('chunk');

    if (!child) {
      throw new Error('Unable to find child');
    }

    expect(
      declarationCommentToString({ ...child, signatures: undefined })
    ).toEqual('');
  });

  test('empty string when no signatures is empty', () => {
    const child = parsed.findChildByName('chunk');

    if (!child) {
      throw new Error('Unable to find child');
    }

    expect(declarationCommentToString({ ...child, signatures: [] })).toEqual(
      ''
    );
  });
});
