<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# 灵感来源

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

我喜欢折腾Linux和脚本。大部分时间，我只是在实验，为了好玩而尝试一些随机的想法。即使我只是坐着无聊，不知怎么的最终还是会构建一些奇怪的小工具。

真正启发我的事情之一是观看[Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech)和他的[直播](https://www.youtube.com/@TitusTechTalk)。他正在开发一个叫做[`linutil`](https://github.com/ChrisTitusTech/linutil/)的酷项目，这激励我制作自己版本的类似项目，但是用我自己混乱的方式。

在开始的时候，这个项目是...嗯，**丑陋的**。我使用`whiptail`作为菜单。它能工作，但看起来非常老式，感觉有点笨拙。老实说，它只是一个基本的shell脚本，把一堆菜单拼凑在一起。

📅 **更新：2025-03-21**  

后来，我开始使用`gum`，这是我通过[ml4w](https://github.com/mylinuxforwork)发现的。它让界面看起来漂亮了很多。但后来我尝试了`fzf`，这简直太棒了。对于我想要做的事情，它更快更干净。所以我放弃了`gum`（虽然仍然喜欢它💖），全力转向`fzf`。

📅 **更新：2025-05-01**  

🦀 现在...重大突破：我添加了一个完整的基于Rust的TUI，使用`ratatui`。不再有丑陋的菜单。新界面看起来更好，运行更流畅，我终于可以添加仅用Bash无法实现的功能。

**需要澄清的是，实际的Carch脚本（如安装脚本、工具等）仍然用Bash编写。**我不会把所有这些都重写成Rust（那太疯狂了）。Rust TUI主要用于菜单系统处理导航、分类和预览。当你选择某个选项时，它仍然在底层运行Bash脚本，是的，`fzf`仍然在那里发挥作用！

所以是的，这是一个混合体：界面用Rust，逻辑用Bash，`fzf`在中间把一切联系在一起。这很奇怪，但确实有效！

Carch真的走过了很长的路，从一个非常基本且有点丑陋的东西，到现在我为之骄傲的东西。还有很多事情要做，但每天都在变得更酷。

📅 **更新：2025-07-22**

好吧，现在幸福围绕着我。最终，我们在主TUI中实现了弹出式运行脚本TUI。现在脚本不需要离开TUI就能运行。就我的知识和技能而言，这对我来说是一个巨大的成就。现在你可以直接在TUI中选择并运行脚本。所有操作现在都会在TUI内部进行，我已经从脚本中移除了`fzf`样式，因为我们不再需要额外的TUI样式来在外部运行脚本。

再次向[linutil](https://github.com/ChrisTitusTech/linutil)项目创建者[Chris](https://github.com/ChrisTitusTech)和所有[维护者和贡献者](https://github.com/ChrisTitusTech/linutil/graphs/contributors)表示巨大感谢，他们给了我在项目中实现这个功能的想法和代码灵感。他们是我开始这个[Carch](https://github.com/harilvfs/carch)项目的重要原因。我想要自己的风格，因为linutil项目一直是我最大的灵感和指导，让我看到自己走了多远，以及我仍在如何改进Carch。

此外，TUI已经完全重新设计，以提供无缝的用户体验。现在运行脚本TUI是最大的功能和实现，真正将用户体验提升到了所需的水平。

是的，经过很长时间我很开心——我可以看到自己脸上的幸福。我热爱这一切，对我所做的和我走了多远总是充满爱。在过程中学习，在起起落落中成长。感谢所有人以及Linux社区中帮助并提供想法的人——**我学到了很多东西**。

我希望Carch在未来会变得更加重要，只要我能够维护它。再次感谢您阅读这篇文章。

您可以随时在[这里](https://github.com/harilvfs)查看该项目。如果您想给我一些支持，请随时为项目点个星，这将是我最大的动力。🙂