---
layout: home
pageClass: home-page
hero:
  name: Carch 
  text: "तपाईंको Linux सेटअप स्वचालित गर्नुहोस्"
  image:
    src: /carch.png
    alt: Linux logo
    style: "width: 200px; height: auto;"
  tagline: लिनक्स सिस्टम सेटअप स्वचालित गर्नको लागि सरल CLI उपकरण 🧩
  actions:
    - theme: brand
      text: पर्खनुहोस्, Carch? यो के हो? 
      link: /ne/getting-started/introduction
    - theme: alt
      text: इंस्टल गर्नुहोस् 
      link: /ne/getting-started/installation
    - theme: alt
      text: Repo (harilvfs/carch) ↗
      link: https://github.com/harilvfs/carch
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash स्क्रिप्टहरू, सजिलो जीवन
    details: सेटअप अझै पनि सरल Bash स्क्रिप्टहरूद्वारा संचालित छ छिटो, सफा, र कुनै फालतु चीज बिना।
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=100&id=ZbBhBW0N2q3D&format=png&color=000000" alt="fedora"/>
    title: Fedora मित्रवत्
    details: प्रत्येकको लागि कस्टम ट्वीकहरूसँग Fedora र Arch आधारित दुवै प्रणालीहरूलाई समर्थन गर्दछ।
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: सबै चीजहरू ट्वीक गर्नुहोस्
    details: DWM, Hyprland, र अन्य वातावरणहरू सेट गर्न धेरै स्क्रिप्टहरू समावेश गर्दछ।
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: अझै पकाउँदै
    details: सक्रिय रूपमा चीजहरू सुधार गर्दै अब Rust-संचालित TUI र थप अपडेटहरू आउँदैछन्।
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--vp-c-purple-3), var(--vp-c-brand-3));

  --vp-home-hero-image-filter: blur(44px);
}

:root {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 55%);
}

.dark {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 85%);
}

.home-page {
  background: var(--vp-c-bg);

  .VPFeature a {
    font-weight: bold;
    color: var(--vp-c-brand-2);
  }

  .VPFooter {
    background-color: transparent !important;
    border: none;
  }

  .VPNavBar:not(.top) {
    background-color: transparent !important;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);

    div.divider {
      display: none;
    }
  }
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

<footer style="text-align:center; font-size: 0.75rem; color: var(--vp-c-text-muted, #888); margin-top: 3rem;">
  Docs Source Code <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-brand-2); text-decoration: none;">carch-org/carch</a>
</footer>
