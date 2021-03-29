### Summary

- Spin-off from sandbox for some http experimentation.
- see `client.sh` for CLI that uses Firebase basics for realtime DB

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
- X update/edit a player
- X create a new player
- bug: on seed, auto-load players
