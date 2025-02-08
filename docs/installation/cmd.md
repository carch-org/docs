# CLI Commands  
<img src="https://cdn-icons-png.flaticon.com/128/2581/2581117.png" width="40" />

Carch now supports CLI commands! Use `carch` with the following options:  

:::code-group

```sh [CLI]
carch --help

```

```sh [Preview]
Usage: carch [OPTIONS]

A tool for automating Arch Linux setups.

Options:
  --help, -h              Show this help message and exit.
  --version, -v           Show the program version.
  --gen-config            Generate a default configuration file in ~/.config/carch/carch.conf.
  --config <conf dir>     Use a specific configuration file to load selected scripts.
  -c                      Use the default configuration file to load selected scripts.
  --run-script <name>, -r Run the specified script from /usr/share/scripts.
  --list-scripts, -l      List all available scripts in /usr/share/scripts.
  --update                Update Carch using the latest script.
  --uninstall             Uninstall Carch and remove all associated files.
```
:::

  - `--help, -h`              *Show this help message and exit.*
  - `--version, -v`           *Show the program version.*
  - `--gen-config`            *Generate a default configuration file in ~/.config/carch/carch.conf.*
  - `--config <conf dir>`     *Use a specific configuration file to load selected scripts.*
  - `-c`                      *Use the default configuration file to load selected scripts.*
  - `--run-script <name>, -r` *Run the specified script from /usr/share/scripts.*
  - `--list-scripts, -l`      *List all available scripts in /usr/share/scripts.*
  - `--update`                *Update Carch using the latest script.*
  - `--uninstall`             *Uninstall Carch and remove all associated files.*

Example config:
```conf
# Carch Conf File Example
# List the script names (without .sh extension) you want to include in the menu.
# Example:
Alacritty
Kitty
```

```sh
carch --config /path/to/config.conf
```
