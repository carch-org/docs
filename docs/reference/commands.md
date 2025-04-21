# 🖥️ CLI Commands  

Carch also supports CLI commands! Use `carch` with the following options:  

:::code-group

```sh [⚙️ CLI]
carch --help
```

:::

## 🔧 Command Breakdown

- `--help, -h` 📖 *Show this help message and exit.*
- `--version, -v` 🔢 *Show the program version.*
- `--list-scripts, -l` 📋 *List all available scripts in `./modules`.*
- `--no-preview` 🚫 *Run without displaying script previews in menus.*
- `--log` 📝 *Enable logging for the current session only.*
- `--update` 🔄 *Update Carch using the latest script.*
- `--check-update` 📡 *Check if a new version of Carch is available.*  
- `--uninstall` 🗑️ *Uninstall Carch and remove all associated files.*

## Shell Completions

Carch comes with tab-completion support for Bash, Zsh, and Fish. You can set it up manually by running one of these commands, depending on your shell:

:::code-group

```sh [Bash]
sudo curl -o /usr/share/bash-completion/completions/carch https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/completions/bash/carch
```

```sh [ Zsh ]
sudo curl -o /usr/share/zsh/site-functions/_carch https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/completions/zsh/_carch
```

```sh [ Fish ]
sudo curl -o /usr/share/fish/vendor_completions.d/carch.fish https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/completions/fish/carch.fish
```
:::

Once it's set up, you’ll get tab completion when typing Carch commands in your terminal.

## Desktop Entry

Want to launch Carch from your app launcher (like Rofi, dmenu, or your desktop menu)? You can create a shortcut for it like this:

```sh
cat << EOF | sudo tee /usr/share/applications/carch.desktop
[Desktop Entry]
Name=Carch
Comment=A Simple Script to Make Linux System Setups Easier
Exec=/home/username/.cargo/bin/carch
Icon=carch
Type=Application
Terminal=true
Categories=Utility;
EOF
```

> [!IMPORTANT]
> ⚠️ Don't forget to replace `username` with your actual Linux username!

Or just download the shortcut file directly:

```sh
sudo curl -o /usr/share/applications/carch.desktop https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/carch.desktop
```

## Icons

Carch comes with icons you can install to make it look nice in menus. Here’s a script that handles it for you:

```sh
#!/bin/bash

mkdir -p /tmp/carch-icons
cd /tmp/carch-icons

for size in 16 24 32 48 64 128 256; do
    echo "Downloading ${size}x${size} icon..."
    curl -s -o "carch_${size}.png" "https://raw.githubusercontent.com/harilvfs/carch/refs/heads/main/assets/icons/product_logo_${size}.png"
    
    sudo mkdir -p /usr/share/icons/hicolor/${size}x${size}/apps
    
    sudo install -Dm644 "carch_${size}.png" "/usr/share/icons/hicolor/${size}x${size}/apps/carch.png"
done

cd ..
rm -rf /tmp/carch-icons

sudo gtk-update-icon-cache -f -t /usr/share/icons/hicolor

echo "Carch icons have been installed successfully!"
```

Save this as `carch_icons.sh`, make it executable with 

```bash
chmod +x carch_icons.sh
```

Then run it with:

```bash
sudo ./carch_icons.sh
```

