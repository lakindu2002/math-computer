"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOdd = exports.isEven = void 0;

// module to compute odd and even numbers

/**
 * This function will be used to determine if a number if an even number.
 * @param {Number} number: Number to be tested
 * @returns {Boolean} A boolean to indicate if the number is even or not.
 */
const isEven = number => number % 2 === 0;
/**
 * This function will be used to determine if a number if an odd number.
 * @param {Number} number: Number to be tested
 * @returns {Boolean} A boolean to indicate if the number is odd or not.
 */


exports.isEven = isEven;

const isOdd = number => number % 2 !== 0;

exports.isOdd = isOdd;