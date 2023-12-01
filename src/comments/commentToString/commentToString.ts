import type { AugmentedDeclaration } from '@pkg/types/declarations';

function commentToString(comment: AugmentedDeclaration['comment']): string {
  if (comment === undefined) {
    return '';
  }

  return (comment.summary || []).map((summary) => summary.text).join('');
}

export { commentToString };
