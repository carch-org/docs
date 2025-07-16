# 🛠️ Installation

### 📦 Package

Nous utilisons `PKGBUILD` pour Arch Linux et les fichiers `.rpm` pour Fedora et openSUSE.

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

Carch est disponible sur [crates.io](https://crates.io/).

Vous pouvez l'installer en utilisant Cargo avec le crate [carch](https://crates.io/crates/carch).

```sh
cargo install carch
```

Une fois fait, vous pouvez l'exécuter en tapant `carch` dans votre terminal.

:::tip :bulb: ASTUCE
Si `carch` n'est pas reconnu, ajoutez le répertoire bin de Cargo à votre PATH :

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ Installation Manuelle

#### 📜 Dépendances

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust man man-pages git wget google-noto-fonts google-noto-coloremoji-fonts jetbrains-mono-fonts  symbols-only-nerd-fonts bash-completion curl fzf glibc gcc  
```

:::

#### 🔧 Cloner et Construire

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/
```

### 🔄 Mise à jour et Désinstallation

::: code-group

```sh [ Mise à jour ]
carch --update
```

```sh [ Désinstallation ]
carch --uninstall
```

:::