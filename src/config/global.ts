export interface GlobalOptions {
  /**
   * Number of spaces applied to each indentation
   */
  indentSize: number;
}

const GLOBAL_OPTIONS = {
  indentSize: 2,
};

function setGlobalOptions(options: Partial<GlobalOptions>) {
  Object.assign(GLOBAL_OPTIONS, options);
}

export { GLOBAL_OPTIONS, setGlobalOptions };
