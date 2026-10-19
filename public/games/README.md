# Builds des jeux

Ce dossier accueillera les exports jouables et les fichiers téléchargeables des jeux du portfolio.

- `/<slug>/web/` : export navigateur complet, avec `index.html` et tous les fichiers générés par le moteur.
- `/<slug>/downloads/` : archives de téléchargement vérifiées (par exemple Windows ou macOS).

Les sous-dossiers réservés sont initialisés avec des fichiers `.gitkeep` afin d'être visibles dans Git avant l'ajout des builds. Aucun exécutable ni export fictif n'est inclus.

Avant d'ajouter un build, tester son fonctionnement, vérifier les droits de redistribution et mettre à jour les chemins correspondants dans `src/App.tsx` uniquement lorsque les fichiers sont réellement disponibles.
