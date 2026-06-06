# 🛠️ Installation

### 📦 Paket

Wir verwenden `PKGBUILD` für Arch Linux und `.rpm`-Dateien für Fedora und openSUSE.

:::warning
Wir unterstützen nur Arch-, Fedora- und openSUSE-basierte Distributionen, daher funktioniert es derzeit nicht auf anderen Distributionen.
:::

Führen Sie den folgenden Befehl in Ihrem Terminal aus:

```sh
curl -fsSL chalisehari.com.np/carchinstall | sh
```

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch ist auf [crates.io](https://crates.io/) verfügbar.

Du kannst es mit Cargo installieren:

```sh
cargo install carch-cli
```

Sobald das erledigt ist, können Sie es ausführen, indem Sie `carch` in Ihr Terminal eingeben.

:::tip :bulb: TIPP
Wenn `carch` nicht erkannt wird, fügen Sie Cargos bin-Verzeichnis zu Ihrem PATH hinzu:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ Manuelle Installation

#### 📜 Abhängigkeiten

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

#### 🔧 Klonen und Erstellen

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/
```

### 🔄 Aktualisieren & Deinstallieren

::: code-group

```sh [ 🔄 Aktualisieren ]
carch update
```

```sh [ 🗑️ Deinstallieren ]
carch uninstall
```

:::
