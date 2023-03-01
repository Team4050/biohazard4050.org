module.exports = {
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@trivago/prettier-plugin-sort-imports"),
  ],
  importOrder: ["^@site/(.*)$", "^[./]"],
  importOrderSeparation: true,
};
