# Ajouter un jeu au portfolio

Les pages de présentation et de lancement sont générées à partir du tableau `projects` dans `src/App.tsx`. Le but est qu'un nouveau jeu réutilise la même interface, sans créer un composant de page supplémentaire.

## 1. Ajouter les fichiers du jeu

- Visuel de présentation : ajouter l'image dans `public/projects/` et référencer son chemin dans `image`.
- Export web (quand il est prêt) : placer le contenu exporté dans `public/games/<slug>/web/`, avec son `index.html` à cet emplacement.
- Builds téléchargeables (quand ils sont prêts) : placer les fichiers dans `public/games/<slug>/downloads/`.

Exemple de chemins pour `alien-puzzle` :

```text
public/
  projects/
    alien-puzzle.jpg
  games/
    alien-puzzle/
      web/
        index.html
        ...
      downloads/
        alien-puzzle-windows.zip
        alien-puzzle-macos.zip
```

Ces fichiers sont un exemple d'organisation : ne crée pas de faux builds. Les exports Unity WebGL doivent être testés dans le navigateur et hébergés avec tous les fichiers générés par Unity.

## 2. Ajouter les données du projet

Dans le tableau `projects` de `src/App.tsx`, ajouter un objet qui respecte le type `Project`. Utiliser un `slug` unique et renseigner les informations confirmées.

- `browserBuildPath` : chemin public vers l'export web, par exemple `/Portfolio/games/alien-puzzle/web/index.html`, seulement lorsque l'export existe et a été testé.
- `windowsUrl` : chemin public du fichier Windows, uniquement lorsque ce fichier existe.
- `macosUrl` : chemin public du fichier macOS, uniquement lorsque ce fichier existe.
- `buildStatus` : texte honnête décrivant les versions disponibles ou en préparation.

Laisser les chemins de build absents tant que les fichiers ne sont pas disponibles. La page dédiée affichera alors un message de préparation au lieu d'un jeu vide.

## 3. Routes automatiques

Pour un jeu dont le slug est `nouveau-jeu`, les routes sont :

- Présentation : `/Portfolio/projets/nouveau-jeu`
- Lancement navigateur : `/Portfolio/jouer/nouveau-jeu`

Les deux routes réutilisent les composants existants. Aucune nouvelle page spécifique au jeu n'est nécessaire.

## 4. Vérifications avant publication

1. Exécuter `npm.cmd run build`.
2. Tester la page de présentation et la page `/Portfolio/jouer/<slug>`.
3. Vérifier le chargement du jeu, le plein écran si pris en charge, le clavier/manette si applicable et le responsive.
4. Tester les téléchargements sur les systèmes concernés et confirmer que les fichiers existent.
5. Vérifier qu'aucun lien externe non souhaité n'est affiché et que les anciens fichiers de verrouillage des dépendances sont conservés.
