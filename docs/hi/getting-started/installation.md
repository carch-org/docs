# 🛠️ इंस्टॉलेशन

:::warning
हम केवल Arch, Fedora, और openSUSE-आधारित डिस्ट्रो का समर्थन करते हैं, इसलिए यह अभी अन्य डिस्ट्रो पर काम नहीं करेगा।
:::

अपने टर्मिनल में निम्नलिखित कमांड चलाएं:

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

इंस्टॉल हो जाने के बाद, शेल पूर्णताएँ, मैन पेज और डेस्कटॉप फ़ाइल इंस्टॉल करने के लिए `carch setup` चलाएं।

### 📦 Cargo Binstall

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch [crates.io](https://crates.io/) पर उपलब्ध है और प्री-बिल्ट बाइनरी के लिए [cargo-binstall](https://github.com/cargo-bins/cargo-binstall) का समर्थन करता है:

```sh
cargo binstall carch-cli
```

### 📦 Cargo Install

आप इसे Cargo का उपयोग करके भी इंस्टॉल कर सकते हैं:

```sh
cargo install carch-cli
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
sudo pacman -S --noconfirm rust git wget curl cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust git wget curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust git wget curl cargo 
```

:::

#### 🔧 क्लोन और बिल्ड

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
```

### 🔄 अपडेट और अनइंस्टॉल

::: code-group

```sh [ 🔄 अपडेट ]
carch update
```

```sh [ 🗑️ अनइंस्टॉल ]
carch uninstall
```

:::

- **अपडेट**: मूल रूप से आपने जो इंस्टॉलेशन विधि उपयोग की थी उसका पालन करता है: cargo, cargo-binstall या इंस्टॉल स्क्रिप्ट।
- **अनइंस्टॉल**: "cargo" चुनने से `cargo binstall` द्वारा इंस्टॉल किए गए बाइनरी भी हट जाएंगे, क्योंकि दोनों `~/.cargo/bin/` में इंस्टॉल होते हैं।
