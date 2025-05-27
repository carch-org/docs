# **Carch**에 기여하기 

<img src="https://cdn-icons-png.flaticon.com/128/993/993686.png" width="50" />

**Carch**에 기여하는 데 관심을 가져주셔서 기쁩니다! 버그 수정, 새로운 기능 추가, 문서 개선 등 모든 종류의 기여를 환영합니다. 시작하려면 이 가이드를 따라주세요.

> [!WARNING]  
> **기여하기 전에** 먼저 **[기능 요청](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)** 섹션에서 이슈를 열어주세요. 구현을 진행하기 전에 변경 사항에 대해 논의하겠습니다.

## 📌 코드베이스 이해하기

> [!NOTE]
> 기여하기 전에 Carch의 **구조를 이해**하세요:
> - **Carch의 주요 Rust 파일들은 다음 위치에 있습니다:** `src`
>
>```sh
> src/
> ├── ui/
> │   ├── app.rs
> │   ├── mod.rs
> │   ├── popups.rs
> │   └── render.rs 
> ├── main.rs 
> ├── commands.rs
> ├── display.rs
> ├── script_list.rs 
> └── version.rs
> ```
> 
> - **모든 `modules` 스크립트는 카테고리별로 다음과 같이 구성되어 있습니다:**  
> ```sh
> modules/
> ├── Browser/     # 브라우저 관련 스크립트 
> ├── Desktop/     # 데스크톱 환경 관련 스크립트
> ├── Development/ # 개발 도구 스크립트
> ├── System/      # 시스템 설정 스크립트
> └── Terminal/    # 터미널 설정 스크립트
> ```


> [!IMPORTANT]
> 변경하기 전에 먼저 **스크립트가 어떻게 작동하는지 분석**하세요. 프로젝트를 개선하거나 추가하고 싶다면 **구조를 이해**하고 각 부분이 어떻게 상호작용하는지 확인하세요. 이렇게 하면 프로젝트 설계와 일관된 방식으로 기여할 수 있습니다.
>
> ```sh
> 커밋할 때는 다음과 같은 라벨을 사용하세요
> feat: your-commit-message 또는 fix: your-commit-message.
> ```
> 
> Conventional Commits에 대한 자세한 정보는 이 [가이드](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d)를 참조하세요.


질문이 있거나 도움이 필요하시면 언제든지 **연락주세요**:  
📧 이메일: <a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord: <a href="https://discord.com/invite/8NJWstnUHd">여기서 참여</a>  

## 기여 단계

### 1. 🍽️ 저장소 포크하기
- **Carch** GitHub 페이지로 이동합니다.
- 오른쪽 상단의 **Fork** 버튼을 클릭하여 저장소의 사본을 만듭니다.

### 2. 🌿 포크한 저장소 복제하기
- 다음 명령어를 사용하여 저장소를 로컬 시스템에 복제합니다:

  ```bash
  git clone https://github.com/your-username/carch.git
  ```

- `your-username`을 본인의 GitHub 사용자명으로 바꿔주세요.

:::tip :bulb: 팁
**`GitHub Desktop`과 같은 GUI 도구나 GitHub 웹 인터페이스를 사용하여 저장소를 포크하고 복제할 수도 있습니다. 이러한 도구들은 기여를 관리하기 위한 사용하기 쉬운 시각적 인터페이스를 제공합니다.**
:::

### 3. 🌱 원본 저장소를 업스트림으로 설정하기
- 포크를 최신 상태로 유지하기 위해 원본 **Carch** 저장소를 업스트림 원격으로 추가합니다:

   ```bash
   cd carch
   ```

   ```bash
   git remote add upstream https://github.com/original-author/carch.git
   ```

### 4. 🍇 새로운 기능 브랜치 만들기
- 변경하기 전에 설명적인 이름으로 새 브랜치를 만듭니다:

   ```bash
   git checkout -b feature/your-branch-name
   ```

- 브랜치 이름 예시:
  - `feature/add-new-script`
  - `bugfix/fix-installation-issue`

### 5. 🔧 변경 사항 만들기
- 코드나 문서에 필요한 변경을 구현합니다.
- 변경 사항이 명확하고 테스트되었으며 프로젝트의 코딩 표준을 따르는지 확인합니다.

### 6. 📝 변경 사항 스테이징 및 커밋하기
- 수정된 파일을 스테이징 영역에 추가합니다:

   ```bash
   git add .
   ```

- 명확한 메시지로 변경 사항을 커밋합니다:

   ```bash
   git commit -m "Add: [변경 사항에 대한 간단한 설명]"
   ```

### 7. 🚀 포크에 변경 사항 푸시하기
- 브랜치를 포크한 저장소에 푸시합니다:

   ```bash
   git push origin feature/your-branch-name
   ```

### 8. 📥 풀 리퀘스트(PR) 제출하기
- GitHub의 원본 **Carch** 저장소로 이동합니다.
- **New Pull Request**를 클릭합니다.
- 드롭다운에서 브랜치를 선택하고 변경 사항을 자세히 설명합니다.
- 검토를 위해 PR을 제출합니다!

## 가이드라인

### 코드 품질
- 프로젝트의 기존 코딩 스타일을 따르세요.
- 명확하고 간결하며 잘 문서화된 코드를 작성하세요.

### 테스팅
- 변경 사항이 예상대로 작동하는지 로컬에서 테스트하세요.
- 변경 사항이 새로운 기능을 도입하는 경우, 해당하는 곳에 필요한 테스트를 추가하세요.

### 문서화
- 변경 사항이 새로운 기능을 포함하는 경우, 관련 문서를 업데이트하세요.
- README나 Wiki가 업데이트를 반영하는지 확인하세요.

### 포크 동기화하기
- 충돌을 피하기 위해 포크를 최신 상태로 유지하세요:

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - 저장소의 기본 브랜치가 다르다면 `main`을 해당 브랜치로 바꿔주세요.

**Carch**에 기여해주셔서 감사합니다! 여러분의 노력이 이 프로젝트를 모든 사람에게 더 나은 것으로 만들어줍니다. <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />