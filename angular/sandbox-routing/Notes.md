
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

* 'please select player'
* new player
* delete player
* edit player 
    - for dirty data, should not leave the edit component
        - deactivate
* strategy as enum with dropdown  
