import { someTypeToString } from '@pkg/type';

import type { JSONOutput } from 'typedoc';

function parameterToString(parameter: JSONOutput.ParameterReflection) {
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

function parametersToString(
  parameters: JSONOutput.ParameterReflection[] | undefined
): string {
  return (parameters || [])
    .map((parameter) => parameterToString(parameter))
    .join(', ');
}

export { parametersToString };
