import { GLOBAL_OPTIONS } from '@pkg/config/global';

function indent(value: string, indentCount: number) {
  return value.padStart(
    value.length + indentCount * GLOBAL_OPTIONS.indentSize,
    ' '
  );
}

export { indent };
