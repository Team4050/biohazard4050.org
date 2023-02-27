/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@trivago/prettier-plugin-sort-imports"),
    require("prettier-plugin-astro"),
  ],
  importOrder: ["^@site/(.*)$", "^[./]"],
  importOrderSeparation: true,
};
