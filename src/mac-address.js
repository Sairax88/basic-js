const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  for (let i = 2; i < n.length; i+=3) {
    if (n[i] !== '-') return false
  }
  for (let y = 0; y < n.length; y+=3) {
    if (!parseInt(n[y], 16) && n[y] !== '0') return false 
    if (!parseInt(n[y+1], 16) && n[y+1] !== '0') return false 
  }
  return true
}
module.exports = {
  isMAC48Address
};
