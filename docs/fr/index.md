---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: Automatisez la configuration de votre système Linux
  actions:
    - theme: brand
      text: Commencer ⇢
      link: /fr/getting-started/introduction
    - theme: alt
      text: "Installer 📥"
      link: /fr/getting-started/installation
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Scripts Bash, vie facile
    details: La configuration fonctionne toujours avec des scripts Bash simples - rapide, propre et sans fioritures.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: Support multi-distributions
    details: Prend en charge les distributions comme Arch, Fedora et openSUSE.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: Ajustez tout
    details: Inclut de nombreux scripts pour configurer DWM, Hyprland et d'autres paramètres système.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: Encore en développement
    details: Améliore activement les choses avec une TUI basée sur Rust et d'autres mises à jour à venir.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### Comment utiliser ?

Vous pouvez exécuter ou utiliser Carch directement sans l'installer sur votre système.

Choisissez l'une des versions suivantes pour essayer Carch :

</div>

> [!IMPORTANT]
> **Assurez-vous d'avoir `curl` installé dans votre distribution avant d'exécuter ces commandes.**
>
> ***Notez également que Carch ne prend actuellement en charge que*** **les distributions basées sur Arch, Fedora et openSUSE**. ***Il ne fonctionnera pas sur d'autres distributions.***

#### ⭐ Version stable

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 Version de développement

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
  Code source de documentation <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-brand-2); text-decoration: none;">carch-org/docs</a>
</footer>