// // Задание 1
// function f() {
//     try {
//       console.log('начало');
//       return "result";
//     } catch (e) {
//       /// ...
//     } finally {
//         console.log('очистка!');
//     }
//   }
// f(); // очистка!
// console.log("-----------")
// function f2() {
//     try {
//       console.log('начало');
//       throw new Error("ошибка");
//     } catch (e) {
//       // ...
//       if("не могу обработать ошибку") {
//         throw e;
//       }
  
//     } finally {
//         console.log('очистка!')
//     }
//   }
// f2(); // очистка!

// //Задание 2
// const mySqrt = (num) =>{
//     if(num >= 0)
//         return Math.sqrt(num);
//     else
//         throw new Error("Ошибка! Вы ввели отрицательное число!")
// }

// try{
//     console.log(mySqrt(5));
//     console.log(mySqrt(-1));
// }
// catch(err){
//     console.log(err.message);
// }

// //Задание 3
// let json = `[
//     {
//         "name": "user1",
//         "age": 25,
//         "salary": 1000
//     },
//     {
//         "name": "user2",
//         "age": 26,
//         "salary": 2000
//     },
//     {
//         "name": "user3",
//         "age": 27,
//         "salary": 3000
//     }
// ]`;
// try{
//     json = JSON.parse(json);
//     if(!Array.isArray(json)){
//         throw new Error('После разбора JSON получился не массив');
//     }
//     console.log('JSON корректен и после разбора получается массив');
// }catch(err){
//     console.error(err.message);
// }

//Задание 4
const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout,
});
readline.question('Введите три числа через пробел: ', (input)=>{
    try{
        const numbers = input.split(' ').map(Number);
        if(numbers.length < 3){
            throw new Error ('Вы ввели меньше трех чисел');
        }
        numbers.forEach((num)=>{
            if(num <0){
                throw new Error('Одно из чисел меньше ноля');
            }
            if (num === 0) {
                throw new Error('Одно из чисел равно нолю');
            }
        });
        console.log("Все числа корректны");
    }catch (err){
        console.error(err.message);
    }finally{
        console.log('Работа алгоритма завершена');
        readline.close();
    }
})
