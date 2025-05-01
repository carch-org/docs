<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# Carch – A Bash-powered script hub with a Rusty face

Carch is my personal little toolbox project. It started off super simple (and kinda ugly 😅) using just Bash and `whiptail`, but over time it's grown into something way cooler. Now it’s a full terminal UI powered by Rust and `ratatui`, but still running all my original Bash scripts underneath.

It’s not perfect, but it works great—and it’s fun to hack on!

---

# 🔥 Inspiration

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

I love messing around with Linux and scripts. Most of the time, I’m just experimenting, trying random ideas for fun. Even if I’m just sitting and bored, I somehow end up building weird little tools.

One of the things that really inspired me was watching [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) and his [streams](https://www.youtube.com/@TitusTechTalk). He’s working on a cool project called [`linutil`](https://github.com/ChrisTitusTech/linutil/), and that kinda gave me the push to make my own version of something like it—but in my own messy way.

In the beginning, the project was... well, **ugly** 😅. I used `whiptail` for the menu. It worked, but it looked super old-school and felt kinda clunky. Honestly, it was just a basic shell script with a bunch of menus slapped together.

📅 **Updated: 2025-03-21**  

Later on, I started using `gum`, which I found through [ml4w](https://github.com/mylinuxforwork). It made things look a lot nicer. But then I tried out `fzf`, and that just clicked. It was way faster and cleaner for what I wanted to do. So I ditched `gum` (still love it tho 💖) and went all-in on `fzf`.

📅 **Updated: 2025-05-01**  

🦀 And now... big step: I’ve added a full Rust-based TUI using `ratatui`. No more ugly menus 😎. The new interface looks way better, runs smoother, and I can finally add features that just weren’t possible in Bash alone.

**Just to be clear though—the actual Carch scripts (like setup scripts, tools, etc.) are still written in Bash.** I’m not rewriting all of that in Rust (that would be insane 😅). The Rust TUI is mainly for the menu system—handling navigation, categories, and preview. When you select something, it still runs the Bash scripts underneath, and yep, `fzf` is still doing the job there too!

So yeah, it’s a mix: Rust for the interface, Bash for the logic, and `fzf` in the middle holding it all together. It’s weird—but it works!

Carch really came a long way—from something super basic and kinda ugly, to something I’m proud of. Still lots to do, but it’s getting cooler every day.

