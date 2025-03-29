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
  --run-script <name>, -r ▶️ Run the specified script from ./modules.
  --list-scripts, -l      📋 List all available scripts in ./modules.
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
- `--run-script <name>, -r` ▶️ *Run the specified script from `./modules`.* 
- `--list-scripts, -l` 📋 *List all available scripts in `./modules`.*
- `--search, -s` 🔎 *Search for scripts by keyword.*  
- `--update` 🔄 *Update Carch using the latest script.*
- `--check-update` 📡 *Check if a new version of Carch is available.*  
- `--uninstall` 🗑️ *Uninstall Carch and remove all associated files.*

:::tip :bulb: Example Usage

**Before using the run command, first use `carch -l` to view the scripts in each category (e.g., in the terminal category, you'll find scripts like `Alacritty`, `Kitty`, etc.). To run a script, use `carch -r terminal/Alacritty`.**

:::

### 📑 Example Configuration

The Default Carch configuration file is located at `~/.config/carch/carch.conf`. To generate a new one, type `carch --gen-config`.

::: code-group

```sh [🛠️ Conf]
# Carch Configuration File  
#  
# List the script names (without the `.sh` extension) that you want to include in the menu.  
#  
# Steps:  
# 1. Check which category the scripts fall under (e.g., system, development, terminal, desktop).  
# 2. Verify the available scripts using:  
#    `carch -l` or `carch --list-scripts`  
#  
# Example:  

terminal/Alacritty  
terminal/Kitty  
system/Packages  

# End of file  
```

```sh [💡 Usage]
carch --config /path/to/carch.conf

# or

carch -c

```
