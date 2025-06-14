# 🛠️ Installation

### Install Script

You can install Carch permanently on your system using our install script:

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carchinstall)"
```

You can also use these options:

::: code-group

```sh [Update]
# Update existing installation
bash -c "$(curl -fsSL chalisehari.com.np/carchinstall)" -- update
```

```sh [Uninstall]
# Uninstall Carch
bash -c "$(curl -fsSL chalisehari.com.np/carchinstall)" -- uninstall
```
:::

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch is available on [crates.io](https://crates.io/).

You can install it using Cargo with the [carch](https://crates.io/crates/carch) crate.


```sh
cargo install carch
```

Once that's done, you can run it by typing `carch` in your terminal.

:::tip :bulb: TIP
If `carch` isn’t recognized, add Cargo's bin directory to your PATH:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ Manual Installation

#### 📜 Dependencies

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```
:::

#### 🔧 Clone and Build

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
```

Now you can run `carch` in your terminal. If you encounter any issues on Fedora, they might be dependency related. The installation should work smoothly, but if any problems arise, please open an [issue](https://github.com/harilvfs/carch/issues) or email me at **harilvfs@chalisehari.com.np**.
