# 🛠️ 安装

### 安装脚本

您可以使用我们的安装脚本将 Carch 永久安装到您的系统上：

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)"
```

您也可以使用这些选项：

::: code-group

```sh [更新]
# 更新现有安装
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --update
```

```sh [卸载]
# 卸载 Carch
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --uninstall
```
:::

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch 可在 [crates.io](https://crates.io/) 上获得。

您可以使用 Cargo 和 [carch](https://crates.io/crates/carch) crate 来安装它。

```sh
cargo install carch
```

完成后，您可以在终端中输入 `carch` 来运行它。

:::tip :bulb: 提示
如果无法识别 `carch`，请将 Cargo 的 bin 目录添加到您的 PATH：

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ 手动安装

#### 📜 依赖项

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
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

现在您可以在终端中运行 `carch`。如果您在 Fedora 上遇到任何问题，可能与依赖项有关。安装应该顺利进行，但如果出现任何问题，请打开一个 [issue](https://github.com/harilvfs/carch/issues) 或发送邮件至 **harilvfs@chalisehari.com.np**。