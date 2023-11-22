import { typeToString } from './typeToString';

import type { JSONOutput } from 'typedoc';

function parameterOrPropertyToString(
  parameter: Pick<
    JSONOutput.DeclarationReflection,
    'defaultValue' | 'flags' | 'name' | 'type'
  >
) {
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

export { parameterOrPropertyToString };
