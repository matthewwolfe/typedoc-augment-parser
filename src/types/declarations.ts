import type { JSONOutput } from 'typedoc';

export type ProjectChildren = JSONOutput.ProjectReflection['children'];

export type DeclarationVariant =
  NonNullable<ProjectChildren>[number]['variant'];

export interface ClassDeclarationReflection
  extends JSONOutput.DeclarationReflection {}

export interface FunctionDeclarationReflection
  extends JSONOutput.DeclarationReflection {
  isDeprecated: () => boolean;
  typeToString: () => string;
}

export interface InterfaceDeclarationReflection
  extends JSONOutput.DeclarationReflection {
  isDeprecated: () => boolean;
  property: (name: string) => PropertyDeclarationReflection | undefined;
  properties: () => PropertyDeclarationReflection[];
}

export interface PropertyDeclarationReflection
  extends JSONOutput.DeclarationReflection {
  isDeprecated: () => boolean;
  toString: () => string;
  typeToString: () => string;
}

export interface ReferenceDeclarationReflection
  extends JSONOutput.DeclarationReflection {
  typeToString: () => string;
}

export interface TypeAliasDeclarationReflection
  extends JSONOutput.DeclarationReflection {
  typeToString: () => string;
}

export type AugmentedDeclarationReflection =
  | ClassDeclarationReflection
  | FunctionDeclarationReflection
  | InterfaceDeclarationReflection
  | PropertyDeclarationReflection
  | ReferenceDeclarationReflection
  | TypeAliasDeclarationReflection;
