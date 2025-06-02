### Prérequis

- `fzf` est requis pour l'interface TUI du script Carch.  
  Assurez-vous que `fzf` est installé avant d’utiliser Carch.

## 🛠️ Installation

### Script d'Installation

Vous pouvez installer Carch de manière permanente sur votre système en utilisant notre script d'installation :

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)"
```

Vous pouvez également utiliser ces options :

::: code-group

```sh [Mise à jour]
# Mettre à jour l'installation existante
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --update
```

```sh [Désinstaller]
# Désinstaller Carch
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --uninstall
```
:::

### 📦 Crate Cargo

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch est disponible sur [crates.io](https://crates.io/).

Vous pouvez l'installer en utilisant Cargo avec le crate [carch](https://crates.io/crates/carch).

```sh
cargo install carch
```

Une fois cela fait, vous pouvez l'exécuter en tapant `carch` dans votre terminal.

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
:::

#### 🔧 Cloner et Compiler

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/ 
```

Maintenant vous pouvez exécuter `carch` dans votre terminal. Si vous rencontrez des problèmes sur Fedora, ils pourraient être liés aux dépendances. L'installation devrait fonctionner sans problème, mais si des problèmes surviennent, veuillez ouvrir une [issue](https://github.com/harilvfs/carch/issues) ou m'envoyer un email à **harilvfs@chalisehari.com.np**.
