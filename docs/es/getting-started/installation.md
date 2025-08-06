# 🛠️ Instalación

### 📦 Paquete

Usamos `PKGBUILD` para Arch Linux y archivos `.rpm` para Fedora y openSUSE.

:::warning
Solo soportamos distribuciones basadas en Arch, Fedora y openSUSE, por lo que no funcionará en otras distribuciones por ahora.
:::

Ejecuta el siguiente comando en tu terminal:

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carchinstall)"
```

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch está disponible en [crates.io](https://crates.io/).

Puedes instalarlo usando Cargo:

```sh
cargo install carch-cli
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
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust man man-pages git wget google-noto-fonts google-noto-coloremoji-fonts jetbrains-mono-fonts  symbols-only-nerd-fonts bash-completion curl 
```

:::

#### 🔧 Clonar y Construir

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/
```

### 🔄 Actualizar y Desinstalar

::: code-group

```sh [ 🔄 Actualizar ]
carch update
```

```sh [ 🗑️ Desinstalar ]
carch uninstall
```

:::
