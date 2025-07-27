# Carch 프로젝트 로드맵 
<img src="https://img.icons8.com/?size=80&id=CBfO8TrnezXC&format=png" width="50" />

**현재 단계** *[ 스크립트 개발 진행 ]* <img src="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" width="20" /> 

*이 프로젝트는 현재 개발 단계가 진행 중이며, 다양한 배포판을 지원하기 위해 스크립트를 확장하고 모듈화하는 데 집중하고 있습니다.*

## 예정된 기능 및 개선사항 ✨

- **다양한 배포판에 대한 기능 확장 🌐**
   - 인기 배포판에 대한 완전한 지원 추가:
     - **Arch** <img src="https://img.icons8.com/?size=48&id=uIXgLv5iSlLJ&format=png" width="20" />
     - **Debian** <img src="https://img.icons8.com/?size=48&id=17838&format=png" width="20" /> 
     - **Fedora** <img src="https://img.icons8.com/?size=48&id=ZbBhBW0N2q3D&format=png" width="20" />
     - **openSUSE** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/suse/opensuse.png" width="20" /> 
     - **Void** <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Void_Linux_logo.svg/256px-Void_Linux_logo.svg.png" width="20" /> 
   - 배포판별 맞춤 설정 스크립트 개발.

- **스크립트 안정성 향상 🔧**
   - 개선된 안정성을 위한 기존 스크립트 리팩토링.
   - 더 나은 디버깅을 위한 오류 처리 및 로깅 구현.

- **Rust 구현 🦀**
  - Carch용 단일 실행 바이너리 생성. 
  - Rust 기반 TUI 개발. 
  - 향상된 기능을 위한 추가 Rust 스크립트 추가. 

- **핵심 시스템 설정 스크립트 ⚙️**
   - 핵심 시스템 설정을 위한 초보자 친화적 스크립트 개발 (예: 패키지 관리, 사용자 구성).
   - 새로운 사용자를 돕기 위한 가이드 및 문서 포함.

- **팝업 스타일 실행 스크립트 TUI 통합:**  
  - TUI를 벗어나지 않고 스크립트를 내부에서 실행하여 기존 `fzf` 팝업 스타일을 제거하고 더 부드러운 사용 경험을 제공합니다.

## Carch 프로젝트 체크리스트 
<img src="https://cdn-icons-png.flaticon.com/128/8090/8090840.png" width="30" />

- **인기 배포판 지원 확장:**

  - Arch <img src="https://img.icons8.com/?size=48&id=uIXgLv5iSlLJ&format=png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - Fedora <img src="https://img.icons8.com/?size=48&id=ZbBhBW0N2q3D&format=png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - Debian <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" /> 
  - openSUSE <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/suse/opensuse.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />  
  - Void <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **안정성을 위한 스크립트 리팩토링:**

  - 오류 처리 구현 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - 로깅 기능 추가 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **Rust 구현:**

  - TUI (텍스트 기반 사용자 인터페이스) 개발. <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - 단일 실행 바이너리 생성. <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - 스크립팅 능력을 향상시키기 위한 추가 Rust 스크립트 추가. <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **핵심 시스템 설정 스크립트 생성:**
  
  - 사용자 구성 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - 패키지 관리 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - 초보자용 문서 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **팝업 스타일 실행 스크립트 TUI 통합:**  
  - 이제 스크립트는 TUI 내부에서 실행되어 기존 `fzf` 팝업 스타일이 제거되고 더 부드러운 사용 경험이 제공됩니다. <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

## 타임라인 (잠정) 📅

- **Q 2025**: 사용자 상호작용 강화를 위한 Rust 기반 TUI 개발. 🦀 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
- **2025/2026년 중반**: 기존 스크립트를 안정성을 위해 리팩토링하고 배포판 지원 확장을 시작합니다. (진행 중) <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />