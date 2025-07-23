# 🛠️ 설치

### 📦 패키지

Arch Linux용 `PKGBUILD`와 Fedora 및 openSUSE용 `.rpm` 파일을 사용합니다.

<div class="danger custom-block" style="padding-top: 8px">

Arch, Fedora, openSUSE 기반 배포판만 지원하므로 현재 다른 배포판에서는 작동하지 않습니다.

</div>

터미널에서 다음 명령을 실행하세요:

```sh
bash -c "$(curl -fsSL chalishari.com.np/carchinstall)"
``` 

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch는 [crates.io](https://crates.io/)에서 이용할 수 있습니다.

[carch](https://crates.io/crates/carch) crate를 사용하여 Cargo로 설치할 수 있습니다.

```sh
cargo install carch
```

완료되면 터미널에서 `carch`를 입력하여 실행할 수 있습니다.

:::tip :bulb: 팁
`carch`가 인식되지 않으면 Cargo의 bin 디렉토리를 PATH에 추가하세요:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ 수동 설치

#### 📜 의존성

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

#### 🔧 클론 및 빌드

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/
```

### 🔄 업데이트 및 제거

::: code-group

```sh [ 🔄 업데이트 ]
carch update
```

```sh [ 🗑️ 제거 ]
carch uninstall
```

:::