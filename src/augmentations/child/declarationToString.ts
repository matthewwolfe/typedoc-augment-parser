import { ReflectionKind } from 'typedoc';
import { parametersToString } from './parametersToString';
import { typeParametersToString } from './typeParametersToString';
import { typeToString } from './typeToString/typeToString';

import type { JSONOutput } from 'typedoc';

function declarationToString(declaration: JSONOutput.DeclarationReflection) {
  return function () {
    switch (declaration.kind) {
      case ReflectionKind.Function: {
        return (declaration.signatures || [])
          .map((signature) => {
            const typeParams = typeParametersToString(signature.typeParameter);
            const params = parametersToString(signature.parameters);
            const returnType = typeToString(signature.type);

            return `${typeParams}(${params}) => ${returnType}`;
          })
          .join(', ');
      }

      case ReflectionKind.Interface: {
        return declaration.name;
      }

      default: {
        return '';
      }
    }
  };
}

export { declarationToString };
