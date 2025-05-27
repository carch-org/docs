// .vitepress/config.ts

const sidebar = (lang = "", override = {}) => {
  const prefix = lang ? `/${lang}` : "";

  return [
    {
      text: override["getting-started"] || "Getting Started",
      collapsed: false,
      items: [
        {
          text: override["getting-started/introduction"] || "Introduction",
          link: `${prefix}/getting-started/introduction`,
        },
        {
          text: override["getting-started/installation"] || "Installation",
          link: `${prefix}/getting-started/installation`,
        },
      ],
    },
    {
      text: override["reference"] || "Reference",
      collapsed: false,
      items: [
        {
          text: override["reference/commands"] || "Commands",
          link: `${prefix}/reference/commands`,
        },
        {
          text: override["reference/overview-scripts"] || "Overview Scripts",
          link: `${prefix}/reference/overview-scripts`,
        },
      ],
    },
    {
      text: override["project"] || "Project",
      collapsed: false,
      items: [
        {
          text: override["project/roadmap"] || "Roadmap",
          link: `${prefix}/project/roadmap`,
        },
        {
          text: override["project/contributing"] || "Contributing",
          link: `${prefix}/project/contributing`,
        },
        {
          text: override["project/codeofconduct"] || "Code of Conduct",
          link: `${prefix}/project/codeofconduct`,
        },
        {
          text: override["project/inspiration"] || "Inspiration",
          link: `${prefix}/project/inspiration`,
        },
        {
          text: override["project/contributors"] || "Contributions",
          link: `${prefix}/project/contributors`,
        },
      ],
    },
  ];
};

const nav = (lang = "", override = {}) => {
  let guidePath = "/getting-started/introduction";
  if (lang) guidePath = `/${lang}/getting-started/introduction`;

  return [
    { text: override.home || "Home", link: lang ? `/${lang}/` : "/" },
    { text: override.guide || "Guide", link: guidePath },
    {
      text: "4.4.7",
      items: [
        {
          text: override.changelog || "Changelog",
          link: "https://github.com/harilvfs/carch/blob/main/CHANGELOG.md",
        },
      ],
    },
  ];
};

export default {
  title: "Carch",
  description: "Documentation website of Carch",
  lastUpdated: true,
  cleanUrls: true,
  base: "/",

  head: [["link", { rel: "icon", href: "/carch.png" }]],

  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "Carch",
      description: "Documentation website of CArch",

      themeConfig: {
        siteTitle: "Carch",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "Edit this page on GitHub",
        },

        nav: nav("", {}),
        sidebar: sidebar("", {}),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "gmail", link: "mailto:harilvfs@chalisehari.com.np" },
        ],

        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2025 Hari Chalise",
        },

        returnToTopLabel: "Go to Top",
        sidebarMenuLabel: "Menu",
      },
    },

    es: {
      label: "Español",
      lang: "es-ES",
      title: "Carch",
      description: "Sitio web de documentación de Carch",

      themeConfig: {
        siteTitle: "Carch",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        langMenuLabel: "Idiomas",
        returnToTopLabel: "Volver arriba",
        sidebarMenuLabel: "Menú",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "Editar esta página en GitHub",
        },

        nav: nav("es", {
          home: "Inicio",
          guide: "Guía",
          changelog: "Registro de cambios",
        }),

        sidebar: sidebar("es", {
          "getting-started": "Comenzar",
          "getting-started/introduction": "Introducción",
          "getting-started/installation": "Instalación",
          "reference": "Referencia",
          "reference/commands": "Comandos",
          "reference/overview-scripts": "Resumen de Scripts",
          "project": "Proyecto",
          "project/roadmap": "Hoja de ruta",
          "project/contributing": "Contribuir",
          "project/codeofconduct": "Código de conducta",
          "project/inspiration": "Inspiración",
          "project/contributors": "Contribuidores",
        }),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "gmail", link: "mailto:harilvfs@chalisehari.com.np" },
        ],

        footer: {
          message: "Publicado bajo la Licencia MIT.",
          copyright: "Derechos de autor © 2025 Hari Chalise",
        },
      },
    },

    np: {
      label: "नेपाली",
      lang: "ne-NP",
      title: "सी-आर्च",
      description: "सी-आर्चको कागजात वेबसाइट",

      themeConfig: {
        siteTitle: "सी-आर्च",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        langMenuLabel: "भाषाहरू",
        returnToTopLabel: "माथि जानुहोस्",
        sidebarMenuLabel: "मेनु",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "GitHub मा यो पृष्ठ सम्पादन गर्नुहोस्",
        },

        nav: nav("np", {
          home: "घर",
          guide: "गाइड",
          changelog: "परिवर्तन लग",
        }),

        sidebar: sidebar("np", {
          "getting-started": "सुरुवात गर्नुहोस्",
          "getting-started/introduction": "परिचय",
          "getting-started/installation": "स्थापना",
          "reference": "सन्दर्भ",
          "reference/commands": "आदेशहरू",
          "reference/overview-scripts": "स्क्रिप्ट सिंहावलोकन",
          "project": "परियोजना",
          "project/roadmap": "रोडम्याप",
          "project/contributing": "योगदान",
          "project/codeofconduct": "आचार संहिता",
          "project/inspiration": "प्रेरणा",
          "project/contributors": "योगदानकर्ताहरू",
        }),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "gmail", link: "mailto:harilvfs@chalisehari.com.np" },
        ],

        footer: {
          message: "MIT लाइसेन्स अन्तर्गत जारी।",
          copyright: "प्रतिलिपि अधिकार © २०२५ हरि चालिसे",
        },
      },
    },

    hi: {
      label: "हिन्दी",
      lang: "hi-IN",
      title: "सी-आर्च",
      description: "सी-आर्च की दस्तावेज़ वेबसाइट",

      themeConfig: {
        siteTitle: "सी-आर्च",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        langMenuLabel: "भाषाएं",
        returnToTopLabel: "ऊपर जाएं",
        sidebarMenuLabel: "मेनू",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "GitHub पर इस पृष्ठ को संपादित करें",
        },

        nav: nav("hi", {
          home: "होम",
          guide: "गाइड",
          changelog: "चेंजलॉग",
        }),

        sidebar: sidebar("hi", {
          "getting-started": "शुरुआत करें",
          "getting-started/introduction": "परिचय",
          "getting-started/installation": "इंस्टॉलेशन",
          "reference": "संदर्भ",
          "reference/commands": "कमांड्स",
          "reference/overview-scripts": "स्क्रिप्ट्स का अवलोकन",
          "project": "परियोजना",
          "project/roadmap": "रोडमैप",
          "project/contributing": "योगदान",
          "project/codeofconduct": "आचार संहिता",
          "project/inspiration": "प्रेरणा",
          "project/contributors": "योगदानकर्ता",
        }),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "gmail", link: "mailto:harilvfs@chalisehari.com.np" },
        ],

        footer: {
          message: "MIT लाइसेंस के तहत जारी।",
          copyright: "कॉपीराइट © 2025 हरि चालिसे",
        },
      },
    },

    zh: {
      label: "中文",
      lang: "zh-CN",
      title: "Carch",
      description: "Carch 的文档网站",

      themeConfig: {
        siteTitle: "Carch",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        langMenuLabel: "语言",
        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "在 GitHub 上编辑此页面",
        },

        nav: nav("zh", {
          home: "主页",
          guide: "指南",
          changelog: "更新日志",
        }),

        sidebar: sidebar("zh", {
          "getting-started": "快速开始",
          "getting-started/introduction": "介绍",
          "getting-started/installation": "安装",
          "reference": "参考",
          "reference/commands": "命令",
          "reference/overview-scripts": "脚本概览",
          "project": "项目",
          "project/roadmap": "路线图",
          "project/contributing": "贡献",
          "project/codeofconduct": "行为准则",
          "project/inspiration": "灵感",
          "project/contributors": "贡献者",
        }),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "gmail", link: "mailto:harilvfs@chalisehari.com.np" },
        ],

        footer: {
          message: "基于 MIT 许可证发布。",
          copyright: "版权所有 © 2025 Hari Chalise",
        },
      },
    },
  },

  themeConfig: {
    logo: "/carch.png",
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "telegram", link: "https://t.me/carchx" },
      { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
      { icon: "gmail", link: "mailto:harilvfs@chalisehari.com.np" },
    ],
  },
};