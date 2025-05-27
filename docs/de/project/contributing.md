# Beitrag zu **Carch** 

<img src="https://cdn-icons-png.flaticon.com/128/993/993686.png" width="50" />

Wir freuen uns, dass Sie daran interessiert sind, zu **Carch** beizutragen! Beiträge aller Art sind willkommen, egal ob Sie Fehler beheben, neue Funktionen hinzufügen oder die Dokumentation verbessern. Befolgen Sie diese Anleitung, um loszulegen.

> [!WARNING]  
> **Bevor Sie Beiträge leisten**, öffnen Sie zuerst ein Issue im Bereich **[Feature Request](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)**. Wir werden die Änderungen dort besprechen, bevor wir mit der Implementierung fortfahren.  

## 📌 Die Codebasis verstehen

> [!NOTE]
> Bevor Sie beitragen, **verstehen Sie die Struktur** von Carch:
> - **Die Haupt-Rust-Dateien von Carch befinden sich in:** `src`
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
> - **Alle `Module`-Skripte sind nach Kategorien organisiert in:**  
> ```sh
> modules/
> ├── Browser/     # Browser-bezogene Skripte 
> ├── Desktop/     # Desktop-Umgebung-bezogene Skripte
> ├── Development/ # Entwicklungstools-Skripte
> ├── System/      # System-Konfigurationsskripte
> └── Terminal/    # Terminal-Setup-Skripte
> ```


> [!IMPORTANT]
> Zuerst **analysieren Sie, wie das Skript funktioniert**, bevor Sie Änderungen vornehmen. Wenn Sie das Projekt verbessern oder erweitern möchten, stellen Sie sicher, dass Sie **die Struktur verstehen** und wie jedes Teil interagiert. Dies wird Ihnen helfen, auf eine Weise beizutragen, die mit dem Design des Projekts konsistent ist. 
>
> ```sh
> Für Commits verwenden Sie Labels wie
> feat: ihr-commit-nachricht oder fix: ihr-commit-nachricht.
> ```
> 
> Für weitere Informationen über Conventional Commits, bevorzugen Sie diese [Anleitung](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d).


Wenn Sie Fragen haben oder Hilfe benötigen, kontaktieren Sie uns gerne:  
📧 E-Mail: <a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord: <a href="https://discord.com/invite/8NJWstnUHd">Hier beitreten</a>  

## Schritte zum Beitragen

### 1. 🍽️ Repository forken
- Gehen Sie zur **Carch** GitHub-Seite.
- Klicken Sie auf die **Fork**-Schaltfläche in der oberen rechten Ecke, um Ihre eigene Kopie des Repositorys zu erstellen.

### 2. 🌿 Das geforkte Repository klonen
- Verwenden Sie den folgenden Befehl, um das Repository auf Ihr lokales System zu klonen:

  ```bash
  git clone https://github.com/ihr-benutzername/carch.git
  ```

- Ersetzen Sie `ihr-benutzername` durch Ihren GitHub-Benutzernamen.

:::tip :bulb: TIPP
**Sie können auch GUI-Tools wie `GitHub Desktop` oder sogar die GitHub-Web-Oberfläche verwenden, um Repositorys zu forken und zu klonen. Diese Tools bieten eine benutzerfreundliche visuelle Oberfläche für die Verwaltung Ihrer Beiträge.**
:::

### 3. 🌱 Das ursprüngliche Repository als Upstream setzen
- Fügen Sie das ursprüngliche **Carch**-Repository als Upstream-Remote hinzu, um Ihren Fork auf dem neuesten Stand zu halten:

   ```bash
   cd carch
   ```

   ```bash
   git remote add upstream https://github.com/original-author/carch.git
   ```

### 4. 🍇 Einen neuen Feature-Branch erstellen
- Bevor Sie Änderungen vornehmen, erstellen Sie einen neuen Branch mit einem beschreibenden Namen:

   ```bash
   git checkout -b feature/ihr-branch-name
   ```

- Beispiele für Branch-Namen:
  - `feature/add-new-script`
  - `bugfix/fix-installation-issue`

### 5. 🔧 Ihre Änderungen vornehmen
- Implementieren Sie die notwendigen Änderungen am Code oder der Dokumentation.
- Stellen Sie sicher, dass Ihre Änderungen klar, getestet und den Codierungsstandards des Projekts entsprechend sind.

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
   git push origin feature/ihr-branch-name
   ```

### 8. 📥 Einen Pull Request (PR) einreichen
- Gehen Sie zum ursprünglichen **Carch**-Repository auf GitHub.
- Klicken Sie auf **New Pull Request**.
- Wählen Sie Ihren Branch aus dem Dropdown-Menü und beschreiben Sie Ihre Änderungen im Detail.
- Reichen Sie den PR zur Überprüfung ein!

## Richtlinien

### Code-Qualität
- Befolgen Sie den bestehenden Programmierstil des Projekts.
- Schreiben Sie klaren, prägnanten und gut dokumentierten Code.

### Testen
- Testen Sie Ihre Änderungen lokal, um sicherzustellen, dass sie wie erwartet funktionieren.
- Wenn Ihre Änderungen neue Funktionen einführen, fügen Sie notwendige Tests hinzu, wo anwendbar.

### Dokumentation
- Wenn Ihre Änderungen neue Funktionalität betreffen, aktualisieren Sie die relevante Dokumentation.
- Stellen Sie sicher, dass die README oder das Wiki Ihre Updates widerspiegelt.

### Ihren Fork synchronisieren
- Halten Sie Ihren Fork aktuell, um Konflikte zu vermeiden:

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - Ersetzen Sie `main` durch den Standard-Branch des Repositorys, falls er anders ist.

Vielen Dank für Ihren Beitrag zu **Carch**! Ihr Einsatz hilft dabei, dieses Projekt für alle zu verbessern. <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />