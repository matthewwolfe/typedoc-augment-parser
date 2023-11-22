import type { JSONOutput } from 'typedoc';

function typeParametersToString(
  typeParameters: JSONOutput.TypeParameterReflection[] | undefined
): string {
  if (!typeParameters) {
    return '';
  }

  const params = (typeParameters || [])
    .map((parameter) => parameter.name)
    .join(', ');

  return `<${params}>`;
}

export { typeParametersToString };
