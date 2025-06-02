### 필수 조건

- `fzf`는 **Carch 스크립트**의 TUI 인터페이스에 필요합니다.  
  **Carch 스크립트**를 사용하기 전에 `fzf`가 설치되어 있는지 확인하세요.

## 🛠️ 설치

### 설치 스크립트

설치 스크립트를 사용하여 Carch를 시스템에 영구적으로 설치할 수 있습니다:

```sh
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)"
```

다음 옵션들도 사용할 수 있습니다:

::: code-group

```sh [업데이트]
# 기존 설치 업데이트
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --update
```

```sh [제거]
# Carch 제거
bash -c "$(curl -fsSL https://chalisehari.com.np/carchinstall)" -- --uninstall
```
:::

### 📦 Cargo Crate

<br>

<img src="https://img.shields.io/crates/v/carch?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch는 [crates.io](https://crates.io/)에서 사용할 수 있습니다.

[carch](https://crates.io/crates/carch) crate를 사용하여 Cargo로 설치할 수 있습니다.

```sh
cargo install carch
```

설치가 완료되면 터미널에서 `carch`를 입력하여 실행할 수 있습니다.

:::tip :bulb: 팁
`carch`가 인식되지 않는다면, Cargo의 bin 디렉토리를 PATH에 추가하세요:

```sh
export PATH="$HOME/.cargo/bin:$PATH"
```

:::

### 🏗️ 수동 설치

#### 📜 종속성

:::code-group

```sh [<i class="devicon-archlinux-plain"></i> Arch]
sudo pacman -S --noconfirm rust man-db man git wget noto-fonts-emoji curl bash-completion ttf-nerd-fonts-symbols ttf-jetbrains-mono-nerd cargo fzf glibc gcc
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust man-db man git wget google-noto-color-emoji-fonts google-noto-emoji-fonts jetbrains-mono-fonts-all bash-completion-devel curl cargo fzf glibc gcc -y
```
:::

#### 🔧 복제 및 빌드

```sh
git clone --depth 1 https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/bin/ 
```

이제 터미널에서 `carch`를 실행할 수 있습니다. Fedora에서 문제가 발생하면 종속성과 관련된 문제일 수 있습니다. 설치는 원활하게 진행되어야 하지만 문제가 발생하면 [이슈](https://github.com/harilvfs/carch/issues)를 열거나 **harilvfs@chalisehari.com.np**로 이메일을 보내주세요.