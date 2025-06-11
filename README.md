<div align="center">
  
<img src="https://raw.githubusercontent.com/carch-org/docs/refs/heads/main/docs/public/carch.png" width="70" />

<h4> 
  
This is the official documentation site for the [Carch](https://github.com/harilvfs/carch), built with Vitepress -- available in:  [ 🇺🇸 ](https://carch.chalisehari.com.np) • [ 🇳🇵 ](https://carch.chalisehari.com.np/ne/) • [ 🇮🇳 ](https://carch.chalisehari.com.np/hi/) • [ 🇨🇳 ](https://carch.chalisehari.com.np/zh/) • [ 🇪🇸 ](https://carch.chalisehari.com.np/es/) • [ 🇦🇪 ](https://carch.chalisehari.com.np/ar/) • [ 🇫🇷 ](https://carch.chalisehari.com.np/fr/) • [ 🇰🇷 ](https://carch.chalisehari.com.np/ko/) • [ 🇩🇪 ](https://carch.chalisehari.com.np/de/) • [ 🇷🇺 ](https://carch.chalisehari.com.np/ru/)

</h4>

[![Carch Docs][carch-docs]][carch-docs-link]

</div>

<p align="center">
  <img src="https://img.shields.io/badge/Maintained%3F-Yes-1c1c29?style=for-the-badge&color=ef9f9c&logoColor=85e185&labelColor=1c1c29">
  <img src="https://img.shields.io/github/license/carch-org/docs?style=for-the-badge&color=e0ea9d&logoColor=D9E0EE&labelColor=171b22">
</p>

<!--
<div align = "center">
  
[![github actions build status][check]][link]

</div>
-->

## 🤝 Contributing

If you somehow want to contribute to **Carch Docs**, you're more than welcome!

You can contribute by:

- Fixing any mistakes or typos in guides
- Translating the documentation into other languages (this is highly encouraged!)

If you're contributing a new language:
- Check the `config.ts` file to understand how to add your language.
- Add your translated content inside the appropriate subfolder in the `docs` directory.

Thanks in advance for your support!
  
## 📚 Build Documentation

*Assuming you already have all the usual Node.js dependencies (e.g., Node.js, NVM, Bun, Npm)*

</div>

### 🛠️ Clone Repository

```sh
git clone https://github.com/carch-org/docs
cd docs
```

### 📦 Initialize with Bun

```bash
cd <clone dir>
bun add -D vitepress
```

### 🏗️ Build
*To generate the static documentation files:*

```sh
bun run docs:build
```

### 👀 Preview 
*To preview the generated build locally:*

```sh
bun run docs:preview
```
  
*Copy the local IP address provided and paste it into your browser to view the documentation.*

### 🔄 Development Build

*To see live changes while editing the documentation:*

```sh
bun run docs:dev
```

<!--
[check]: https://github.com/carch-org/docs/actions/workflows/docs.yml/badge.svg
[link]: https://github.com/carch-org/docs/actions/workflows/docs.yml
-->

[carch-docs]: https://img.shields.io/badge/%20Official%20Docs-Click%20Here-eba0ac?style=for-the-badge&labelColor=1c1c29&logo=data:image/png;base64,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
[carch-docs-link]: https://carch.chalisehari.com.np
