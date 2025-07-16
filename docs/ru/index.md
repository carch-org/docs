---
layout: home
pageClass: home-page

hero:
  name: Carch 🧩
  image:
    alt: null 
    style: "width: 200px; height: auto;"
  tagline: Автоматизируйте настройку вашей Linux системы
  actions:
    - theme: brand
      text: Начать работу ⇢
      link: /ru/getting-started/introduction
features:
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=48&id=hFuGKe550WR3&format=png" alt="scripts"/>
    title: Bash скрипты, легкая жизнь
    details: Настройка по-прежнему осуществляется простыми Bash скриптами - быстро, чисто и без лишнего.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12969/12969897.png" alt="distro"/>
    title: Поддержка мульти-дистрибутивов
    details: Поддерживает дистрибутивы как Arch, Fedora и openSUSE.
  - icon: <img width="35" height="35" src="https://img.icons8.com/?size=80&id=mcrzTGVMglJn&format=png" alt="tweaks"/>
    title: Настройте все
    details: Включает множество скриптов для настройки DWM, Hyprland и других системных настроек.
  - icon: <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/12400/12400985.png" alt="development"/>
    title: Все еще в разработке
    details: Активно улучшает функционал с TUI на Rust и новыми обновлениями в будущем.
---

<img
  src="https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/.github/preview.gif"
  alt="Carch preview"
  style="max-width: 720px; width: 100%; border-radius: 12px; margin: 2rem auto; display: block;"
/>

<div align="center">

### Как использовать?

Вы можете запустить или использовать Carch напрямую без установки на вашу систему.

Выберите одну из следующих версий для использования Carch:

</div>

> [!IMPORTANT]
> **Убедитесь, что у вас установлен `curl` в вашем дистрибутиве перед выполнением этих команд.**
>
> ***Также обратите внимание, что Carch в настоящее время поддерживает только*** **дистрибутивы на базе Arch, Fedora и openSUSE**. ***Он не будет работать на других дистрибутивах.***

#### ⭐ Стабильная версия

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carch)"
```

#### 🧪 Версия для разработки

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
  Исходный код документации <a href="https://github.com/carch-org/docs" target="_blank" rel="noopener" style="color: var(--vp-c-brand-2); text-decoration: none;">carch-org/docs</a>
</footer>