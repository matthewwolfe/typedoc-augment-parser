import { parameterOrPropertyToString } from './parameterOrPropertyToString';

import type { JSONOutput } from 'typedoc';

function parametersToString(
  parameters: JSONOutput.ParameterReflection[] | undefined
) {
  return (parameters || [])
    .map((parameter) => parameterOrPropertyToString(parameter))
    .join(', ');
}

export { parametersToString };
