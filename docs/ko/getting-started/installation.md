# 🛠️ 설치

:::warning
Arch, Fedora, openSUSE 기반 배포판만 지원하므로 현재 다른 배포판에서는 작동하지 않습니다.
:::

터미널에서 다음 명령을 실행하세요:

```sh
curl -fsSL chalisehari.com.np/carch | sh -s -- install
``` 

설치 후 `carch setup`을 실행하여 셸 완성, man 페이지 및 데스크톱 파일을 설치하세요.

### 📦 Cargo Binstall

<br>

<img src="https://img.shields.io/crates/v/carch-cli?style=for-the-badge&logo=rust&color=f5a97f&logoColor=fe640b&labelColor=171b22" >

Carch는 [crates.io](https://crates.io/)에서 이용할 수 있으며, 프리 빌드 바이너리를 위한 [cargo-binstall](https://github.com/cargo-bins/cargo-binstall)을 지원합니다:

```sh
cargo binstall carch-cli
```

### 📦 Cargo Install

Cargo를 사용하여 설치할 수도 있습니다:

```sh
cargo install carch-cli
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
sudo pacman -S --noconfirm rust git wget curl cargo
```

```sh [<i class="devicon-fedora-plain"></i> Fedora]
sudo dnf install rust git wget curl cargo -y
```

```sh [<i class="devicon-opensuse-plain"></i>  openSUSE ]
sudo zypper install -y rust git wget curl cargo 
```

:::

#### 🔧 클론 및 빌드

```sh
git clone https://github.com/harilvfs/carch
cd carch
cargo build --release
cd build/release/
sudo cp -r carch /usr/local/bin/
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

- **업데이트**: 원래 사용한 설치 방법을 따릅니다: cargo, cargo-binstall 또는 설치 스크립트.
- **제거**: "cargo"를 선택하면 `cargo binstall`로 설치된 바이너리도 제거됩니다. 둘 다 `~/.cargo/bin/`에 설치되기 때문입니다.
