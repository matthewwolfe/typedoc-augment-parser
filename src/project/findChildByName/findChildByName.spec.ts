import { describe, expect, test } from 'vitest';
import { isFunction } from '@pkg/declarations';
import { project } from '@pkg/mocks/typescript-library';
import { findChildByName } from './findChildByName';

import type { FunctionDeclaration } from '@pkg/types/declarations';

describe('findChildByName', () => {
  test('function', () => {
    const result = findChildByName(project, 'capitalize');

    if (!isFunction(result)) {
      throw new Error('child must be a function');
    }

    expect(result?.typeToString()).toEqual('(string: string) => string');
  });

  test('function with generic', () => {
    const result = findChildByName<FunctionDeclaration>(project, 'capitalize');

    expect(result?.typeToString()).toEqual('(string: string) => string');
  });
});
