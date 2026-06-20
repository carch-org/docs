# ⌨ TUI Keybindings

In carch we have some keybindings that are used to navigate and interact with the TUI. You can always see all bindings by pressing `?` inside the carch TUI.

Here is some clear info about the bindings that may help you understand how to use them properly.

---

## Navigation

We use vim navigation keys for movement (up, down, left, right).

- `j` → move down  
- `k` → move up  
- `h` → move left  
- `l` → move right  

You can also use arrow keys for movement:

- `↑` → move up  
- `↓` → move down  
- `←` → move left  
- `→` → move right  

You can prefer vim keys or arrow keys, whatever feels comfortable for you.

---

## Running Scripts

For quick actions like running a script:

- Navigate to any script on the right side and press `Enter` to run it.  
- If you are a Neovim enthusiast, you can also press `l` or `→` to run it.  

When the confirmation prompt appears:

- Press `y`, `l`, or `→` to confirm and run it.  
- Press `n`, `h`, `Esc`, `q`, or `←` to cancel.

---

## Multi-Select Mode

You cannot run multiple scripts at the exact same time, but you can select multiple scripts and they will run one by one in the order you selected.

To use multiselect:

- Press `m` to enter multiselect mode  
- Press `Space` to select scripts  
- Press `Enter` to run them  
- Press `Esc` or `q` to exit multiselect mode  

They will execute one by one after each finishes.

---

## Themes

Carch TUI also has multiple themes. You can set a default theme that will be remembered across sessions.

- Press `t` to open the theme selector popup
- Use `j`/`k` or `↑`/`↓` to navigate themes
- Press `Enter` to set the selected theme as your default
- Press `Esc`, `q`, or `t` to close without changing

The chosen theme is saved and will be used on future launches. You can also use the `--set-theme` CLI flag to set it from the terminal.

---

## Search

We also have a search option in case you want to quickly find any script without going back and forth.

- Press `/` to enter search mode  
- Type the script name  
- You can use tab auto-completion  
- Press `Enter` to navigate to that script  

---

## Preview

If you want to check the script before running it:

- Press `p` to preview the script  

This helps you understand what the script does before executing it.

---

## Description

Description mode shows short info about the script. This is helpful especially for beginners to understand what the script is about.

- Go to the right side where the script list is  
- Press `d` to see the description of the selected script  
- Press `Esc`, `q`, or `d` to close  

---

## Help

- Press `?` at any time to open the help popup showing all keybindings  
- Press `Esc`, `q`, or `?` to close  

---

## Quick Navigation

- Press `Home` to jump to the top of the current list  
- Press `End` to jump to the bottom  

---