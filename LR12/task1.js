// Задание 1. 
// Реализовать массив объектов из заданий лабораторной работы № 11, затем, спустя две секунды удалить копию.
// Произвести отладку в браузере на вкладке memory, наблюдая за объёмом потребляемой памяти.
// Произвести отладку в node.js.
let ZNAK = {
    name: `Зубенко Михаил`,
    ZOD: `Рыба`,
    DATE: [1993, 2, 2],
}
let ZNAK2 = ZNAK
let arr = Array(1e6).fill(ZNAK);

//console.log(`Память ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
setTimeout(()=> {
    ZNAK2 = null;
    //console.log(`Память ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
}, 2000);
