<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# 灵感来源

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

我喜欢折腾 Linux 和脚本。大部分时间，我只是在实验，为了好玩而尝试一些随机的想法。即使我只是坐着感到无聊，我也会莫名其妙地最终构建一些奇怪的小工具。

真正启发我的事情之一是观看 [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) 和他的[直播](https://www.youtube.com/@TitusTechTalk)。他正在开发一个很酷的项目叫做 [`linutil`](https://github.com/ChrisTitusTech/linutil/)，这给了我动力去制作我自己版本的类似东西，但是用我自己混乱的方式。

一开始，这个项目是...嗯，**很丑**。我使用 `whiptail` 来做菜单。它能工作，但看起来超级老土，感觉有点笨重。说实话，它只是一个基本的 shell 脚本，把一堆菜单拼接在一起。

📅 **更新日期：2025-03-21**  

后来，我开始使用 `gum`，这是我通过 [ml4w](https://github.com/mylinuxforwork) 发现的。它让界面看起来好看了很多。但后来我试了 `fzf`，这就完全符合我的想法了。对于我想要做的事情，它更快更简洁。所以我放弃了 `gum`（虽然仍然喜欢它 💖），全力投入 `fzf`。

📅 **更新日期：2025-05-01**  

🦀 现在...重大进步：我添加了一个使用 `ratatui` 的完整 Rust 基础 TUI。不再有丑陋的菜单。新界面看起来好看多了，运行更流畅，我终于可以添加仅凭 Bash 无法实现的功能了。

**但要明确的是，实际的 Carch 脚本（如设置脚本、工具等）仍然是用 Bash 编写的。** 我不会用 Rust 重写所有这些东西（那太疯狂了）。Rust TUI 主要用于菜单系统，处理导航、分类和预览。当您选择某些内容时，它仍然会在底层运行 Bash 脚本，是的，`fzf` 也仍然在那里发挥作用！

所以是的，这是一个混合体：Rust 负责界面，Bash 负责逻辑，`fzf` 在中间把一切联系在一起。很奇怪，但它能工作！

Carch 真的从一个超级基础且有点丑陋的东西，发展到了我引以为豪的东西。还有很多事情要做，但它每天都在变得更酷。