import {
  commentToString,
  declarationCommentToString,
  isDeprecated,
} from '@pkg/comments';
import { declarationToString, isProperty } from '@pkg/declarations';
import { propertyToString } from '@pkg/properties';
import { someTypeToString } from '@pkg/type';
import { ReflectionKind } from '@pkg/types/reflection';

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
        typeToString: () => declarationToString(declaration),
      };
    }

    case ReflectionKind.Function: {
      return {
        ...declaration,
        commentToString: () => declarationCommentToString(declaration),
        isDeprecated: () => isDeprecated(declaration),
        typeToString: () => declarationToString(declaration),
      };
    }

    case ReflectionKind.Namespace: {
      return {
        ...declaration,
        typeToString: () => someTypeToString(declaration.type),
      };
    }

    case ReflectionKind.Property: {
      return {
        ...declaration,
        commentToString: () => commentToString(declaration.comment),
        isDeprecated: () => isDeprecated(declaration),
        toString: () => propertyToString(declaration),
        typeToString: () => someTypeToString(declaration.type),
      };
    }

    case ReflectionKind.Variable: {
      return {
        ...declaration,
        typeToString: () => declarationToString(declaration),
      };
    }

    case ReflectionKind.TypeAlias: {
      return {
        ...declaration,
        typeToString: () => declarationToString(declaration),
      };
    }

    default: {
      throw new Error(`Unable to augment declaration id: ${declaration.kind}`);
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
    typeToString: () => '',
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
