# Installation
<img src="https://img.icons8.com/?size=80&id=v8LYQxpvZ4xX&format=png" width="60" />


## 🚀 Live Test

You can run or use Carch directly without installing it on your system.

> [!NOTE]
> Make sure to have the `gum`, `figlet`, and `fzf` packages already installed.
>
> **Arch**
> ```sh
> sudo pacman -S gum figlet fzf 
> ```
> **Fedora**
> ```sh
> sudo dnf install gum figlet fzf -y  
>```
> 


Simply execute the following command:

```sh
bash <(curl -L https://chalisehari.com.np/live)
```

:::tip :bulb: TIP

This will automatically fetch Carch from the latest release, download it to a temporary file, and remove it from your system once you exit.

✅ This makes it easier to try out Carch without installing it permanently! 🎯
:::

## Automated Installation Script

> [!CAUTION]
> If Carch fails on Arch-based or Fedora-based distros, please open an [issue](https://github.com/harilvfs/carch/issues).  
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
> **Make sure to install `curl` before running this command:** 
>
> **Arch**
> ```sh
> sudo pacman -S curl 
> ```
> **Fedora**
> ```sh
> sudo dnf install curl -y  
>```
> 
> **Also, check the `make` and `less` packages (for Arch only).**

:::tip :bulb: TIP
You don't need to run the installation script every time. You can run it once, and then simply type carch in your terminal whenever you want to automatically execute the Carch script.
:::

## Cargo Crate

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch is now available on [Cargo Crate](https://crates.io/crates/carch/4.1.5)!  

This is the simplest and best installation method for both Arch and Fedora if you have Rust installed.  

You'll need a few dependencies before installing: 

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm gum figlet curl rust wget cargo fzf
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install gum figlet curl rust wget cargo fzf
```
:::

Now, install Carch using Cargo:

```sh
cargo install carch
```

Once installed, simply type `carch` in your terminal to run it.

:::tip :bulb: TIP
If you already have Rust installed, you can install Carch directly with Cargo. Don't forget that **`fzf`**, **`gum`** and **`figlet`** are required dependencies, as they are the core of the Carch menu!
:::

## Manual Installation

### Dependencies

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S rust gum figlet man-db man git wget unzip noto-fonts-emoji ttf-joypixels cur bash bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono ttf-jetbrains-mono-nerd bat zsh fish cargo fzf
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust gum figlet man-db man git wget unzip google-noto-color-emoji-fonts google-noto-emoji-fonts bat jetbrains-mono-fonts-all bash-completion-devel zsh fish curl bat cargo fzf
```
:::

### Clone and Build

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd target/release/
sudo cp -r carch /usr/bin/ 
```

Now you can run `carch` in your terminal. If you encounter any issues on Fedora, they might be dependency-related. It should work fine, but if any problems arise, feel free to open an [issue](https://github.com/harilvfs/carch/issues) or email me at **harilvfs@chalisehari.com.np**.
