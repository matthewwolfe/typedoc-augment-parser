import type { JSONOutput } from 'typedoc';

function findSymbolById(project: JSONOutput.ProjectReflection) {
  return function (id: number) {
    const symbol = project.symbolIdMap[id];

    if (symbol === undefined) {
      return undefined;
    }

    return symbol;
  };
}

export { findSymbolById };
