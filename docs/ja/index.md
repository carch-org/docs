---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: Linuxシステムセットアップを自動化
  actions:
    - theme: brand
      text: はじめに ⇢
      link: /ja/getting-started/introduction
    - theme: alt
      text: "インストール 📥"
      link: /ja/getting-started/installation
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bashスクリプト、シンプルライフ
    details: セットアップは今でもシンプルなBashスクリプトで動作 - 高速、クリーン、無駄なし。
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: マルチディストリビューション対応
    details: Arch、Fedora、openSUSEなどのディストリビューションをサポート。
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: すべてをカスタマイズ
    details: アプリケーションの設定やその他のシステム設定をセットアップするためのスクリプトが多数含まれています.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: 開発中
    details: Rustで構築されたTUIなど、現在も積極的に改良を進めています。
---

<div class="preview-container">
<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
/>
</div>

<div align="center">

### 使い方

Carchはシステムにインストールせずに直接実行できます。

以下のいずれかのバージョンを選んでCarchをお試しください：

</div>

> [!IMPORTANT]
> **これらのコマンドを実行する前に、お使いのディストリビューションに`curl`がインストールされていることを確認してください。**
>
> ***また、Carchは現在*** **Arch、Fedora、openSUSEベースのディストリビューションのみをサポート** ***しています。他のディストリビューションでは動作しません。***

#### ⭐ 安定版 [ 最新 ]

```sh
curl -fsSL chalisehari.com.np/carch | sh
```

#### 🧪 開発版 [ プレリリース ]

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
    ドキュメントソースコード
  </a>
</footer>