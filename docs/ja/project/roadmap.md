# Carchプロジェクトロードマップ
<img src="https://img.icons8.com/?size=80&id=CBfO8TrnezXC&format=png" width="50" />

**現在のフェーズ** *[ スクリプト開発の推進 ]* <img src="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" width="20" /> 

*プロジェクトは現在、開発フェーズを進めており、さまざまなディストリビューションをサポートするためのスクリプトの拡張とモジュール化に焦点を当てています。*

## 今後の機能と改善点 ✨

- **異なるディストリビューション向け機能の拡張 🌐**
   - 人気のあるディストリビューションの完全サポート追加：
     - **Arch** <img src="https://img.icons8.com/?size=48&id=uIXgLv5iSlLJ&format=png" width="20" />
     - **Debian** <img src="https://img.icons8.com/?size=48&id=17838&format=png" width="20" /> 
     - **Fedora** <img src="https://img.icons8.com/?size=48&id=ZbBhBW0N2q3D&format=png" width="20" />
     - **openSUSE** <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/suse/opensuse.png" width="20" /> 
     - **Void** <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Void_Linux_logo.svg/256px-Void_Linux_logo.svg.png" width="20" /> 
   - ディストリビューション固有のセットアップスクリプトを開発。

- **スクリプトの安定性向上 🔧**
   - 既存のスクリプトをリファクタリングして安定性を向上。
   - より良いデバッグのためのエラーハンドリングとロギングを実装。

- **Rust実装 🦀**
  - Carchの単一実行可能バイナリを作成。
  - RustベースのTUIを開発。
  - 機能強化のための追加Rustスクリプトを追加。
  
- **コアシステムセットアップスクリプト ⚙️**
   - 初心者向けのコアシステムセットアップスクリプトを開発（例：パッケージ管理、ユーザー設定）。
   - 新しいユーザーを支援するガイドとドキュメントを含める。

- **ポップアップスタイル実行スクリプトTUIの統合：**
  - TUI内でスクリプトを実行し、離れることなく、古い`fzf`ポップアウトスタイルを削除して、よりスムーズな体験を提供。

## Carchプロジェクトチェックリスト
<img src="https://cdn-icons-png.flaticon.com/128/8090/8090840.png" width="30" />

- **人気のあるディストリビューションのサポート拡大：**

  - Arch <img src="https://img.icons8.com/?size=48&id=uIXgLv5iSlLJ&format=png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - Fedora <img src="https://img.icons8.com/?size=48&id=ZbBhBW0N2q3D&format=png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - Debian <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" /> 
  - openSUSE <img src="https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/suse/opensuse.png" width="20" /> <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />  
  - Void <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **安定性のためのスクリプトのリファクタリング：**

  - エラーハンドリングの実装 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - ロギング機能の追加 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **Rustの実装：**

  - TUI（テキストベースユーザーインターフェース）の開発。 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - 単一実行可能バイナリの作成。 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 
  - スクリプト機能を強化するための追加Rustスクリプトの追加。 <img src="https://cdn-icons-png.flaticon.com/128/190/190406.png" width="20" />

- **コアシステムセットアップスクリプトの作成：**
  
  - ユーザー設定 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - パッケージ管理 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
  - 初心者向けドキュメント <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />

- **ポップアップスタイル実行スクリプトTUIの統合：**
  - スクリプトがTUI内で実行され、離れることなく、古い`fzf`ポップアウトスタイルを削除して、よりスムーズな体験を提供。 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" /> 

## タイムライン（暫定） 📅

- **2025年四半期**: 強化されたユーザーインタラクションのためのRustベースTUIを開発。 🦀 <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />
- **2025年/2026年中期**: 安定性のための既存スクリプトのリファクタリングとディストリビューションサポートの拡大開始。（進行中） <img src="https://cdn-icons-png.flaticon.com/128/190/190411.png" width="20" />