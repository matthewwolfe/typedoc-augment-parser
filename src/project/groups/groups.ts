import { augmentDeclaration } from '@pkg/augments/declaration';
import { nonNullable } from '@pkg/utils/nonNullable';

import type { JSONOutput } from 'typedoc';
import type { AugmentedDeclaration } from '@pkg/types/declarations';

export interface ProjectGroup {
  title: string;
  children: AugmentedDeclaration[];
}

function groups(project: JSONOutput.ProjectReflection): ProjectGroup[] {
  return (project.groups || []).map((group) => {
    return {
      title: group.title,
      children: (group.children || [])
        .map((id) =>
          project.children?.find((projectChild) => projectChild.id === id)
        )
        .filter(nonNullable)
        .map((projectChild) => augmentDeclaration(project, projectChild)),
    };
  });
}

export { groups };
