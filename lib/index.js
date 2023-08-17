// @ts-check

/**
 * @returns {number}
 */
function rand() {
  return 0;
}

/**
 *
 * @param {number} seed
 * @returns {number}
 */
function srand(seed) {
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
    // return seeded rand
    return 0;
  }
}
