# 🛠️ Installation

## Installationsskript

Sie können Carch dauerhaft auf Ihrem System mit unserem Installationsskript installieren:

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)"
```

Sie können auch diese Optionen verwenden:

::: code-group

```sh [Update]
# Bestehende Installation aktualisieren
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --update
```

```sh [Deinstallieren]
# Carch deinstallieren
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --uninstall
```
:::

## 📦 Cargo Crate

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch ist auf [crates.io](https://crates.io/) verfügbar.

Sie können es mit Cargo über die [carch](https://crates.io/crates/carch) Crate installieren.

Installieren Sie zuerst die Abhängigkeiten: 

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm fzf cargo rust
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install fzf cargo rust -y
```
:::

Installieren Sie nun Carch mit Cargo:

```sh
cargo install carch
```

Sobald das erledigt ist, können Sie es ausführen, indem Sie `carch` in Ihr Terminal eingeben.

:::tip :bulb: TIPP
Wenn `carch` nicht erkannt wird, fügen Sie Cargos bin-Verzeichnis zu Ihrem PATH hinzu:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

## 🏗️ Manuelle Installation

### 📜 Abhängigkeiten

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```
:::

### 🔧 Klonen und Erstellen

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd target/release/
sudo cp -r carch /usr/bin/ 
```

Jetzt können Sie `carch` in Ihrem Terminal ausführen. Wenn Sie auf Fedora Probleme haben, könnten diese abhängigkeitsbezogen sein. Die Installation sollte reibungslos funktionieren, aber falls Probleme auftreten, öffnen Sie bitte ein [Issue](https://github.com/harilvfs/carch/issues) oder senden Sie mir eine E-Mail an **harilvfs@chalisehari.com.np**.