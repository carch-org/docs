# 🛠️ Installation

:::warning
We only support Arch, Fedora, and openSUSE-based distros, so it will not work on other distros for now.
:::

Execute the following command in your terminal:

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch is available on [crates.io](https://crates.io/).

You can install it using Cargo:

```sh
cargo install carch-cli
```

Once that's done, you can run it by typing `carch` in your terminal.

:::tip :bulb: TIP
If `carch` isn't recognized, add Cargo's bin directory to your PATH:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ Manual Installation

#### 📜 Dependencies

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

#### 🔧 Clone and Build

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
```

### 🔄 Update & Uninstall

::: code-group

```sh [🔄 Update ]
carch update
```

```sh [🗑️ Uninstall ]
carch uninstall
```

:::
