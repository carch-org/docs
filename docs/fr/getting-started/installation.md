# 🛠️ Installation

### 📦 Package

Nous utilisons `PKGBUILD` pour Arch Linux et les fichiers `.rpm` pour Fedora et openSUSE.

<div class="danger custom-block" style="padding-top: 8px">

Nous ne supportons que les distributions basées sur Arch, Fedora et openSUSE, donc cela ne fonctionnera pas sur d'autres distributions pour le moment.

</div>

Exécutez la commande suivante dans votre terminal :

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carchinstall)"
```

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch est disponible sur [crates.io](https://crates.io/).

Vous pouvez l’installer avec Cargo :

```sh
cargo install carch-cli
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
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust man man-pages git wget google-noto-fonts google-noto-coloremoji-fonts jetbrains-mono-fonts  symbols-only-nerd-fonts bash-completion curl 
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

### 🔄 Mettre à jour et Désinstaller

::: code-group

```sh [ 🔄 Mettre à jour ]
carch update
```

```sh [ 🗑️ Désinstaller ]
carch uninstall
```

:::
