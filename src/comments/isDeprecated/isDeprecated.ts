import type { AugmentedDeclarationReflection } from '@pkg/types/declarations';

const DEPRECATED_TAG = '@deprecated';

/**
 * Test if a declaration is deprecated using block comment tag
 */
function isDeprecated(child: Pick<AugmentedDeclarationReflection, 'comment'>) {
  return (child.comment?.blockTags || []).some(
    (block) => block.tag.toLowerCase() === DEPRECATED_TAG
  );
}

export { isDeprecated };
