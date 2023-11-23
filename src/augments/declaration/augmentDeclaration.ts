import { ReflectionKind } from 'typedoc';
import { isDeprecated } from '@pkg/comments';
import { declarationToString, isProperty } from '@pkg/declarations';

import type { JSONOutput } from 'typedoc';
import type { AugmentedDeclarationReflection } from '@pkg/types/declarations';

function augmentDeclaration(
  project: JSONOutput.ProjectReflection,
  declaration: JSONOutput.DeclarationReflection
) {
  switch (declaration.kind) {
    case ReflectionKind.Interface: {
      const properties = () =>
        (declaration.children || [])
          .map((declarationChild) =>
            augmentDeclaration(project, declarationChild)
          )
          .filter((property) => !property.flags.isExternal)
          .filter(isProperty);

      return {
        ...declaration,
        isDeprecated: () => isDeprecated(declaration),
        property: (name: string) =>
          properties().find((property) => property.name === name),
        properties,
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
        toString: () => parameterOrPropertyToString(declaration),
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

function augmentReference(
  project: JSONOutput.ProjectReflection,
  declaration: JSONOutput.ReferenceReflection
) {
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
    typeToString: () => '',
  };
}

function augment(
  project: JSONOutput.ProjectReflection,
  declaration: JSONOutput.DeclarationReflection | JSONOutput.ReferenceReflection
): AugmentedDeclarationReflection {
  switch (declaration.variant) {
    case 'declaration': {
      return augmentDeclaration(
        project,
        declaration as JSONOutput.DeclarationReflection
      );
    }

    case 'reference': {
      return augmentReference(
        project,
        declaration as JSONOutput.ReferenceReflection
      );
    }

    default: {
      throw new Error('Unable to augment declaration');
    }
  }
}

export { augment };
