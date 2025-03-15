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
        text: "4.2.2",
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
    { text: "Installation", link: "/installation/cli" },
    { text: "Commands", link: "/installation/cmd" },
    { text: "Overview Scripts", link: "/scripts/scripts" },
    { text: "Roadmap", link: "/github/roadmap" },
    { text: "Contributing", link: "/github/contributing" },
    { text: "Code of Conduct", link: "/github/codeofconduct" },
    { text: "Inspiration", link: "/acknowledgment/inspiration" },
    { text: "Contributions", link: "/acknowledgment/contributors" },
    ],
    socialLinks: [
      { icon: "telegram", link: "https://t.me/carchx" },
      { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
      { icon: "reddit", link: "https://www.reddit.com/r/carch/" },
      { icon: "matrix", link: "https://matrix.to/#/#carch:matrix.org" },
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

