// @ts-check

import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import globals from 'globals';

// import jsonParser from 'jsonc-eslint-parser';
// import jsonc from 'eslint-plugin-jsonc';
import markdown from '@eslint/markdown';

export default tseslint.config(
    js.configs.recommended,
    // ...jsonc.configs['flat/recommended-with-jsonc'],
    // {
    //     files: ['*.json', '*.jsonc', '*.json5'],
    //     languageOptions: {
    //         parser: jsonParser,
    //     },
    // },
    ...markdown.configs.recommended,
    tseslint.configs.recommended,

    {
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 'latest',
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2025,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
            reportUnusedInlineConfigs: 'error',
        },
    },
);
