---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: Automate Your Linux System Setup
  actions:
    - theme: brand
      text: Getting Started ⇢
      link: /getting-started/introduction
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash Scripts, Easy Life
    details: Setup is still powered by simple Bash scripts fast, clean, and no fluff.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: Multi-distro Support
    details: Supports distros like Arch, Fedora, and openSUSE.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: Tweak All the Things
    details: Includes a bunch of scripts to set up DWM, Hyprland, and other System Settings.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: Still Cooking
    details: Actively improving stuff now with a Rust-powered TUI and more updates coming.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### How to use?

You can run or use Carch directly without installing it on your system.

Choose one of the following version to try Carch:

</div>

> [!IMPORTANT]
> **Make sure you have `curl` installed in your distro before running these commands.**
>
> ***Also note that Carch currently supports only*** **Arch, Fedora, and openSUSE-based distros**. ***It will not work on other distros.***

#### ⭐ Stable Version

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 Dev Version

```sh 
bash -c "$(curl -fsSL chalisehari.com.np/carchdev)"
```

<!--

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/harilvfs.png',
    name: 'Hari Chalise',
    title: 'Dev',
    links: [
      { icon: 'github', link: 'https://github.com/harilvfs' },
      { icon: 'twitter', link: 'https://twitter.com/harilvfs' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/chalisehari.com.np' },
      { icon: 'mastodon', link: 'https://mastodon.social/@harilvfs' },
      { icon: 'reddit', link: 'https://reddit.com/u/aayush-le' },
      { icon: 'discord', link: 'https://discord.com/invite/8NJWstnUHd' },
      { icon: 'telegram', link: 'https://t.me/carchx' },
    ]
  },
  ]
</script>

<div align="center">

<VPTeamMembers size="small" :members />

</div>

-->

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
