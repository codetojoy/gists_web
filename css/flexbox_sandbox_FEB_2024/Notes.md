
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
    * ideal or hypothetical size, not guaranteed
        * before growing or shrinking occurs
    * default is auto which means revert to width 
* flex-wrap: wrap;
    * wrap-reverse will override align-items
    * on new line, items can grow as desired
* align-content
    * for items in wrapped lines (like align-items)
* flex
    * shorthand for flex-grow, flex-shrink, flex-basis
    * e.g. flex: 1 1 300px;
    * many defaults
        * flex: auto; == flex: 1 1 auto;
        * flex: none; == flex: 0 0 auto;
* flex-flow
    * combo of flex-direction and flex-wrap
    * e.g. flex-flow: column wrap;

### flexbox item

* align-self: X;
    * override to container's align-items
* flex-grow: X;
    * override
* flex-shrink: X;
    * override
* order: X;
    * not positional, more like z-index
    * order starts at flex-start -> flex-end
