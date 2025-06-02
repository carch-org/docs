# 🛠️ इंस्टॉलेशन

### इंस्टॉल स्क्रिप्ट

आप हमारी इंस्टॉल स्क्रिप्ट का उपयोग करके सी-आर्च को अपने सिस्टम पर स्थायी रूप से इंस्टॉल कर सकते हैं:

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)"
```

आप इन विकल्पों का भी उपयोग कर सकते हैं:

::: code-group

```sh [अपडेट]
# मौजूदा इंस्टॉलेशन को अपडेट करें
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --update
```

```sh [अनइंस्टॉल]
# सी-आर्च को अनइंस्टॉल करें
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --uninstall
```
:::

### 📦 कार्गो क्रेट

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

सी-आर्च [crates.io](https://crates.io/) पर उपलब्ध है।

आप [carch](https://crates.io/crates/carch) क्रेट के साथ कार्गो का उपयोग करके इसे इंस्टॉल कर सकते हैं।

```sh
cargo install carch
```

यह पूरा होने के बाद, आप अपने टर्मिनल में `carch` टाइप करके इसे चला सकते हैं।

:::tip :bulb: टिप
यदि `carch` पहचाना नहीं जा रहा है, तो कार्गो की bin डायरेक्टरी को अपने PATH में जोड़ें:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ मैन्युअल इंस्टॉलेशन

#### 📜 डिपेंडेंसीज

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> आर्च]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> फेडोरा]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
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

अब आप अपने टर्मिनल में `carch` चला सकते हैं। यदि आपको फेडोरा पर कोई समस्या आती है, तो वे डिपेंडेंसी संबंधी हो सकती हैं। इंस्टॉलेशन सुचारू रूप से काम करना चाहिए, लेकिन यदि कोई समस्या आती है, तो कृपया एक [इश्यू](https://github.com/harilvfs/carch/issues) खोलें या मुझे **harilvfs@chalisehari.com.np** पर ईमेल करें।