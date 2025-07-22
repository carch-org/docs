<img src="https://cdn-icons-png.flaticon.com/128/7119/7119415.png" width="50" />

<br>

# Inspiration

- **[ChrisTitusTech `linutil`](https://github.com/ChrisTitusTech/linutil/)**  

J'adore bricoler avec Linux et les scripts. La plupart du temps, je ne fais qu'expérimenter, j'essaie des idées aléatoires pour le plaisir. Même si je suis juste assis et que je m'ennuie, je me retrouve d'une façon ou d'une autre à construire de petits outils bizarres.

Une des choses qui m'a vraiment inspiré était de regarder [Chris Titus Tech](https://www.youtube.com/@ChrisTitusTech) et ses [streams](https://www.youtube.com/@TitusTechTalk). Il travaille sur un projet cool appelé [`linutil`](https://github.com/ChrisTitusTech/linutil/), et ça m'a un peu donné l'impulsion pour faire ma propre version de quelque chose comme ça, mais à ma façon désordonnée.

Au début, le projet était... eh bien, **moche**. J'ai utilisé `whiptail` pour le menu. Ça marchait, mais ça avait l'air super vieille école et c'était un peu maladroit. Honnêtement, c'était juste un script shell basique avec un tas de menus collés ensemble.

📅 **Mis à jour : 2025-03-21**  

Plus tard, j'ai commencé à utiliser `gum`, que j'ai trouvé à travers [ml4w](https://github.com/mylinuxforwork). Ça rendait les choses beaucoup plus jolies. Mais ensuite j'ai essayé `fzf`, et ça a juste collé. C'était beaucoup plus rapide et plus propre pour ce que je voulais faire. Donc j'ai abandonné `gum` (je l'aime encore quand même 💖) et je suis allé à fond avec `fzf`.

📅 **Mis à jour : 2025-05-01**  

🦀 Et maintenant... grande étape : J'ai ajouté une TUI complète basée sur Rust utilisant `ratatui`. Plus de menus moches. La nouvelle interface a l'air bien meilleure, fonctionne plus en douceur, et je peux enfin ajouter des fonctionnalités qui n'étaient tout simplement pas possibles en Bash seul.

**Juste pour être clair, les scripts Carch actuels (comme les scripts de configuration, outils, etc.) sont toujours écrits en Bash.** Je ne réécris pas tout ça en Rust (ce serait fou). La TUI Rust est principalement pour le système de menu gérant la navigation, les catégories et l'aperçu. Quand vous sélectionnez quelque chose, ça exécute toujours les scripts Bash en dessous, et oui, `fzf` fait encore le travail là aussi !

Donc oui, c'est un mélange : Rust pour l'interface, Bash pour la logique, et `fzf` au milieu tenant tout ensemble. C'est bizarre mais ça marche !

Carch a vraiment parcouru un long chemin depuis quelque chose de super basique et un peu moche, vers quelque chose dont je suis fier. Il y a encore beaucoup à faire, mais ça devient plus cool chaque jour.

📅 **Mis à jour : 2025-07-22**

Ok, le bonheur est autour de moi maintenant. Finalement, nous avons implémenté une TUI d'exécution de script style popup dans la TUI principale. Maintenant le script n'a pas besoin de quitter la TUI pour s'exécuter. C'est un énorme accomplissement pour moi en termes de ce que je sais et ma connaissance. Maintenant vous pouvez juste sélectionner et exécuter le script dans la TUI elle-même. Tout va maintenant se passer à l'intérieur de la TUI et j'ai supprimé le style `fzf` des scripts car nous n'avons plus besoin d'un style TUI supplémentaire pour exécuter des scripts à l'extérieur.

Énormes remerciements encore au créateur du projet [linutil](https://github.com/ChrisTitusTech/linutil) [Chris](https://github.com/ChrisTitusTech) et tous les [mainteneurs et contributeurs](https://github.com/ChrisTitusTech/linutil/graphs/contributors) ils m'ont donné des idées et de l'inspiration de code pour implémenter ceci dans mon projet. Ils ont été une grande raison pour laquelle j'ai commencé ce projet [Carch](https://github.com/harilvfs/carch). Je veux mon propre style car le projet linutil a été ma plus grande inspiration et guidance pour à quel point je suis arrivé et combien j'améliore encore Carch.

Aussi, la TUI a été complètement redessinée pour une expérience utilisateur sans couture. Maintenant la TUI d'exécution de script est la plus grande fonctionnalité et implémentation qui améliore vraiment l'expérience utilisateur au niveau dont elle avait besoin.

Ouais, je suis heureux après longtemps je peux voir le bonheur sur mon visage. J'aime ça et j'ai toujours un grand amour pour ce que j'ai fait et jusqu'où je suis arrivé. J'apprends dans le processus, me relevant à travers les hauts et les bas. Merci à tous et aux gens de la communauté Linux qui aident et donnent des idées **J'ai appris tant de choses**.

J'espère que Carch deviendra encore plus substantiel dans le futur à venir tant que je suis capable de le maintenir. Merci encore de lire ceci.

Vous pouvez toujours jeter un œil au projet [ici](https://github.com/harilvfs). Si vous voulez me montrer un peu de soutien, n'hésitez pas à mettre une étoile au projet, ce sera ma plus grande motivation. 🙂