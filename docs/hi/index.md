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
    - theme: alt
      text: "इंस्टॉल करें 📥"
      link: /hi/getting-started/installation
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

<div class="preview-container">
<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
/>
</div>

<div class="theme-showcase">
  <h3 align="center">उपलब्ध थीम</h3>
  <div class="theme-grid">
    <div v-for="theme in themes" :key="theme.name" class="theme-item" @click="openLightbox(theme)">
      <img :src="theme.image" :alt="theme.name + ' Theme Preview'">
      <div class="theme-overlay" :style="{ backgroundColor: theme.color + 'e6' }">
        <div>थीम: {{ theme.name }}</div>
        <div style="font-size: 11px; font-weight: 400; margin-top: 4px;">(देखने के लिए क्लिक करें)</div>
      </div>
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

### कैसे उपयोग करें?

आप Carch को अपने सिस्टम पर इंस्टॉल किए बिना सीधे चला या उपयोग कर सकते हैं।

Carch आज़माने के लिए निम्नलिखित में से कोई एक संस्करण चुनें:

</div>

> [!IMPORTANT]
> **इन कमांड्स को चलाने से पहले सुनिश्चित करें कि आपके डिस्ट्रो में `curl` इंस्टॉल है।**
>
> ***यह भी ध्यान दें कि Carch वर्तमान में केवल*** **Arch, Fedora और openSUSE-आधारित डिस्ट्रिब्यूशन का समर्थन करता है**। ***यह अन्य डिस्ट्रिब्यूशन पर काम नहीं करेगा।***

#### ⭐ स्थिर संस्करण [ नवीनतम ]

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 विकास संस्करण [ पूर्व-रिलीज़ ]

```sh 
bash -c "$(curl -fsSL chalisehari.com.np/carch)" -- --dev
```

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const themes = [
  { name: 'Catppuccin Mocha', image: '/catppuccin-mocha.png', color: '#74c7ec' },
  { name: 'Dracula', image: '/dracula.png', color: '#bd93f9' },
  { name: 'Gruvbox', image: '/gruvbox.png', color: '#fabd2f' },
  { name: 'Nord', image: '/nord.png', color: '#88c0d0' },
  { name: 'Rose Pine', image: '/rose-pine.png', color: '#c4a7e7' }
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

const handleKeydown = (e) => {
  if (e.key === 'Escape' && isLightboxOpen.value) {
    closeLightbox()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style>

.preview-container {
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  max-width: 720px;
  margin: 2rem auto;
  overflow: hidden;
}

.preview-container img {
  width: 100%;
  display: block;
}

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
  position: relative;
  border: 2px solid #fff;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  cursor: pointer;
  padding: 0.1rem;
}

.theme-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.theme-item:hover .theme-overlay {
  transform: translateX(0);
}

.theme-item:hover img {
  filter: blur(4px);
}

.theme-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1px;
  transition: filter 0.3s ease;
}

.theme-overlay {
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  color: #1e1e2e;
  padding: 0.5rem 1rem;
  border-radius: 0 50px 50px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 600;
  pointer-events: none;
  white-space: nowrap;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
    डॉक्यूमेंटेशन सोर्स कोड
  </a>
</footer>
