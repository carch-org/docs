# 为 **Carch** 做贡献

<img src="https://cdn-icons-png.flaticon.com/128/993/993686.png" width="50" />

我们很高兴您有兴趣为 **Carch** 做贡献！欢迎各种形式的贡献，无论是修复错误、添加新功能还是改进文档。请按照本指南开始。

> [!WARNING]  
> **在做任何贡献之前**，请先在 **[功能请求](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)** 部分打开一个 issue。我们将在那里讨论更改，然后再继续实施。

## 📌 了解代码库

> [!NOTE]
> 在贡献之前，请**了解** Carch 的结构：
> - **Carch 的主要 Rust 文件位于：** `src`
>
>```sh
> src/
> ├── ui/
> │   ├── app.rs
> │   ├── mod.rs
> │   ├── popups.rs
> │   └── render.rs 
> ├── main.rs 
> ├── commands.rs
> ├── display.rs
> ├── script_list.rs 
> └── version.rs
> ```
> 
> - **所有 `模块` 脚本按类别组织在：**  
> ```sh
> modules/
> ├── Browser/     # 浏览器相关脚本
> ├── Desktop/     # 桌面环境相关脚本
> ├── Development/ # 开发工具脚本
> ├── System/      # 系统配置脚本
> └── Terminal/    # 终端设置脚本
> ```

> [!IMPORTANT]
> 首先，在进行任何更改之前**分析脚本的工作原理**。如果您想改进或添加到项目中，请确保您**了解结构**以及每个部分如何交互。这将帮助您以与项目设计一致的方式做出贡献。
>
> ```sh
> 提交时，使用如下标签
> feat: your-commit-message 或 fix: your-commit-message。
> ```
> 
> 有关约定式提交的更多信息，请参考这个[指南](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d)。

如果您有问题或需要帮助，请随时**联系我们**：  
📧 邮箱：<a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord：<a href="https://discord.com/invite/8NJWstnUHd">加入这里</a>  

## 贡献步骤

### 1. 🍽️ Fork 仓库
- 前往 **Carch** GitHub 页面。
- 点击右上角的 **Fork** 按钮来创建您自己的仓库副本。

### 2. 🌿 克隆 Fork 的仓库
- 使用以下命令将仓库克隆到您的本地系统：

  ```bash
  git clone https://github.com/your-username/carch.git
  ```

- 将 `your-username` 替换为您的 GitHub 用户名。

:::tip :bulb: 提示
**您也可以使用 GUI 工具如 `GitHub Desktop` 或者甚至 GitHub 网页界面来 fork 和克隆仓库。这些工具提供了易于使用的可视化界面来管理您的贡献。**
:::

### 3. 🌱 将原始仓库设置为上游
- 添加原始 **Carch** 仓库作为上游远程，以保持您的 fork 最新：

   ```bash
   cd carch
   ```

   ```bash
   git remote add upstream https://github.com/original-author/carch.git
   ```

### 4. 🍇 创建新的功能分支
- 在进行更改之前，创建一个具有描述性名称的新分支：

   ```bash
   git checkout -b feature/your-branch-name
   ```

- 分支名称示例：
  - `feature/add-new-script`
  - `bugfix/fix-installation-issue`

### 5. 🔧 进行更改
- 对代码或文档实施必要的更改。
- 确保您的更改清晰、经过测试，并遵循项目的编码标准。

### 6. 📝 暂存并提交您的更改
- 将修改的文件添加到暂存区：

   ```bash
   git add .
   ```

- 用清晰的消息提交您的更改：

   ```bash
   git commit -m "Add: [您更改的简要描述]"
   ```

### 7. 🚀 将更改推送到您的 Fork
- 将您的分支推送到您的 fork 仓库：

   ```bash
   git push origin feature/your-branch-name
   ```

### 8. 📥 提交拉取请求 (PR)
- 前往 GitHub 上的原始 **Carch** 仓库。
- 点击 **New Pull Request**。
- 从下拉菜单中选择您的分支并详细描述您的更改。
- 提交 PR 进行审查！

## 指南

### 代码质量
- 遵循项目现有的编码风格。
- 编写清晰、简洁且文档完善的代码。

### 测试
- 在本地测试您的更改以确保它们按预期工作。
- 如果您的更改引入了新功能，请在适用的地方添加必要的测试。

### 文档
- 如果您的更改涉及新功能，请更新相关文档。
- 确保 README 或 Wiki 反映您的更新。

### 同步您的 Fork
- 保持您的 fork 更新以避免冲突：

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - 如果仓库的默认分支不同，请将 `main` 替换为默认分支。

感谢您为 **Carch** 做贡献！您的努力帮助这个项目变得对每个人都更好。<img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />