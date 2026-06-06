# 🖥️ CLI-Befehle  

Carch unterstützt auch CLI-Befehle! Verwenden Sie `carch` mit den folgenden Optionen:  

:::code-group

```sh [⚙️ CLI]
carch --help
```

:::

## 📦 Verwendung

carch [OPTIONEN] [BEFEHL]

---

## 🔧 Befehlsaufschlüsselung

| 🏷️ Befehl                  | 📄 Beschreibung                                                                                   |
|----------------------------|---------------------------------------------------------------------------------------------------|
| `check-update`             | Überprüfen, ob eine neue Version verfügbar ist.                                                              |
| `update`                   | Carch interaktiv aktualisieren.                                                                       |
| `uninstall`                | Carch interaktiv deinstallieren.                                                                    |
| `help`                     | Diese Nachricht oder Hilfe für den/die angegebenen Unterbefehl(e) anzeigen.                                           |
| `--log`, `-l`              | Aktiviert die Protokollierung nur für die aktuelle Sitzung. Protokolle werden in `~/.config/carch/carch.log` gespeichert.       |
| `--version`, `-v`          | Programmversion anzeigen.                                                                         |
| `--catppuccin-mocha`, `-c` | Design auf **Catppuccin Mocha** setzen.                                                            |
| `--dracula`, `-d`          | Design auf **Dracula** setzen.                                                                     |
| `--gruvbox`, `-g`          | Design auf **Gruvbox** setzen.                                                                     |
| `--nord`, `-n`             | Design auf **Nord** setzen.                                                                        |
| `--rose-pine`, `-r`        | Design auf **Rosé Pine** setzen.                                                                   |
| `--fav <THEME>`            | Das angegebene Design als Favorit speichern und beenden.                                          |
| `--unfav`                  | Das gespeicherte Lieblings-Design löschen.                                                         |
| `--help`, `-h`             | Diese Hilfsnachricht anzeigen und beenden.                                                                  |