import { setGlobalOptions } from '@pkg/config/global';
import { findChildById } from '@pkg/project/findChildById';
import { findChildByName } from '@pkg/project/findChildByName';
import { findSymbolById } from '@pkg/project/findSymbolById';
import { groups } from '@pkg/project/groups';

import type { JSONOutput } from 'typedoc';
import type { GlobalOptions } from '@pkg/config/global';

function augment(
  project: JSONOutput.ProjectReflection,
  options: Partial<GlobalOptions> = {}
) {
  setGlobalOptions(options);

  return {
    findChildById: findChildById(project),
    findChildByName: findChildByName(project),
    findSymbolById: findSymbolById(project),
    groups: () => groups(project),
    packageName: project.packageName,
    packageVersion: project.packageVersion,
  };
}

export const parser = {
  augment,
} as const;
