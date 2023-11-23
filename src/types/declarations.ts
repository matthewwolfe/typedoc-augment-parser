import type { JSONOutput } from 'typedoc';

export type ProjectChildren = JSONOutput.ProjectReflection['children'];

export type DeclarationVariant =
  NonNullable<ProjectChildren>[number]['variant'];

export interface ClassDeclaration extends JSONOutput.DeclarationReflection {}

export interface FunctionDeclaration extends JSONOutput.DeclarationReflection {
  isDeprecated: () => boolean;
  typeToString: () => string;
}

export interface InterfaceDeclaration extends JSONOutput.DeclarationReflection {
  isDeprecated: () => boolean;
  property: (name: string) => PropertyDeclaration | undefined;
  properties: () => PropertyDeclaration[];
}

export interface PropertyDeclaration extends JSONOutput.DeclarationReflection {
  isDeprecated: () => boolean;
  toString: () => string;
  typeToString: () => string;
}

export interface ReferenceDeclaration<T extends AugmentedDeclaration>
  extends JSONOutput.DeclarationReflection {
  reference: T;
}

export interface TypeAliasDeclaration extends JSONOutput.DeclarationReflection {
  typeToString: () => string;
}

export type AugmentedDeclaration =
  | ClassDeclaration
  | FunctionDeclaration
  | InterfaceDeclaration
  | PropertyDeclaration
  | ReferenceDeclaration<AugmentedDeclaration>
  | TypeAliasDeclaration;
