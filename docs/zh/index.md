---
layout: home
pageClass: home-page

hero:
  name: Carch 
  text: "自动化你的 Linux 设置"
  image:
    src: /carch.png
    alt: Linux 标志
    style: "width: 200px; height: auto;"
  tagline: 一个让 Linux 系统设置更简单的脚本 🧩
  actions:
    - theme: brand
      text: 等等，Carch 是什么？ 
      link: /zh/getting-started/introduction
    - theme: alt
      text: 安装 
      link: /zh/getting-started/installation
    - theme: alt
      text: Repo (harilvfs/carch) ↗
      link: https://github.com/harilvfs/carch
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash 脚本，轻松生活
    details: 设置仍然由简单的 Bash 脚本驱动，快速、干净、无废话。
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=100&id=ZbBhBW0N2q3D&format=png&color=000000" alt="fedora"/>
    title: Fedora 友好
    details: 支持 Fedora 和 Arch 系系统，并为每种系统定制优化。
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: 调整一切
    details: 包含用于设置 DWM、Hyprland 和其他环境的大量脚本。
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: 仍在开发中
    details: 正在积极改进，现在加入了基于 Rust 的 TUI，更多更新即将到来。
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch 预览"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### 如何使用？

你可以直接运行或使用 Carch，而无需在系统中安装它。

选择以下版本之一来尝试 Carch：

</div>

> [!IMPORTANT]
> ***Carch 目前仅支持*** **Arch 和 Fedora 系的发行版**，***在其他系统上无法运行。***

#### ⭐ 稳定版本

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carch)"
```

#### 🧪 开发版本

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
