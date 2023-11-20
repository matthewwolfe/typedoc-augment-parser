import { child } from '@pkg/augmentations/child';
import { nonNullable } from '@pkg/utils/nonNullable';

import type { JSONOutput } from 'typedoc';

function parse(project: JSONOutput.ProjectReflection) {
  return {
    findChildByName: findChildByName(project),
    groups: groups(project),
    packageName: project.packageName,
    packageVersion: project.packageVersion,
  };
}

function findChildByName(project: JSONOutput.ProjectReflection) {
  return function (name: string) {
    const projectChild = project.children?.find((child) => child.name === name);

    if (projectChild === undefined) {
      return undefined;
    }

    return child(projectChild);
  };
}

function groups(project: JSONOutput.ProjectReflection) {
  return function () {
    return (project.groups || []).map((group) => {
      return {
        title: group.title,
        children: (group.children || [])
          .map((id) =>
            project.children?.find((projectChild) => projectChild.id === id)
          )
          .filter(nonNullable)
          .map((projectChild) => child(projectChild)),
      };
    });
  };
}

export const parser = {
  parse,
} as const;
