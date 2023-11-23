import { someTypeToString } from '@pkg/type';

import type { JSONOutput } from 'typedoc';

function propertyToString(parameter: JSONOutput.DeclarationReflection) {
  if (!parameter.type) {
    return '';
  }

  const optional =
    parameter.flags.isOptional || parameter.defaultValue !== undefined
      ? '?'
      : '';

  const parameterType = someTypeToString(parameter.type);

  return `${parameter.name}${optional}: ${parameterType}`;
}

export { propertyToString };
