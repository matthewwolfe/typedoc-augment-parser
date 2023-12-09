import { describe, expect, test } from 'vitest';
import { parser } from '@pkg/parser';
import { project } from '@pkg/mocks/function-return-type-example';

import type { FunctionDeclaration } from '@pkg/types/declarations';

describe('declarationToString', () => {
  const parsed = parser.augment(project);

  test('function return type', () => {
    const child = parsed.findChildByName<FunctionDeclaration>(
      'doSomethingFunction'
    );

    expect(child?.typeToString()).toMatchSnapshot();
  });
});
