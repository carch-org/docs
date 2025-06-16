---
layout: home
pageClass: home-page
hero:
  name: Carch 🧩
  image:
    alt: null
    style: "width: 200px; height: auto;"
  tagline: आफ्नो लिनक्स सेटअप स्वचालित बनाउनुहोस्
  actions:
    - theme: brand
      text: सुरु गरौं ⇢
      link: /ne/getting-started/introduction
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

<div align="center">

### कसरी प्रयोग गर्ने?

तपाईं आफ्नो सिस्टममा स्थापना नगरी नै Carch प्रत्यक्ष रूपमा चलाउन वा प्रयोग गर्न सक्नुहुन्छ।

Carch प्रयास गर्नका लागि निम्न मध्ये एक संस्करण छान्नुहोस्:

</div>

> [!IMPORTANT]
> **कृपया यी कमाण्डहरू चलाउनु अघि तपाईंको डिस्ट्रोमा `curl` इन्स्टल गरिएको छ भनेर सुनिश्चित गर्नुहोस्।**
>
> ***साथै ध्यान दिनुहोस् कि Carch हाल*** **Arch र Fedora आधारित डिस्ट्रोहरूका लागि मात्र हो**। ***यो अन्य डिस्ट्रोहरूमा काम गर्ने छैन।***

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
  Docs Source Code <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-brand-2); text-decoration: none;">carch-org/carch</a>
</footer>
