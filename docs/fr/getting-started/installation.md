# 🛠️ Installation

:::warning
Nous ne supportons que les distributions basées sur Arch, Fedora et openSUSE, donc cela ne fonctionnera pas sur d'autres distributions pour le moment.
:::

Exécutez la commande suivante dans votre terminal :

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

Une fois installé, exécutez `carch setup` pour installer les complétions de shell, la page de manuel et le fichier bureau.

### 📦 Cargo Binstall

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch est disponible sur [crates.io](https://crates.io/) et supporte [cargo-binstall](https://github.com/cargo-bins/cargo-binstall) pour les binaires pré-compilés :

```sh
cargo binstall carch-cli
```

### 📦 Cargo Install

Vous pouvez aussi l'installer avec Cargo :

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
sudo pacman -S --noconfirm rust git wget curl cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust git wget curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust git wget curl cargo 
```

:::

#### 🔧 Cloner et Construire

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
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

- **Mise à jour** : Suit la même méthode d'installation que vous avez utilisée à l'origine : cargo, cargo-binstall ou script d'installation.
- **Désinstaller** : Sélectionner « cargo » supprimera également les binaires installés par `cargo binstall`, car les deux installent dans `~/.cargo/bin/`.
