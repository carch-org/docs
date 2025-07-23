# 🛠️ 安装

### 📦 软件包

我们为 Arch Linux 使用 `PKGBUILD`，为 Fedora 和 openSUSE 使用 `.rpm` 文件。

<div class="danger custom-block" style="padding-top: 8px">

我们只支持基于 Arch、Fedora 和 openSUSE 的发行版，所以目前在其他发行版上无法运行。

</div>

在您的终端中执行以下命令：

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carchinstall)"
```

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch 在 [crates.io](https://crates.io/) 上可用。

您可以通过 [carch](https://crates.io/crates/carch) crate 使用 Cargo 安装它。

```sh
cargo install carch
```

完成后，您可以在终端中输入 `carch` 来运行它。

:::tip :bulb: 提示
如果 `carch` 无法识别，请将 Cargo 的 bin 目录添加到您的 PATH：

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ 手动安装

#### 📜 依赖项

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

#### 🔧 克隆和构建

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/
```

### 🔄 更新和卸载

::: code-group

```sh [ 🔄 更新 ]
carch update
```

```sh [ 🗑️ 卸载 ]
carch uninstall
```

:::
