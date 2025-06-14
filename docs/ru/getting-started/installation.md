# 🛠️ Установка

### Скрипт установки

Вы можете установить Carch на постоянной основе в вашу систему, используя наш скрипт установки:

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)"
```

Вы также можете использовать эти опции:

::: code-group

```sh [Обновление]
# Обновить существующую установку
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- update
```

```sh [Удаление]
# Удалить Carch
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- uninstall
```
:::

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch доступен на [crates.io](https://crates.io/).

Вы можете установить его с помощью Cargo, используя крейт [carch](https://crates.io/crates/carch).

```sh
cargo install carch
```

Как только это будет сделано, вы можете запустить его, набрав `carch` в терминале.

:::tip :bulb: СОВЕТ
Если `carch` не распознается, добавьте директорию bin Cargo в ваш PATH:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ Ручная установка

#### 📜 Зависимости

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```
:::

#### 🔧 Клонирование и сборка

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
```

Теперь вы можете запустить `carch` в терминале. Если у вас возникнут какие-либо проблемы на Fedora, они могут быть связаны с зависимостями. Установка должна пройти гладко, но если возникнут какие-либо проблемы, пожалуйста, откройте [issue](https://github.com/harilvfs/carch/issues) или напишите мне на **harilvfs@chalisehari.com.np**.