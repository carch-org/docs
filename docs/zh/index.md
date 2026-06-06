---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: 自动化您的Linux系统设置
  actions:
    - theme: brand
      text: 开始使用 ⇢
      link: /zh/getting-started/introduction
    - theme: alt
      text: "安装 📥"
      link: /zh/getting-started/installation
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash脚本，轻松生活
    details: 设置仍然由简单的Bash脚本驱动 - 快速、干净、无冗余。
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: 多发行版支持
    details: 支持Arch、Fedora和openSUSE等发行版。
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: 调整所有内容
    details: 包含大量脚本，用于设置应用程序配置和其他系统设置.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: 仍在开发中
    details: 正在积极改进功能，现在有基于Rust的TUI，更多更新即将到来。
---

<div class="preview-container">
<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
/>
</div>

<div class="theme-showcase">
  <h3 align="center">可用主题</h3>
  <div class="theme-grid">
    <div v-for="theme in themes" :key="theme.name" class="theme-item" @click="openLightbox(theme)">
      <img :src="theme.image" :alt="theme.name + ' Theme Preview'">
      <div class="theme-overlay" :style="{ backgroundColor: theme.color + 'e6' }">
        <div>主题: {{ theme.name }}</div>
        <div style="font-size: 11px; font-weight: 400; margin-top: 4px;">(点击查看)</div>
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

### 如何使用？

您可以直接运行或使用Carch，无需在系统上安装。

选择以下版本之一来试用Carch：

</div>

> [!IMPORTANT]
> **在运行这些命令之前，请确保您的发行版中已安装`curl`。**
>
> ***另外请注意，Carch目前仅支持*** **基于Arch、Fedora和openSUSE的发行版**。***它不会在其他发行版上工作。***

#### ⭐ 稳定版本 [ 最新 ]

```sh
curl -fsSL chalisehari.com.np/carch | sh
```

#### 🧪 开发版本 [ 预发布 ]

```sh 
curl -fsSL chalisehari.com.np/carch | sh -s -- --dev
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
    文档源代码
  </a>
</footer>
