# 🛠️ Installation

:::warning
We only support Arch, Fedora, and openSUSE-based distros, so it will not work on other distros for now.
:::

Execute the following command in your terminal:

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

Once installed, run `carch setup` to install shell completions, man page, and desktop file.

### 📦 Cargo Binstall

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch is available on [crates.io](https://crates.io/) and supports [cargo-binstall](https://github.com/cargo-bins/cargo-binstall) for pre-built binaries:

```sh
cargo binstall carch-cli
```

### 📦 Cargo Install

You can also compile from source using Cargo:

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

- **Update**: Follows the same installation method you originally used: cargo, cargo-binstall, or install script.
- **Uninstall**: Selecting "cargo" will also remove binaries installed by `cargo binstall`, since both install to `~/.cargo/bin/`.
