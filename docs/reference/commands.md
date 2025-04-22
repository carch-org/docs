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
## if you have install carch via cargo
Exec=/home/username/.cargo/bin/carch
## if you have install carch via install script
Exec=/usr/local/bin/carch 
Icon=carch
Type=Application
Terminal=true
Categories=Utility;
EOF
```

> [!IMPORTANT]
> ⚠️ Don't forget to replace `username` with your actual Linux username!

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

## Man Pages

If you want to install the man page manually for Carch, you can do it with:

```sh
sudo mkdir -p /usr/local/share/man/man1
sudo curl -o /usr/local/share/man/man1/carch.1 https://raw.githubusercontent.com/harilvfs/carch/main/man/carch.1
```

After installation, update the man database:

```sh
sudo mandb
```

Now you can read the Carch manual with:

```sh
man carch
```
