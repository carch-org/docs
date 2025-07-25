# 📑 목차

- [Carch에 기여하기](#carch에-기여하기)
  - [코드베이스 이해하기](#📌-코드베이스-이해하기)
  - [기여 단계](#기여-단계)

- [Carch 문서에 기여하기](#📚-carch-문서에-기여하기)

- [가이드라인](#가이드라인)

## **Carch**에 기여하기

**Carch**에 기여하는 데 관심을 가져주셔서 감사합니다! 버그 수정, 새로운 기능 추가, 문서 개선 등 모든 종류의 기여를 환영합니다. 시작하려면 이 가이드를 따라주세요.

> [!WARNING]  
> **기여하기 전에** 먼저 **[기능 요청](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)** 섹션에서 이슈를 열어주세요. 구현을 진행하기 전에 변경 사항에 대해 논의할 것입니다.

## 📌 코드베이스 이해하기

> [!IMPORTANT]
> 먼저 변경사항을 적용하기 전에 **스크립트가 어떻게 작동하는지 분석하세요**. 프로젝트를 개선하거나 추가하고 싶다면 **구조를 이해하고** 각 부분이 어떻게 상호작용하는지 확인하세요. 이는 프로젝트 설계와 일관성 있게 기여하는 데 도움이 됩니다.
>
> ```md
> 커밋할 때는 관습적인 커밋 스타일을 따르세요:
> feat: 여러분의-커밋-메시지 또는 fix: 여러분의-커밋-메시지.
> ```
>
> 참고로, 커밋하기 전에 `.sh` 스크립트 파일을 변경한다면 [`shfmt`](https://github.com/mvdan/sh)으로 포맷했는지 확인하세요.
>
> RRust 파일의 어떤 부분에든 변경사항이 있을 때는 포맷팅과 기타 검증을 확인하기 위해 `cargo xtask ci`를 실행하세요. 어디에도 오류가 없는지 확인하지 않고 직접 푸시하지 않도록 하세요.

> Conventional Commits에 대한 자세한 정보는 이 [가이드](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d)를 참고하세요.

질문이 있거나 도움이 필요하시면 언제든지 **연락**해 주세요:  
📧 이메일: <a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord: <a href="https://discord.com/invite/8NJWstnUHd">여기서 참여하기</a>  

## 기여 단계

### 1. 🍽️ 저장소 포크하기
- **Carch** GitHub 페이지로 이동합니다.
- 오른쪽 상단의 **Fork** 버튼을 클릭하여 저장소의 사본을 만듭니다.

### 2. 🌿 포크된 저장소 클론하기
- 다음 명령어를 사용하여 저장소를 로컬 시스템에 클론합니다:

  ```bash
  git clone https://github.com/your-username/carch.git
  ```

- `your-username`을 본인의 GitHub 사용자명으로 바꿔주세요.

:::tip :bulb: 팁
**`GitHub Desktop`과 같은 GUI 도구나 GitHub 웹 인터페이스를 사용하여 저장소를 포크하고 클론할 수도 있습니다. 이러한 도구들은 기여를 관리하기 위한 사용하기 쉬운 시각적 인터페이스를 제공합니다.**
:::

### 3. 🌱 원본 저장소를 업스트림으로 설정하기
- 포크를 최신 상태로 유지하기 위해 원본 **Carch** 저장소를 업스트림 원격으로 추가합니다:

   ```bash
   cd carch
   ```

   ```bash
   git remote add upstream https://github.com/original-author/carch.git
   ```

### 4. 🍇 새로운 기능 브랜치 생성하기
- 변경하기 전에 설명적인 이름으로 새 브랜치를 생성합니다:

   ```bash
   git checkout -b feature/your-branch-name
   ```

- 브랜치 이름 예시:
  - `feature/add-new-script`
  - `bugfix/fix-installation-issue`

### 5. 🔧 변경사항 적용하기
- 코드나 문서에 필요한 변경사항을 구현합니다.
- 변경사항이 명확하고 테스트되었으며 프로젝트의 코딩 표준을 따르는지 확인합니다.

### 6. 📝 변경사항 스테이징 및 커밋하기
- 수정된 파일을 스테이징 영역에 추가합니다:

   ```bash
   git add .
   ```

- 명확한 메시지로 변경사항을 커밋합니다:

   ```bash
   git commit -m "Add: [변경사항에 대한 간단한 설명]"
   ```

### 7. 🚀 포크로 변경사항 푸시하기
- 브랜치를 포크된 저장소로 푸시합니다:

   ```bash
   git push origin feature/your-branch-name
   ```

### 8. 📥 풀 리퀘스트(PR) 제출하기
- GitHub의 원본 **Carch** 저장소로 이동합니다.
- **New Pull Request**를 클릭합니다.
- 드롭다운에서 본인의 브랜치를 선택하고 변경사항을 자세히 설명합니다.
- 검토를 위해 PR을 제출합니다!

## 📚 Carch 문서에 기여하기

#### **Carch 문서**는 ➥ [여기서 확인](https://github.com/carch-org/docs)

### 🚀 기여 방법

다음과 같은 방법으로 기여할 수 있습니다:

- 🪛 기존 가이드의 오타나 실수 수정
- 🌐 문서를 다른 언어로 번역 (**적극 권장합니다!**)

### 🌍 문서 번역하기

#### Carch를 전 세계 사용자들이 접근할 수 있도록 도와주고 싶으신가요? 문서 번역에 도움을 주세요!

**새로운 언어**를 추가하는 경우 다음 단계를 따르세요:

1. 📁 `docs/` 디렉토리 내에 언어별 새 폴더를 생성합니다. [ISO 639-1 코드](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)를 사용하세요 (예: `fr`, `es`, `hi`, `ko` 등).
2. 🛠️ 새 폴더 내의 마크다운 콘텐츠를 번역합니다.
3. 🧩 `docs/.vitepress/config.ts`를 수정합니다:
   - `locales` 섹션에 언어를 추가합니다.
   - 내비게이션을 위한 `label`, `lang`, `link`를 제공합니다.

### 🧪 로컬에서 변경사항 테스트하기

변경사항을 미리 보려면:

```sh
bun install
bun run docs:dev
```

> [!IMPORTANT]
> 주요한 구조적 또는 조직적 변경을 도입할 계획이라면 먼저 이슈를 열어주세요. 미리 논의하고 협력하고 싶습니다!

### 🧾 커밋 스타일

명확한 커밋 메시지를 사용하세요:

```sh
git commit -m "fix(docs): 설치 가이드의 오타 수정"
git commit -m "feat(docs): 한국어 번역 추가"
```

[Conventional Commits](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d)에 대한 자세한 정보.

#### 🙌 문서 개선에 도움을 주셔서 감사합니다!

## 가이드라인

### 코드 품질
- 프로젝트의 기존 코딩 스타일을 따르세요.
- 명확하고 간결하며 잘 문서화된 코드를 작성하세요.

### 테스팅
- 변경사항이 예상대로 작동하는지 로컬에서 테스트하세요.
- 변경사항에 새로운 기능이 포함된 경우 필요한 테스트를 추가하세요.

### 문서화
- 변경사항에 새로운 기능이 포함된 경우 관련 문서를 업데이트하세요.
- README나 Wiki가 업데이트 내용을 반영하도록 하세요.

### 포크 동기화하기
- 충돌을 피하기 위해 포크를 최신 상태로 유지하세요:

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - 저장소의 기본 브랜치가 다른 경우 `main`을 해당 브랜치명으로 바꿔주세요.

**Carch**에 기여해 주셔서 감사합니다! 여러분의 노력이 이 프로젝트를 모든 사람에게 더 좋은 것으로 만들어줍니다. <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />