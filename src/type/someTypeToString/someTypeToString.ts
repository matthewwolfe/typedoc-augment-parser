import { declarationToString } from '@pkg/declarations';

import type { JSONOutput } from 'typedoc';

interface Options {
  indentCount: number;
  rootName: string;
}

function someTypeToString(
  type: JSONOutput.SomeType | undefined,
  options?: Partial<Options>
): string {
  const { indentCount = 0, rootName = '' } = options || {};

  if (!type) {
    return '';
  }

  switch (type.type) {
    case 'array': {
      return `${someTypeToString(type.elementType)}[]`;
    }
    case 'conditional': {
      return '';
    }

    case 'indexedAccess': {
      const objectType = someTypeToString(type.objectType);
      const indexType = someTypeToString(type.indexType);

      return `${objectType}[${indexType}]`;
    }

    case 'inferred': {
      return '';
    }

    case 'intersection': {
      return type.types
        .map((innerType) => someTypeToString(innerType))
        .join(' & ');
    }

    case 'intrinsic': {
      return type.name;
    }

    case 'literal': {
      if (type.value === null) {
        return 'null';
      }

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
      return `typeof ${someTypeToString(type.queryType)}`;
    }

    case 'reference': {
      if (type.typeArguments) {
        const typeArguments = type.typeArguments
          .map((type) => someTypeToString(type))
          .join(', ');

        return `${type.name}<${typeArguments}>`;
      }

      if (type.target === -1) {
        return type.name;
      }

      return type.qualifiedName || type.name;
    }

    case 'reflection': {
      return declarationToString(type.declaration, {
        indentCount,
        rootName,
      });
    }

    case 'rest': {
      return '';
    }

    case 'templateLiteral': {
      return '';
    }

    case 'tuple': {
      const elementTypes = (type.elements || [])
        .map((element) => someTypeToString(element))
        .join(', ');

      return `[${elementTypes}]`;
    }

    case 'namedTupleMember': {
      return '';
    }

    case 'typeOperator': {
      return `${type.operator} ${someTypeToString(type.target)}`;
    }

    case 'union': {
      return type.types.map((type) => someTypeToString(type)).join(' | ');
    }

    case 'unknown': {
      return type.name;
    }

    default:
      return '';
  }
}

export { someTypeToString };
