//Задание 1
const myArray = [1,2,3,4,5];
window.myGlobalArray = myArray;
console.log("Массив в глобальном объекте window:", window.myGlobalArray);
//Задание 2
for (i = 1000; i>1; i-=7){
    document.write("<h1>"+i+"</h1>")
}
const userInput = prompt("Введите число от 100 до 1000:");
const number = parseInt(userInput);
if (!isNaN(number) && number >= 100 && number <= 1000) {
  window.scrollBy(0, number);
} else {
  alert("Пожалуйста, введите корректное число от 100 до 1000.");
}
//Задание 3
const randomWidth = Math.floor(Math.random()*100)+200;
const randomHeight = Math.floor(Math.random() * 100)+200;
window.resizeTo(randomWidth, randomHeight);
//Задание 4
function goToPage(page){
    window.location.href = page;
}