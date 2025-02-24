# Installation
<img src="https://img.icons8.com/?size=80&id=v8LYQxpvZ4xX&format=png" width="60" />

> [!CAUTION]
> I do not guarantee that Carch will work on Arch-based* or Fedora-based* distros. Use it on such distros at your own risk, as I do not officially support them.
> 
> However, Carch will work fine on the mainline distributions, like Arch Linux and Fedora.

**To install Carch, execute the following command in your terminal:**

> [!INFO]
> **Make sure to install `curl` before running this command:** **`sudo pacman -S curl`** or **`sudo dnf install curl -y`**  
>
> **Also, check the `make` and `less` packages (for Arch only).**

:::code-group


```sh [<i class="devicon-archlinux-plain"></i> Arch]
bash <(curl -L https://chalisehari.com.np/arch)
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
bash <(curl -L https://chalisehari.com.np/fedora)
```
:::tip :bulb: TIP
You don't need to run the installation script every time. You can run it once, and then simply type carch in your terminal whenever you want to automatically execute the Carch script.
<br><br>
If the installation command fails, you can try running
<br>
`curl -fsSL https://chalisehari.com.np/arch | sh`

or

`curl -fsSL https://chalisehari.com.np/fedora | sh`
:::
