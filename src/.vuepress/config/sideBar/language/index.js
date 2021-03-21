module.exports = [
  "learning",
  {
    title: "JavaScript",
    icon: "javascript",
    prefix: "js/",
    collapsable: false,
    children: [
      "",
      "intro/",
      "guide/",
      "types/",
      "operators/",
      "function/",
      "object/",
      "browser/",
      "es6/",
    ],
  },
  {
    title: "TypeScript",
    icon: "typescript",
    prefix: "typescript/",
    collapsable: false,
    children: ["", "intro/", "basics/", "advanced/"],
  },
  {
    title: "Python",
    icon: "python",
    prefix: "python/",
    collapsable: false,
    children: [
      "",
      "intro/",
      "guide/",
      "function/",
      "advance/",
      "functional-programming/",
    ],
  },
  "python/",
  "json/",
  "yaml/",
  {
    title: "Markdown",
    icon: "markdown",
    prefix: "markdown/",
    collapsable: false,
    children: ["", "intro", "block", "inline", "extend", "emoji/"],
  },
  "linter/",
];
