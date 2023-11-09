import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "CyanPrint",
  tagline: "Next-Generation Language-Agnostic Templating Platform",
  favicon: "img/favicon.ico",

  url: "https://docs.cyanprint.dev",
  baseUrl: "/",

  organizationName: "AtomiCloud",
  projectName: "sulfone.silicon",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/AtomiCloud/sulfone.silicon/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        pages: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/cyanprint-social-card.png",

    navbar: {
      title: "CyanPrint",
      logo: {
        alt: "CyanPrint Logo",
        src: "img/cyanprint.svg",
        href: "https://cyanprint.dev",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "devSideBar",
          position: "left",
          label: "Developer",
        },
        {
          type: "docSidebar",
          sidebarId: "contribSideBar",
          position: "left",
          label: "Contributor",
        },
        {
          href: "https://github.com/AtomiCloud/sulfone.silicon",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} CyanPrint, AtomiCloud. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
