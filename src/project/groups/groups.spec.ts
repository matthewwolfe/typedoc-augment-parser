import { describe, expect, test } from 'vitest';
import { parser } from '@pkg/parser';
import { project } from '@pkg/mocks/react-library';

describe('groups', () => {
  const parsed = parser.augment(project);

  test('titles', () => {
    const groups = parsed.groups();

    expect(groups.map(({ title }) => title)).toEqual([
      'References',
      'Namespaces',
      'Interfaces',
      'Type Aliases',
      'Properties',
      'Variables',
      'Functions',
    ]);
  });
});
