/**
 * Функция pereplata возвращает сумму переплаты по кредиту.
 *
 * @param {number} sum - сумма кредита
 * @param {number} term - срок кредита в месяцах
 * @param {number} rate - процентная ставка по кредиту
 * @return {number} сумма переплаты.
 */
function pereplata(sum, term, rate) {
    //Рассчитываем месячную процентную ставка по кредиту
    var pct = rate / 100 / 12;
    //Метод Math.pow() возвращает основание, возведённое в степень показатель
    //Вычисляем коэффициент
    var month_pay  = pct * Math.pow(( 1 + pct ), term) / (Math.pow(( 1 + pct ), term ) - 1);
    //Размер ежемесячных выплат
    var payments = ((sum * month_pay).toFixed(2));
    // Общая сумма
    var total = (payments * term ).toFixed(2);
    //Сумма переплаты
    overpay = (total - sum).toFixed(2);

    //console.log('Общая сумма с переплатой: ' + total);
    //console.log('Переплата: ' + overpay);

    //Возвращаем значение overpay
    return overpay;
}

//Вызываем функцию pereplata с параметрами и присваиваем переменой perepl значение возвращённое функцией pereplata
var perepl = pereplata(2000000, 60, 10);

//Выводим результат значения perepl
console.log('Переплата: ' + perepl);
//Output Переплата: 549645.40
//document.write('Переплата: ' + perepl);


//Переплата по процентам за кредит:    549 645 руб.
//http://calculator-credit.ru/calculator.php