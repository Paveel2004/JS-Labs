/*
Задание 1. Создать объект с данным набором полей и скопировать его по
ссылке и по значению в новый объект. Вывести содержимое трёх объектов.

Описать объект с именем ZNAK, содержащий поля: Name – фамилия и
имя, ZOD – знак зодиака, DATE – дата рождения (массив из трех чисел:
год, месяц, число).
*/
const _ = require('lodash');

let ZNAK = {
    name: `Зубенко Михаил`,
    ZOD: `Рыба`,
    DATE: [1993, 2, 2],
}

let ZNAKClone = _.cloneDeep(ZNAK);
let ZNAK2 = ZNAK;
ZNAK.name = "Засекречено";
console.log(ZNAK,ZNAK2,ZNAKClone);

