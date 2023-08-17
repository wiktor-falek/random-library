// @ts-check
import {
  nativeMath,
  browserCrypto,
  nodeCrypto,
  MersenneTwister19937,
  real,
} from "random-js";

function _getEngine() {
  try {
    nodeCrypto.next();
    return nodeCrypto;
  } catch (_) {}

  try {
    browserCrypto.next();
    return browserCrypto;
  } catch (_) {}

  return nativeMath;
}

const ENGINE = _getEngine();

/**
 * **Returns a random number between 0 and 1.**
 *
 * Utilizes `crypto.randomBytes(size)` in node, `crypto.getRandomValues(Int32Array)` in newer browsers, and `Math.random()` in older.
 *
 * @returns {number}
 */
export function rand() {
  return real(0, 1, false)(ENGINE);
}

/**
 * **Returns a random number between 0 and 1 using a 32 bit int seed.**
 *
 * Utilizes `crypto.randomBytes(size)` in node, `crypto.getRandomValues(Int32Array)` in newer browsers, and `Math.random()` in older.
 *
 * @param {number} seed
 * @returns {number}
 */
function srand(seed) {
  // return real(0, 1, false)(ENGINE);
  return 0;
}

/**
 * **Returns a random number between 0 and 1.**
 *
 * Utilizes Mersenne Twister algorithm to ensure deterministic results across node and different browsers.
 * Guaranteed to produce consistent results assuming the same seed.
 * @returns {number}
 */
export function randConsistent() {
  const engine = MersenneTwister19937.autoSeed();
  return real(0, 1, false)(engine);
}

/**
 * **Returns a random number between 0 and 1 using a 32 bit int seed.**
 *
 * Utilizes Mersenne Twister algorithm to ensure deterministic results across node and different browsers.
 * Guaranteed to produce consistent results assuming the same seed.
 *
 * @param {number} seed
 * @returns {number}
 */
export function srandConsistent(seed) {
  const engine = MersenneTwister19937.seed(seed);
  return real(0, 1, false)(engine);
}

/**
 * @returns {number}
 */
function int() {
  return 0;
}

/**
 * @returns {boolean}
 */
function bool() {
  return false;
}

/**
 *
 * @param {string} s
 * @returns {string}
 */
function char(s) {
  return "a";
}

/**
 * @template T
 * @param {T[]} array
 * @returns {T}
 */
function oneOf(array) {
  return array[0];
}

/**
 * @template T
 * @param {T[]} array
 * @param {number} count
 * @param {number[] | undefined} weights
 * @returns {T[]}
 */
function manyOf(array, count = 1, weights) {
  // TODO: weights | cumulativeWeights
  return [array[0], array[1]];
}

/**
 * @template T
 * @param {T} array
 */
function shuffle(array) {
  // shuffle the array in place
}

/**
 * @template T
 * @param {T} array;
 * @param {boolean} deep
 * @returns {T[]}
 */
function shuffleCopy(array, deep = false) {
  return [];
}

class RNG {
  /**
   *
   * @param {number[]} seeds
   */
  constructor(seeds = []) {
    this.seeds = seeds;
  }

  rand() {
    const seed = this.seeds[0];
    // delete this.seeds[0];
    srand(seed);
    // TOOD: handle deleting the seed from this.seeds
    // TODO: handle this.seeds not having a seed
  }
}
