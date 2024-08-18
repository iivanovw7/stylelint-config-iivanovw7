import { defineFlatConfig } from "eslint-define-config";
import eslintImport from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
import perfectionistAlphabetical from "eslint-plugin-perfectionist/configs/recommended-alphabetical";
import preferArrow from "eslint-plugin-prefer-arrow";
import preferLet from "eslint-plugin-prefer-let";
import unicorn from "eslint-plugin-unicorn";

export default defineFlatConfig([
    {
        ignores: ["**/node_modules/**", "**/dist/**", ".git/**", ".husky/**"],
    },
    perfectionistAlphabetical,
    {
        files: ["index.js"],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
        },
        plugins: {
            import: eslintImport,
            n,
            "prefer-arrow": preferArrow,
            "prefer-let": preferLet,
            unicorn,
        },
        rules: {
            "arrow-body-style": ["error", "as-needed"],
            camelcase: [
                "error",
                {
                    ignoreGlobals: true,
                    properties: "always",
                },
            ],
            "consistent-return": "error",
            "constructor-super": "error",
            "no-redeclare": "off",
            "perfectionist/sort-array-includes": [
                "error",
                {
                    order: "asc",
                    "spread-last": true,
                    type: "natural",
                },
            ],
            "perfectionist/sort-classes": [
                "error",
                {
                    groups: [
                        "static-property",
                        "private-property",
                        "property",
                        "constructor",
                        "static-method",
                        "private-method",
                        "method",
                    ],
                    order: "asc",
                    type: "natural",
                },
            ],
            "perfectionist/sort-objects": "off",
            "sort-imports": "off",
            "sort-keys": "off",
            "unicorn/no-abusive-eslint-disable": ["warn"],
            "unicorn/no-array-reduce": "off",
            "unicorn/no-null": "off",
            "unicorn/prefer-module": ["warn"],
            "unicorn/prevent-abbreviations": "warn",
        },
    },
    {
        files: ["**/*.js"],
        plugins: {
            jsdoc,
        },
        rules: {
            "jsdoc/require-description": 2,
            "jsdoc/require-jsdoc": 2,
            "jsdoc/require-returns": 2,
            "jsdoc/require-returns-description": 2,
        },
    },
]);
