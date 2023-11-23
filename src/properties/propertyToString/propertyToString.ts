import { typeToString } from '@pkg/type/typeToString';

import type { JSONOutput } from 'typedoc';

function propertyToString(parameter: JSONOutput.DeclarationReflection) {
  if (!parameter.type) {
    return '';
  }

  const optional =
    parameter.flags.isOptional || parameter.defaultValue !== undefined
      ? '?'
      : '';

  const parameterType = typeToString(parameter.type);

  return `${parameter.name}${optional}: ${parameterType}`;
}

export { propertyToString };
