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
- If you are a Neovim enthusiast, you can also press `l` to run it.  

When the `y/n` prompt appears:

- Press `l` to accept (yes) and run it.  
- Press `h` to go back to the previous screen.

In short:

- `l` works the same as `Enter`  
- `h` works the same as `Esc`

---

## Multi-Select Mode

You cannot run multiple scripts at the exact same time, but you can select multiple scripts and they will run one by one in the order you selected.

To use multiselect:

- Press `m` to enter multiselect mode  
- Press `Space` to select scripts  
- Press `Enter` to run them  

They will execute one by one after each finishes.

---

## Themes

Carch TUI also has multiple themes.

- Press `t` to change themes  

You can also check the commands in the docs if you want to directly launch carch with your favorite theme.

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

---

That’s all for now. If I missed something, you can always press `?` inside carch TUI to check all keybindings.

Hope this helps. Thanks for reading.