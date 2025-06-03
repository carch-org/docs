# 🛠️ Instalación

### Script de Instalación

Puedes instalar Carch permanentemente en tu sistema usando nuestro script de instalación:

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)"
```

También puedes usar estas opciones:

::: code-group

```sh [Actualizar]
# Actualizar instalación existente
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --update
```

```sh [Desinstalar]
# Desinstalar Carch
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --uninstall
```
:::

### 📦 Crate de Cargo

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch está disponible en [crates.io](https://crates.io/).

Puedes instalarlo usando Cargo con el crate [carch](https://crates.io/crates/carch).

```sh
cargo install carch
```

Una vez hecho esto, puedes ejecutarlo escribiendo `carch` en tu terminal.

:::tip :bulb: CONSEJO
Si `carch` no es reconocido, añade el directorio bin de Cargo a tu PATH:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ Instalación Manual

#### 📜 Dependencias

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```
:::

#### 🔧 Clonar y Compilar

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
```

Ahora puedes ejecutar `carch` en tu terminal. Si encuentras algún problema en Fedora, podría estar relacionado con dependencias. La instalación debería funcionar sin problemas, pero si surge algún problema, por favor abre un [issue](https://github.com/harilvfs/carch/issues) o envíame un email a **harilvfs@chalisehari.com.np**.
