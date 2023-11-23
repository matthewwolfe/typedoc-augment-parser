import { ReflectionKind } from 'typedoc';
import { propertyToString } from '@pkg/properties';
import { parametersToString, typeParametersToString } from '@pkg/parameters';
import { someTypeToString } from '@pkg/type';

import type { JSONOutput } from 'typedoc';

interface Options {
  rootName: string;
}

function declarationToString(
  declaration: JSONOutput.DeclarationReflection,
  options?: Options
): string {
  const { rootName = '' } = options || {};

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
      return declaration.name;
    }

    case ReflectionKind.Property: {
      return propertyToString(declaration);
    }

    case ReflectionKind.TypeAlias: {
      const typeParams = typeParametersToString(declaration.typeParameters);
      const type = someTypeToString(declaration.type);

      return [`${declaration.name}${typeParams}: {`, type, '}'].join('\n');
    }

    case ReflectionKind.TypeLiteral: {
      if (declaration.children) {
        return [
          `${rootName}: {`,
          declaration.children
            .map((child) => declarationToString(child))
            .join(',\n'),
          '}',
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
      });
    }

    default: {
      return '';
    }
  }
}

export { declarationToString };
