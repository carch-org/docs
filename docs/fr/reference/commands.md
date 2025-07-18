# 🖥️ Commandes CLI

Carch prend également en charge les commandes CLI ! Utilisez `carch` avec les options suivantes :

:::code-group

```sh [⚙️ CLI]
carch --help
```

:::

## 🔧 Répartition des Commandes

| 🏷️ Commande        | 📄 Description                                                                              |
|--------------------|----------------------------------------------------------------------------------------------|
| `--help`, `-h`     | Afficher ce message d'aide et quitter.                                                      |
| `--version`, `-v`  | Afficher la version du programme.                                                           |
| `--log`            | Activer la journalisation uniquement pour la session actuelle dans `~/.config/carch/carch.log`. |
| `--no-cleanup`     | Désactiver le nettoyage du cache du script de modules dans le répertoire `~/.cache/carch`. |
| `check-update`     | Vérifier si une nouvelle version est disponible.                                            |
| `update`           | Mettre à jour Carch de manière interactive.                                                 |
| `uninstall`        | Désinstaller Carch de manière interactive.