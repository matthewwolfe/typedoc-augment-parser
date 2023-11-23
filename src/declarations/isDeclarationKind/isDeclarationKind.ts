import { ReflectionKind } from 'typedoc';

import type { JSONOutput } from 'typedoc';
import type {
  ClassDeclarationReflection,
  FunctionDeclarationReflection,
  InterfaceDeclarationReflection,
  PropertyDeclarationReflection,
  ReferenceDeclarationReflection,
  TypeAliasDeclarationReflection,
} from '@pkg/types/declarations';

function isClass(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is ClassDeclarationReflection {
  return declaration?.kind === ReflectionKind.Class;
}

function isFunction(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is FunctionDeclarationReflection {
  return declaration?.kind === ReflectionKind.Function;
}

function isInterface(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is InterfaceDeclarationReflection {
  return declaration?.kind === ReflectionKind.Interface;
}

function isProperty(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is PropertyDeclarationReflection {
  return declaration?.kind === ReflectionKind.Property;
}

function isReference(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is ReferenceDeclarationReflection {
  return declaration?.kind === ReflectionKind.Reference;
}

function isTypeAlias(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is TypeAliasDeclarationReflection {
  return declaration?.kind === ReflectionKind.TypeAlias;
}

export {
  isClass,
  isFunction,
  isInterface,
  isProperty,
  isReference,
  isTypeAlias,
};
