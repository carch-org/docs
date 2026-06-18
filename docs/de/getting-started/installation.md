# 🛠️ Installation

:::warning
Wir unterstützen nur Arch-, Fedora- und openSUSE-basierte Distributionen, daher funktioniert es derzeit nicht auf anderen Distributionen.
:::

Führen Sie den folgenden Befehl in Ihrem Terminal aus:

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
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
sudo pacman -S --noconfirm rust git wget curl cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust git wget curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust git wget curl cargo 
```

:::

#### 🔧 Klonen und Erstellen

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
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
