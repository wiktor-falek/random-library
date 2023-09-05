## Simple random library

### Features

- Prefers crypto module (if available) over Math.random()
- Supports deterministic seeded randomness across all browsers and node using the Mersenne Twister Algorithm

### Credits

Maintainers of [random-js](https://github.com/ckknight/random-js)

### Docs

#### Note: All the following functions use the crypto module in node. In newer browsers they use the Crypto object, with a fallback to Math.random(). If you want to use a uniform implementation that works across node and browsers see [Deterministic Random](#deterministic-random)

### rand(): number

Returns a random floating point number between 0 and 1 (exlcusive) `[0, 1)`

```js
rand(); // 0.43262482858519347
```

<hr>

### randint(min: number, max: number): number

Returns a random integer between min and max (inclusive) `[min, max]`

```js
randint(1, 3); // 3
```

<hr>

### bool(): boolean

Returns either true or false with equal odds

```js
bool(); // true
```

<hr>

### oneOf(array: Array\<T>): T

```js
oneOf(["apple", "banana", "orange"]); // "banana"
```

<hr>

### manyOf(array: Array\<T>, count: number = 1): Array\<T>

```js
manyOf(); // TODO
```

<hr>

### shuffle(array: Array<any>): void

Shuffles the array in place

```js
const cards = [
  "Ace of Spades",
  "4 of Hearts",
  "Jack of Clubs",
  "10 of Diamonds",
];
shuffle(cards);
cards // [ '4 of Hearts', 'Jack of Clubs', 'Ace of Spades', '10 of Diamonds' ]
```

<hr>

<h3 id="deterministic-random">new DeterministicRandom()</h3>

```js
const random = new DeterministicRandom(); // TODO
```
