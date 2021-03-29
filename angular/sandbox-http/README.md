### Summary

- Spin-off from sandbox for some http experimentation.

### Setup

- in parent dir: `ng new sandbox`

```
ng generate component players
ng generate component player
ng serve
npm install --save bootstrap@3
    - edit angular.json and add `bootstrap/dist/css/bootstrap.css`
```

### TODO

- X switch to observables in player service
- X save 'seed' players to database
- X load players
- X delete a player
- create a new player
- update/edit a player
- bug: on seed, auto-load players
