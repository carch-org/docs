# 🛠️ Установка

:::warning
Мы поддерживаем только дистрибутивы на основе Arch, Fedora и openSUSE, поэтому пока это не будет работать на других дистрибутивах.
:::

Выполните следующую команду в вашем терминале:

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch доступен на [crates.io](https://crates.io/).

Вы можете установить это с помощью Cargo:

```sh
cargo install carch-cli
```

После установки вы можете запустить его, набрав `carch` в терминале.

:::tip :bulb: СОВЕТ
Если `carch` не распознается, добавьте каталог bin от Cargo в ваш PATH:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ Установка вручную

#### 📜 Зависимости

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

#### 🔧 Клонирование и сборка

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
```

### 🔄 Обновление и Удаление

::: code-group

```sh [ 🔄 Обновить ]
carch update
```

```sh [ 🗑️ Удалить ]
carch uninstall
```

:::
