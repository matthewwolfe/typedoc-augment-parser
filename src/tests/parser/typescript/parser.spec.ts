import { describe, expect, test } from 'vitest';
import { isFunction } from '@pkg/augmentations/child';
import { parser } from '@pkg/parser';
import { project } from './mock-data';

describe('parse', () => {
  const parsed = parser.parse(project);
  test('name and version', () => {
    expect(parsed.packageName).toEqual(project.packageName);
    expect(parsed.packageVersion).toEqual(project.packageVersion);
  });

  test('groups', () => {
    const groups = parsed.groups();

    expect(groups.length).toEqual(1);
    expect(groups.map(({ title }) => title)).toEqual(['Functions']);
  });

  test('findChildByName', () => {
    const name = 'capitalize';
    const child = parsed.findChildByName(name);

    expect(child?.name).toEqual(name);
    expect(isFunction(child)).toEqual(true);
  });

  test('typeToString simple', () => {
    const child = parsed.findChildByName('capitalize');

    if (!isFunction(child)) {
      throw new Error('child must be a function');
    }

    expect(child.typeToString()).toEqual('(string: string) => string');
  });

  test('typeToString with optional parameter', () => {
    const child = parsed.findChildByName('range');

    if (!isFunction(child)) {
      throw new Error('child must be a function');
    }

    expect(child?.typeToString()).toEqual(
      '(start: number, end: number, step?: number) => number[]'
    );
  });

  test('typeToString with generics', () => {
    const child = parsed.findChildByName('countBy');

    if (!isFunction(child)) {
      throw new Error('child must be a function');
    }

    expect(child.typeToString()).toEqual(
      '<T, P>(array: T, property: P) => Map<TypeofArray<T>[P], number>'
    );
  });

  test('typeToString with multiple generics', () => {
    const child = parsed.findChildByName('groupByFn');

    if (!isFunction(child)) {
      throw new Error('child must be a function');
    }

    expect(child.typeToString()).toEqual(
      '<T, P>(array: T, property: P) => Map<ReturnType<P>, TypeofArray<T>[]>'
    );
  });
});
