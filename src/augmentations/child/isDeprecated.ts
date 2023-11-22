import type { AugmentedDeclarationReflection } from './child.type';

const DEPRECATED_TAG = '@deprecated';

/**
 * Test if a declaration is deprecated using block comment tag
 */
function isDeprecated(child: AugmentedDeclarationReflection) {
  return function () {
    return (child.comment?.blockTags || []).some(
      (block) => block.tag.toLowerCase() === DEPRECATED_TAG
    );
  };
}

export { isDeprecated };
