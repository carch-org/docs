---
layout: home
pageClass: home-page

hero:
  name: Carch 
  text: "Automatiza la Configuración de tu Linux"
  image:
    src: /carch.png
    alt: Logo de Linux
    style: "width: 200px; height: auto;"
  tagline: Una herramienta CLI sencilla para automatizar la configuración del sistema Linux 🧩
  actions:
    - theme: brand
      text: Espera, ¿Carch? ¿Qué es eso? 
      link: /es/getting-started/introduction
    - theme: alt
      text: Instalar 
      link: /es/getting-started/installation
    - theme: alt
      text: Repo (harilvfs/carch) ↗
      link: https://github.com/harilvfs/carch
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Scripts de Bash, Vida Fácil
    details: La configuración sigue siendo impulsada por scripts de Bash simples, rápidos, limpios y sin complicaciones.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=100&id=ZbBhBW0N2q3D&format=png&color=000000" alt="fedora"/>
    title: Amigable con Fedora
    details: Compatible con sistemas basados en Fedora y Arch con ajustes personalizados para cada uno.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: Ajusta Todas las Cosas
    details: Incluye un montón de scripts para configurar DWM, Hyprland y otros entornos.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: Aún en Desarrollo
    details: Mejorando activamente las cosas ahora con una TUI impulsada por Rust y más actualizaciones por venir.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Vista previa de Carch"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### ¿Cómo usar?

Puedes ejecutar o usar Carch directamente sin instalarlo en tu sistema.

Elige una de las siguientes versiones para probar Carch:

</div>

> [!IMPORTANT]
> **Asegúrate de tener `curl` instalado en tu distribución antes de ejecutar estos comandos.**
>
> ***También ten en cuenta que Carch actualmente solo es para*** **distribuciones basadas en Arch y Fedora**. ***Esto no funcionará en otras distribuciones.***

#### ⭐ Versión Estable

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carch)"
```

#### 🧪 Versión de Desarrollo

```sh 
bash -c "$(curl -fsSL https://chalisehari.com.np/carchdev)"
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
