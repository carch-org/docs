# 🛠️ स्थापना

### 📦 प्याकेज

हामी Arch Linux को लागि `PKGBUILD` र Fedora र openSUSE को लागि `.rpm` फाइलहरू प्रयोग गर्छौं।

:::warning
हामी केवल Arch, Fedora, र openSUSE-आधारित डिस्ट्रोहरूलाई समर्थन गर्छौं, त्यसैले यो अहिले अन्य डिस्ट्रोहरूमा काम गर्दैन।
:::

तपाईंको टर्मिनलमा निम्नलिखित कमाण्ड चलाउनुहोस्:

```sh
curl -fsSL chalisehari.com.np/carchinstall | sh
```

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch [crates.io](https://crates.io/) मा उपलब्ध छ।

तपाईंले यसलाई Cargo प्रयोग गरेर इन्स्टल गर्न सक्नुहुन्छ:

```sh
cargo install carch-cli
```

एक पटक सकिएपछि, तपाईं आफ्नो टर्मिनलमा `carch` टाइप गरेर यसलाई चलाउन सक्नुहुन्छ।

:::tip :bulb: सुझाव
यदि `carch` पहिचान हुँदैन भने, Cargo को bin डाइरेक्टरी आफ्नो PATH मा थप्नुहोस्:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ म्यानुअल स्थापना

#### 📜 निर्भरताहरू

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust man man-pages git wget google-noto-fonts google-noto-coloremoji-fonts jetbrains-mono-fonts  symbols-only-nerd-fonts bash-completion curl 
```

:::

#### 🔧 क्लोन र बिल्ड

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/
```

### 🔄 अपडेट र अनइन्स्टल

::: code-group

```sh [ 🔄 अपडेट ]
carch update
```

```sh [ 🗑️ अनइन्स्टल ]
carch uninstall
```

:::
