---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null
    style: "width: 200px; height: auto;"
  tagline: 리눅스 시스템 설정을 자동화하는 간단한 CLI 도구 
  actions:
    - theme: brand
      text: 시작하기 ⇢
      link: /ko/getting-started/introduction
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash 스크립트, 쉬운 삶
    details: 설정은 여전히 간단한 Bash 스크립트로 구동됩니다. 빠르고, 깔끔하며, 불필요한 요소가 없습니다.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=100&id=ZbBhBW0N2q3D&format=png&color=000000" alt="fedora"/>
    title: Fedora 친화적
    details: 각각에 대한 맞춤 조정으로 Fedora와 Arch 기반 시스템을 모두 지원합니다.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: 모든 것을 조정
    details: DWM, Hyprland 및 기타 환경을 설정하는 다양한 스크립트를 포함합니다.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: 계속 개발 중
    details: Rust 기반 TUI와 더 많은 업데이트가 추가되면서 현재 활발히 개선 중입니다.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### 사용 방법은?

시스템에 설치하지 않고도 Carch를 직접 실행하거나 사용할 수 있습니다.

Carch를 시도해보려면 다음 버전 중 하나를 선택하세요:

</div>

> [!IMPORTANT]
> **이 명령어를 실행하기 전에 배포판에 `curl`이 설치되어 있는지 확인하세요.**
>
> ***또한 Carch는 현재*** **Arch 및 Fedora 기반 배포판에서만** ***사용할 수 있습니다. 다른 배포판에서는 작동하지 않습니다.***

#### ⭐ 안정 버전

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carch)"
```

#### 🧪 개발 버전

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
