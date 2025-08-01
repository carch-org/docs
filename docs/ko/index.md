---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: Linux 시스템 설정을 자동화하세요
  actions:
    - theme: brand
      text: 시작하기 ⇢
      link: /ko/getting-started/introduction
    - theme: alt
      text: "설치 📥"
      link: /ko/getting-started/installation
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash 스크립트, 쉬운 삶
    details: 설정은 여전히 간단한 Bash 스크립트로 구동됩니다 - 빠르고 깔끔하며 불필요한 것이 없습니다.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: 다중 배포판 지원
    details: Arch, Fedora, openSUSE 등의 배포판을 지원합니다.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: 모든 것을 조정하세요
    details: DWM, Hyprland 및 기타 시스템 설정을 설정하는 많은 스크립트가 포함되어 있습니다.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: 여전히 개발 중
    details: Rust 기반 TUI와 더 많은 업데이트가 예정되어 있어 지속적으로 개선하고 있습니다.
---

<div class="preview-container">
<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
/>
</div>

<div class="theme-showcase">
  <h3 align="center">사용 가능한 테마</h3>
  <div class="theme-grid">
    <div v-for="theme in themes" :key="theme.name" class="theme-item" @click="openLightbox(theme)">
      <img :src="theme.image" :alt="theme.name + ' Theme Preview'">
      <div class="theme-overlay" :style="{ backgroundColor: theme.color + 'e6' }">
        <div>테마: {{ theme.name }}</div>
        <div style="font-size: 11px; font-weight: 400; margin-top: 4px;">(보려면 클릭)</div>
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

### 사용 방법은?

시스템에 설치하지 않고도 Carch를 직접 실행하거나 사용할 수 있습니다.

Carch를 사용해보려면 다음 버전 중 하나를 선택하세요:

</div>

> [!IMPORTANT]
> **이 명령들을 실행하기 전에 배포판에 `curl`이 설치되어 있는지 확인하세요.**
>
> ***또한 Carch는 현재*** **Arch, Fedora, openSUSE 기반 배포판만 지원한다는 점을 유의하세요**. ***다른 배포판에서는 작동하지 않습니다.***

#### ⭐ 안정 버전 [ 최신 ]

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 개발 버전 [ 프리릴리스 ]

```sh 
bash -c "$(curl -fsSL chalisehari.com.np/carchdev)"
```

<script setup>
import { ref } from 'vue'

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
    문서 소스 코드
  </a>
</footer>
