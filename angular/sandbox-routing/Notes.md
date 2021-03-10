
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

* y - fake auth guard for admin 
    - redirect to login page or modal ?
    - spinner while waiting?
* x - strategy as enum with dropdown  
* x - 'please select player'
* x - edit player 
    - for dirty data, should not leave the edit component
        - deactivate
* x - new player
* x - delete player
