# quiprendquoi
# Qui prend quoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées

- `npm run prettier ` ajour prettier commit `add prettier` (`packages.json`)
- Possibilité de supprimer un item/evenement ou des modifier un item/evenement commit `all api` (`app.js`)
- Possibilité de se géolocaliser, je voulais avec cette partie pouvoir montrer l'itinéraire entre l'invité et le lieu de l'événement. N'ayant pas la possibilité de modifier l'api afin d'ajouter un lieu a l'événement, j'ai laissé la géolocalisation de l'invité. commit `end cours 2` fix commit `addd google` (`party.pug`,`findMe.js`).
- Ajout d'un design. commit `design`(`style.scss`).

## Article personnel
### Prettie

Pendant le début TP, je passai énormément de temps a bien endenté mon code, faire attention aux bonnes pratiques et a ce qu'il reste lisible, cela ma fais perdre du temps sur quelque chose qui pouvais être automatisé. J'ai donc prit la décision d'utiliser Prettier.

C'est quoi Prettier et pourquoi l'utiliser ? 
Prettier est un outil de formatage de code, il permet à votre code de rester propre et lisible en respectant les règles du langage que vous utilisez. Ici, je l'utilise pour le JS le Pug et le Scss. On l'utilise pour deux raisons dans mon entreprise, déjà, nous utilisons plusieurs langages qui ont chacun leur type d'indentation avec plusieurs niveaux de "sévérité". Je prends l'exemple de Python ou son indentation est super importante à respecter. Deuxièmement, nous travaillons en équipe et il est important que le code reste cohérent avec les même bonne pratiques ce que nous permet de faire Prettier.

Comment l'installer ?
éxecuter: `npm install --save-dev --save-exact prettier`
Dans le fichier ajouter dans script:
 - `"prettier_pug": "./node_modules/.bin/prettier --write '**/*.pug'"` pour Pug
 - `"prettier_js": "./node_modules/.bin/prettier --write '**/*.js'"`Pour JS
 - `"prettier_scss": "./node_modules/.bin/prettier --write '**/*.scss'"` Pour scss
 - `"prettier": "./node_modules/.bin/prettier --write '**/*.pug' ./node_modules/.bin/prettier --write '**/*.js' ./node_modules/.bin/prettier --write '**/*.scss'"` Pour tout utiliser en même temps.
 
Vous pouvez aussi personnaliser vos bonnes pratiques qu'utilisera Prettier en créant a la racine de votre projet le fichier `.prettierrc`.

Attention a vos fichiers qui utilisent le MarkDown Prettier peux faire n'importe quoi avec!
