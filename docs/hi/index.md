---
layout: home
pageClass: home-page
hero:
  name: Carch 
  text: "अपने Linux सेटअप को स्वचालित करें"
  image:
    src: /carch.png
    alt: Linux logo
    style: "width: 200px; height: auto;"
  tagline: Linux सिस्टम सेटअप को आसान बनाने के लिए एक सरल स्क्रिप्ट 🧩
  actions:
    - theme: brand
      text: रुकिए, Carch? यह क्या है? 
      link: /hi/getting-started/introduction
    - theme: alt
      text: इंस्टॉल करें 
      link: /hi/getting-started/installation
    - theme: alt
      text: Repo (harilvfs/carch) ↗
      link: https://github.com/harilvfs/carch
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash स्क्रिप्ट्स, आसान जीवन
    details: सेटअप अभी भी सरल Bash स्क्रिप्ट्स द्वारा संचालित है तेज़, साफ़, और बिना किसी अनावश्यक चीज़ के।
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=100&id=ZbBhBW0N2q3D&format=png&color=000000" alt="fedora"/>
    title: Fedora के अनुकूल
    details: प्रत्येक के लिए कस्टम ट्वीक्स के साथ Fedora और Arch आधारित दोनों सिस्टम का समर्थन करता है।
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: सभी चीज़ों को ट्वीक करें
    details: DWM, Hyprland, और अन्य वातावरण सेट करने के लिए कई स्क्रिप्ट्स शामिल हैं।
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: अभी भी विकसित हो रहा है
    details: सक्रिय रूप से सुधार कर रहे हैं अब Rust संचालित TUI और आने वाले और भी अपडेट के साथ।
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
