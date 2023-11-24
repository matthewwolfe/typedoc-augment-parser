import { ReflectionKind } from '@pkg/types/reflection';

import type { JSONOutput } from 'typedoc';
import type {
  AugmentedDeclaration,
  ClassDeclaration,
  FunctionDeclaration,
  InterfaceDeclaration,
  PropertyDeclaration,
  ReferenceDeclaration,
  TypeAliasDeclaration,
} from '@pkg/types/declarations';

function isClass(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is ClassDeclaration {
  return declaration?.kind === ReflectionKind.Class;
}

function isFunction(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is FunctionDeclaration {
  return declaration?.kind === ReflectionKind.Function;
}

function isInterface(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is InterfaceDeclaration {
  return declaration?.kind === ReflectionKind.Interface;
}

function isProperty(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is PropertyDeclaration {
  return declaration?.kind === ReflectionKind.Property;
}

function isReference<T extends AugmentedDeclaration>(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is ReferenceDeclaration<T> {
  return declaration?.kind === ReflectionKind.Reference;
}

function isTypeAlias(
  declaration: JSONOutput.DeclarationReflection | undefined
): declaration is TypeAliasDeclaration {
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
