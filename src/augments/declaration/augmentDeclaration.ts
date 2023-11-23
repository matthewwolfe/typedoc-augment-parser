import { ReflectionKind } from 'typedoc';
import { isDeprecated } from '@pkg/comments';
import { declarationToString, isProperty } from '@pkg/declarations';
import { propertyToString } from '@pkg/properties';
import { typeToString } from '@pkg/type/typeToString';

import type { JSONOutput } from 'typedoc';
import type {
  AugmentedDeclaration,
  ReferenceDeclaration,
} from '@pkg/types/declarations';

function augmentDeclaration(
  project: JSONOutput.ProjectReflection,
  declaration: JSONOutput.DeclarationReflection
): AugmentedDeclaration {
  switch (declaration.kind) {
    case ReflectionKind.Interface: {
      const properties = () =>
        (declaration.children || [])
          .map((declarationChild) =>
            augmentDeclaration(project, declarationChild)
          )
          .filter((property) => !property.flags.isExternal)
          .filter(isProperty);

      const property = (name: string) =>
        properties().find((property) => property.name === name);

      return {
        ...declaration,
        isDeprecated: () => isDeprecated(declaration),
        property,
        properties,
        typeToString: () => '',
      };
    }

    case ReflectionKind.Function: {
      return {
        ...declaration,
        isDeprecated: () => isDeprecated(declaration),
        typeToString: () => declarationToString(declaration),
      };
    }

    case ReflectionKind.Property: {
      return {
        ...declaration,
        isDeprecated: () => isDeprecated(declaration),
        toString: () => propertyToString(declaration),
        typeToString: () => typeToString(declaration.type),
      };
    }

    case ReflectionKind.TypeAlias: {
      return {
        ...declaration,
        typeToString: () => declarationToString(declaration),
      };
    }

    default: {
      return declaration;
    }
  }
}

function augmentReference<T extends AugmentedDeclaration>(
  project: JSONOutput.ProjectReflection,
  declaration: JSONOutput.ReferenceReflection
): ReferenceDeclaration<T> {
  const target = (project.children || []).find(
    (child) => child.id === declaration.target
  );

  if (!target) {
    throw new Error(
      `Unable to find target for reference declaration id: ${declaration.target}`
    );
  }

  return {
    ...declaration,
    reference: augment<T>(project, target),
  };
}

function augment<T extends AugmentedDeclaration>(
  project: JSONOutput.ProjectReflection,
  declaration: JSONOutput.DeclarationReflection | JSONOutput.ReferenceReflection
): T {
  switch (declaration.variant) {
    case 'declaration': {
      return augmentDeclaration(project, declaration) as T;
    }

    case 'reference': {
      return augmentReference(
        project,
        declaration as JSONOutput.ReferenceReflection
      ) as T;
    }

    default: {
      throw new Error('Unable to augment declaration');
    }
  }
}

export { augment };
