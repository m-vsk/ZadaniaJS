//Массив имен людей и их возраста
var employees = [
    ["Валера", 30],
    ["Иван", 25],
    ["Андрей", 28],
    ["Олег", 51],
    ["Вася", 22],
    ["Александр", 34]
];

// Функции сортировки по имени
function sortByName(a, b) {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
    else return 0;
}

// Функции сортировки по возрасту
function sortByAge(a, b) {
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else return 0;
}

// Сортировка

//console.log(employees.sort(sortByName));
/*
Output:
[ [ 'Александр', 34 ],
  [ 'Андрей', 28 ],
  [ 'Валера', 30 ],
  [ 'Вася', 22 ],
  [ 'Иван', 25 ],
  [ 'Олег', 51 ] ]
*/


console.log(employees.sort(sortByAge));
/*
Output:
[ [ 'Вася', 22 ],
    [ 'Иван', 25 ],
    [ 'Андрей', 28 ],
    [ 'Валера', 30 ],
    [ 'Александр', 34 ],
    [ 'Олег', 51 ] ]
*/

