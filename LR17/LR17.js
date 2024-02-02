const camelize = (str) =>{
    return str.split('-').map((w, i) => (i === 0 ? w : w[0].toUpperCase()+w.slice(1))).join('');
}
const filterRange= (arr,a,b) =>{
    return arr.slice().filter(i => i > a && i < b);
}
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // удалить, если за пределами интервала
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
function copyAndSort(arr) {
    return arr.slice().sort(function (a, b) { return a - b; });
}
// //1
console.log(`border-left-width => ${camelize("border-left-width")}`);
// //2
arr = [5,3,7,8,3,9,4,6,4,5,8,16,57,567,0,24,5];
console.log(`${filterRange(arr,5,16)}`);
//3
console.log(arr)
filterRangeInPlace(arr, 5,16)
console.log(arr);
//4
arr2 = copyAndSort(arr);
console.log(`${arr}\n${arr2}`);
//5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
let names = users.map(user => user.name)
console.log(names); // Вася, Петя, Маша


