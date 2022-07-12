const { description } = require("../../package");

module.exports = {
  title: "Huff Language",
  description: description,
  //homepage: "http://docs.huff.sh/",

  head: [
    ["meta", { name: "theme-color", content: "#c70202" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  theme: "default-prefers-color-scheme",
  themeConfig: {
    overrideTheme: "dark",
    docsDir: "/",
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/get-started/overview/" },
      { text: "Tutorials", link: "/tutorial/overview/" },
      { text: "Resources", link: "/resources/" },
      { text: "Contribute", link: "/contribute/overview/" },
    ],
    sidebarDepth: 10,
    sidebar: {
      "/get-started/": [
        {
          title: "Get Started",
          collapsable: false,
          children: [
            "/get-started/overview/",
            "/get-started/project-quickstart/",
            "/get-started/cli/"
          ],
        },
      ],
      "/tutorial/": [
        {
          title: "Tutorials",
          collapsable: false,
          children: [
            "/tutorial/overview/",
            "/tutorial/setup/",
            "/tutorial/evm-basics/",
            "/tutorial/project-template/",
          ],
        },
      ],
      "/resources/": [
        {
          title: "Resources",
          collapsable: false,
        },
      ],
      "/contribute/": [
        {
          title: "Contribute",
          collapsable: false,
          children: [
            "/contribute/overview/",
          ],
        },
      ],
    },
    smoothScroll: true,
  },
};