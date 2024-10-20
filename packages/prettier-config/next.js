const monorepoConfig = require("./base");
/** @type {import('prettier').Config} */
module.exports = {
  ...monorepoConfig,
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false,
};
