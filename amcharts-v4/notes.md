
### notes

* Lithuania

### section 1

* getting started / using JS
* https://www.amcharts.com/docs/v4/getting-started/using-javascript/
* amcore : global object
* module list
* assets: themes, translations, etc
* creating chart
    - object-based
        - more readable, IDE support
        - cannot be serialized
        - data is always serialized
    - JSON-based
        - serialized config (e.g. database)
* series
    - dataFields
        - schema for the series
        - e.g. PieSeries defines 'value' and 'category'
        - each chart type has its own schema
* external data
    - instead of 'data', use 'dataSource'

### section 2

* general concepts
* https://www.amcharts.com/docs/v4/concepts/
* series: collection of similar, logically grouped data-points
    - comprises a multi-value data element
    - cluster of columns, collection of pie slices
    - this is not the data itself ?!
    - each chart has a fixed set of available series
    - appearance, behaviour
    - binds to individual items
    - line series has simple properties like strokeWidth
    - column series has templates
        - templates
        - defines default appearance
    - tooltip
    - binding
        - dataFields binds the series to the data
    - series-specific data
        - see example
        - note that for CategoryAxis, this still needs to be configured
    - z-index for order
    - series use color sets
    - heat rules
    - pre-hiding
    - events
        - relative element
        - line series uses bullets
    - data items
        - bound to a data point in array
        - can configure location within the cell
    - auxillary usage
        - charts can have sub-charts with their own series
        - e.g. map insert

### section 2.1

* tutorial at end of series (section 2)
* dynamically adding/removing series
* https://www.amcharts.com/docs/v4/tutorials/dynamically-adding-and-removing-series/
* push series onto chart list
    - invalidateData to redraw

### resources

* v4 docs - https://www.amcharts.com/docs/v4/
* v4 demos - https://www.amcharts.com/demos-v4/
* wiki - https://en.wikipedia.org/wiki/Comparison_of_JavaScript_charting_libraries
* general concepts - https://www.amcharts.com/docs/v4/concepts/
* getting started - https://www.amcharts.com/docs/v4/getting-started/basics/
