# 🛠️ التثبيت

:::warning
نحن ندعم فقط التوزيعات المبنية على Arch و Fedora و openSUSE، لذا لن يعمل على التوزيعات الأخرى حالياً.
:::

قم بتنفيذ الأمر التالي في الطرفية:

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

### 📦 حزمة Cargo

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

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
sudo pacman -S --noconfirm rust git wget curl cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust git wget curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust git wget curl cargo 
```

:::

#### 🔧 الاستنساخ والبناء

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
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
