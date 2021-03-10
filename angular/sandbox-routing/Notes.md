
### Summary

* Spin-off from sandbox for some routing experimentation.

### Setup

* in parent dir: `ng new sandbox`

```
ng generate component players
ng generate component player
ng serve
npm install --save bootstrap@3
    - edit angular.json and add `bootstrap/dist/css/bootstrap.css`
```

### TODO

* fake auth guard for admin 
* y - new player
    - need to refresh the players list after delete, because it's a copy
    - fire event ? 
* y - delete player
    - need to refresh the players list after delete, because it's a copy
    - fire event ? 
* strategy as enum with dropdown  
* x - 'please select player'
* x - edit player 
    - for dirty data, should not leave the edit component
        - deactivate
