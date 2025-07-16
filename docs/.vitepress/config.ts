// .vitepress/config.ts

const sidebar = (lang = "", override = {}) => {
  const prefix = lang ? `/${lang}` : "";

  return [
    {
      text: override["getting-started"] || "Getting Started",
//      collapsed: false,
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
//      collapsed: false,
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
//      collapsed: false,
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
  let contributingPath = "/project/contributing";
  if (lang) guidePath = `/${lang}/getting-started/introduction`;
  if (lang) contributingPath = `/${lang}/project/contributing`;

  return [
    { text: override.home || "Home", link: lang ? `/${lang}/` : "/" },
    { text: override.guide || "Guide", link: guidePath },
    {
      text: "5.2.3",
      items: [
        {
          text: override.changelog || "Changelog",
          link: "https://github.com/harilvfs/carch/blob/main/CHANGELOG.md",
        },
        { text: override.contributing || "Contributing", link: contributingPath },
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
          { icon: "github", link: "https://github.com/harilvfs/carch" },
        ],

        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2025 Hari Chalise",
        },

        returnToTopLabel: "Go to Top",
        sidebarMenuLabel: "Menu",
      },
    },

    ar: {
      label: "العربية",
      lang: "ar",
      title: "Carch",
      description: "موقع توثيق كارتش",

      themeConfig: {
        siteTitle: "كارتش",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        langMenuLabel: "اللغات",
        returnToTopLabel: "العودة إلى الأعلى",
        sidebarMenuLabel: "القائمة",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "حرر هذه الصفحة على GitHub",
        },

        nav: nav("ar", {
          home: "الرئيسية",
          guide: "الدليل",
          changelog: "سجل التغييرات",
          contributing: "المساهمة",
        }),

        sidebar: sidebar("ar", {
          "getting-started": "البدء",
          "getting-started/introduction": "مقدمة",
          "getting-started/installation": "التثبيت",
          "reference": "المرجع",
          "reference/commands": "الأوامر",
          "reference/overview-scripts": "نظرة عامة على السكربتات",
          "project": "المشروع",
          "project/roadmap": "خارطة الطريق",
          "project/contributing": "المساهمة",
          "project/codeofconduct": "مدونة السلوك",
          "project/inspiration": "الإلهام",
          "project/contributors": "المساهمون",
        }),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "github", link: "https://github.com/harilvfs/carch" },
        ],

        footer: {
          message: "تم الإصدار بموجب ترخيص MIT.",
          copyright: "حقوق النشر © 2025 هاري تشاليسي",
        },
      },
    },

    de: {
      label: "Deutsch",
      lang: "de-DE",
      title: "Carch",
      description: "Dokumentationswebsite von Carch",

      themeConfig: {
        siteTitle: "Carch",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        langMenuLabel: "Sprachen",
        returnToTopLabel: "Nach oben",
        sidebarMenuLabel: "Menü",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "Diese Seite auf GitHub bearbeiten",
        },

        nav: nav("de", {
          home: "Startseite",
          guide: "Anleitung",
          changelog: "Änderungsprotokoll",
          contributing: "Mitwirken",
        }),

        sidebar: sidebar("de", {
          "getting-started": "Erste Schritte",
          "getting-started/introduction": "Einführung",
          "getting-started/installation": "Installation",
          "reference": "Referenz",
          "reference/commands": "Befehle",
          "reference/overview-scripts": "Skriptübersicht",
          "project": "Projekt",
          "project/roadmap": "Fahrplan",
          "project/contributing": "Mitwirken",
          "project/codeofconduct": "Verhaltenskodex",
          "project/inspiration": "Inspiration",
          "project/contributors": "Mitwirkende",
        }),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "github", link: "https://github.com/harilvfs/carch" },
        ],

        footer: {
          message: "Veröffentlicht unter der MIT-Lizenz.",
          copyright: "Copyright © 2025 Hari Chalise",
        },
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
          contributing: "Contribuir",
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
          { icon: "github", link: "https://github.com/harilvfs/carch" },
        ],

        footer: {
          message: "Publicado bajo la Licencia MIT.",
          copyright: "Derechos de autor © 2025 Hari Chalise",
        },
      },
    },

    fr: {
      label: "Français",
      lang: "fr-FR",
      title: "Carch",
      description: "Site de documentation de Carch",

      themeConfig: {
        siteTitle: "Carch",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        langMenuLabel: "Langues",
        returnToTopLabel: "Retour en haut",
        sidebarMenuLabel: "Menu",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "Modifier cette page sur GitHub",
        },

        nav: nav("fr", {
          home: "Accueil",
          guide: "Guide",
          changelog: "Historique",
          contributing: "Contribuer",
        }),

        sidebar: sidebar("fr", {
          "getting-started": "Commencer",
          "getting-started/introduction": "Introduction",
          "getting-started/installation": "Installation",
          "reference": "Référence",
          "reference/commands": "Commandes",
          "reference/overview-scripts": "Aperçu des scripts",
          "project": "Projet",
          "project/roadmap": "Feuille de route",
          "project/contributing": "Contribuer",
          "project/codeofconduct": "Code de conduite",
          "project/inspiration": "Inspiration",
          "project/contributors": "Contributeurs",
        }),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "github", link: "https://github.com/harilvfs/carch" },
        ],

        footer: {
          message: "Publié sous licence MIT.",
          copyright: "Copyright © 2025 Hari Chalise",
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
          contributing: "योगदान",
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
          { icon: "github", link: "https://github.com/harilvfs/carch" },
        ],

        footer: {
          message: "MIT लाइसेंस के तहत जारी।",
          copyright: "कॉपीराइट © 2025 हरि चालिसे",
        },
      },
    },

    ko: {
      label: "한국어",
      lang: "ko-KR",
      title: "카치",
      description: "Carch 문서 사이트",

      themeConfig: {
        siteTitle: "카치",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        langMenuLabel: "언어",
        returnToTopLabel: "맨 위로",
        sidebarMenuLabel: "메뉴",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "GitHub에서 이 페이지 편집하기",
        },

        nav: nav("ko", {
          home: "홈",
          guide: "가이드",
          changelog: "변경 로그", 
          contributing: "기여하기",
        }),

        sidebar: sidebar("ko", {
          "getting-started": "시작하기",
          "getting-started/introduction": "소개",
          "getting-started/installation": "설치",
          "reference": "레퍼런스",
          "reference/commands": "명령어",
          "reference/overview-scripts": "스크립트 개요",
          "project": "프로젝트",
          "project/roadmap": "로드맵",
          "project/contributing": "기여하기",
          "project/codeofconduct": "행동 강령",
          "project/inspiration": "영감",
          "project/contributors": "기여자",
        }),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "github", link: "https://github.com/harilvfs/carch" },
        ],

        footer: {
          message: "MIT 라이선스 하에 배포됨.",
          copyright: "저작권 © 2025 Hari Chalise",
        },
      },
    },

    ne: {
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

        nav: nav("ne", {
          home: "घर",
          guide: "गाइड",
          changelog: "परिवर्तन लग",
          contributing: "योगदान",
        }),

        sidebar: sidebar("ne", {
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
          { icon: "github", link: "https://github.com/harilvfs/carch" },
        ],

        footer: {
          message: "MIT लाइसेन्स अन्तर्गत जारी।",
          copyright: "प्रतिलिपि अधिकार © २०२५ हरि चालिसे",
        },
      },
    },

    ru: {
      label: "Русский",
      lang: "ru-RU",
      title: "Carch",
      description: "Сайт документации по Carch",

      themeConfig: {
        siteTitle: "Carch",
        logo: "/carch.png",
        outline: "deep",
        docsDir: "/docs",

        langMenuLabel: "Языки",
        returnToTopLabel: "Вернуться наверх",
        sidebarMenuLabel: "Меню",

        editLink: {
          pattern: "https://github.com/carch-org/docs/tree/main/docs/:path",
          text: "Редактировать эту страницу на GitHub",
        },

        nav: nav("ru", {
          home: "Главная",
          guide: "Руководство",
          changelog: "Журнал изменений",
          contributing: "Участие",
        }),

        sidebar: sidebar("ru", {
          "getting-started": "Начало работы",
          "getting-started/introduction": "Введение",
          "getting-started/installation": "Установка",
          "reference": "Справочник",
          "reference/commands": "Команды",
          "reference/overview-scripts": "Обзор скриптов",
          "project": "Проект",
          "project/roadmap": "План развития",
          "project/contributing": "Участие",
          "project/codeofconduct": "Кодекс поведения",
          "project/inspiration": "Вдохновение",
          "project/contributors": "Участники",
        }),

        socialLinks: [
          { icon: "telegram", link: "https://t.me/carchx" },
          { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
          { icon: "github", link: "https://github.com/harilvfs/carch" },
        ],

        footer: {
          message: "Выпущено под лицензией MIT.",
          copyright: "Авторские права © 2025 Hari Chalise",
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
          contributing: "贡献",
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
          { icon: "github", link: "https://github.com/harilvfs/carch" },
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
      { icon: "github", link: "https://github.com/harilvfs/carch" },
    ],
  },
};
