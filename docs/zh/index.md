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
    details: 包含大量脚本来设置DWM、Hyprland和其他系统设置。
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: 仍在开发中
    details: 正在积极改进功能，现在有基于Rust的TUI，更多更新即将到来。
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### 如何使用？

您可以直接运行或使用Carch，无需在系统上安装。

选择以下版本之一来试用Carch：

</div>

> [!IMPORTANT]
> **在运行这些命令之前，请确保您的发行版中已安装`curl`。**
>
> ***另外请注意，Carch目前仅支持*** **基于Arch、Fedora和openSUSE的发行版**。***它不会在其他发行版上工作。***

#### ⭐ 稳定版

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 开发版

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
  文档源代码 <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-brand-2); text-decoration: none;">carch-org/docs</a>
</footer>