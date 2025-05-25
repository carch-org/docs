# 🛠️ स्थापना

## स्थापना स्क्रिप्ट

तपाईं हाम्रो स्थापना स्क्रिप्ट प्रयोग गरेर आफ्नो सिस्टममा Carch स्थायी रूपमा स्थापना गर्न सक्नुहुन्छ:

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)"
```

तपाईं यी विकल्पहरू पनि प्रयोग गर्न सक्नुहुन्छ:

::: code-group

```sh [अपडेट]
# अवस्थित स्थापनालाई अपडेट गर्नुहोस्
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --update
```

```sh [हटाउनुहोस्]
# Carch हटाउनुहोस्
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --uninstall
```
:::

## 📦 Cargo Crate

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch [crates.io](https://crates.io/) मा उपलब्ध छ।

तपाईं [carch](https://crates.io/crates/carch) crate सँग Cargo प्रयोग गरेर यसलाई स्थापना गर्न सक्नुहुन्छ।

पहिले, निर्भरताहरू स्थापना गर्नुहोस्: 

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm fzf cargo rust
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install fzf cargo rust -y
```
:::

अब, Cargo प्रयोग गरेर Carch स्थापना गर्नुहोस्:

```sh
cargo install carch
```

त्यो सकिएपछि, तपाईं आफ्नो टर्मिनलमा `carch` टाइप गरेर यसलाई चलाउन सक्नुहुन्छ।

:::tip :bulb: सुझाव
यदि `carch` पहिचान भएको छैन भने, Cargo को bin डाइरेक्टरीलाई आफ्नो PATH मा थप्नुहोस्:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

## 🏗️ म्यानुअल स्थापना

### 📜 निर्भरताहरू

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```
:::

### 🔧 क्लोन र बिल्ड

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd target/release/
sudo cp -r carch /usr/bin/ 
```

अब तपाईं आफ्नो टर्मिनलमा `carch` चलाउन सक्नुहुन्छ। यदि तपाईंले Fedora मा कुनै समस्याहरू सामना गर्नुभयो भने, ती निर्भरता-सम्बन्धित हुन सक्छन्। स्थापना सजिलैसँग काम गर्नुपर्छ, तर यदि कुनै समस्याहरू उत्पन्न भएमा, कृपया [issue](https://github.com/harilvfs/carch/issues) खोल्नुहोस् वा मलाई **harilvfs@chalisehari.com.np** मा इमेल गर्नुहोस्।