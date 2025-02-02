<div align="center">
  
<img src="/docs/public/carch.png" width="70" />

<h4> 
  
This is the official documentation for [`Carch Project`](https://github.com/harilvfs/carch)
</h4>

</div>
<br>
<p align="center">
  <img src="https://img.shields.io/badge/Maintained%3F-Yes-1c1c29?style=for-the-badge&color=ef9f9c&logoColor=85e185&labelColor=1c1c29">
  <img src="https://img.shields.io/github/license/carch-org/docs?style=for-the-badge&color=e0ea9d&logoColor=D9E0EE&labelColor=171b22">
  <br><br>
  <img src="https://img.shields.io/github/last-commit/carch-org/docs?style=for-the-badge&logo=github&color=7dc4e4&logoColor=D9E0EE&labelColor=1c1c29"/> <img src="https://img.shields.io/github/stars/carch-org/docs?style=for-the-badge&logo=apachespark&color=eed49f&logoColor=D9E0EE&labelColor=1c1c29"/> <img src="https://img.shields.io/github/forks/carch-org/docs?style=for-the-badge&color=9dc3ea&logoColor=D9E0EE&labelColor=1c1c29" />
</p>

<br>

<div align = "center"
  
[![github actions build status][check]][link]

</div>

---

<div align="center">
  
### 📚 Build Documentation

*Assuming you already have all the usual Node.js dependencies (e.g., Node.js, NVM, Bun, Npm)*

</div>

#### 🛠️ Clone Repository

```sh
git clone https://github.com/carch-org/docs
cd docs
```

<br>

#### 📦 Initialize with npm

```bash
cd <clone dir>
bun add -D vitepress
```

<br>

#### 🏗️ Build
*To generate the static documentation files:*

```sh
npm run docs:build
```

<br>

#### 👀 Preview 
*To preview the generated build locally:*

```sh
bun run docs:preview
```
  
*Copy the local IP address provided and paste it into your browser to view the documentation.*

<br>

#### 🔄 Development Build

*To see live changes while editing the documentation:*

```sh
bun run docs:dev
```

[check]: https://github.com/carch-org/docs/actions/workflows/docs.yml/badge.svg
[link]: https://github.com/carch-org/docs/actions/workflows/docs.yml
