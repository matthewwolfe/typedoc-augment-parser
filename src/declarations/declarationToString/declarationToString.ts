import { ReflectionKind } from 'typedoc';
import { parameterOrPropertyToString } from '../../properties/propertyToString/propertyToString';
import { parametersToString } from '../../parameters/parametersToString/parametersToString';
import { typeParametersToString } from '../../parameters/typeParametersToString/typeParametersToString';
import { typeToString } from '../../type/typeToString/typeToString';

import type { JSONOutput } from 'typedoc';

function declarationToString(
  declaration: JSONOutput.DeclarationReflection
): string {
  switch (declaration.kind) {
    case ReflectionKind.Function: {
      return (declaration.signatures || [])
        .map((signature) => {
          const typeParams = typeParametersToString(signature.typeParameter);
          const params = parametersToString(signature.parameters);
          const returnType = typeToString(signature.type);

          return `${typeParams}(${params}) => ${returnType}`;
        })
        .join(', ');
    }

    case ReflectionKind.Interface: {
      return declaration.name;
    }

    case ReflectionKind.Property: {
      return parameterOrPropertyToString(declaration);
    }

    case ReflectionKind.TypeAlias: {
      const typeParams = typeParametersToString(declaration.typeParameters);
      const type = typeToString(declaration.type);

      return [`${declaration.name}${typeParams}: {`, type, '}'].join('\n');
    }

    case ReflectionKind.TypeLiteral: {
      if (declaration.children) {
        return declaration.children
          .map((child) => declarationToString(child))
          .join(',\n');
      }

      return (declaration.signatures || [])
        .map((signature) => {
          const typeParams = typeParametersToString(signature.typeParameter);
          const params = parametersToString(signature.parameters);
          const returnType = typeToString(signature.type);

          return `${typeParams}(${params}) => ${returnType}`;
        })
        .join(', ');
    }

    default: {
      return '';
    }
  }
}

export { declarationToString };
