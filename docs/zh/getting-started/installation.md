# 🛠️ 安装

:::warning
我们只支持基于 Arch、Fedora 和 openSUSE 的发行版，所以目前在其他发行版上无法运行。
:::

在您的终端中执行以下命令：

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

安装完成后，运行 `carch setup` 安装 shell 补全、man 手册和桌面文件。

### 📦 Cargo Binstall

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch 在 [crates.io](https://crates.io/) 上可用，并支持 [cargo-binstall](https://github.com/cargo-bins/cargo-binstall) 用于预编译二进制文件：

```sh
cargo binstall carch-cli
```

### 📦 Cargo Install

你也可以使用 Cargo 来安装它：

```sh
cargo install carch-cli
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
sudo pacman -S --noconfirm rust git wget curl cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust git wget curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust git wget curl cargo 
```

:::

#### 🔧 克隆和构建

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
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
