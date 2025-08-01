# 🛠️ التثبيت

### 📦 الحزمة

نستخدم `PKGBUILD` لـ Arch Linux وملفات `.rpm` لـ Fedora و openSUSE.

:::warning
نحن ندعم فقط التوزيعات المبنية على Arch و Fedora و openSUSE، لذا لن يعمل على التوزيعات الأخرى حالياً.
:::

قم بتنفيذ الأمر التالي في الطرفية:

```sh
bash -c "$(curl -fsSL chalisehari.com.np/carchinstall)"
```

### 📦 حزمة Cargo

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch متاح على [crates.io](https://crates.io/).

يمكنك تثبيته باستخدام كارجو:

```sh
cargo install carch-cli
```

بمجرد الانتهاء من ذلك، يمكنك تشغيله بكتابة `carch` في الطرفية الخاصة بك.

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
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust man man-pages git wget google-noto-fonts google-noto-coloremoji-fonts jetbrains-mono-fonts  symbols-only-nerd-fonts bash-completion curl 
```

:::

#### 🔧 الاستنساخ والبناء

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/
```

### 🔄 التحديث والإلغاء

::: code-group

```sh [ 🔄 تحديث ]
carch update
```

```sh [ 🗑️ إلغاء التثبيت ]
carch uninstall
```

:::
