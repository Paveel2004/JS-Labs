
let now = new Date();
console.log(now);
console.log(new Date(0));
console.log(new Date(24*3600*1000));
console.log(new Date(-24*3600*1000));
console.log(new Date("2014-04-06"));
console.log(new Date(2001,0,1,10,10,7).getFullYear());
console.log(now.getUTCHours());
console.log(now.getHours());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.setHours(0));
console.log(now.setHours(0,0,0,0));
console.log(now);

date = new Date(2016,0,2);
date.setDate(1);
console.log(date);
date.setDate(0);
console.log(date)

let start = Date.now();
for (let i = 0; i < 100000; i++) {
      let doSomething = i * i * i;
}

end = Date.now();
console.log(end-start);

const diffSubtract= (date1, date2) =>{
    return date2-date1;
}
const diffGetTime = (date1,date2) =>{
    return date2.getTime() - date1.getTime();
}
function bench(f){
    let date1 = new Date(0);
    let date2 = new Date();
    let start = Date.now();
    for(i=0;i<100000000;i++) f(date1,date2)
    return Date.now() - start;
}
// console.log('Время diffSubtract: ' + bench(diffSubtract) + 'мс');
// console.log('Время diffGetTime: ' + bench(diffGetTime) + 'мс');

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms); // 1327611110417 (таймстамп)

