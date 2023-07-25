import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, esNavbarConfig } from "./navbar";

export default hopeTheme({
  hostname: "https://docs-md.erpya.com",

  author: {
    name: "",
    url: "",
  },

  iconAssets: "",
  iconPrefix: "",

  logo: "",

  repo: "",

  repoDisplay: false,
  
  fullscreen: true,

  docsDir: "src",

  locales: {
    "/": {
      navbar: enNavbarConfig,

      blog: {}
    },
  },

  displayFooter: true,
  copyright: "Copyright ©",

  plugins: {
    blog: true,

    comment: {},

    feed: {
      atom: false,
      json: false,
      rss: false,
    },

    mdEnhance: {
      align: false,
      codetabs: false,
      demo: false,
      flowchart: false,
      footnote: false,
      imageMark: false,
      presentation: false,
      sub: false,
      sup: false,
      tex: false,
      vpre: false,
    },

    pwa: {
      favicon: "",
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {},
      msTile: {
        image: "",
        color: "#ffffff",
      },
      manifest: {
        name: "",
        short_name: "",
        description: ".",
        theme_color: "  ",
        icons: [],
        shortcuts: [],
      },
    },
  },
});
