import type { JSONOutput } from 'typedoc';

function declarationCommentToString(
  declaration: JSONOutput.DeclarationReflection
): string {
  const signatures = declaration.signatures || [];

  if (signatures.length === 0) {
    return '';
  }

  const firstSignature = signatures[0];

  if (!firstSignature) {
    return '';
  }

  return (firstSignature.comment?.summary || [])
    .map((summary) => summary.text)
    .join('');
}

export { declarationCommentToString };
