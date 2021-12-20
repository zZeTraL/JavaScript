/**
 * Check if a component is local
 *
 * @param {Number} number
 * @returns {String}
 */
function isLocal(number) {
    let str = 'Oui';
    if (number === 0) {
        str = 'Non'
    }
    return str;
}