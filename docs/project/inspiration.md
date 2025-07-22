<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# Inspiration

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

I love messing around with Linux and scripts. Most of the time, I’m just experimenting, trying random ideas for fun. Even if I’m just sitting and bored, I somehow end up building weird little tools.

One of the things that really inspired me was watching [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) and his [streams](https://www.youtube.com/@TitusTechTalk). He’s working on a cool project called [`linutil`](https://github.com/ChrisTitusTech/linutil/), and that kinda gave me the push to make my own version of something like it, but in my own messy way.

In the beginning, the project was... well, **ugly**. I used `whiptail` for the menu. It worked, but it looked super old school and felt kinda clunky. Honestly, it was just a basic shell script with a bunch of menus slapped together.

📅 **Updated: 2025-03-21**  

Later on, I started using `gum`, which I found through [ml4w](https://github.com/mylinuxforwork). It made things look a lot nicer. But then I tried out `fzf`, and that just clicked. It was way faster and cleaner for what I wanted to do. So I ditched `gum` (still love it tho 💖) and went all in on `fzf`.

📅 **Updated: 2025-05-01**  

🦀 And now... big step: I’ve added a full Rust-based TUI using `ratatui`. No more ugly menus. The new interface looks way better, runs smoother, and I can finally add features that just weren’t possible in Bash alone.

**Just to be clear, the actual Carch scripts (like setup scripts, tools, etc.) are still written in Bash.** I’m not rewriting all of that in Rust (that would be insane). The Rust TUI is mainly for the menu system handling navigation, categories, and preview. When you select something, it still runs the Bash scripts underneath, and yep, `fzf` is still doing the job there too!

So yeah, it’s a mix: Rust for the interface, Bash for the logic, and `fzf` in the middle holding it all together. It’s weird but it works!

Carch really came a long way from something super basic and kinda ugly, to something I’m proud of. Still lots to do, but it’s getting cooler every day.

📅 **Updated: 2025-07-22**

Ok, the happiness is around me for now. Finally, we have implemented a popup-style run script TUI in the main TUI. Now the script doesn’t need to leave the TUI to run. This is a huge achievement for me in terms of what I know and my knowledge. Now you can just select and run the script in the TUI itself. Everything will now happen inside the TUI and I have removed the `fzf` style from the scripts as we don’t need extra TUI style for running scripts outside anymore.

Huge thanks again to the [linutil](https://github.com/ChrisTitusTech/linutil) project creator [Chris](https://github.com/ChrisTitusTech) and all the [maintainers & contributors](https://github.com/ChrisTitusTech/linutil/graphs/contributors) they gave me ideas and code inspiration to implement this in my project. They have been a big reason why I started this [Carch](https://github.com/harilvfs/carch) project. I want my own style as the linutil project has been my biggest inspiration and guidance for how far I’ve come and how much I’m still improving Carch.

Also, the TUI has been completely redesigned for a seamless user experience. Now the run script TUI is the biggest feature and implementation that really enhances the user experience to the level it needed.

Yeah, I’m happy after a long time I can see happiness on my face. I’m loving this and always have big love for what I have done and how far I’ve come. Learning in the process, getting up through ups and downs. Thanks to all and to the Linux community people who help and give ideas **I’ve learned so many things**.

I hope Carch will become even more substantial in the upcoming future as long as I’m able to maintain it. Thank you again for reading this.

You can always have a look at the project [here](https://github.com/harilvfs). If you want to show me some support, feel free to star the project that will be my biggest motivation. 🙂
