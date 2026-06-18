# Дорожная карта проекта Carch 
<img src="https://img.icons8.com/?size=80&id=CBfO8TrnezXC&format=png" width="50" />

**Текущая фаза** *[ Продвижение разработки скриптов ]* <img src="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" width="20" /> 

*Проект сейчас находится на стадии разработки и сосредоточен на расширении и модульности скриптов для поддержки различных дистрибутивов.*

## Предстоящие функции и улучшения ✨

- **Расширение функциональности для различных дистрибутивов 🌐**
   - Добавить полную поддержку популярных дистрибутивов:
     - **Arch** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/arch.png" width="20" />
     - **Debian** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/debian.png" width="20" /> 
     - **Fedora** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/fedora.png" width="20" />
     - **openSUSE** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/opensuse.png" width="20" /> 
     - **Void** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/Void_Linux_logo.svg.png" width="20" /> 
   - Разработать специфичные для дистрибутивов скрипты настройки.

- **Улучшение стабильности скриптов 🔧**
   - Рефакторинг существующих скриптов для улучшения стабильности.
   - Реализовать обработку ошибок и логирование для лучшей отладки.

- **Реализация на Rust 🦀**
  - Создать единый исполняемый бинарный файл для Carch. 
  - Разработать TUI на базе Rust. 
  - Добавить дополнительные Rust-скрипты для расширенной функциональности. 

- **Скрипты настройки основной системы ⚙️**
   - Разработать удобные для новичков скрипты для настройки основной системы (например, управление пакетами, конфигурация пользователя).
   - Включить руководства и документацию для помощи новым пользователям.

- **Интегрировать TUI с запуском скриптов в стиле всплывающих окон:**  
  - Запускать скрипты внутри TUI, не выходя из неё, убрать старый стиль `fzf` и обеспечить более плавную работу.

## Контрольный список проекта Carch 
<img src="https://cdn-icons-png.flaticon.com/128/8090/8090840.png" width="30" />

- **Расширить поддержку популярных дистрибутивов:**

  - Arch <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/arch.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - Fedora <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/fedora.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - Debian <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" /> 
  - openSUSE <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch-docs/opensuse.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />  
  - Void <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **Рефакторинг скриптов для стабильности:**

  - Реализовать обработку ошибок <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - Добавить возможности логирования <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **Внедрить Rust:**

  - Разработать TUI (текстовый пользовательский интерфейс). <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - Создать единый исполняемый бинарный файл. <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - Добавить дополнительные Rust-скрипты для улучшения скриптовости. <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **Создать скрипты настройки основной системы:**
  
  - Конфигурация пользователя <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - Управление пакетами <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - Документация для новичков <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **Интегрировать TUI с запуском скриптов в стиле всплывающих окон:**  
  - Теперь скрипты работают внутри TUI, не выходя из неё, старый стиль `fzf` удалён для более плавного опыта. <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

## Временные рамки (предварительные) 📅

- **Q 2025**: Разработать TUI на Rust для улучшенного взаимодействия с пользователем. 🦀 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
- **Середина 2025/2026**: Рефакторинг существующих скриптов для стабильности и начало расширения поддержки дистрибутивов. (всё ещё в процессе) <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />