import type { JSONOutput } from 'typedoc';

export interface ClassDeclarationReflection
  extends JSONOutput.DeclarationReflection {}

export interface FunctionDeclarationReflection
  extends JSONOutput.DeclarationReflection {
  typeToString: () => string;
}

export interface InterfaceDeclarationReflection
  extends JSONOutput.DeclarationReflection {
  properties: () => PropertyDeclarationReflection[];
}

export interface PropertyDeclarationReflection
  extends JSONOutput.DeclarationReflection {
  toString: () => string;
  typeToString: () => string;
}

export type AugmentedDeclarationReflection =
  | ClassDeclarationReflection
  | FunctionDeclarationReflection
  | InterfaceDeclarationReflection
  | PropertyDeclarationReflection;
