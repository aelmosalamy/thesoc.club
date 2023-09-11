module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["node_modules", ".eslintrc.js", "next.config.js"],
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/strict-type-checked",
  ],
  rules: {
    // Possible Problems
    "array-callback-return": "error",
    "no-await-in-loop": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": ["error", {"includeExports": true}],
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": "error",
    "require-atomic-updates": "error",

    // Suggestions
    "camelcase": "error",
    "capitalized-comments": ["error", "always"],
    "curly": ["error", "multi-line"],
    "eqeqeq": "error",
    "no-console": "error",
    "no-invalid-this": "error",
    "prefer-const": ["error", {
      "ignoreReadBeforeAssign": true,
    }],

    // Layout & Formatting
    "array-bracket-newline": ["error", {"multiline": true}],
    "indent": ["error", 4, {"SwitchCase": 1}],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "brace-style": "error",
    "comma-dangle": ["error", "always-multiline"],
    "no-trailing-spaces": "error",
    "eol-last": "error",
  }
};
