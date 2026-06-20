# ⌨ TUI-Tastenkombinationen

In Carch gibt es einige Tastenkombinationen, die zur Navigation und Interaktion mit der TUI verwendet werden. Du kannst alle Tastenkombinationen jederzeit sehen, indem du `?` innerhalb der Carch-TUI drückst.

Hier sind einige klare Informationen über die Tastenkombinationen, die dir helfen können, sie richtig zu verwenden.

---

## Navigation

Wir verwenden Vim-Navigationstasten für die Bewegung (oben, unten, links, rechts).

- `j` → nach unten bewegen
- `k` → nach oben bewegen
- `h` → nach links bewegen
- `l` → nach rechts bewegen

Du kannst auch die Pfeiltasten für die Bewegung verwenden:

- `↑` → nach oben bewegen
- `↓` → nach unten bewegen
- `←` → nach links bewegen
- `→` → nach rechts bewegen

Du kannst entweder Vim-Tasten oder Pfeiltasten bevorzugen, je nachdem, was sich für dich angenehmer anfühlt.

---

## Skripte ausführen

Für schnelle Aktionen wie das Ausführen eines Skripts:

- Navigiere zu einem beliebigen Skript auf der rechten Seite und drücke `Enter`, um es auszuführen.
- Wenn du ein Neovim-Enthusiast bist, kannst du auch `l` drücken, um es auszuführen.

Wenn die Bestätigungsaufforderung erscheint:

- Drücke `y`, `l` oder `→` zum Bestätigen und Ausführen.
- Drücke `n`, `h`, `Esc`, `q` oder `←` zum Abbrechen.

---

## Mehrfachauswahl-Modus

Du kannst nicht mehrere Skripte gleichzeitig ausführen, aber du kannst mehrere Skripte auswählen, und sie werden nacheinander in der von dir gewählten Reihenfolge ausgeführt.

So verwendest du die Mehrfachauswahl:

- Drücke `m`, um den Mehrfachauswahl-Modus zu aktivieren
- Drücke `Leertaste`, um Skripte auszuwählen
- Drücke `Enter`, um sie auszuführen
- Drücke `Esc` oder `q`, um den Mehrfachauswahl-Modus zu verlassen

Sie werden nacheinander ausgeführt, nachdem jedes abgeschlossen ist.

---

## Designs (Themes)

Das Carch TUI hat auch mehrere Designs. Du kannst ein Standard-Design festlegen, das über Sitzungen hinweg gespeichert wird.

- Drücke `t`, um den Design-Auswahl-Popup zu öffnen
- Verwende `j`/`k` oder `↑`/`↓` zum Navigieren
- Drücke `Enter`, um das ausgewählte Design als Standard zu setzen
- Drücke `Esc`, `q` oder `t`, um ohne Änderung zu schließen

Das gewählte Design wird gespeichert und bei zukünftigen Starts verwendet. Du kannst auch das `--set-theme` CLI-Flag verwenden, um es vom Terminal aus zu setzen.

---

## Suche

Wir haben auch eine Suchoption, falls du schnell ein Skript finden möchtest, ohne hin und her navigieren zu müssen.

- Drücke `/`, um den Suchmodus zu aktivieren
- Gib den Skriptnamen ein
- Du kannst die Tab-Taste zur automatischen Vervollständigung verwenden
- Drücke `Enter`, um zu diesem Skript zu navigieren

---

## Vorschau

Wenn du das Skript vor der Ausführung überprüfen möchtest:

- Drücke `p`, um eine Vorschau des Skripts anzuzeigen

Dies hilft dir zu verstehen, was das Skript tut, bevor du es ausführst.

---

## Beschreibung

Der Beschreibungsmodus zeigt kurze Informationen über das Skript an. Dies ist besonders für Anfänger hilfreich, um zu verstehen, worum es in dem Skript geht.

- Gehe auf die rechte Seite, wo die Skriptliste ist
- Drücke `d`, um die Beschreibung des ausgewählten Skripts zu sehen
- Drücke `Esc`, `q` oder `d`, um zu schließen

---

## Hilfe

- Drücke `?`, um jederzeit das Hilfe-Popup mit allen Tastenkombinationen zu öffnen
- Drücke `Esc`, `q` oder `?`, um zu schließen

## Schnellnavigation

- Drücke `Home`, um zum Anfang der aktuellen Liste zu springen
- Drücke `End`, um zum Ende zu springen