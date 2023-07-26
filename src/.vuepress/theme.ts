import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, esNavbarConfig } from "./navbar";

export default hopeTheme({
  hostname: "https://docs-md.erpya.com",

  author: {
    name: "ERP Consultores y Asociados, C.A.",
    url: "https://erpya.com",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "https://github.com/erpcya/docs",

  repoDisplay: false,

  docsDir: "src",

  locales: {
    "/": {
      navbar: enNavbarConfig,

      blog: {
        description: "Documentación Oficial de ERP Consultores y Asociados, CA",
        intro: "/about/",
        medias: {
          Gmail: "mailto:info@erpya.com",
          GitHub: "https://github.com/erpcya",
          Discord: "https://discord.gg/UWcyn7DEzV",
          Twitter: "https://twitter.com/erpcya",
        },
      },
    },
  },

  displayFooter: true,
  copyright: "Copyright © 2022-present ERP Consultores y Asociados, C.A.",

  plugins: {
    blog: true,

    comment: {
      provider: "Waline",
      serverURL: "https://<to-be-defined>",
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icon/apple-touch-icon.png",
        statusBarColor: "white",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        name: "ERP Consultores y Asociados, C.A.",
        short_name: "ERPyA",
        description: "ERP Consultores y Asociados, C.A.",
        theme_color: "#5c92d1",
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Classification",
            short_name: "Classification",
            icons: [
              {
                src: "/assets/icon/category-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/category-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/category/",
            description: "Classification Group",
          },
          {
            name: "Label",
            short_name: "Label",
            icons: [
              {
                src: "/assets/icon/tag-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/tag-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/tag/",
            description: "Tag Grouping",
          },
          {
            name: "Timeline",
            short_name: "Timeline",
            icons: [
              {
                src: "/assets/icon/timeline-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/timeline-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/timeline/",
            description: "Timeline Article List",
          },
          {
            name: "Self Introduction",
            short_name: "Self Introduction",
            icons: [
              {
                src: "/assets/icon/about-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/about-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
            url: "/about/",
            description: "Self Introduction",
          },
        ],
      },
    },
  },
});
