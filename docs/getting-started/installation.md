# 🛠️ Installation

## Live Test 🎯

You can run or use Carch directly without installing it on your system.

Run the following command in your terminal:

```sh
bash <(curl -L https://chalisehari.com.np/carch)
```

## ⚙️ Automated Installation Script

Carch mainly supports Arch and Fedora. 

To install, run:

```sh
bash <(curl -L https://chalisehari.com.np/carchinstall)
```

> [!INFO]
> 📢 **Make sure to install `curl` before running this command:** 
>
> **Arch**
> ```sh
> sudo pacman -S --noconfirm curl 
> ```
> **Fedora**
> ```sh
> sudo dnf install curl -y  
> ``` 

:::tip :bulb: TIP
📝 You don't need to run the installation script every time. After initial setup, simply type `carch` in your terminal to launch the application.
:::

## 📦 Cargo Crate

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch is available on [Cargo Crate](https://crates.io/crates/carch) too. 

For Arch/Fedora, it's easy if you have Rust.

First, install dependencies: 

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm figlet fzf
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install figlet fzf -y
```
:::

Now, install Carch using Cargo:

```sh
cargo install carch
```

Once installed, simply type `carch` in your terminal to run it.

:::tip :bulb: TIP
If `carch` doesn’t run, add Cargo’s bin directory to your PATH:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

## 🏗️ Manual Installation

### 📜 Dependencies

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust figlet man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust figlet man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```
:::

### 🔧 Clone and Build

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd target/release/
sudo cp -r carch /usr/bin/ 
```

Now you can run `carch` in your terminal. If you encounter any issues on Fedora, they might be dependency-related. The installation should work smoothly, but if any problems arise, please open an [issue](https://github.com/harilvfs/carch/issues) or email me at **harilvfs@chalisehari.com.np**.
