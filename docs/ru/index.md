---
layout: home
pageClass: home-page

hero:
  name: Carch 
  text: "Автоматизируйте установку Linux"
  image:
    src: /carch.png
    alt: Логотип Linux
    style: "width: 200px; height: auto;"
  tagline: Простой CLI-инструмент для автоматизации настройки системы Linux 🧩
  actions:
    - theme: brand
      text: Подожди, Carch? Что это?
      link: /ru/getting-started/introduction
    - theme: alt
      text: Установить
      link: /ru/getting-started/installation
    - theme: alt
      text: Repo (harilvfs/carch) ↗
      link: https://github.com/harilvfs/carch
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash скрипты — лёгкость жизни
    details: Настройка всё ещё работает на простых Bash-скриптах — быстро, чисто и без лишнего.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=100&id=ZbBhBW0N2q3D&format=png&color=000000" alt="fedora"/>
    title: Поддержка Fedora
    details: Поддерживает как Fedora, так и системы на базе Arch, с индивидуальными настройками для каждой.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: Настрой всё
    details: Включает множество скриптов для настройки DWM, Hyprland и других окружений.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: Ещё в разработке
    details: Активно улучшается — теперь с TUI на Rust и другими обновлениями.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Предпросмотр Carch"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### Как использовать?

Вы можете запустить или использовать Carch напрямую без установки на свою систему.

Выберите одну из следующих версий, чтобы попробовать Carch:

</div>

> [!IMPORTANT]
> **Убедитесь, что в вашей системе установлен `curl` перед запуском этих команд.**
>
> ***Также обратите внимание, что Carch в настоящее время работает только на*** **дистрибутивах на основе Arch и Fedora**. ***Он не будет работать на других дистрибутивах.***

#### ⭐ Стабильная версия

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carch)"
```

#### 🧪 Версия для разработчиков

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
