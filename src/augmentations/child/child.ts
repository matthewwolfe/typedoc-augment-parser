import { ReflectionKind } from 'typedoc';
import { declarationToString } from './declarationToString';
import { isDeprecated } from './isDeprecated';
import { isProperty } from './isKind';
import { parameterOrPropertyToString } from './parameterOrPropertyToString';
import { typeToString } from './typeToString/typeToString';

import type { JSONOutput } from 'typedoc';
import type { AugmentedDeclarationReflection } from './child.type';

function child(
  declaration: JSONOutput.DeclarationReflection
): AugmentedDeclarationReflection {
  switch (declaration.kind) {
    case ReflectionKind.Interface: {
      const properties = () =>
        (declaration.children || [])
          .map(child)
          .filter((property) => !property.flags.isExternal)
          .filter(isProperty);

      return {
        ...declaration,
        isDeprecated: isDeprecated(declaration),
        property: (name: string) =>
          properties().find((property) => property.name === name),
        properties,
      };
    }

    case ReflectionKind.Function: {
      return {
        ...declaration,
        isDeprecated: isDeprecated(declaration),
        typeToString: declarationToString(declaration),
      };
    }

    case ReflectionKind.Property: {
      return {
        ...declaration,
        isDeprecated: isDeprecated(declaration),
        toString: () => parameterOrPropertyToString(declaration),
        typeToString: () => typeToString(declaration.type),
      };
    }

    default: {
      return declaration;
    }
  }
}

export { child };
