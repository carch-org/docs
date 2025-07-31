---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: Automatiza la configuración de tu sistema Linux
  actions:
    - theme: brand
      text: Empezar ⇢
      link: /es/getting-started/introduction
    - theme: alt
      text: "Instalar 📥"
      link: /es/getting-started/installation
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Scripts Bash, vida fácil
    details: La configuración aún funciona con scripts Bash simples rápido, limpio y sin complicaciones.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: Soporte multi-distribución
    details: Soporta distribuciones como Arch, Fedora y openSUSE.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: Ajusta todo
    details: Incluye muchos scripts para configurar DWM, Hyprland y otras configuraciones del sistema.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: Aún en desarrollo
    details: Mejorando activamente las cosas con una TUI basada en Rust y más actualizaciones por venir.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div class="theme-showcase">
  <h3 align="center">Temas disponibles</h3>
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

### ¿Cómo usar?

Puedes ejecutar o usar Carch directamente sin instalarlo en tu sistema.

Elige una de las siguientes versiones para probar Carch:

</div>

> [!IMPORTANT]
> **Asegúrate de tener `curl` instalado en tu distribución antes de ejecutar estos comandos.**
>
> ***También ten en cuenta que Carch actualmente sólo soporta*** **distribuciones basadas en Arch, Fedora y openSUSE**. ***No funcionará en otras distribuciones.***

#### ⭐ Versión Estable [ Última ]

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 Versión de Desarrollo [ Pre-lanzamiento ]

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
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-image {
  display: block;
  max-width: 100%;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
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

<footer style="text-align:center; font-size: 0.8rem; color: var(--vp-c-text-2); margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--vp-c-divider);">
  <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-text-2); text-decoration: none; transition: color 0.2s ease;">
    Código fuente de documentación
  </a>
</footer>
