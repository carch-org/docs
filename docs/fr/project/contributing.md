# 📑 Table des Matières

- [Contribuer à Carch](#contribuer-a-carch)
  - [Comprendre la Base de Code](#📌-comprendre-la-base-de-code)
  - [Étapes pour Contribuer](#etapes-pour-contribuer)

- [Contribuer à la Documentation Carch](#📚-contribuer-a-la-documentation-carch)

- [Directives](#directives)

## Contribuer à **Carch** 

Nous sommes ravis que vous souhaitiez contribuer à **Carch** ! Les contributions de toutes sortes sont les bienvenues, que vous corriviez des bugs, ajoutiez de nouvelles fonctionnalités ou amélioriez la documentation. Suivez ce guide pour commencer.

> [!WARNING]  
> **Avant de faire toute contribution**, ouvrez d'abord un ticket dans la section **[Demande de Fonctionnalité](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)**. Nous discuterons des modifications là-bas avant de procéder à l'implémentation. 

## 📌 Comprendre la Base de Code

> [!IMPORTANT]
> D'abord, **analysez comment fonctionne le script** avant de faire des modifications. Si vous voulez améliorer ou ajouter au projet, assurez-vous de **comprendre la structure** et comment chaque pièce interagit. Cela vous aidera à contribuer d'une manière qui soit cohérente avec la conception du projet.
>
> ```md
> Pour les commits, suivez le style de commit conventionnel :
> feat: votre-message-de-commit ou fix: votre-message-de-commit.
> ```
>
> Au fait, avant de commiter :
> - Si vous modifiez un fichier de script `.sh`, assurez-vous qu'il est formaté avec [`shfmt`](https://github.com/mvdan/sh)
> - Lors de la mise à jour de `desc.toml` (scripts ou descriptions), exécutez `cargo xtask ogen` pour actualiser `docs/overview.md`
> - Pour les modifications de fichiers Rust, exécutez `cargo xtask ci` pour vérifier le formatage et autres validations
>
> Assurez-vous de ne pas push directement sans vérifier qu'il n'y a aucune erreur nulle part.

> Pour plus d'informations sur les Commits Conventionnels, consultez ce [guide](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d).

Si vous avez des questions ou besoin d'aide, n'hésitez pas à **nous contacter** :  
📧 Email : <a href="mailto:harilvfs@chalisehari.com.np">harilvfs@chalisehari.com.np</a>  
💬 Discord : <a href="https://discord.com/invite/8NJWstnUHd">Rejoignez-nous ici</a>  

## Étapes pour Contribuer 

### 1. 🍽️ Forker le Dépôt
- Allez sur la page GitHub de **Carch**.
- Cliquez sur le bouton **Fork** dans le coin supérieur droit pour créer votre propre copie du dépôt.

### 2. 🌿 Cloner le Dépôt Forké
- Utilisez la commande suivante pour cloner le dépôt sur votre système local :

  ```bash
  git clone https://github.com/votre-nom-utilisateur/carch.git
  ```

- Remplacez `votre-nom-utilisateur` par votre nom d'utilisateur GitHub.

:::tip :bulb: ASTUCE
**Vous pouvez également utiliser des outils GUI comme `GitHub Desktop` ou même l'interface web de GitHub pour forker et cloner des dépôts. Ces outils fournissent une interface visuelle facile à utiliser pour gérer vos contributions.**
:::

### 3. 🌱 Définir le Dépôt Original comme Upstream
- Ajoutez le dépôt **Carch** original comme remote upstream pour maintenir votre fork à jour :

   ```bash
   cd carch
   ```

   ```bash
   git remote add upstream https://github.com/original-author/carch.git
   ```

### 4. 🍇 Créer une Nouvelle Branche de Fonctionnalité
- Avant de faire des modifications, créez une nouvelle branche avec un nom descriptif :

   ```bash
   git checkout -b feature/nom-de-votre-branche
   ```

- Exemples de noms de branches :
  - `feature/ajouter-nouveau-script`
  - `bugfix/corriger-probleme-installation`

### 5. 🔧 Faire Vos Modifications
- Implémentez les modifications nécessaires au code ou à la documentation.
- Assurez-vous que vos modifications sont claires, testées et suivent les standards de codage du projet.

### 6. 📝 Indexer et Commiter Vos Modifications
- Ajoutez les fichiers modifiés à la zone de staging :

   ```bash
   git add .
   ```

- Commitez vos modifications avec un message clair :

   ```bash
   git commit -m "Ajout : [brève description de vos modifications]"
   ```

### 7. 🚀 Pousser les Modifications vers Votre Fork
- Poussez votre branche vers votre dépôt forké :

   ```bash
   git push origin feature/nom-de-votre-branche
   ```

### 8. 📥 Soumettre une Pull Request (PR)
- Allez sur le dépôt **Carch** original sur GitHub.
- Cliquez sur **New Pull Request**.
- Sélectionnez votre branche dans le menu déroulant et décrivez vos modifications en détail.
- Soumettez la PR pour révision !

## 📚 Contribuer à la Documentation Carch

#### **La Documentation Carch** est ➥ [Disponible ici](https://github.com/carch-org/docs)  

### 🚀 Façons de Contribuer

Vous pouvez contribuer en :

- 🪛 Corrigeant des fautes de frappe ou des erreurs dans les guides existants  
- 🌐 Traduisant la documentation dans d'autres langues (**fortement encouragé !**)  

### 🌍 Traduire la Documentation

#### Voulez-vous aider à rendre Carch accessible aux utilisateurs du monde entier ? Aidez-nous à traduire la documentation !

Si vous contribuez une **nouvelle langue**, suivez ces étapes :

1. 📁 Créez un nouveau dossier pour votre langue dans le répertoire `docs/`. Utilisez les codes [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (ex. `fr`, `es`, `hi`, etc.).  
2. 🛠️ Traduisez le contenu Markdown dans le nouveau dossier.  
3. 🧩 Modifiez `docs/.vitepress/config.ts` :  
   - Ajoutez votre langue dans la section `locales`.  
   - Fournissez un `label`, `lang`, et `link` pour la navigation.  

### 🧪 Tester Vos Modifications Localement

Pour prévisualiser vos modifications :

```sh
bun install
bun run docs:dev
```

> [!IMPORTANT]
> Veuillez d'abord ouvrir un ticket si vous prévoyez d'introduire des changements structurels ou organisationnels majeurs. Nous aimerions en discuter et collaborer dessus au préalable !

### 🧾 Style de Commit

Utilisez des messages de commit clairs comme :

```sh
git commit -m "fix(docs): corriger faute de frappe dans le guide d'installation"
git commit -m "feat(docs): ajouter traduction Hindi"
```

Plus d'infos sur les [Commits Conventionnels](https://gist.github.com/harilvfs/53cc86aa79ea4642356540aadc6bd87d).

#### 🙌 Merci d'aider à améliorer la documentation !

## Directives

### Qualité du Code
- Suivez le style de codage existant du projet.
- Écrivez du code clair, concis et bien documenté.

### Tests
- Testez vos modifications localement pour vous assurer qu'elles fonctionnent comme prévu.
- Si vos modifications introduisent de nouvelles fonctionnalités, ajoutez les tests nécessaires le cas échéant.

### Documentation
- Si vos modifications impliquent de nouvelles fonctionnalités, mettez à jour la documentation pertinente.
- Assurez-vous que le README ou le Wiki reflète vos mises à jour.

### Synchroniser Votre Fork
- Maintenez votre fork à jour pour éviter les conflits :

   ```bash
   git fetch upstream
   ```
   ```bash
   git merge upstream/main
   ```
  - Remplacez `main` par la branche par défaut du dépôt si elle est différente.

Merci de contribuer à **Carch** ! Votre effort aide à améliorer ce projet pour tout le monde. <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />
