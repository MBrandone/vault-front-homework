# Notes

## Todo
- [x] Fix node version with nvm
- [x] debugging de l'appel API
- [x] ESLint 
- [x] Ajout test React-Testing-Library & Vitest
- [x] Faire une meilleure intégration
- [x] Corriger le back
- [x] Mettre une pipeline de lint & build & test
- [x] Deployer sur Vercel
- [ ] Accessibilité
- [ ] Responsive
- [ ] Améliorer les performances Lighthouse
- [ ] Prettier
- [ ] Ajout test cypress

## NB

### Pas la bonne version de node
=> On la fixe avec nvm, nvmrc et `nvm use`

### Fix appels API - Quick debugging
2 problèmes
- l'appel API est fait 2 fois
- Les résultats ne s'affichent pas

Une première étape de solution => Le loading n'est pas remis à false, donc on voit jamais le résultat
Pas eu le temps de comprendre pourquoi y a deux appels => On utilise react-query pour épurer un peu le code

### Type any
2 types possibles repérés pour data
On type, et sort une fonction qui s'occupe de l'appel API
Peut-être amélioré en typant + fortement

### Lint 
`pnpm create @eslint/config` permet de configurer eslint.

Configurer eslint
Ajout d'une entrée dans package.json
https://kinsta.com/knowledgebase/react-must-be-in-scope-when-using-jsx/

### Test de caractérisation
Test de composant react pour être sûr de rien casser
Installation de RTL (react, jest-dom) avec vitest

3 tests 
- Je monte le composant => la liste de notifications s'affichent
- Je change l'input texte => la liste se met à jour
- Quand aucun résultats n'est trouvé 

## Intégration
Tailwind est déjà installé donc on l'utilise.
J'ai trouvé [Flowbite](https://flowbite.com/) pour avoir un bon design sans trop me prendre la tête.

## Correction du Back
Y a un `not` en trop pour vérifier que ça s'affiche bien

## Pipelines
ça peut être amélioré en utilisant des images avec pnpm déjà prêt

## Accéssibilité
- Installation du plugin eslint react a11y
- Installation de axe-core/react
