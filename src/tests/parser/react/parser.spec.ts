import { describe, expect, test } from 'vitest';
import { isFunction, isInterface } from '@pkg/augmentations/child';
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

    expect(groups.length).toEqual(7);
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

  test('findChildByName', () => {
    const name = 'Button';
    const child = parsed.findChildByName(name);

    expect(child?.name).toEqual(name);

    expect(isFunction(child)).toEqual(true);
  });

  test('typeToString', () => {
    const child = parsed.findChildByName('Button');

    if (!isFunction(child)) {
      throw new Error('child must be a function');
    }

    expect(child.typeToString()).toEqual(
      '(props: ButtonProps & RefAttributes<HTMLElement>) => React.ReactNode'
    );
  });

  test('typeToString with context', () => {
    const child = parsed.findChildByName('QRCode');

    if (!isFunction(child)) {
      throw new Error('child must be a function');
    }

    expect(child.typeToString()).toEqual(
      '(props: QRCodeProps, context?: any) => React.ReactNode'
    );
  });

  test('interface properties toString', () => {
    const name = 'CardProps';
    const child = parsed.findChildByName(name);

    if (!isInterface(child)) {
      throw new Error('child must be an interface');
    }

    const properties = child
      .properties()
      .map((property) => property.toString());

    expect(properties).toEqual([
      'actions?: React.ReactNode[]',
      'activeTabKey?: string',
      'bodyStyle?: React.CSSProperties',
      'bordered?: boolean',
      'children?: React.ReactNode',
      'className?: string',
      'cover?: React.ReactNode',
      'defaultActiveTabKey?: string',
      'extra?: React.ReactNode',
      'headStyle?: React.CSSProperties',
      'hoverable?: boolean',
      'id?: string',
      'loading?: boolean',
      'onTabChange?: (key: string) => void',
      'prefixCls?: string',
      'rootClassName?: string',
      'size?: CardSize',
      'style?: React.CSSProperties',
      'tabBarExtraContent?: React.ReactNode',
      'tabList?: CardTabListType[]',
      'tabProps?: TabsProps',
      'title?: React.ReactNode',
      "type?: 'inner'",
    ]);
  });

  test('interface property not deprecated', () => {
    const child = parsed.findChildByName('FormProps');
    if (!isInterface(child)) {
      throw new Error('child must be an interface');
    }

    expect(child.property('labelAlign')?.isDeprecated()).toEqual(false);
  });

  test('interface property deprecated', () => {
    const child = parsed.findChildByName('FormProps');

    if (!isInterface(child)) {
      throw new Error('child must be an interface');
    }

    expect(child.property('hideRequiredMark')?.isDeprecated()).toEqual(true);
  });

  test('interface function', () => {
    const child = parsed.findChildByName('CountdownProps');

    if (!isInterface(child)) {
      throw new Error('child must be an interface');
    }

    expect(child.property('onChange')?.typeToString()).toEqual(
      '(value?: valueType) => void'
    );
  });
});
