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
 --help               Show this help message and exit.
 --version            Show the program version.
 --run-script <name>  Run the specified script from /usr/bin/scripts.
 --list-scripts       List all available scripts in /usr/bin/scripts.
 --update             Update Carch using the latest script.
 --gtk                Launch the GTK interface.
```

   - `--help`  *Displays the help message.*
   - `--update`  *Updates Carch to the latest script version.* 
   - `--version`  *Shows the current version of Carch.*  
   - `--run-script <name>`  *Executes the specified script.*  
   - `--list-scripts`  *Lists all available scripts.* 
   - `--gtk`  *Launch the GTK interface.*
