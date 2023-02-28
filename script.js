// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(i, '- это ноль')
    } else if (i % 2 == 1) {
        console.log(i, '- нечетное число')
    }
    else {
        console.log(i, '- четное число')
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let array = [1, 2, 3, 4, 5, 6, 7];
console.log('Заданный массив:', array);
array.splice(3, 2);
console.log('Приведённый массив:', array);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let arr = [];

function randomArr(arr) {
    for (i = 0; i < 5; i++) {
        arr[i] = Math.trunc(Math.random() * 10);
    }
    return arr;
}

function sum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function minNumArr(arr) {
    let minNum = arr[1];
    for (i = 0; i < arr.length; i++) {
        if (minNum > arr[i]) {
            minNum = arr[i];
        }
    }
    return minNum;
}

function numThreeSeach(arr) {
    if (arr[0] === 3 || arr[1] === 3 || arr[2] === 3 || arr[3] === 3 || arr[4] === 3) {
        console.log('Число 3 есть!');
    } else {
        console.log('Числа 3 нет!');
    }
}

console.log('Рандомный массив:', randomArr(arr));
console.log('Сумма чисел массива:', sum(arr));
console.log('Минимальное число массива:', minNumArr(arr));
numThreeSeach(arr);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx

let string = 'x';
console.log(string);
for (i = 1; i < 20; i++) {
    string = string + 'x';
    console.log(string);
}
