# 🛠️ Installation

## Live Test 🎯

You can run or use Carch directly without installing it on your system.

> [!NOTE]  
> ⚡ Make sure to have the `figlet` and `fzf` packages already installed.  
>
> **Arch**  
> ```sh 
> sudo pacman -S --noconfirm figlet fzf
> ```
> **Fedora**  
> ```sh 
> sudo dnf install figlet fzf -y
> ```

Choose one of the following commands to try Carch:

::: code-group

```sh [⭐ Stable Version]
bash <(curl -L https://chalisehari.com.np/carch)
```

```sh [🧪 Dev Version]
bash <(curl -L https://chalisehari.com.np/carchdev)
```
:::

## ⚙️ Automated Installation Script

> [!CAUTION]
> ⚠️ If Carch fails on Arch-based or Fedora-based distros, please open an [issue](https://github.com/harilvfs/carch/issues).  
> It shouldn't fail, but just in case, let us know!  


**To install Carch, execute the following command in your terminal:**

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
bash <(curl -L https://chalisehari.com.np/arch)
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
bash <(curl -L https://chalisehari.com.np/fedora)
```
:::

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
> 
> **Also, ensure the `make` and `less` packages are installed (for Arch only).**

:::tip :bulb: TIP
📝 You don't need to run the installation script every time. After initial setup, simply type `carch` in your terminal to launch the application.
:::

## 📦 Cargo Crate

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

🚀 Carch is now available on [Cargo Crate](https://crates.io/crates/carch)! 

This is the simplest and recommended installation method for both Arch and Fedora if you have Rust installed.  

You'll need a few dependencies before installing: 

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm figlet rust cargo fzf
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install figlet rust cargo fzf -y
```
:::

Now, install Carch using Cargo:

```sh
cargo install carch
```

Once installed, simply type `carch` in your terminal to run it.

:::tip :bulb: TIP
If typing `carch` doesn’t execute, make sure you have added the Cargo bin directory to your shell's PATH. Depending on whether you're using bash, zsh, or fish, add the following to your profile

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

## 🏗️ Manual Installation

### 📜 Dependencies

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust figlet man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust figlet man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf -y
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
