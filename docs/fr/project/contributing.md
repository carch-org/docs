# Contribuer à **Carch** 

<img src="https://cdn-icons-png.flaticon.com/128/993/993686.png" width="50" />

Nous sommes ravis que vous soyez intéressé à contribuer à **Carch** ! Les contributions de toutes sortes sont les bienvenues, que vous corrigiez des bugs, ajoutiez de nouvelles fonctionnalités, ou amélioriez la documentation. Suivez ce guide pour commencer.

> [!WARNING]  
> **Avant de faire toute contribution**, ouvrez d'abord une issue dans la section **[Demande de Fonctionnalité](https://github.com/harilvfs/carch/issues/new?template=feature-reqests.yml)**. Nous discuterons des changements là-bas avant de procéder à l'implémentation.

## 📌 Comprendre la Base de Code

> [!NOTE]
> Avant de contribuer, **comprenez la structure** de Carch :
> - **Les fichiers Rust principaux de Carch sont situés dans :** `src`
>
>```sh
> src/
> ├── ui/
> │   ├── app.rs
> │   ├── mod.rs
> │   ├── popups.rs
> │   └── render.rs 
> ├── main.rs 
> ├── commands.rs
> ├── display.rs
> ├── script_list.rs 
> └── version.rs
> ```
> 
> - **Tous les scripts de `modules` sont organisés par catégorie dans :**  
> ```sh
> modules/
> ├── Browser/     # Scripts liés aux navigateurs
> ├── Desktop/     # Scripts liés à l'environnement de bureau
> ├── Development/ # Scripts d'outils de développement
> ├── System/      # Scripts de configuration système
> └── Terminal/    # Scripts de configuration de terminal
> ```

> [!IMPORTANT]
> D'abord, **analysez comment le script fonctionne** avant de faire des changements. Si vous voulez améliorer ou ajouter au projet, assurez-vous de **comprendre la structure** et comment chaque partie interagit. Cela vous aidera à contribuer d'une manière cohérente avec la conception du projet.
>
> ```sh
> Pour les commits, utilisez des étiquettes comme
> feat: votre-message-de-commit ou fix: votre-message-de-commit.
> ```
> 
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
- Avant de faire des changements, créez une nouvelle branche avec un nom descriptif :

   ```bash
   git checkout -b feature/nom-de-votre-branche
   ```

- Exemples de noms de branches :
  - `feature/ajouter-nouveau-script`
  - `bugfix/corriger-probleme-installation`

### 5. 🔧 Effectuer Vos Changements
- Implémentez les changements nécessaires dans le code ou la documentation.
- Assurez-vous que vos changements sont clairs, testés, et suivent les standards de codage du projet.

### 6. 📝 Indexer et Commiter Vos Changements
- Ajoutez les fichiers modifiés à la zone de staging :

   ```bash
   git add .
   ```

- Commitez vos changements avec un message clair :

   ```bash
   git commit -m "Ajouter: [brève description de vos changements]"
   ```

### 7. 🚀 Pousser les Changements vers Votre Fork
- Poussez votre branche vers votre dépôt forké :

   ```bash
   git push origin feature/nom-de-votre-branche
   ```

### 8. 📥 Soumettre une Pull Request (PR)
- Allez au dépôt **Carch** original sur GitHub.
- Cliquez sur **New Pull Request**.
- Sélectionnez votre branche dans le menu déroulant et décrivez vos changements en détail.
- Soumettez la PR pour révision !

## Directives

### Qualité du Code
- Suivez le style de codage existant du projet.
- Écrivez du code clair, concis et bien documenté.

### Tests
- Testez vos changements localement pour vous assurer qu'ils fonctionnent comme prévu.
- Si vos changements introduisent de nouvelles fonctionnalités, ajoutez les tests nécessaires là où c'est applicable.

### Documentation
- Si vos changements impliquent de nouvelles fonctionnalités, mettez à jour la documentation pertinente.
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

Merci de contribuer à **Carch** ! Votre effort aide à rendre ce projet meilleur pour tout le monde. <img src="https://cdn-icons-png.flaticon.com/128/2279/2279398.png" width="50" />