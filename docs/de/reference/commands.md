# 🖥️ CLI-Befehle

Carch unterstützt auch CLI-Befehle! Verwende `carch` mit den folgenden Optionen:

:::code-group

```sh [⚙️ CLI]
carch --help
```

:::

## 🔧 Befehlsaufschlüsselung

| 🏷️ Befehl          | 📄 Beschreibung                                                                             |
|--------------------|----------------------------------------------------------------------------------------------|
| `--help`, `-h`     | Diese Hilfemeldung anzeigen und beenden.                                                    |
| `--version`, `-v`  | Die Programmversion anzeigen.                                                               |
| `--log`            | Protokollierung nur für die aktuelle Sitzung unter `~/.config/carch/carch.log` aktivieren.|
| `--no-cleanup`     | Cache-Bereinigung des Modul-Skripts im `~/.cache/carch` Verzeichnis deaktivieren.          |
| `check-update`     | Überprüfen, ob eine neue Version verfügbar ist.                                             |
| `update`           | Carch interaktiv aktualisieren.                                                             |
| `uninstall`        | Carch interaktiv deinstallieren.