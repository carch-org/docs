---
layout: home
pageClass: home-page

hero:
  name: Carch 
  text: "Automatisiere dein Linux-Setup"
  image:
    src: /carch.png
    alt: Linux-Logo
    style: "width: 200px; height: auto;"
  tagline: Ein einfaches Skript, das die Einrichtung deines Linux-Systems erleichtert 🧩
  actions:
    - theme: brand
      text: Moment mal, Carch? Was ist das? 
      link: /de/getting-started/introduction
    - theme: alt
      text: Installation 
      link: /de/getting-started/installation
    - theme: alt
      text: GitHub ↗
      link: https://github.com/harilvfs/carch
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash-Skripte, einfaches Leben
    details: Die Einrichtung erfolgt weiterhin über einfache Bash-Skripte – schnell, sauber und ohne Schnickschnack.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=100&id=ZbBhBW0N2q3D&format=png&color=000000" alt="fedora"/>
    title: Fedora-kompatibel
    details: Unterstützt sowohl Fedora- als auch Arch-basierte Systeme mit individuellen Anpassungen.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: Alles anpassbar
    details: Enthält viele Skripte zur Einrichtung von DWM, Hyprland und anderen Umgebungen.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: Noch in Arbeit
    details: Aktive Weiterentwicklung – jetzt mit Rust-basiertem TUI und weiteren Updates.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch Vorschau"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### Wie benutzt man es?

Du kannst Carch direkt ausführen oder verwenden, ohne es auf deinem System zu installieren.

Wähle eine der folgenden Versionen, um Carch auszuprobieren:

</div>

> [!IMPORTANT]
> **Stelle sicher, dass `curl` auf deinem System installiert ist, bevor du diese Befehle ausführst.**
>
> ***Beachte auch, dass Carch derzeit nur für*** **Arch- und Fedora-basierte Distributionen** ***verfügbar ist. Es funktioniert nicht mit anderen Distributionen.***

#### ⭐ Stabile Version

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carch)"
```

#### 🧪 Entwickler-Version

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
