# 🖥️ CLI Commands  

Carch now supports CLI commands! Use `carch` with the following options:  

:::code-group

```sh [⚙️ CLI]
carch --help

```

```sh [📜 Preview]
Usage: carch [OPTIONS]

A tool for automating Arch Linux setups.

Options:
  --help, -h              📖 Show this help message and exit.
  --version, -v           🔢 Show the program version.
  --gen-config            🛠️ Generate a default configuration file in ~/.config/carch/carch.conf.
  --config <conf dir>     📂 Use a specific configuration file to load selected scripts.
  -c                      ⚙️ Use the default configuration file to load selected scripts.
  --run-script <name>, -r ▶️ Run the specified script from /usr/share/scripts.
  --list-scripts, -l      📋 List all available scripts in /usr/share/scripts.
  --search, -s            🔎 Search for scripts by keyword.
  --update                🔄 Update Carch using the latest script.
  --check-update          📡 Check if a new version of Carch is available.
  --uninstall             🗑️ Uninstall Carch and remove all associated files.

```
:::

### 🔧 Command Breakdown

- `--help, -h` 📖 *Show this help message and exit.*
- `--version, -v` 🔢 *Show the program version.*
- `--gen-config` 🛠️ *Generate a default configuration file in `~/.config/carch/carch.conf`.*
- `--config <conf dir>` 📂 *Use a specific configuration file to load selected scripts.*
- `-c` ⚙️ *Use the default configuration file to load selected scripts.*
- `--run-script <name>, -r` ▶️ *Run the specified script from `/usr/share/scripts`.*
- `--list-scripts, -l` 📋 *List all available scripts in `/usr/share/scripts`.*
- `--search, -s` 🔎 *Search for scripts by keyword.*  
- `--update` 🔄 *Update Carch using the latest script.*
- `--check-update` 📡 *Check if a new version of Carch is available.*  
- `--uninstall` 🗑️ *Uninstall Carch and remove all associated files.*

### 📑 Example Configuration

::: code-group

```sh [🛠️ Conf]
# Carch Conf File Example
# List the script names (without .sh extension) you want to include in the menu.
# Example:
Alacritty
Kitty
Packages
```

```sh [💡 Usage]
carch --config /path/to/carch.conf
```
