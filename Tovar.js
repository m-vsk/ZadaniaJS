/**
 * Функция words
 *
 * @param {number} num - число
 * @return {string}
 */
function words(num) {
    //
    var titles = ['товар', 'товара', 'товаров'];
    var cases = [2, 0, 1, 1, 1, 2];
    return num + ' ' + titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[Math.min(num % 10, 5)]];
}

console.log(words(0)); //0 товаров
console.log(words(1)); //1 товар
console.log(words(100)); //100 товаров
console.log(words(12)); //12 товаров
console.log(words(22)); //22 товара