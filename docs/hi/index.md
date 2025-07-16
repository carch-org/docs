---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: अपने Linux सिस्टम सेटअप को स्वचालित करें
  actions:
    - theme: brand
      text: शुरुआत करें ⇢
      link: /hi/getting-started/introduction
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash स्क्रिप्ट्स, आसान जीवन
    details: सेटअप अभी भी सरल Bash स्क्रिप्ट्स द्वारा संचालित है - तेज़, साफ़ और बिना फालतू चीजों के।
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: मल्टी-डिस्ट्रो समर्थन
    details: Arch, Fedora और openSUSE जैसे डिस्ट्रिब्यूशन का समर्थन करता है।
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: सब कुछ समायोजित करें
    details: DWM, Hyprland और अन्य सिस्टम सेटिंग्स स्थापित करने के लिए कई स्क्रिप्ट्स शामिल हैं।
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: अभी भी विकास में
    details: Rust-संचालित TUI और आने वाले अधिक अपडेट के साथ सक्रिय रूप से चीजों में सुधार कर रहा है।
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### कैसे उपयोग करें?

आप Carch को अपने सिस्टम पर इंस्टॉल किए बिना सीधे चला या उपयोग कर सकते हैं।

Carch आज़माने के लिए निम्नलिखित में से कोई एक संस्करण चुनें:

</div>

> [!IMPORTANT]
> **इन कमांड्स को चलाने से पहले सुनिश्चित करें कि आपके डिस्ट्रो में `curl` इंस्टॉल है।**
>
> ***यह भी ध्यान दें कि Carch वर्तमान में केवल*** **Arch, Fedora और openSUSE-आधारित डिस्ट्रिब्यूशन का समर्थन करता है**। ***यह अन्य डिस्ट्रिब्यूशन पर काम नहीं करेगा।***

#### ⭐ स्थिर संस्करण

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 डेवलपमेंट संस्करण

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
  डॉक्यूमेंटेशन सोर्स कोड <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-brand-2); text-decoration: none;">carch-org/docs</a>
</footer>