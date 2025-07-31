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

<div class="theme-showcase">
  <h3 align="center">उपलब्ध थिमहरू</h3>
  <div class="theme-grid">
    <div v-for="theme in themes" :key="theme.name" class="theme-item" @click="openLightbox(theme)">
      <img :src="theme.image" :alt="theme.name + ' Theme Preview'">
    </div>
  </div>
</div>

<div v-if="isLightboxOpen" class="lightbox-overlay" @click="closeLightbox">
  <span class="close-button">&times;</span>
  <div class="lightbox-content">
    <img :src="currentImageSrc" class="lightbox-image" @click.stop>
  </div>
</div>

<div align="center">

### कसरी प्रयोग गर्ने?

तपाईं आफ्नो सिस्टममा इन्स्टल नगरी सीधै Carch चलाउन वा प्रयोग गर्न सक्नुहुन्छ।

Carch प्रयोग गर्नका लागि निम्न मध्ये कुनै एक संस्करण छान्नुहोस्:

</div>

> [!IMPORTANT]
> **यी आदेशहरू चलाउनु अघि तपाईंको डिस्ट्रोमा `curl` इन्स्टल गरिएको छ भनेर निश्चित गर्नुहोस्।**
>
> ***यो पनि ध्यान दिनुहोस् कि Carch हाल मात्र*** **Arch, Fedora, र openSUSE-आधारित डिस्ट्रिब्यूशनहरूलाई समर्थन गर्छ**। ***यो अन्य डिस्ट्रिब्यूशनहरूमा काम गर्दैन।***

#### ⭐ स्थिर संस्करण [ नवीनतम ]

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 विकास संस्करण [ पूर्व-रिलिज ]

```sh 
bash -c "$(curl -fsSL chalisehari.com.np/carchdev)"
```

<script setup>
import { ref } from 'vue'

const themes = [
  { name: 'Catppuccin Mocha', image: '/catppuccin-mocha.png' },
  { name: 'Dracula', image: '/dracula.png' },
  { name: 'Gruvbox', image: '/gruvbox.png' },
  { name: 'Nord', image: '/nord.png' },
  { name: 'Rose Pine', image: '/rose-pine.png' }
]

const isLightboxOpen = ref(false)
const currentImageSrc = ref('')

const openLightbox = (theme) => {
  isLightboxOpen.value = true
  currentImageSrc.value = theme.image
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  currentImageSrc.value = ''
}
</script>

<style>

.theme-showcase {
  margin: 4rem auto;
  padding: 2rem 0;
  max-width: 1024px;
}

.theme-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

@media (min-width: 768px) {
  .theme-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.theme-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  cursor: pointer;
}

.theme-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.theme-item img {
  width: 100%;
  height: auto;
  display: block;
}

.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--overlay-gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.lightbox-content {
  position: relative;
  max-width: 70vw;
  max-height: 80vh;
}

.lightbox-image {
  display: block;
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 30px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease;
  text-shadow: 0 0 8px rgba(0,0,0,0.5);
}

.close-button:hover {
  color: #ccc;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--vp-c-purple-3), var(--vp-c-brand-3));

  --vp-home-hero-image-filter: blur(44px);
}

:root {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 90%);
}

.dark {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 95%);
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

<footer style="text-align:center; font-size: 0.8rem; color: var(--vp-c-text-2); margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--vp-c-divider);">
  <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-text-2); text-decoration: none; transition: color 0.2s ease;">
    कागजात स्रोत कोड
  </a>
</footer>
