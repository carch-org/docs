# 🛠️ Installation

### 📦 Package

We use `PKGBUILD` for Arch Linux and `.rpm` files for Fedora and openSUSE.

::: code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch ]
git clone https://github.com/carch-org/pkgs ~/pkgs
cd ~/pkgs/carch-bin
makepkg -si
```

```sh [<i class="devicon-fedora-plain"></i> Fedora ]
sudo dnf install -y $(curl -sL https://api.github.com/repos/harilvfs/carch/releases/latest | grep browser_download_url | grep '\.rpm"' | cut -d '"' -f 4 | tee /tmp/carch.rpm)
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y $(curl -sL https://api.github.com/repos/harilvfs/carch/releases/latest | grep browser_download_url | grep '\.rpm"' | cut -d '"' -f 4 | tee /tmp/carch.rpm)
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

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust man man-pages git wget google-noto-fonts google-noto-coloremoji-fonts jetbrains-mono-fonts  symbols-only-nerd-fonts bash-completion curl fzf glibc gcc  

:::

#### 🔧 Clone and Build

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/
```

### 🔄 Update & Uninstall

::: code-group

```sh [ Update ]
carch --update
```

```sh [ Uninstall ]
carch --uninstall
```

:::
