/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  plugins: ["@docusaurus", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@docusaurus/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
};
