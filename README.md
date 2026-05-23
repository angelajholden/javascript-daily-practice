# Daily JavaScript Practice

## TOC

1. [Transform Data into a New Array with .map()](js/01_map.js)
2. [Use Ternary Operators and .map()](js/02_ternary-operators.js)
3. [Filter Items then Create New Array with .map()](js/03_filter.js)
4. [Use .map() with Callback Params, Part 1](js/04_map-callback-values.js)
5. [Use .map() with Callback Params, Part 2](js/05_map-callback-params.js)
6. [Use .map() with Callback Params, Part 3](js/06_map-callback-params.js)

## Notes

### Mutates

- sort()
- reverse()
- push()
- pop()
- shift()
- unshift()
- splice()

### Returns new array

- slice()
- map()
- filter()
- concat()
- flat()
- toSorted()
- toReversed()

### Spread Operator

Literally spreads items out. Takes an array and separates the items.

```javascript
root.append(...mappedRecipes);
```

Makes a 'shallow copy' of an array:

```javascript
const sortedRecipes = [...recipes].sort((a, b) => a.cookMinutes - b.cookMinutes);

// takes the 'receipes' array
// spreads out items
// we add brackets to make new array
[...recipes];
```
