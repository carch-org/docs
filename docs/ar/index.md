---
layout: home
pageClass: home-page

hero:
  name: Carch 
  text: "أتمتة إعداد نظام لينكس الخاص بك"
  image:
    src: /carch.png
    alt: شعار لينكس
    style: "width: 200px; height: auto;"
  tagline: أداة CLI بسيطة لأتمتة إعداد نظام Linux 🧩
  actions:
    - theme: brand
      text: مهلاً، ما هو Carch؟ 
      link: /ar/getting-started/introduction
    - theme: alt
      text: تثبيت 
      link: /ar/getting-started/installation
    - theme: alt
      text: Repo (harilvfs/carch) ↗
      link: https://github.com/harilvfs/carch
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: سكربتات Bash، حياة أسهل
    details: الإعداد يتم باستخدام سكربتات Bash البسيطة — سريعة، نظيفة، وخالية من التعقيدات.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=100&id=ZbBhBW0N2q3D&format=png&color=000000" alt="fedora"/>
    title: متوافق مع Fedora
    details: يدعم أنظمة Fedora و Arch مع تخصيصات مخصصة لكلٍ منهما.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: خصّص كل شيء
    details: يتضمن مجموعة من السكربتات لإعداد DWM و Hyprland وبيئات أخرى.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: ما زال قيد التطوير
    details: يتم تطويره بنشاط الآن مع TUI مدعوم بلغة Rust والمزيد من التحديثات قريباً.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="عرض Carch"
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
