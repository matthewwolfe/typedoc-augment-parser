import type { JSONOutput } from 'typedoc';

export type ProjectChildren = JSONOutput.ProjectReflection['children'];

export type DeclarationVariant =
  NonNullable<ProjectChildren>[number]['variant'];

interface Declaration extends JSONOutput.DeclarationReflection {
  typeToString: () => string;
}

export interface ClassDeclaration extends Declaration {}

export interface FunctionDeclaration extends Declaration {
  isDeprecated: () => boolean;
}

export interface InterfaceDeclaration extends Declaration {
  isDeprecated: () => boolean;
  property: (name: string) => PropertyDeclaration | undefined;
  properties: () => PropertyDeclaration[];
}

export interface PropertyDeclaration extends Declaration {
  isDeprecated: () => boolean;
  toString: () => string;
}

export interface ReferenceDeclaration<T extends AugmentedDeclaration>
  extends Declaration {
  reference: T;
}

export interface TypeAliasDeclaration extends Declaration {}

export type AugmentedDeclaration =
  | ClassDeclaration
  | FunctionDeclaration
  | InterfaceDeclaration
  | PropertyDeclaration
  | ReferenceDeclaration<AugmentedDeclaration>
  | TypeAliasDeclaration;
