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
        "import",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@next/next/recommended",
        "plugin:@typescript-eslint/strict-type-checked",
    ],
    settings: {
        "import/resolver": {
            "typescript": true,
        }
    },
    rules: {
        // Possible Problems
        "array-callback-return": "error",
        "no-await-in-loop": "error",
        "no-constructor-return": "error",
        "no-promise-executor-return": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable-loop": "error",
        "no-unused-private-class-members": "error",
        "no-use-before-define": "error",
        "require-atomic-updates": "error",
        "@typescript-eslint/no-misused-promises": ["error", {
            "checksVoidReturn": {
                "attributes": false,
            },
        }],

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

        // Imports
        "import/first": "error",
        "import/newline-after-import": "error",
        "no-duplicate-imports": ["error", {"includeExports": true}],
        "import/order": ["error", {
            "groups": ["builtin", "external", ["internal", "parent", "sibling", "index"]],
            "newlines-between": "always",
            "distinctGroup": false,
            "alphabetize": {"order": "asc"},
            "pathGroups": [
                {
                    "pattern":"@/app/**",
                    "group": "internal",
                    "position": "before",
                },
            ]
        }],
    }
};
