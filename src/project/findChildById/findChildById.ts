import { augmentDeclaration } from '@pkg/augments/declaration';

import type { JSONOutput } from 'typedoc';
import type { AugmentedDeclaration } from '@pkg/types/declarations';

function findChildById<T extends AugmentedDeclaration>(
  project: JSONOutput.ProjectReflection,
  id: number
): T | undefined {
  const projectChild = project.children?.find((child) => child.id === id);

  if (projectChild === undefined) {
    return undefined;
  }

  return augmentDeclaration(project, projectChild) as T;
}

export { findChildById };
