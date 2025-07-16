# 🛠️ इंस्टॉलेशन

### 📦 पैकेज

हम Arch Linux के लिए `PKGBUILD` और Fedora और openSUSE के लिए `.rpm` फाइलों का उपयोग करते हैं।

::: code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch ]
git clone https://github.com/carch-org/pkgs ~/pkgs
cd ~/pkgs/carch-bin
makepkg -si
```

```sh [<i class="devicon-fedora-plain"></i> Fedora ]
sudo dnf install -y $(curl -sL https://api.github.com/repos/harilvfs/carch/releases/latest | grep browser_download_url | grep '\.rpm"' | cut -d '"' -f 4 | tee /tmp/carch.rpm)
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y $(curl -sL https://api.github.com/repos/harilvfs/carch/releases/latest | grep browser_download_url | grep '\.rpm"' | cut -d '"' -f 4 | tee /tmp/carch.rpm)
```
::: 

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch [crates.io](https://crates.io/) पर उपलब्ध है।

आप इसे [carch](https://crates.io/crates/carch) crate के साथ Cargo का उपयोग करके इंस्टॉल कर सकते हैं।

```sh
cargo install carch
```

यह हो जाने के बाद, आप अपने टर्मिनल में `carch` टाइप करके इसे चला सकते हैं।

:::tip :bulb: टिप
यदि `carch` पहचाना नहीं जा रहा है, तो Cargo के bin निर्देशिका को अपने PATH में जोड़ें:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ मैनुअल इंस्टॉलेशन

#### 📜 डिपेंडेंसी

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust man man-pages git wget google-noto-fonts google-noto-coloremoji-fonts jetbrains-mono-fonts  symbols-only-nerd-fonts bash-completion curl fzf glibc gcc  
```

:::

#### 🔧 क्लोन और बिल्ड

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/
```

### 🔄 अपडेट और अनइंस्टॉल

::: code-group

```sh [ अपडेट ]
carch --update
```

```sh [ अनइंस्टॉल ]
carch --uninstall
```

:::