import { findChildById } from '@pkg/project/findChildById';
import { findChildByName } from '@pkg/project/findChildByName';
import { groups } from '@pkg/project/groups';

import type { JSONOutput } from 'typedoc';

function augment(project: JSONOutput.ProjectReflection) {
  return {
    findChildById: (id: number) => findChildById(project, id),
    findChildByName: (name: string) => findChildByName(project, name),
    groups: () => groups(project),
    packageName: project.packageName,
    packageVersion: project.packageVersion,
  };
}

export const parser = {
  augment,
} as const;
