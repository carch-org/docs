---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null
    style: "width: 200px; height: auto;"
  tagline: Automatise la configuration de ton système Linux
  actions:
    - theme: brand
      text: Bien commencer ⇢
      link: /fr/getting-started/introduction
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Scripts Bash, vie facile
    details: La configuration repose toujours sur des scripts Bash simples, rapides, propres et sans fioritures.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=100&id=ZbBhBW0N2q3D&format=png&color=000000" alt="fedora"/>
    title: Compatible Fedora
    details: Supporte les systèmes Fedora et Arch avec des ajustements personnalisés pour chacun.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: Personnalisez tout
    details: Comprend plusieurs scripts pour configurer DWM, Hyprland et d'autres environnements.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: En développement
    details: Améliorations actives avec une interface TUI en Rust et d'autres mises à jour à venir.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Aperçu de Carch"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### Comment l’utiliser ?

Vous pouvez lancer ou utiliser Carch directement sans l’installer sur votre système.

Choisissez une des versions suivantes pour essayer Carch :

</div>

> [!IMPORTANT]
> **Assurez-vous d’avoir `curl` installé dans votre distribution avant d’exécuter ces commandes.**
>
> ***Notez aussi que Carch est actuellement uniquement pour*** **les distributions basées sur Arch et Fedora**. ***Cela ne fonctionnera pas sur d’autres distributions.***

#### ⭐ Version stable

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 Version développement

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
  Docs Source Code <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-brand-2); text-decoration: none;">carch-org/docs</a>
</footer>
