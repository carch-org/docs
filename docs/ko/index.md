---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: Linux 시스템 설정을 자동화하세요
  actions:
    - theme: brand
      text: 시작하기 ⇢
      link: /ko/getting-started/introduction
    - theme: alt
      text: "설치 📥"
      link: /ko/getting-started/installation
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash 스크립트, 쉬운 삶
    details: 설정은 여전히 간단한 Bash 스크립트로 구동됩니다 - 빠르고 깔끔하며 불필요한 것이 없습니다.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: 다중 배포판 지원
    details: Arch, Fedora, openSUSE 등의 배포판을 지원합니다.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: 모든 것을 조정하세요
    details: 애플리케이션 구성 및 기타 시스템 설정을 설정하는 많은 스크립트가 포함되어 있습니다.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: 여전히 개발 중
    details: Rust 기반 TUI와 더 많은 업데이트가 예정되어 있어 지속적으로 개선하고 있습니다.
---

<div class="preview-container">
<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
/>
</div>

<div align="center">

### 사용 방법은?

시스템에 설치하지 않고도 Carch를 직접 실행하거나 사용할 수 있습니다.

Carch를 사용해보려면 다음 버전 중 하나를 선택하세요:

</div>

> [!IMPORTANT]
> **이 명령들을 실행하기 전에 배포판에 `curl`이 설치되어 있는지 확인하세요.**
>
> ***또한 Carch는 현재*** **Arch, Fedora, openSUSE 기반 배포판만 지원한다는 점을 유의하세요**. ***다른 배포판에서는 작동하지 않습니다.***

#### ⭐ 안정 버전 [ 최신 ]

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- --stable
```

#### 🧪 개발 버전 [ 프리릴리스 ]

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
    문서 소스 코드
  </a>
</footer>
