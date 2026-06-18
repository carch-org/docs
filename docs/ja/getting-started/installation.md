# 🛠️ インストール

:::warning
現在はArch、Fedora、openSUSEベースのディストリビューションのみをサポートしています。そのため、他のディストリビューションでは動作しません。
:::

ターミナルで以下のコマンドを実行してください：

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
```

### 📦 Cargoクレート

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carchは[crates.io](https://crates.io/)で利用可能です。

Cargoを使用してインストールできます：

```sh
cargo install carch-cli
```

インストールが完了したら、ターミナルで`carch`と入力して実行できます。

:::tip :bulb: ヒント
`carch`が認識されない場合は、CargoのbinディレクトリをPATHに追加してください：

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ 手動インストール

#### 📜 依存関係

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

#### 🔧 クローンとビルド

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
```

### 🔄 アップデートとアンインストール

::: code-group

```sh [ 🔄 アップデート ]
carch update
```

```sh [ 🗑️ アンインストール ]
carch uninstall
```

:::