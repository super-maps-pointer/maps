// @ts-check
import eslint from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import oxlint from "eslint-plugin-oxlint";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores([".next/**", "node_modules/**", "next-env.d.ts"]),

  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  ...nextCoreWebVitals,
  ...nextTypescript,
  reactHooks.configs.flat.recommended,

  {
    rules: {
      eqeqeq: ["error", "always"],
      "no-console": "warn",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // Config files are plain JS/TS outside the type-checked app code
  {
    files: ["**/*.mjs"],
    extends: [tseslint.configs.disableTypeChecked],
  },

  // Must stay last: turn off rules Oxlint already covers, then formatting rules Prettier owns
  ...oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
  prettier,
);
