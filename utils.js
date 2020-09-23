/**
 * Converts a string representation of a number into a number after stripping out everything that is not a digit
 * @param {string} str a string representation of a number
 */
export function toNumber(str) {
    return Number(str.replace(/\D/g, ''));
}

/**
 * Compares two primatives of the same type.
 * If a is less than b returns -1.
 * If a is greater than b, returns 1.
 * If a and b are equal, returns 0.
 * @param {number | string | boolean} a the first value
 * @param {number | string | boolean} b the second value
 */
export function compare(a, b) {
    if (typeof a !== typeof b)
        throw TypeError(`both arguments must be of the same type`);

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

/**
 * Returns a string representation of a number including commas in the appropriate places
 * @param {number} num the number to be formatted
 */
export function prettyPrint(num) {
    return num.toLocaleString();
}

/**
 * Returns a number between the min and max range.
 * @param {number} min the smallest number
 * @param {number} max the largest number
 */
export function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

/**
 * Shuffles the passed in array
 * @param {array} arr
 */
export function shuffle(arr) {
    arr.sort((a, b) => Math.random() - 0.5);
}
