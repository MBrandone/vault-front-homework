# Notes

## Todo
- [x] Fix node version with nvm
- [x] fix de l'appel API
- [x] ESLint 
- [x] Ajout test RTL vitest
- [x] Faire une intégration Wahou
- [x] Corriger back
- [x] pipeline de lint & build & test
- [ ] Accessibilité
- [ ] Standard du web
- [ ] Deployer sur Vercel
- [ ] Prettier
- [ ] Ajout test cypress

## NB

### Pas la bonne version de node
=> On la fixe avec nvm, nvmrc et `nvm use`

### Fix appels API
2 problèmes
- l'appel API est fait 2 fois
- Les résultats ne s'affichent pas

Une solution => Le loading n'est pas remis à false
Pas eu le temps de comprendre pourquoi y a deux appels => On utilise react-query pour épurer un peu le code

### Type any
2 types possibles repéré pour data

### Lint 
`pnpm create @eslint/config`

Configurer eslint
Ajout d'une entrée dans package.json
https://kinsta.com/knowledgebase/react-must-be-in-scope-when-using-jsx/

### Test
4 tests 
- Je monte le composant => la liste de notifications s'affichent
- Je change l'input texte => la liste se met à jour
- Quand aucun résultats n'est trouvé 
- Quand une erreur est survenu

installation de RTL (react, jest-dom) avec vitest

## Intégration
tailwind est déjà installé donc on utilise
J'ai trouvé Flowbite pour avoir un design sans trop me prendre la tête

## Back
Y a un `not` en trop pour vérifier que ça s'affiche bien