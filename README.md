# Mon site d'essais

## Mettre le site en ligne avec GitHub Pages
1. Crée un compte sur github.com, puis un nouveau dépôt (repository) public nommé `tonpseudo.github.io`.
2. Clique sur « Add file » puis « Upload files » et glisse TOUT le contenu de ce dossier.
3. Va dans Settings > Pages, choisis la branche `main` et le dossier `/ (root)`, puis enregistre.
4. Après une minute, ton site est visible sur `https://tonpseudo.github.io`.

## Modifier ton profil et tes catégories
Tout se passe dans `contenu.js` : nom, bio, photo, liens, catégories et liste des essais.

## Ajouter un essai
1. Copie un fichier du dossier `essais`, renomme-le (sans espaces ni accents, ex. `mon-essai.html`) et écris ton texte.
2. Ajoute une ligne dans la liste `ESSAIS` de `contenu.js` avec le titre, la date (format AAAA-MM-JJ), la catégorie et le fichier.
Les essais sont triés automatiquement du plus récent au plus ancien.

## Ajouter une image
Dépose l'image dans le dossier `images`, puis dans ton essai écris :
`<img src="../images/nom-de-ton-image.jpg" alt="petite description">`

## Tester sur ton ordinateur
Double-clique simplement sur `index.html`.
