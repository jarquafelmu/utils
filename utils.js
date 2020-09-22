/**
 * Converts a string representation of a number into a number after stripping out everything that is not a digit
 * @param {string} str a string representation of a number
 */
const toNumber = function (str) {
    return Number(str.replace(/\D/g, ''));
}

/**
 * Compares two numbers.
 * If a is less than b returns -1.
 * If a is greater than b, returns 1.
 * If a and b are equal, returns 0.
 * @param {number} a the first number
 * @param {number} b the second number
 */
const compareNumbers = function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

/**
 * Returns a string representation of a number including commas in the appropriate places
 * @param {number} num the number to be formatted
 */
const prettyPrint = function (num) {
    return num.toLocaleString();
}

/**
 * Returns a number between the min and max range
 * @param {number} min the smallest number
 * @param {number} max the largest number
 */
const random = function (min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

/**
 * Shuffles the passed in array
 * @param {array} arr
 */
const shuffle = function (arr) {
    arr.sort((a, b) => Math.random() - 0.5);
}
