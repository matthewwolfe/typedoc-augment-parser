import { augmentDeclaration } from '@pkg/augments/declaration';

import type { JSONOutput } from 'typedoc';
import type { AugmentedDeclaration } from '@pkg/types/declarations';

function findChildById(project: JSONOutput.ProjectReflection) {
  return function <T extends AugmentedDeclaration>(id: number): T | undefined {
    const projectChild = project.children?.find((child) => child.id === id);

    if (projectChild === undefined) {
      return undefined;
    }

    return augmentDeclaration(project, projectChild) as T;
  };
}

export { findChildById };
