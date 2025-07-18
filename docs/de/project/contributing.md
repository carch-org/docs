# 📑 Inhaltsverzeichnis

- [Beitrag zu Carch](#beitrag-zu-carch)
  - [Die Codebasis verstehen](#📌-die-codebasis-verstehen)
  - [Schritte zum Beitragen](#schritte-zum-beitragen)

- [Beitrag zur Carch-Dokumentation](#📚-beitrag-zur-carch-dokumentation)

- [Richtlinien](#richtlinien)

## Beitrag zu **Carch**

Wir freuen uns, dass Sie daran interessiert sind, zu **Carch** beizutragen! Beiträge aller Art sind willkommen, egal ob Sie Bugs beheben, neue Features hinzufügen oder die Dokumentation verbessern. Folgen Sie diesem Leitfaden, um zu beginnen.

> [!WARNING]  
> **Bevor Sie Beiträge leisten**, öffnen Sie zunächst ein Issue im Bereich **[Feature Request](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)**. Wir werden dort über die Änderungen diskutieren, bevor wir mit der Implementierung fortfahren.

## 📌 Die Codebasis verstehen

> [!IMPORTANT]
> Zuerst **analysiere, wie das Skript funktioniert**, bevor du Änderungen vornimmst. Wenn du das Projekt verbessern oder erweitern möchtest, stelle sicher, dass du **die Struktur verstehst** und wie jeder Teil interagiert. Das wird dir helfen, auf eine Weise beizutragen, die mit dem Design des Projekts übereinstimmt.
>
> ```md
> Für Commits folge dem konventionellen Commit-Stil:
> feat: deine-commit-nachricht oder fix: deine-commit-nachricht.
> ```
>
> Übrigens, bevor du commitest, wenn du irgendwelche `.sh` oder bash-Skript-Dateien änderst, stelle sicher, dass du das `scripts/` Verzeichnis überprüfst und `./check.sh` ausführst, um zusätzliche Leer- oder Zwischenräume zu finden. Wenn es fehlschlägt, führe `./cleanup.sh` aus. Stelle auch sicher, dass Shell-Skripte mit `shfmt` formatiert sind.
> Für Rust-Dateiänderungen stelle sicher, dass du `cargo fmt --all --check` ausführst. Wenn es Vorschläge gibt, führe `cargo fmt --all` aus.
> Stelle auch sicher, dass du `cargo clippy` und `cargo clippy -- -D warnings` ausführst, um sicherzustellen, dass keine Fehler übrig bleiben. Danke.

> Für weitere Informationen über Conventional Commits, siehe diesen [Leitfaden](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d).

Wenn Sie Fragen haben oder Hilfe benötigen, zögern Sie nicht, **uns zu kontaktieren**:  
📧 E-Mail: <a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord: <a href="https://discord.com/invite/8NJWstnUHd">Hier beitreten</a>  

## Schritte zum Beitragen

### 1. 🍽️ Repository forken
- Gehen Sie zur **Carch** GitHub-Seite.
- Klicken Sie auf die **Fork**-Schaltfläche in der oberen rechten Ecke, um Ihre eigene Kopie des Repositories zu erstellen.

### 2. 🌿 Das geforkte Repository klonen
- Verwenden Sie den folgenden Befehl, um das Repository auf Ihr lokales System zu klonen:

  ```bash
  git clone https://github.com/your-username/carch.git
  ```

- Ersetzen Sie `your-username` durch Ihren GitHub-Benutzernamen.

:::tip :bulb: TIP
**Sie können auch GUI-Tools wie `GitHub Desktop` oder sogar die GitHub-Web-Oberfläche verwenden, um Repositories zu forken und zu klonen. Diese Tools bieten eine benutzerfreundliche visuelle Oberfläche für die Verwaltung Ihrer Beiträge.**
:::

### 3. 🌱 Das ursprüngliche Repository als Upstream setzen
- Fügen Sie das ursprüngliche **Carch**-Repository als Upstream-Remote hinzu, um Ihren Fork aktuell zu halten:

   ```bash
   cd carch
   ```

   ```bash
   git remote add upstream https://github.com/original-author/carch.git
   ```

### 4. 🍇 Einen neuen Feature-Branch erstellen
- Bevor Sie Änderungen vornehmen, erstellen Sie einen neuen Branch mit einem beschreibenden Namen:

   ```bash
   git checkout -b feature/your-branch-name
   ```

- Beispiele für Branch-Namen:
  - `feature/add-new-script`
  - `bugfix/fix-installation-issue`

### 5. 🔧 Ihre Änderungen vornehmen
- Implementieren Sie die notwendigen Änderungen am Code oder der Dokumentation.
- Stellen Sie sicher, dass Ihre Änderungen klar, getestet und den Coding-Standards des Projekts entsprechend sind.

### 6. 📝 Ihre Änderungen stagen und committen
- Fügen Sie die geänderten Dateien zur Staging-Area hinzu:

   ```bash
   git add .
   ```

- Committen Sie Ihre Änderungen mit einer klaren Nachricht:

   ```bash
   git commit -m "Add: [kurze Beschreibung Ihrer Änderungen]"
   ```

### 7. 🚀 Die Änderungen zu Ihrem Fork pushen
- Pushen Sie Ihren Branch zu Ihrem geforkten Repository:

   ```bash
   git push origin feature/your-branch-name
   ```

### 8. 📥 Einen Pull Request (PR) einreichen
- Gehen Sie zum ursprünglichen **Carch**-Repository auf GitHub.
- Klicken Sie auf **New Pull Request**.
- Wählen Sie Ihren Branch aus dem Dropdown-Menü und beschreiben Sie Ihre Änderungen im Detail.
- Reichen Sie den PR zur Überprüfung ein!

## 📚 Beitrag zur Carch-Dokumentation

#### **Carch Docs** ist ➥ [Hier live](https://github.com/carch-org/docs)  

### 🚀 Möglichkeiten beizutragen

Sie können beitragen durch:

- 🪛 Behebung von Tippfehlern oder Fehlern in bestehenden Leitfäden  
- 🌐 Übersetzung der Dokumentation in andere Sprachen (**sehr erwünscht!**)  

### 🌍 Dokumentation übersetzen

#### Möchten Sie helfen, Carch für Benutzer weltweit zugänglich zu machen? Helfen Sie uns bei der Übersetzung der Dokumentation!

Wenn Sie eine **neue Sprache** beitragen, folgen Sie diesen Schritten:

1. 📁 Erstellen Sie einen neuen Ordner für Ihre Sprache im `docs/`-Verzeichnis. Verwenden Sie [ISO 639-1-Codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (z.B. `fr`, `es`, `hi`, usw.).  
2. 🛠️ Übersetzen Sie den Markdown-Inhalt im neuen Ordner.  
3. 🧩 Ändern Sie `docs/.vitepress/config.ts`:  
   - Fügen Sie Ihre Sprache im `locales`-Bereich hinzu.  
   - Geben Sie ein `label`, `lang` und `link` für die Navigation an.  

### 🧪 Ihre Änderungen lokal testen

Um Ihre Änderungen in der Vorschau zu sehen:

```sh
bun install
bun run docs:dev
```

> [!IMPORTANT]
> Bitte öffnen Sie zuerst ein Issue, wenn Sie größere strukturelle oder organisatorische Änderungen einführen möchten. Wir würden gerne vorab darüber diskutieren und zusammenarbeiten!

### 🧾 Commit-Stil

Verwenden Sie klare Commit-Nachrichten wie:

```sh
git commit -m "fix(docs): Tippfehler in der Installationsanleitung korrigieren"
git commit -m "feat(docs): Deutsche Übersetzung hinzufügen"
```

Mehr über [Conventional Commits](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d).

#### 🙌 Danke, dass Sie bei der Verbesserung der Dokumentation helfen!

## Richtlinien

### Code-Qualität
- Folgen Sie dem bestehenden Coding-Stil des Projekts.
- Schreiben Sie klaren, prägnanten und gut dokumentierten Code.

### Testen
- Testen Sie Ihre Änderungen lokal, um sicherzustellen, dass sie wie erwartet funktionieren.
- Wenn Ihre Änderungen neue Features einführen, fügen Sie notwendige Tests hinzu, wo anwendbar.

### Dokumentation
- Wenn Ihre Änderungen neue Funktionalitäten beinhalten, aktualisieren Sie die relevante Dokumentation.
- Stellen Sie sicher, dass die README oder das Wiki Ihre Updates widerspiegelt.

### Ihren Fork synchronisieren
- Halten Sie Ihren Fork aktuell, um Konflikte zu vermeiden:

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - Ersetzen Sie `main` durch den Standard-Branch des Repositories, falls er unterschiedlich ist.

Vielen Dank für Ihren Beitrag zu **Carch**! Ihre Bemühungen helfen dabei, dieses Projekt für alle besser zu machen. <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />
