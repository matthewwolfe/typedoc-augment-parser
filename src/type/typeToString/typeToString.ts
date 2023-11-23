import { declarationToString } from '@pkg/declarations';

import type { JSONOutput } from 'typedoc';

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
      return declarationToString(type.declaration);
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
      return type.types.map((type) => typeToString(type)).join(' | ');
    }

    case 'unknown': {
      return '';
    }

    default:
      return '';
  }
}

export { typeToString };
