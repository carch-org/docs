---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: तपाईंको Linux सिस्टम सेटअप स्वचालित गर्नुहोस्
  actions:
    - theme: brand
      text: सुरु गर्नुहोस् ⇢
      link: /ne/getting-started/introduction
    - theme: alt
      text: "इन्स्टल गर्नुहोस् 📥"
      link: /ne/getting-started/installation
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash स्क्रिप्टहरू, सजिलो जीवन
    details: सेटअप अझै पनि सरल Bash स्क्रिप्टहरूद्वारा चलाइएको छ - छिटो, सफा र फालतू कुरा बिना।
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: बहु-डिस्ट्रो समर्थन
    details: Arch, Fedora, र openSUSE जस्ता डिस्ट्रिब्यूशनहरूलाई समर्थन गर्छ।
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: सबै कुरा समायोजन गर्नुहोस्
    details: DWM, Hyprland र अन्य सिस्टम सेटिङहरू सेटअप गर्नका लागि धेरै स्क्रिप्टहरू समावेश गर्दछ।
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: अझै विकासमा
    details: Rust-शक्तिशाली TUI र आउँदै गरेका थप अपडेटहरूसँग सक्रिय रूपमा कुराहरू सुधार गर्दै।
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### कसरी प्रयोग गर्ने?

तपाईं आफ्नो सिस्टममा इन्स्टल नगरी सीधै Carch चलाउन वा प्रयोग गर्न सक्नुहुन्छ।

Carch प्रयोग गर्नका लागि निम्न मध्ये कुनै एक संस्करण छान्नुहोस्:

</div>

> [!IMPORTANT]
> **यी आदेशहरू चलाउनु अघि तपाईंको डिस्ट्रोमा `curl` इन्स्टल गरिएको छ भनेर निश्चित गर्नुहोस्।**
>
> ***यो पनि ध्यान दिनुहोस् कि Carch हाल मात्र*** **Arch, Fedora, र openSUSE-आधारित डिस्ट्रिब्यूशनहरूलाई समर्थन गर्छ**। ***यो अन्य डिस्ट्रिब्यूशनहरूमा काम गर्दैन।***

#### ⭐ स्थिर संस्करण

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 विकास संस्करण

```sh 
bash -c "$(curl -fsSL chalisehari.com.np/carchdev)"
```

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
  कागजात स्रोत कोड <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-brand-2); text-decoration: none;">carch-org/docs</a>
</footer>