// .vitepress/config.js
export default {
  title: 'Carch',
  description: 'Documentation website of carch',
//  base: "/docs/",
  lastUpdated: true,

  head: [
        ["link", { rel: "icon", href: "/carch.png" }],
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
        text: "4.3.7",
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
    { text: "Installation", link: "/getting-started/installation" },
    { text: "Commands", link: "/reference/commands" },
    { text: "Overview Scripts", link: "/reference/overview-scripts" },
    { text: "Roadmap", link: "/project/roadmap" },
    { text: "Contributing", link: "/project/contributing" },
    { text: "Code of Conduct", link: "/project/codeofconduct" },
    { text: "Inspiration", link: "/project/inspiration" },
    { text: "Contributions", link: "/project/contributors" },
    ],
    socialLinks: [
      { icon: "telegram", link: "https://t.me/carchx" },
      { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
      {icon: "gmail", link: "mailto:harilvfs@chalisehari.com.np"},
   ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 Hari Chalise",
    },
    search: {
      provider: "local",
      },
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
    },
};

