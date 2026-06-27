---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: Automatisiere dein Linux-System-Setup
  actions:
    - theme: brand
      text: Erste Schritte ⇢
      link: /de/getting-started/introduction
    - theme: alt
      text: "Installieren 📥"
      link: /de/getting-started/installation
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash-Skripte
    details: Setup wird immer noch von einfachen Bash-Skripten angetrieben, schnell und sauber.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: Multi-Distro-Support
    details: Unterstützt Distributionen wie Arch, Fedora und openSUSE.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: Stelle alles ein
    details: Enthält eine Reihe von Skripten zum Einrichten von Anwendungskonfigurationen und anderen Systemeinstellungen
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: Noch in Entwicklung
    details: Verbessert aktiv Sachen mit einem Rust-gestützten TUI und weitere Updates kommen.
---

<div class="preview-container">
<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
/>
</div>

<div align="center">

### Wie benutzt man es?

Du kannst Carch direkt ausf��hren oder verwenden, ohne es auf deinem System zu installieren.

Wähle eine der folgenden Versionen, um Carch auszuprobieren:

</div>

> [!IMPORTANT]
> **Stelle sicher, dass `curl` in deiner Distribution installiert ist, bevor du diese Befehle ausführst.**
>
> ***Beachte auch, dass Carch derzeit nur*** **Arch-, Fedora- und openSUSE-basierte Distributionen** ***unterstützt. Es wird nicht auf anderen Distributionen funktionieren.***

#### ⭐ Stabile Version [ Neueste ]

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- --stable
```

#### 🧪 Entwicklungsversion [ Vorabversion ]

```sh 
curl -fsSL chalisehari.com.np/carch | sh -s -- --dev
```

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

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--vp-c-purple-3), var(--vp-c-brand-3));

  --vp-home-hero-image-filter: blur(44px);
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
    Dokumentations-Quellcode
  </a>
</footer>
