# 🛠️ स्थापना

:::warning
हामी केवल Arch, Fedora, र openSUSE-आधारित डिस्ट्रोहरूलाई समर्थन गर्छौं, त्यसैले यो अहिले अन्य डिस्ट्रोहरूमा काम गर्दैन।
:::

तपाईंको टर्मिनलमा निम्नलिखित कमाण्ड चलाउनुहोस्:

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

स्थापना भएपछि, शेल पूर्णताहरू, म्यान पेज र डेस्कटप फाइल स्थापना गर्न `carch setup` चलाउनुहोस्।

### 📦 Cargo Binstall

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch [crates.io](https://crates.io/) मा उपलब्ध छ र प्रि-बिल्ट बाइनरीको लागि [cargo-binstall](https://github.com/cargo-bins/cargo-binstall) समर्थन गर्छ:

```sh
cargo binstall carch-cli
```

### 📦 Cargo Install

तपाईंले यसलाई Cargo प्रयोग गरेर पनि इन्स्टल गर्न सक्नुहुन्छ:

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
sudo pacman -S --noconfirm rust git wget curl cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust git wget curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust git wget curl cargo 
```

:::

#### 🔧 क्लोन र बिल्ड

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
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
