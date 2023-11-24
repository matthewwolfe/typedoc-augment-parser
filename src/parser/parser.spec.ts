import { describe, expect, test } from 'vitest';
import { project } from '@pkg/mocks/react-library';
import { parser } from './parser';

import {
  FunctionDeclaration,
  type InterfaceDeclaration,
} from '@pkg/types/declarations';

describe('parser', () => {
  const parsed = parser.augment(project);

  test('function', () => {
    const child = parsed.findChildByName<FunctionDeclaration>('Mentions');

    expect(child?.typeToString()).toMatchSnapshot();
  });

  test('interface', () => {
    const child = parsed.findChildByName<InterfaceDeclaration>('MentionProps');

    expect(child?.typeToString()).toMatchSnapshot();
  });

  test('interface with nested properties', () => {
    const child = parsed.findChildByName<InterfaceDeclaration>('ButtonProps');

    expect(child?.typeToString()).toMatchSnapshot();
  });

  test('type alias', () => {
    const child = parsed.findChildByName('MenuRef');

    expect(child?.typeToString()).toMatchSnapshot();
  });
});
