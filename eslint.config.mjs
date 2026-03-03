import { defineConfig, globalIgnores } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';
import tsParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([globalIgnores(["**/out", "**/dist", "**/*.d.ts"]), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        "unused-imports": unusedImports,
        "@stylistic": stylistic,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 6,
        sourceType: "module",
    },

    rules: {
        "@typescript-eslint/naming-convention": ["warn", {
            selector: "import",
            format: ["camelCase", "PascalCase"],
        }],

        "@stylistic/semi": "warn",
        curly: "warn",
        eqeqeq: "warn",
        "no-throw-literal": "warn",
        "unused-imports/no-unused-imports": "error",

        "unused-imports/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],
    },
}]);