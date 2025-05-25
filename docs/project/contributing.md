# Contributing to **Carch** 

<img src="https://cdn-icons-png.flaticon.com/128/993/993686.png" width="50" />

We're excited that you're interested in contributing to **Carch**! Contributions of all kinds are welcome, whether you're fixing bugs, adding new features, or improving documentation. Follow this guide to get started.

> [!WARNING]  
> **Before making any contributions**, first open an issue in the **[Feature Request](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)** section. We will discuss the changes there before proceeding with implementation.  

## 📌 Understand the Codebase

> [!NOTE]
> Before contributing, **understand the structure** of Carch:
> - **The `main` Rust files of Carch are located in:** `src`
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
> - **All `modules` scripts are organized by category in:**  
> ```sh
> modules/
> ├── Browser/     # Browser related scripts 
> ├── Desktop/     # Desktop environment related scripts
> ├── Development/ # Development tools scripts
> ├── System/      # System configuration scripts
> └── Terminal/    # Terminal setup scripts
> ```


> [!IMPORTANT]
> First, **analyze how the script works** before making any changes. If you want to improve or add to the project, make sure you **understand the structure** and how each piece interacts. This will help you contribute in a way that is consistent with the project's design. 
>
> ```sh
> For committing, use labels like
> feat: your-commit-message or fix: your-commit-message.
> ```
> 
> For more information about Conventional Commits, perfer this [guide](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d).


If you have questions or need help, feel free to **contact us**:  
📧 Email: <a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord: <a href="https://discord.com/invite/8NJWstnUHd">Join Here</a>  

## Steps to Contribute

### 1. 🍽️ Fork the Repository
- Go to the **Carch** GitHub page.
- Click the **Fork** button in the top-right corner to create your own copy of the repository.

### 2. 🌿 Clone the Forked Repository
- Use the following command to clone the repository to your local system:

  ```bash
  git clone https://github.com/your-username/carch.git
  ```

- Replace `your-username` with your GitHub username.

:::tip :bulb: TIP
**You can also use GUI tools like `GitHub Desktop` or even the GitHub web interface to fork and clone repositories. These tools provide an easy-to-use visual interface for managing your contributions.**
:::

### 3. 🌱 Set the Original Repository as Upstream
- Add the original **Carch** repository as an upstream remote to keep your fork up to date:

   ```bash
   cd carch
   ```

   ```bash
   git remote add upstream https://github.com/original-author/carch.git
   ```

### 4. 🍇 Create a New Feature Branch
- Before making changes, create a new branch with a descriptive name:

   ```bash
   git checkout -b feature/your-branch-name
   ```

- Examples of branch names:
  - `feature/add-new-script`
  - `bugfix/fix-installation-issue`

### 5. 🔧 Make Your Changes
- Implement the necessary changes to the code or documentation.
- Ensure that your changes are clear, tested, and follow the project's coding standards.

### 6. 📝 Stage and Commit Your Changes
- Add the modified files to the staging area:

   ```bash
   git add .
   ```

- Commit your changes with a clear message:

   ```bash
   git commit -m "Add: [brief description of your changes]"
   ```

### 7. 🚀 Push the Changes to Your Fork
- Push your branch to your forked repository:

   ```bash
   git push origin feature/your-branch-name
   ```

### 8. 📥 Submit a Pull Request (PR)
- Go to the original **Carch** repository on GitHub.
- Click on **New Pull Request**.
- Select your branch from the dropdown and describe your changes in detail.
- Submit the PR for review!

## Guidelines

### Code Quality
- Follow the existing coding style of the project.
- Write clear, concise, and well-documented code.

### Testing
- Test your changes locally to ensure they work as expected.
- If your changes introduce new features, add necessary tests where applicable.

### Documentation
- If your changes involve new functionality, update the relevant documentation.
- Ensure the README or Wiki reflects your updates.

### Syncing Your Fork
- Keep your fork updated to avoid conflicts:

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - Replace `main` with the default branch of the repository if it's different.

Thank you for contributing to **Carch**! Your effort helps make this project better for everyone. <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />


