// .vitepress/config.js
export default {
  title: 'Carch',
  description: 'Documentation website of carch',
  base: "/docs/",
  lastUpdated: true,

  head: [
        ["link", { rel: "icon", href: "/docs/carch.png" }],
    ],

  themeConfig: {
    siteTitle: "Carch",
    logo: "carch.png",
    outline: "deep",
    docsDir: "/docs",
    editLink: {
      pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/getting-started/introduction" },
      { 
        text: "4.1.2",
        items: [
          {
          text: 'Changelog',
          link: 'https://github.com/harilvfs/carch/blob/main/CHANGELOG.md'
          },
        ],
      },
    ],
    sidebar: [
    { text: "Introduction", link: "/getting-started/introduction" },
    {
      text: "Installation",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "Terminal", link: "/installation/cli" },
        { text: "Commands", link: "/installation/cmd" },
        { text: "TUI", link: "/installation/tui" },
        { text: "PKG Build", link: "/installation/pkg" },
        ],
      },
    {
    text: "Utilities",
    collapsible: true,
    collapsed: false,
    items: [
      { text: "Overview Scripts", link: "/scripts/scripts" },
    ],
  },
  {
    text: "Collaboration",
    collapsible: true,
    collapsed: false,
    items: [
      { text: "Roadmap", link: "/github/roadmap" },
      { text: "Contributing", link: "/github/contributing" },
      { text: "Code of Conduct", link: "/github/codeofconduct" },
    ],
  },
  {
    text: "Acknowledgment",
    collapsible: true,
    collapsed: false,
    items: [
      { text: "Inspiration", link: "/acknowledgment/inspiration" },
      { text: "Contributions", link: "/acknowledgment/contributors" },
    ],
  },
],
    socialLinks: [
      { icon: "telegram", link: "https://t.me/carchx" },
      { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
      { icon: "reddit", link: "https://www.reddit.com/r/carch/" },
    ],
    footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright © 2025 Hari Chalise",
    },
    search: {
      provider: "local",
      },
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
    },
};

