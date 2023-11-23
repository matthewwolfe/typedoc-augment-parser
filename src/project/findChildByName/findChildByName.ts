import { augmentDeclaration } from '@pkg/augments/declaration';

import type { JSONOutput } from 'typedoc';
import type { AugmentedDeclaration } from '@pkg/types/declarations';

function findChildByName<T extends AugmentedDeclaration>(
  project: JSONOutput.ProjectReflection,
  name: string
): T | undefined {
  const projectChild = project.children?.find((child) => child.name === name);

  if (projectChild === undefined) {
    return undefined;
  }

  return augmentDeclaration(project, projectChild) as T;
}

export { findChildByName };
