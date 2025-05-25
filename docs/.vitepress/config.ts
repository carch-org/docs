// .vitepress/config.js

const sidebar = (lang = "", override = {}) => {
  const items = [
    { page: "getting-started/introduction", text: "Introduction" },
    { page: "getting-started/installation", text: "Installation" },
    { page: "reference/commands", text: "Commands" },
    { page: "reference/overview-scripts", text: "Overview Scripts" },
    { page: "project/roadmap", text: "Roadmap" },
    { page: "project/contributing", text: "Contributing" },
    { page: "project/codeofconduct", text: "Code of Conduct" },
    { page: "project/inspiration", text: "Inspiration" },
    { page: "project/contributors", text: "Contributions" },
  ];

  return items.map(item => {
    let path = "/";
    
    if (lang) {
      path += `${lang}/`;
    }
    
    if (item.page) {
      path += `${item.page}`;
    }

    return { 
      link: path, 
      text: override[item.page] || item.text 
    };
  });
};

const nav = (lang = "", override = {}) => {
  let guidePath = "/getting-started/introduction";
  
  if (lang) {
    guidePath = `/${lang}/getting-started/introduction`;
  }

  return [
    { text: override.home || "Home", link: lang ? `/${lang}/` : "/" },
    { text: override.guide || "Guide", link: guidePath },
    { 
      text: "4.4.7",
      items: [
        {
          text: override.changelog || 'Changelog',
          link: 'https://github.com/harilvfs/carch/blob/main/CHANGELOG.md'
        },
      ],
    },
  ];
};

export default {
  title: 'Carch',
  description: 'Documentation website of Carch',
  lastUpdated: true,
  cleanUrls: true,
  base: '/',
  
  // Rewrites for different language folders
//  rewrites: {
//    "README.md": "index.md",
//    "np/README.md": "np/index.md", 
//    "hi/README.md": "hi/index.md",
//    ":lang/:path*": ":lang/:path*"
//  },

  head: [
    ["link", { rel: "icon", href: "/carch.png" }],
  ],

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
        
        returnToTopLabel: 'Go to Top',
        sidebarMenuLabel: 'Menu',
      }
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
          changelog: "परिवर्तन लग"
        }),
        
        sidebar: sidebar("np", {
          "getting-started/introduction": "परिचय",
          "getting-started/installation": "स्थापना",
          "reference/commands": "आदेशहरू",
          "reference/overview-scripts": "स्क्रिप्ट सिंहावलोकन",
          "project/roadmap": "रोडम्याप",
          "project/contributing": "योगदान",
          "project/codeofconduct": "आचार संहिता",
          "project/inspiration": "प्रेरणा",
          "project/contributors": "योगदानकर्ताहरू"
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
        
      }
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
          changelog: "चेंजलॉग"
        }),
        
        sidebar: sidebar("hi", {
          "getting-started/introduction": "परिचय",
          "getting-started/installation": "इंस्टॉलेशन",
          "reference/commands": "कमांड्स",
          "reference/overview-scripts": "स्क्रिप्ट्स का अवलोकन",
          "project/roadmap": "रोडमैप",
          "project/contributing": "योगदान",
          "project/codeofconduct": "आचार संहिता",
          "project/inspiration": "प्रेरणा",
          "project/contributors": "योगदानकर्ता"
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

      }
    },
  },

  themeConfig: {
    logo: "/carch.png",
  search: {
    provider: "local"
  },
    socialLinks: [
      { icon: "telegram", link: "https://t.me/carchx" },
      { icon: "discord", link: "https://discord.com/invite/8NJWstnUHd" },
      { icon: "gmail", link: "mailto:harilvfs@chalisehari.com.np" },
    ],
  }
};
