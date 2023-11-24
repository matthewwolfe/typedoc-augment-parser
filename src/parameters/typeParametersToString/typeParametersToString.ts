import { someTypeToString } from '@pkg/type';
import type { JSONOutput } from 'typedoc';

function typeParametersToString(
  typeParameters: JSONOutput.TypeParameterReflection[] | undefined
): string {
  if (!typeParameters) {
    return '';
  }

  const params = (typeParameters || [])
    .map((parameter) => {
      if (!parameter.type) {
        return parameter.name;
      }

      return `${parameter.name} extends ${someTypeToString(parameter.type)}`;
    })
    .join(', ');

  return `<${params}>`;
}

export { typeParametersToString };
