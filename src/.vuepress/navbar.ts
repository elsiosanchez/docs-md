import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "Nosotros",
    icon: "profile",
    prefix: "/about/",
    children: [
      { text: "Nosotros", icon: "software", link: "", activeMatch: "^/about/$" }
    ],
  },
  {
    text: "Producto",
    icon: "engine",
    prefix: "/product/",
    children: [
      { text: "Producto", icon: "engine", link: "", activeMatch: "^/product/$" }
    ],
  },
  {
    text: "Documentación",
    icon: "creative",
    prefix: "/docs/",
    children: [
      { text: "ADempiere Estándar", link: "", icon: "note", activeMatch: "^/docs/$" }
    ],
  },
  {
    text: "Comunidad",
    icon: "group",
    prefix: "/community/",
    children: [
      {
        text: "Comunidad",
        icon: "group",
        link: "",
        activeMatch: "^/community/$",
      },
    ],
  },
  {
    text: "Descargas",
    icon: "software",
    prefix: "/downloads/",
    children: [
      {
        text: "Descargas",
        icon: "software",
        link: "",
        activeMatch: "^/downloads/$",
      }
    ],
  },
]);

export const zhNavbarConfig = navbar([
  "/zh/",
  "/zh/about/",
  "/zh/product/",
  "/zh/community/",
  "/zh/support/",
  "/zh/docs/",
  "/zh/downloads/",
  "/zh/foundation/",
]);

export const esNavbarConfig = navbar([
  "/es/",
  "/es/about/",
  "/es/product/",
  "/es/community/",
  "/es/support/",
  "/es/docs/",
  "/es/downloads/",
  "/es/foundation/",
]);
