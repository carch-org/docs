# 🖥️ Commandes CLI  

Carch prend également en charge les commandes CLI ! Utilisez `carch` avec les options suivantes :  

:::code-group

```sh [⚙️ CLI]
carch --help
```

:::

## 📦 Utilisation

carch [OPTIONS] [COMMANDE]

---

## 🔧 Détail des commandes

| 🏷️ Commande               | 📄 Description                                                                                   |
|----------------------------|---------------------------------------------------------------------------------------------------|
| `check-update`             | Vérifier si une nouvelle version est disponible.                                                              |
| `update`                   | Mettre à jour Carch de manière interactive.                                                                       |
| `uninstall`                | Désinstaller Carch de manière interactive.                                                                    |
| `help`                     | Afficher ce message ou l'aide pour la/les sous-commande(s) donnée(s).                                           |
| `--log`, `-l`              | Active la journalisation uniquement pour la session actuelle. Les journaux sont enregistrés dans `~/.config/carch/carch.log`.       |
| `--version`, `-v`          | Afficher la version du programme.                                                                         |
| `--catppuccin-mocha`, `-c` | Définir le thème sur **Catppuccin Mocha**.                                                            |
| `--dracula`, `-d`          | Définir le thème sur **Dracula**.                                                                     |
| `--gruvbox`, `-g`          | Définir le thème sur **Gruvbox**.                                                                     |
| `--nord`, `-n`             | Définir le thème sur **Nord**.                                                                        |
| `--rose-pine`, `-r`        | Définir le thème sur **Rosé Pine**.                                                                   |
| `--help`, `-h`             | Afficher ce message d'aide et quitter.                                                                  |