<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# Inspiration

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

Ich liebe es, mit Linux und Skripten herumzuspielen. Die meiste Zeit experimentiere ich nur, probiere zufällige Ideen zum Spaß aus. Selbst wenn ich nur dasitze und mich langweile, baue ich irgendwie komische kleine Tools.

Eine der Sachen, die mich wirklich inspiriert hat, war das Ansehen von [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) und seinen [Streams](https://www.youtube.com/@TitusTechTalk). Er arbeitet an einem coolen Projekt namens [`linutil`](https://github.com/ChrisTitusTech/linutil/), und das hat mir irgendwie den Anstoß gegeben, meine eigene Version von so etwas zu machen, aber auf meine eigene chaotische Art.

Am Anfang war das Projekt... nun ja, **hässlich**. Ich habe `whiptail` für das Menü benutzt. Es hat funktioniert, aber es sah super altmodisch aus und fühlte sich irgendwie klobig an. Ehrlich gesagt war es nur ein einfaches Shell-Skript mit einem Haufen zusammengeklatschter Menüs.

📅 **Aktualisiert: 2025-03-21**  

Später habe ich angefangen, `gum` zu benutzen, das ich durch [ml4w](https://github.com/mylinuxforwork) gefunden habe. Es ließ die Sachen viel schöner aussehen. Aber dann habe ich `fzf` ausprobiert, und das hat einfach gepasst. Es war viel schneller und sauberer für das, was ich machen wollte. Also habe ich `gum` verlassen (liebe es trotzdem noch 💖) und bin voll auf `fzf` umgestiegen.

📅 **Aktualisiert: 2025-05-01**  

🦀 Und jetzt... großer Schritt: Ich habe eine vollständige Rust-basierte TUI mit `ratatui` hinzugefügt. Keine hässlichen Menüs mehr. Das neue Interface sieht viel besser aus, läuft smoother, und ich kann endlich Features hinzufügen, die in Bash allein einfach nicht möglich waren.

**Nur um das klarzustellen, die eigentlichen Carch-Skripte (wie Setup-Skripte, Tools, etc.) sind immer noch in Bash geschrieben.** Ich schreibe nicht all das in Rust neu (das wäre verrückt). Die Rust TUI ist hauptsächlich für das Menüsystem da, das Navigation, Kategorien und Vorschau handhabt. Wenn du etwas auswählst, läuft es immer noch die Bash-Skripte darunter, und ja, `fzf` macht dort auch noch den Job!

Also ja, es ist ein Mix: Rust für das Interface, Bash für die Logik, und `fzf` in der Mitte, das alles zusammenhält. Es ist weird, aber es funktioniert!

Carch ist wirklich einen langen Weg gekommen von etwas super einfachem und irgendwie hässlichem zu etwas, auf das ich stolz bin. Immer noch viel zu tun, aber es wird jeden Tag cooler.

📅 **Aktualisiert: 2025-07-22**

Ok, das Glück ist jetzt um mich herum. Endlich haben wir eine Popup-Style Run-Script TUI in der Haupt-TUI implementiert. Jetzt muss das Skript die TUI nicht verlassen, um zu laufen. Das ist eine riesige Errungenschaft für mich in Bezug auf das, was ich weiß und mein Wissen. Jetzt kannst du einfach das Skript in der TUI selbst auswählen und laufen lassen. Alles wird jetzt innerhalb der TUI passieren und ich habe den `fzf`-Stil aus den Skripten entfernt, da wir keinen extra TUI-Stil für das Ausführen von Skripten außerhalb mehr brauchen.

Riesiger Dank noch einmal an den [linutil](https://github.com/ChrisTitusTech/linutil) Projektersteller [Chris](https://github.com/ChrisTitusTech) und alle [Maintainer & Contributors](https://github.com/ChrisTitusTech/linutil/graphs/contributors), die mir Ideen und Code-Inspiration gegeben haben, um das in meinem Projekt zu implementieren. Sie waren ein großer Grund, warum ich dieses [Carch](https://github.com/harilvfs/carch) Projekt gestartet habe. Ich will meinen eigenen Stil, da das linutil-Projekt meine größte Inspiration und Führung war für das, wie weit ich gekommen bin und wie sehr ich Carch immer noch verbessere.

Außerdem wurde die TUI komplett für eine nahtlose Benutzererfahrung redesigned. Jetzt ist die Run-Script TUI das größte Feature und die Implementierung, die wirklich die Benutzererfahrung auf das Level verbessert, das sie brauchte.

Ja, ich bin glücklich nach langer Zeit, ich kann Glück in meinem Gesicht sehen. Ich liebe das und habe immer große Liebe für das, was ich getan habe und wie weit ich gekommen bin. Lerne dabei, stehe durch Höhen und Tiefen auf. Danke an alle und an die Linux-Community-Leute, die helfen und Ideen geben **Ich habe so viele Sachen gelernt**.

Ich hoffe, Carch wird in der kommenden Zukunft noch substantieller werden, solange ich es maintainen kann. Danke dir noch einmal fürs Lesen.

Du kannst dir das Projekt immer [hier](https://github.com/harilvfs) anschauen. Wenn du mir etwas Unterstützung zeigen willst, zögere nicht, das Projekt zu sternen, das wird meine größte Motivation sein. 🙂