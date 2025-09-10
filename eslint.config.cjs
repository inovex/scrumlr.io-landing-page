const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const parser = require("astro-eslint-parser");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    extends: compat.extends("plugin:astro/recommended"),
}, globalIgnores(["**/dist/", "**/*.config.js", "**/*.d.ts"]), {
    // Define the configuration for `.astro` file.
    files: ["**/*.astro"],

    languageOptions: {
        // Allows Astro components to be parsed.
        parser: parser,
        // Parse the script in `.astro` as TypeScript by adding the following configuration.
        // It's the setting you need when using TypeScript.
        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".astro"],
        },
    },

    rules: {},
}, {
    files: ["**/*.ts"],

    languageOptions: {
        parser: tsParser,
    },
}]);
