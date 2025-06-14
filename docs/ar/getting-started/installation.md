# 🛠️ التثبيت

### سكريبت التثبيت

يمكنك تثبيت Carch بشكل دائم على نظامك باستخدام سكريبت التثبيت الخاص بنا:

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)"
```

يمكنك أيضاً استخدام هذه الخيارات:

::: code-group

```sh [التحديث]
# تحديث التثبيت الموجود
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- update
```

```sh [إلغاء التثبيت]
# إلغاء تثبيت Carch
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- uninstall
```
:::

### 📦 حزمة Cargo

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch متوفر على [crates.io](https://crates.io/).

يمكنك تثبيته باستخدام Cargo مع حزمة [carch](https://crates.io/crates/carch).


```sh
cargo install carch
```

بمجرد انتهاء ذلك، يمكنك تشغيله عن طريق كتابة `carch` في طرفيتك.

:::tip :bulb: نصيحة
إذا لم يتم التعرف على `carch`، أضف مجلد bin الخاص بـ Cargo إلى PATH:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ التثبيت اليدوي

#### 📜 التبعيات

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```
:::

#### 🔧 الاستنساخ والبناء

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
```

الآن يمكنك تشغيل `carch` في طرفيتك. إذا واجهت أي مشاكل على Fedora، فقد تكون مرتبطة بالتبعيات. يجب أن يعمل التثبيت بسلاسة، ولكن إذا نشأت أي مشاكل، يرجى فتح [مشكلة](https://github.com/harilvfs/carch/issues) أو راسلني عبر البريد الإلكتروني على **harilvfs@chalisehari.com.np**.
