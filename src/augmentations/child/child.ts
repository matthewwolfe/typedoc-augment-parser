import { ReflectionKind } from 'typedoc';
import { JSONOutput } from 'typedoc';

import type {
  AugmentedDeclarationReflection,
  ClassDeclarationReflection,
  FunctionDeclarationReflection,
  InterfaceDeclarationReflection,
  PropertyDeclarationReflection,
} from './child.type';

function child(
  declaration: JSONOutput.DeclarationReflection
): AugmentedDeclarationReflection {
  switch (declaration.kind) {
    case ReflectionKind.Interface: {
      return {
        ...declaration,
        properties: () =>
          (declaration.children || [])
            .map(child)
            .filter((property) => !property.flags.isExternal)
            .filter(isProperty),
      };
    }

    case ReflectionKind.Function: {
      return {
        ...declaration,
        typeToString: declarationToString(declaration),
      };
    }

    case ReflectionKind.Property: {
      return {
        ...declaration,
        toString: () => parameterOrPropertyToString(declaration),
        typeToString: () => typeToString(declaration.type),
      };
    }

    default: {
      return declaration;
    }
  }
}

export function isClass(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is ClassDeclarationReflection {
  return declaration?.kind === ReflectionKind.Class;
}

export function isFunction(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is FunctionDeclarationReflection {
  return declaration?.kind === ReflectionKind.Function;
}

export function isInterface(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is InterfaceDeclarationReflection {
  return declaration?.kind === ReflectionKind.Interface;
}

export function isProperty(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is PropertyDeclarationReflection {
  return declaration?.kind === ReflectionKind.Property;
}

function typeParametersToString(
  typeParameters: JSONOutput.TypeParameterReflection[] | undefined
) {
  if (!typeParameters) {
    return '';
  }

  const params = (typeParameters || [])
    .map((parameter) => parameter.name)
    .join(', ');

  return `<${params}>`;
}

function parameterOrPropertyToString(
  parameter: Pick<
    JSONOutput.DeclarationReflection,
    'defaultValue' | 'flags' | 'name' | 'type'
  >
) {
  if (!parameter.type) {
    return '';
  }

  const optional =
    parameter.flags.isOptional || parameter.defaultValue !== undefined
      ? '?'
      : '';

  const parameterType = typeToString(parameter.type);

  return `${parameter.name}${optional}: ${parameterType}`;
}

function parametersToString(
  parameters: JSONOutput.ParameterReflection[] | undefined
) {
  return (parameters || [])
    .map((parameter) => parameterOrPropertyToString(parameter))
    .join(', ');
}

function typeToString(type: JSONOutput.SomeType | undefined): string {
  if (!type) {
    return '';
  }

  switch (type.type) {
    case 'array': {
      return `${typeToString(type.elementType)}[]`;
    }
    case 'conditional': {
      return '';
    }

    case 'indexedAccess': {
      const objectType = typeToString(type.objectType);
      const indexType = typeToString(type.indexType);

      return `${objectType}[${indexType}]`;
    }

    case 'inferred': {
      return '';
    }

    case 'intersection': {
      return type.types.map(typeToString).join(' & ');
    }

    case 'intrinsic': {
      return type.name;
    }

    case 'literal': {
      if (typeof type.value === 'string') {
        return `'${type.value}'`;
      }

      return type.value?.toString() || '';
    }

    case 'mapped': {
      return '';
    }

    case 'optional': {
      return '';
    }

    case 'predicate': {
      return '';
    }

    case 'query': {
      return '';
    }

    case 'reference': {
      if (type.typeArguments) {
        const typeArguments = type.typeArguments
          .map((type) => typeToString(type))
          .join(', ');

        return `${type.name}<${typeArguments}>`;
      }

      if (type.target === -1) {
        return type.name;
      }

      return type.qualifiedName || type.name;
    }

    case 'reflection': {
      return '';
    }

    case 'rest': {
      return '';
    }

    case 'templateLiteral': {
      return '';
    }

    case 'tuple': {
      return '';
    }

    case 'namedTupleMember': {
      return '';
    }

    case 'typeOperator': {
      return '';
    }

    case 'union': {
      return '';
    }

    case 'unknown': {
      return '';
    }

    default:
      return '';
  }
}

function declarationToString(declaration: JSONOutput.DeclarationReflection) {
  return function () {
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

      default: {
        return '';
      }
    }
  };
}

export { child };
