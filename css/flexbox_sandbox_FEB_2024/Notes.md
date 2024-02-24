
### flexbox container

* display: flex;
* flex-direction: row;
    * row, column, row-reverse, column-reverse
* justify-content: 
    * behaviour along main axis
    * flex-start, flex-end, center, space-around, space-between 
* align-items:
    * behaviour along cross axis
    * flex-start, flex-end, center, stretch
* flex-grow: 1;
    * ratio of growth to container resize
* flex-shrink: 1;
    * ratio of shrink to container resize
* flex-basis: 300px;
    * let V = 300px here
    * minimum regardless of content width 
    * ignores width entirely 
    * but flex-basis will use max(V, min-width)
    * and flex-basis will use min(V, max-width)
    * however, when column, then this is height

### flexbox item

* align-self: X;
    * override to container's align-items
* flex-grow: X;
    * override
* flex-shrink: X;
    * override
