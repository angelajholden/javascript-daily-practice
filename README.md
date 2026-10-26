# Daily JavaScript Practice

A collection of JavaScript exercises, data transformations, and data structures and algorithms (DSA) practice. I use this repository to work through problems, try different approaches, explain my reasoning, and practice during livestreams.

**This is a learning workspace, not a production application.** Some files contain multiple iterations of an exercise, commented-out experiments, and console output used while working through a problem. Those notes are intentionally preserved to show the practice process.

## Getting started

No package installation or build step is required.

1. Clone this repository, or download the files.
2. Open `index.html` in a browser (a local development server such as VS Code Live Server is also fine).
3. Open the browser's developer tools and select the **Console** tab.
4. In `index.html`, change the `<script type="module" src="./js/19_amazon_sde_practice.js"></script>` reference to the exercise you want to run.
5. Save the file and reload the page. To see a particular result, uncomment the relevant `console.log()` in that exercise (where applicable).

For standalone JavaScript exercises that don't rely on browser APIs, you can also run them using Node.js (for example, `node js/20_reverse_string.js`). Some earlier exercises manipulate the DOM and should be run in a browser.

### How I use this repository on livestreams

I typically work through one problem at a time, describe the expected input and output, whiteboard or talk through the approach, and test the solution in the browser console. I sometimes leave previous attempts and explanatory comments in place for discussion and review. A script being referenced by `index.html` does not mean all examples in that file will print output—many example calls are commented out.

## Exercise index

The files are numbered roughly in the order they were added; the categories below make them easier to locate. Names and original practice code have been retained.

### Array methods and transformations

- [01 — map](js/01_map.js)
- [02 — ternary operators](js/02_ternary-operators.js)
- [03 — filter](js/03_filter.js)
- [04 — map callback values](js/04_map-callback-values.js)
- [05 — map callback params](js/05_map-callback-params.js)
- [06 — map callback params](js/06_map-callback-params.js)
- [07 — reduce grouping](js/07_reduce-grouping.js)
- [08 — reduce challenge](js/08_reduce-challenge.js)
- [09 — reduce status grouping](js/09_reduce-status-grouping.js)
- [10 — transform refactor](js/10_transform-refactor.js)
- [11 — transform dashboard data](js/11_transform-dashboard-data.js)
- [12 — js practice](js/12_js-practice.js)
- [13 — sort map render](js/13_sort-map-render.js)
- [14 — sort map render](js/14_sort-map-render.js)

### String and DSA practice

- [15 — reverse a string](js/15_reverse-a-string.js)
- [16 — dsa practice](js/16_dsa-practice.js)
- [17 — dsa practice](js/17_dsa-practice.js)

### Interview and additional practice

- [18 — amazon sde prctice](js/18_amazon-sde-prctice.js)
- [19 — amazon sde practice](js/19_amazon_sde_practice.js)
- [20 — reverse string](js/20_reverse_string.js)

## Reference notes

The following notes and vocabulary are a quick reference while solving and explaining problems.

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

## Problem-Solving Vocabulary

These are terms I use while whiteboarding and explaining algorithm problems.
Some are established programming terms; others are plain-English phrases that
help describe the reasoning clearly.

- Current value / current item
- Index
- Condition
- Requirement
- Meets the condition
- Passes the filter
- Candidate
- State
- Best so far
- Current best
- Best-so-far pattern
- Running count
- Running total
- Accumulator
- Early return
- Fallback return
- First match
- Best match
- Seen before
- Set
- Duplicate
- Frequency counter
- Build a result array
- Nested loops
- Pair checking
- Indexed for loop
- for...of loop
- Current index
- Current candidate
- Update the result
- Update state
- Return contract
- Qualifying condition
- Filter condition

### Current value / current item

The item being examined during the current loop iteration.

```javascript
let currentScore = users[i].score;
```

### Index

The position of an item in an array.

Use an indexed `for` loop when the problem requires the index.

```javascript
for (let i = 0; i < items.length; i++) {
	console.log(i);
}
```

### Condition / requirement

A rule the current item must satisfy.

```javascript
if (available) {
	// available meets the requirement
}
```

When explaining a problem, phrases such as **meets the condition**,
**passes the condition**, or **passes the filter** are clearer than
"qualifies," which can be ambiguous when multiple conditions exist.

### Candidate

An item that has passed the relevant condition and is eligible to become
the result.

For example, if the problem asks for the highest-rated featured product,
only featured products are candidates.

### Best so far / current best

The best valid value found during the loop so far.

```javascript
let highestRating = null;

if (highestRating === null || rating > highestRating) {
	highestRating = rating;
}
```

The current item may meet a condition without beating the current best.

### Best-so-far pattern

Keep track of the best value encountered as the loop progresses.

Common examples:

- largest number
- smallest number
- highest score
- lowest price
- longest word

The stored value changes only when a better candidate is found.

### Running count

Keep a count and increment it whenever a condition is met.

```javascript
let count = 0;

if (num > 10) {
	count++;
}
```

### Running total / accumulator

Keep a value that accumulates as the loop progresses.

```javascript
let total = 0;

for (const num of numbers) {
	total += num;
}
```

### Early return

Return immediately when the answer has been found.

Useful for problems asking for the **first** matching item.

```javascript
if (verified && score > 80) {
	return {
		name,
		index: i,
	};
}
```

Once the function returns, the remaining items are not inspected.

### Fallback return

The return statement after the loop that handles the case where no match
was found.

```javascript
for (...) {
	if (...) {
		return result;
	}
}

return null;
```

Useful reminder:

**early return inside the loop, fallback return after the loop**

### Seen before

Track values that have already appeared.

A `Set` is useful when only membership matters.

```javascript
let seen = new Set();

if (seen.has(email)) {
	// email has appeared before
}

seen.add(email);
```

### Duplicate

A value that has already appeared earlier in the data.

When using a `Set`, check whether the value has been seen **before**
adding the current value.

```javascript
if (seen.has(value)) {
	return value;
}

seen.add(value);
```

### Frequency counter

Track how many times each value appears.

```javascript
let count = {};

for (const word of words) {
	if (count[word]) {
		count[word]++;
	} else {
		count[word] = 1;
	}
}
```

Unlike a `Set`, which answers "Have I seen this?", a frequency counter
answers "How many times have I seen this?"

### Build a result array

Create a new array and add items that meet a condition.

```javascript
let results = [];

for (const num of numbers) {
	if (num > 4) {
		results.push(num);
	}
}
```

### Nested loops

A loop inside another loop.

Useful when each item needs to be compared with other items.

```javascript
for (let i = 0; i < numbers.length; i++) {
	for (let x = i + 1; x < numbers.length; x++) {
		// compare numbers[i] and numbers[x]
	}
}
```

### Pair checking

Compare combinations of two items.

Starting the second loop at `i + 1`:

```javascript
let x = i + 1;
```

avoids:

- comparing an item with itself
- checking the same pair twice

Example:

```text
[0, 1]
[0, 2]
[0, 3]
[1, 2]
[1, 3]
[2, 3]
```

### First match vs. best match

These are different types of problems.

**First match**

Stop as soon as an item satisfies the requirements.

```javascript
return result;
```

**Best match**

Continue through the data because a later item may be better.

```javascript
if (current > best) {
	best = current;
}
```

Words in the prompt often provide a clue:

- **first** → think early return
- **highest / largest / lowest / smallest** → think best so far

### State

Information the algorithm must remember while it runs.

Examples:

```javascript
let highestScore = null;
let seen = new Set();
let count = {};
let total = 0;
let result = {};
```

A useful whiteboarding question is:

**What information do I need to remember as I move through the data?**

That usually reveals the state the algorithm needs.
