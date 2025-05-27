<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# Inspiration

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

J'adore bricoler avec Linux et les scripts. La plupart du temps, je fais juste des expériences, j'essaie des idées au hasard pour m'amuser. Même si je suis juste assis et que je m'ennuie, je finis d'une façon ou d'une autre par construire des petits outils bizarres.

Une des choses qui m'a vraiment inspiré, c'était de regarder [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) et ses [streams](https://www.youtube.com/@TitusTechTalk). Il travaille sur un projet cool appelé [`linutil`](https://github.com/ChrisTitusTech/linutil/), et ça m'a un peu donné l'impulsion de faire ma propre version de quelque chose comme ça, mais à ma façon désordonnée.

Au début, le projet était... eh bien, **moche**. J'utilisais `whiptail` pour le menu. Ça marchait, mais ça avait l'air super old school et c'était un peu pataud. Honnêtement, c'était juste un script shell basique avec un tas de menus collés ensemble.

📅 **Mis à jour : 2025-03-21**  

Plus tard, j'ai commencé à utiliser `gum`, que j'ai découvert via [ml4w](https://github.com/mylinuxforwork). Ça rendait les choses beaucoup plus jolies. Mais ensuite j'ai essayé `fzf`, et ça a fait tilt. C'était bien plus rapide et plus propre pour ce que je voulais faire. Alors j'ai abandonné `gum` (je l'aime toujours tho 💖) et je me suis donné à fond dans `fzf`.

📅 **Mis à jour : 2025-05-01**  

🦀 Et maintenant... grande étape : j'ai ajouté une TUI complète basée sur Rust utilisant `ratatui`. Fini les menus moches. La nouvelle interface a l'air bien mieux, fonctionne plus fluidement, et je peux enfin ajouter des fonctionnalités qui n'étaient tout simplement pas possibles en Bash seul.

**Juste pour être clair, les vrais scripts Carch (comme les scripts de setup, outils, etc.) sont toujours écrits en Bash.** Je ne réécris pas tout ça en Rust (ce serait fou). La TUI Rust sert principalement au système de menu gérant la navigation, les catégories, et l'aperçu. Quand vous sélectionnez quelque chose, ça lance toujours les scripts Bash en dessous, et ouais, `fzf` fait toujours le travail là aussi !

Donc ouais, c'est un mélange : Rust pour l'interface, Bash pour la logique, et `fzf` au milieu qui tient tout ensemble. C'est bizarre mais ça marche !

Carch a vraiment fait du chemin depuis quelque chose de super basique et un peu moche, vers quelque chose dont je suis fier. Il y a encore beaucoup à faire, mais ça devient plus cool chaque jour.