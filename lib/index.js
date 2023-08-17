// @ts-check
import {
  nativeMath,
  browserCrypto,
  nodeCrypto,
  MersenneTwister19937,
  real,
  createEntropy,
} from "random-js";

function _getEngine() {
  try {
    console.log("Using node crypto module");
    nodeCrypto.next();
    return nodeCrypto;
  } catch (_) {}

  try {
    console.log("Using browser crypto module");
    browserCrypto.next();
    return browserCrypto;
  } catch (_) {}

  console.log("Using Math.random()");
  return nativeMath;
}

const ENGINE = _getEngine();

/**
 * **Returns a random number within [0, 1)**
 *
 * Utilizes `crypto.randomBytes(size)` in node, `crypto.getRandomValues(Int32Array)` in newer browsers, and `Math.random()` in older.
 *
 * @returns {number}
 */
export function rand() {
  return real(0, 1, false)(ENGINE);
}

/**
 * **Returns a random number within [min, max]**
 *
 * Utilizes `crypto.randomBytes(size)` in node, `crypto.getRandomValues(Int32Array)` in newer browsers, and `Math.random()` in older.
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function int(min, max) {
  return Math.floor(rand() * (max + 1 - min)) + min;
}

/**
 * @returns {boolean}
 */
export function bool() {
  return !!int(0, 1);
}

/**
 * @template T
 * @param {T[]} array
 * @returns {T}
 */
export function oneOf(array) {
  const idx = int(0, array.length - 1);
  return array[idx];
}

/**
 * @template T
 * @param {T[]} array
 * @param {number} count
 * @returns {T[]}
 */
function manyOf(array, count = 1) {
  // TODO: weights | cumulativeWeights

  const items = [];
  for (let i = 0; i < count; i++) {
    const item = oneOf(array);
    items.push(item);
  }
  return items;
}

/**
 * Shuffles the array in place
 * @template T
 * @param {T} array
 */
function shuffle(array) {
  throw new Error("Not Implemented");
}

/**
 * Returns a shuffled copy of the array
 * @template T
 * @param {T} array;
 * @param {boolean} deep
 * @returns {T[]}
 */
function shuffleCopy(array, deep = false) {
  throw new Error("Not Implemented");
}

/**
 * Utilizes Mersenne Twister algorithm to ensure deterministic results across node and different browsers.
 * Guaranteed to produce consistent results assuming the same seed.
 */
class DeterministicRandom {
  #seeds;
  #autoSeed;
  #engine;

  /**
   *
   * @param {Object} [options = {} ]
   * @param {number[]} [options.seeds = [] ]
   * @param {boolean} [options.autoSeed = true ]
   */
  constructor(options) {
    this.#seeds = options?.seeds?.reverse() ?? [];
    this.#autoSeed = options?.autoSeed ?? true;
    this.#engine = MersenneTwister19937.seedWithArray(this.#seeds);
  }

  #next() {
    if (this.#seeds.length === 0) {
      if (!this.#autoSeed) return undefined;

      this.#seeds = createEntropy(nativeMath, 100);
    }

    const seed = this.#seeds.pop();
    return seed;
  }

  /**
   *
   * @param {number[]} seeds
   */
  seed(seeds) {
    throw new Error("Not Implemented");
  }

  /**
   * **Returns a random number within [0, 1) using a 32 bit int seed.**
   */
  rand() {
    throw new Error("Not Implemented");

    const seed = this.#next();
    if (seed === undefined) return undefined;

    // TODO: use the seed to generate a random number within [0, 1)
  }

  int() {}

  bool() {}

  oneOf() {}

  // ...
}
