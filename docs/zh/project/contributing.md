# 📑 目录

- [为 Carch 做贡献](#为-carch-做贡献)
  - [了解代码库](#📌-了解代码库)
  - [贡献步骤](#贡献步骤)

- [为 Carch 文档做贡献](#📚-为-carch-文档做贡献)

- [指导原则](#指导原则)

## 为 **Carch** 做贡献

我们很高兴您有兴趣为 **Carch** 做贡献！欢迎各种形式的贡献，无论是修复错误、添加新功能还是改进文档。请按照本指南开始贡献。

> [!WARNING]  
> **在做出任何贡献之前**，请先在 **[功能请求](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)** 部分开启一个问题。我们将在实施之前在那里讨论相关更改。

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
> 首先，在进行任何更改之前**分析脚本如何工作**。如果您想改进或添加到项目中，请确保您**了解结构**以及每个部分如何交互。这将帮助您以与项目设计一致的方式做出贡献。
>
> ```sh
> 提交时，使用如下标签
> feat: 您的提交信息 或 fix: 您的提交信息。
> ```
> 
> 有关约定式提交的更多信息，请参考此[指南](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d)。

如果您有疑问或需要帮助，请随时**联系我们**：  
📧 邮箱：<a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord：<a href="https://discord.com/invite/8NJWstnUHd">点击加入</a>  

## 贡献步骤

### 1. 🍽️ Fork 仓库
- 前往 **Carch** GitHub 页面。
- 点击右上角的 **Fork** 按钮创建您自己的仓库副本。

### 2. 🌿 克隆 Fork 的仓库
- 使用以下命令将仓库克隆到您的本地系统：

  ```bash
  git clone https://github.com/your-username/carch.git
  ```

- 将 `your-username` 替换为您的 GitHub 用户名。

:::tip :bulb: 提示
**您也可以使用 GUI 工具如 `GitHub Desktop` 或甚至 GitHub 网页界面来 fork 和克隆仓库。这些工具提供了易于使用的可视化界面来管理您的贡献。**
:::

### 3. 🌱 将原始仓库设置为上游
- 添加原始 **Carch** 仓库作为上游远程，以保持您的 fork 更新：

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
- 确保您的更改清晰、经过测试并遵循项目的编码标准。

### 6. 📝 暂存并提交您的更改
- 将修改的文件添加到暂存区：

   ```bash
   git add .
   ```

- 使用清晰的消息提交您的更改：

   ```bash
   git commit -m "Add: [您的更改的简要描述]"
   ```

### 7. 🚀 将更改推送到您的 Fork
- 将您的分支推送到您的 fork 仓库：

   ```bash
   git push origin feature/your-branch-name
   ```

### 8. 📥 提交拉取请求 (PR)
- 前往 GitHub 上的原始 **Carch** 仓库。
- 点击 **New Pull Request**。
- 从下拉菜单中选择您的分支，并详细描述您的更改。
- 提交 PR 进行审查！

## 📚 为 Carch 文档做贡献

#### **Carch 文档** 在线地址 ➥ [点击访问](https://github.com/carch-org/docs)  

### 🚀 贡献方式

您可以通过以下方式贡献：

- 🪛 修复现有指南中的拼写错误或错误  
- 🌐 将文档翻译成其他语言（**强烈鼓励！**）  

### 🌍 翻译文档

#### 想要帮助让 Carch 对全世界用户都可访问吗？帮助我们翻译文档！

如果您要贡献**新语言**，请按照以下步骤：

1. 📁 在 `docs/` 目录内为您的语言创建一个新文件夹。使用 [ISO 639-1 代码](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)（例如 `fr`、`es`、`hi` 等）。  
2. 🛠️ 翻译新文件夹内的 Markdown 内容。  
3. 🧩 修改 `docs/.vitepress/config.ts`：  
   - 在 `locales` 部分添加您的语言。  
   - 为导航提供 `label`、`lang` 和 `link`。  

### 🧪 本地测试您的更改

要预览您的更改：

```sh
bun install
bun run docs:dev
```

> [!IMPORTANT]
> 如果您计划引入重大的结构或组织更改，请先开启一个问题。我们很乐意事先讨论和协作！

### 🧾 提交风格

使用清晰的提交信息，如：

```sh
git commit -m "fix(docs): correct typo in installation guide"
git commit -m "feat(docs): add Hindi translation"
```

更多关于[约定式提交](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d)的信息。

#### 🙌 感谢您帮助改进文档！

## 指导原则

### 代码质量
- 遵循项目现有的编码风格。
- 编写清晰、简洁且文档良好的代码。

### 测试
- 在本地测试您的更改以确保它们按预期工作。
- 如果您的更改引入了新功能，请在适当的地方添加必要的测试。

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
  - 如果仓库的默认分支不同，请将 `main` 替换为相应的分支。

感谢您为 **Carch** 做出贡献！您的努力有助于让这个项目对每个人都更好。<img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />