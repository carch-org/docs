# ⌨ Raccourcis clavier TUI

Dans carch, nous avons quelques raccourcis clavier qui sont utilisés pour naviguer et interagir avec l'interface TUI. Vous pouvez toujours voir tous les raccourcis en appuyant sur `?` dans l'interface TUI de carch.

Voici des informations claires sur les raccourcis qui peuvent vous aider à comprendre comment les utiliser correctement.

---

## Navigation

Nous utilisons les touches de navigation de vim pour les déplacements (haut, bas, gauche, droite).

- `j` → descendre
- `k` → monter
- `h` → aller à gauche
- `l` → aller à droite

Vous pouvez également utiliser les touches fléchées pour vous déplacer :

- `↑` → monter
- `↓` → descendre
- `←` → aller à gauche
- `→` → aller à droite

Vous pouvez préférer les touches vim ou les touches fléchées, selon ce qui vous semble le plus confortable.

---

## Exécuter des scripts

Pour des actions rapides comme exécuter un script :

- Naviguez vers n'importe quel script sur le côté droit et appuyez sur `Entrée` pour l'exécuter.
- Si vous êtes un passionné de Neovim, vous pouvez également appuyer sur `l` pour l'exécuter.

Lorsque l'invite `y/n` apparaît :

- Appuyez sur `l` pour accepter (oui) et l'exécuter.
- Appuyez sur `h` pour revenir à l'écran précédent.

En bref :

- `l` fonctionne comme `Entrée`
- `h` fonctionne comme `Échap`

---

## Mode de sélection multiple

Vous ne pouvez pas exécuter plusieurs scripts exactement en même temps, mais vous pouvez sélectionner plusieurs scripts et ils s'exécuteront un par un dans l'ordre que vous avez choisi.

Pour utiliser la sélection multiple :

- Appuyez sur `m` pour entrer en mode sélection multiple
- Appuyez sur `Espace` pour sélectionner des scripts
- Appuyez sur `Entrée` pour les exécuter

Ils s'exécuteront un par un après la fin de chacun.

---

## Thèmes

L'interface TUI de carch dispose également de plusieurs thèmes.

- Appuyez sur `t` pour changer de thème

Vous pouvez également consulter les commandes dans la documentation si vous souhaitez lancer carch directement avec votre thème préféré.

---

## Recherche

Nous avons également une option de recherche au cas où vous voudriez trouver rapidement un script sans avoir à faire des allers-retours.

- Appuyez sur `/` pour entrer en mode recherche
- Tapez le nom du script
- Vous pouvez utiliser l'auto-complétion avec la touche Tab
- Appuyez sur `Entrée` pour naviguer vers ce script

---

## Aperçu

Si vous voulez vérifier le script avant de l'exécuter :

- Appuyez sur `p` pour prévisualiser le script

Cela vous aide à comprendre ce que fait le script avant de l'exécuter.

---

## Description

Le mode description affiche de brèves informations sur le script. Ceci est particulièrement utile pour les débutants afin de comprendre de quoi parle le script.

- Allez sur le côté droit où se trouve la liste des scripts
- Appuyez sur `d` pour voir la description du script sélectionné

---

C'est tout pour le moment. Si j'ai oublié quelque chose, vous pouvez toujours appuyer sur `?` dans l'interface TUI de carch pour vérifier tous les raccourcis clavier.

J'espère que cela vous aide. Merci d'avoir lu.