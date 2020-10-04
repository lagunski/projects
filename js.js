/* 3-4  JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно” */

let input = document.querySelector('#input');
let button = document.querySelector('#button');
let searchButtonCallback = () => {
    if (input.value === 'google') {
        setTimeout("alert('Yandex круче')",3000);
    }
    else
        setTimeout("alert(input.value)",3000);
}

button.addEventListener('click', searchButtonCallback);

/*5. Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. 
При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве */

/*let input = document.querySelector('#input');
let button = document.querySelector('#button');

let arrayObjects=[];
arrayObjects[0]={
    name: 'Peter',
    age: '17'
}
arrayObjects[1]={
    name: 'Nick',
    age: '25'
}
arrayObjects[2]={
    name: 'Alex',
    age: '34'
}

let searchButtonCallback = () =>{
    alert(input.value +":"+ arrayObjects[0].name)
}

button.addEventListener('click', searchButtonCallback);*/

/* 6. Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры */

/*function superSum(a,b){
    return (a+b)
}

let result=sum(5+8);
alert (result)*/

/* 7. Создать массив из чисел в перемешку (не отсортированы). 
С помощью цикла for найти максимальный и минимальный элементы в массиве */

/*let numbers = [-2, 254, -3, 4, -1, 8, 0, -5, 11, 7];

let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

alert(min);
alert (max);*/


/* 8. Создать 2 переменные a и b… присвоить им любые значения. 
Потом программно поменять эти значения местами, не используя значения напрямую */

/*let a = "privet";
let b = 54;

[a,b]=[b,a];

console.log (a);
console.log (b);*/


/* 9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax 
(чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива) */


/*function findMax(arr) {
    return Math.max(...arr);*/

/*10. показать alert с результатом поиска не сразу, а через 3 секунды после нажатия
 (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды) */
  

/*function timer() {
    setTimeout(() => {
        alert('вывод данных через 3 секунды');
    }, 3000);
}*/


