<div align="center">
 
# [`Carch Aur Packages`](https://github.com/carch-org/pkgs)

</div>


> [!IMPORTANT]
> Installing or uploading packages that act as installer scripts or customize the system in a way that diverges from the official guidelines is not allowed on the AUR.
>
>  As such, the package has been removed from the AUR. I respect the AUR guidelines, and I encourage you to check the main Carch project for alternative installation methods. Thank you!

> [!NOTE]
> Carch is not available on the AUR because it is a script. However, you can use the provided package build to run Carch as a package, similar to an AUR package, or visit the Carch documentation for the CLI installer.

*Assuming, You have already install dependency like: `make` & `git`*

### 📦 Package Build [ Stable ]

```sh [Package Build ]
git clone https://github.com/carch-org/pkgs
cd pkgs/carch
makepkg -si
```

### 📦 Git Package Build [ Latest Git-Build ]

```sh [Git Package Build ]
git clone https://github.com/carch-org/pkgs
cd pkgs/carch-git
makepkg -si
```

> [!NOTE]
> You can use the `carch` package for stable updates with the latest release, or use the `git package` to get the most recent changes directly from the Carch GitHub repository.
>
> And please don't mix up the installation methods. Stick to either the `PKGBUILD` or the `CLI` installation.
