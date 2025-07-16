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

<div align="center">

### ¿Cómo usar?

Puedes ejecutar o usar Carch directamente sin instalarlo en tu sistema.

Elige una de las siguientes versiones para probar Carch:

</div>

> [!IMPORTANT]
> **Asegúrate de tener `curl` instalado en tu distribución antes de ejecutar estos comandos.**
>
> ***También ten en cuenta que Carch actualmente sólo soporta*** **distribuciones basadas en Arch, Fedora y openSUSE**. ***No funcionará en otras distribuciones.***

#### ⭐ Versión estable

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 Versión de desarrollo

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
  Código fuente de documentación <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-brand-2); text-decoration: none;">carch-org/docs</a>
</footer>