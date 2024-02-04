const getWeekDay = (date) =>{
    const daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return daysOfWeek[date.getDay()];
} 
const getLocalDay = (date) =>{
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return daysOfWeek[date.getDay()];
} 
const getDateAgo = (date, n) =>{
    const newDate = new Date(date);
    newDate.setDate(date.getDate()-n);
    return newDate;
}
const formatDate = (date) => {
    let diff = new Date() - date;
    let sec = Math.floor(diff / 1000);
    let min = Math.floor(diff / 60000); 
    if (diff < 1000) return 'прямо сейчас';  
    if (sec < 60) return sec + ' сек. назад';    
    if (min < 60)  return min + ' мин. назад';
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
const customDate = (inputDate) => {
    const options = {day: 'numeric', weekday: 'long', month: 'long', year:'numeric'};
    const formattedDate = inputDate.toLocaleDateString('ru-RU',options);
    return formattedDate;
}
const parseTime = (time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}
const calculateAthleteStats = (startTime, finishTime, distance) => {
    const start = parseTime(startTime);
    const finish = parseTime(finishTime);
    const elapsedTime = finish - start;
    const averageSpeed = distance / elapsedTime;
    return {
        elapsedTime: elapsedTime,
        averageSpeed: averageSpeed
    }
}

//Задание 1
let date = new Date(2012, 1, 20, 3, 12)
console.log('Задание 1\n'+date);
//Задание 2
console.log('Задание 2\n'+getWeekDay(date));
//Задание 3
console.log('Задание 3\n'+getLocalDay(date));
//Задание 4
console.log('Задание 4\n'+getDateAgo(date,365));
//Задание 5
console.log('Задание 5\n'+formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
//Задание 6.1
console.log('Задание 6.1\n'+customDate(new Date()))
//Задание 6.2
stats = calculateAthleteStats('10:10:00','10:15:30',3000)
console.log('Задание 6.2\n'+`Дистанция пройдена со средней скоростью ${stats.averageSpeed} м/с за ${stats.elapsedTime} секунд`)