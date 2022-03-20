"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subtract = exports.multiply = exports.divide = exports.add = void 0;

/* eslint-disable arrow-body-style */

/* eslint-disable max-len */
// module to perform mathematical operations
const startingPoint = 0;
/**
 * This method will accept an array of numbers and compute the sum of all the numbers.
 * @param {number[]} numbers - An array of numbers to be summed.
 * @returns {number} - The sum of all the numbers in the array.
 */

const add = numbers => {
  return numbers.reduce((total, currentNumber) => total + currentNumber, startingPoint);
};
/**
 * This method will accept an array of numbers and substract each number from the next number in the array.
 * @param {number[]} numbers - An array of numbers to be substracted.
 * @returns {number} - The value computed.
 */


exports.add = add;

const subtract = numbers => {
  return numbers.reduce((total, currentNumber) => total - currentNumber, startingPoint);
};
/**
 * This method will accept an array of numbers and multiply each number from the next number in the array.
 * @param {number[]} numbers - An array of numbers to be multiplied.
 * @returns {number} - The multiplied answer.
 */


exports.subtract = subtract;

const multiply = numbers => {
  return numbers.reduce((total, currentNumber) => total * currentNumber, startingPoint + 1);
};
/**
 * This method will accept an array of numbers and divide each number from the next number in the array.
 * @param {number[]} numbers - An array of numbers to be divided.
 * @returns {number} - The divided answer.
 */


exports.multiply = multiply;

const divide = numbers => {
  return numbers.reduce((total, currentNumber) => total / currentNumber, startingPoint + 1);
};

exports.divide = divide;