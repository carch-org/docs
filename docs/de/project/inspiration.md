<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# Inspiration

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

Ich liebe es, mit Linux und Skripten herumzuspielen. Die meiste Zeit experimentiere ich nur und probiere zufällige Ideen zum Spaß aus. Selbst wenn ich nur dasitze und mir langweilig ist, baue ich irgendwie am Ende seltsame kleine Tools.

Eines der Dinge, die mich wirklich inspiriert haben, war das Anschauen von [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) und seinen [Streams](https://www.youtube.com/@TitusTechTalk). Er arbeitet an einem coolen Projekt namens [`linutil`](https://github.com/ChrisTitusTech/linutil/), und das hat mir irgendwie den Anstoß gegeben, meine eigene Version von so etwas zu machen, aber auf meine eigene chaotische Art.

Am Anfang war das Projekt... nun ja, **hässlich**. Ich benutzte `whiptail` für das Menü. Es funktionierte, aber es sah super altmodisch aus und fühlte sich ziemlich klobig an. Ehrlich gesagt war es nur ein grundlegendes Shell-Skript mit einem Haufen zusammengewürfelter Menüs.

📅 **Aktualisiert: 2025-03-21**  

Später fing ich an, `gum` zu verwenden, das ich durch [ml4w](https://github.com/mylinuxforwork) gefunden hatte. Es ließ die Dinge viel schöner aussehen. Aber dann probierte ich `fzf` aus, und das klickte einfach. Es war viel schneller und sauberer für das, was ich machen wollte. Also ließ ich `gum` fallen (liebe es trotzdem noch 💖) und setzte voll auf `fzf`.

📅 **Aktualisiert: 2025-05-01**  

🦀 Und jetzt... großer Schritt: Ich habe eine vollständige Rust-basierte TUI mit `ratatui` hinzugefügt. Keine hässlichen Menüs mehr. Die neue Oberfläche sieht viel besser aus, läuft flüssiger, und ich kann endlich Funktionen hinzufügen, die in Bash allein einfach nicht möglich waren.

**Nur um das klarzustellen: die eigentlichen Carch-Skripte (wie Setup-Skripte, Tools, etc.) sind immer noch in Bash geschrieben.** Ich schreibe nicht all das in Rust um (das wäre verrückt). Die Rust-TUI ist hauptsächlich für das Menüsystem da - sie behandelt Navigation, Kategorien und Vorschau. Wenn Sie etwas auswählen, werden immer noch die Bash-Skripte darunter ausgeführt, und ja, `fzf` macht dort auch noch seinen Job!

Also ja, es ist eine Mischung: Rust für die Oberfläche, Bash für die Logik, und `fzf` in der Mitte, das alles zusammenhält. Es ist seltsam, aber es funktioniert!

Carch hat wirklich einen langen Weg zurückgelegt von etwas super Grundlegendem und ziemlich Hässlichem zu etwas, auf das ich stolz bin. Es gibt noch viel zu tun, aber es wird jeden Tag cooler.