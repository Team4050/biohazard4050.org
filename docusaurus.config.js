// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/* eslint-disable */
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FRC Team 4050 - Biohazard",
  tagline: "FIRST Robotics Competition team, Biohazard 4050",
  url: "https://biohazard4050.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo-color.svg",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "Biohazard 4050",
        logo: {
          src: "img/svg/logo-color.svg",
        },
        items: [
          {
            label: "About",
            to: "/about",
          },
          {
            label: "Sponsors",
            to: "/sponsors",
          },
          {
            label: "Team",
            to: "/team",
          },
          {
            label: "Robots",
            to: "/robots",
          },
          {
            label: "Get Involved",
            to: "https://scstem.org/get-involved",
            position: "right",
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} FRC Team Biohazard 4050.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // gtag: {
        //   trackingID: "G-3TPD3DLYBR",
        // },
        sitemap: {
          changefreq: "monthly",
          priority: 0.5,
          ignorePatterns: ["/tags/**", "/team/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@docusaurus/plugin-ideal-image"),
      { disableInDev: false },
    ],
    async function tailwind(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
