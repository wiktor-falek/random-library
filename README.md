# Python random module ported to JavaScript

NOTE: This module is not finished and many functions are still missing

<br>

## Installation

### With npm
```sh
npm install pyrand
```

### Import directly from cdn
```html
<script type="module">
  import pyrand from "https://cdn.jsdelivr.net/npm/pyrand/+esm";
</script>
```

## Usage

```ts
import pyrand from "pyrand";
// or using CommonJS syntax
const pyrand = require("pyrand");

const float = pyrand.random(); // returns random float between 0 and 1
console.log(float);

const integer = pyrand.randint(1, 3); // returns a random integer between 1 and 3 (inclusive)
console.log(integer);

const array = [1, 2, 3, 4, 5];
pyrand.shuffle(array); // shuffles elements of the array in random order
console.log(array); // mutated array

const randomElement = pyrand.choice(["apple", "orange", "banana"]); // returns a random element from the array
console.log(randomElement);
```
