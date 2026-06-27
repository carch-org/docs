# 🛠️ Instalación

:::warning
Solo soportamos distribuciones basadas en Arch, Fedora y openSUSE, por lo que no funcionará en otras distribuciones por ahora.
:::

Ejecuta el siguiente comando en tu terminal:

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

Una vez instalado, ejecuta `carch setup` para instalar las completaciones de shell, la página del manual y el archivo de escritorio.

### 📦 Cargo Binstall

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch está disponible en [crates.io](https://crates.io/) y soporta [cargo-binstall](https://github.com/cargo-bins/cargo-binstall) para binarios pre-compilados:

```sh
cargo binstall carch-cli
```

### 📦 Cargo Install

También puedes instalarlo usando Cargo:

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
sudo pacman -S --noconfirm rust git wget curl cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust git wget curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust git wget curl cargo 
```

:::

#### 🔧 Clonar y Construir

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
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

- **Actualizar**: Sigue el mismo método de instalación que usaste originalmente: cargo, cargo-binstall o script de instalación.
- **Desinstalar**: Seleccionar "cargo" también eliminará los binarios instalados por `cargo binstall`, ya que ambos instalan en `~/.cargo/bin/`.
