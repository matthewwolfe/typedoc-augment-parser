import { propertyToString } from '@pkg/properties';
import { parametersToString, typeParametersToString } from '@pkg/parameters';
import { someTypeToString } from '@pkg/type';
import { ReflectionKind } from '@pkg/types/reflection';
import { indent } from '@pkg/utils/indent';

import type { JSONOutput } from 'typedoc';

interface Options {
  indentCount: number;
  rootName: string;
}

function declarationToString(
  declaration: JSONOutput.DeclarationReflection,
  options?: Options
): string {
  const { indentCount = 0, rootName = declaration.name } = options || {};

  switch (declaration.kind) {
    case ReflectionKind.Function: {
      return (declaration.signatures || [])
        .map((signature) => {
          const typeParams = typeParametersToString(signature.typeParameter);
          const params = parametersToString(signature.parameters);
          const returnType = someTypeToString(signature.type);

          return `${typeParams}(${params}) => ${returnType}`;
        })
        .join(', ');
    }

    case ReflectionKind.Interface: {
      if (declaration.children) {
        return [
          `interface ${rootName} {`,
          declaration.children
            .filter((child) => !child.flags.isExternal)
            .map((child) =>
              declarationToString(child, {
                indentCount: indentCount + 1,
                rootName,
              })
            )
            .join(';\n'),
          '}',
        ].join('\n');
      }

      return declaration.name;
    }

    case ReflectionKind.Property: {
      return indent(propertyToString(declaration), indentCount);
    }

    case ReflectionKind.TypeAlias: {
      return someTypeToString(declaration.type, {
        rootName: declaration.name,
        indentCount,
      });
    }

    case ReflectionKind.TypeLiteral: {
      if (declaration.children) {
        const root = rootName ? `${rootName}: {` : '{';

        return [
          root,
          declaration.children
            .map((child) =>
              declarationToString(child, {
                indentCount: indentCount + 1,
                rootName,
              })
            )
            .join(',\n'),
          indent('}', indentCount),
        ].join('\n');
      }

      return (declaration.signatures || [])
        .map((signature) => {
          const typeParams = typeParametersToString(signature.typeParameter);
          const params = parametersToString(signature.parameters);
          const returnType = someTypeToString(signature.type);

          return `${typeParams}(${params}) => ${returnType}`;
        })
        .join(', ');
    }

    case ReflectionKind.Variable: {
      return someTypeToString(declaration.type, {
        rootName: declaration.name,
        indentCount,
      });
    }

    default: {
      return '';
    }
  }
}

export { declarationToString };
