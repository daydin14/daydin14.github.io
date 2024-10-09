import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/src/**/*.{js,mjs,cjs,jsx}"],
  },
  {
    ignores: [
      "**/build/**/*",
      "**/node_modules/**/*",
      "**/public/**/*",
      "**/src/assets/images/**/*"
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      // "no-empty": "off",
      // "no-cond-assign": "off",
      // "no-prototype-builtins": "off",
      // "no-undef": "off",
      // "no-fallthrough": "off",
      // "valid-typeof": "off",
      // "no-useless-escape": "off",
      // "no-misleading-character-class": "off",
      // "getter-return": "off",
      // "no-func-assign": "off",
      // "no-control-regex": "off"
    }
  }
];