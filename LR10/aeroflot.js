//Индивидумльное задание вариант 20(5)
/*
Вариант 5.
Описать объект с именем AEROFLOT, содержащую следующие поля:
– название пункта назначения рейса;
– номер рейса;
– тип самолета.
Написать скрипт, выполняющую следующие действия:
1. ввод с клавиатуры данных в массив, состоящий из семи элементов типа
AEROFLOT, записи должны быть размещены в алфавитном порядке по
названиям пунктов назначения.
2. вывод на экран пунктов назначения и номеров рейсов, обслуживаемых
самолетом, тип которого введен с клавиатуры.
3. если таких рейсов нет, выдать на дисплей соответствующее сообщение.
*/
function AEROFLOT (destination, fligthNumber, aircrafiType){
    this.destination = destination;
    this.fligthNumber = fligthNumber;
    this.aircrafiType = aircrafiType;
}
const fligths = [];
const readlineSync = require('readline-sync');
for(let i = 0; i < 7; i++)
{
    const destination = readlineSync.question(`Ender a destination `);
    const fligthNumber = readlineSync.question(`Enter a filghtNumbrer `);
    const aircrafiType = readlineSync.question(`Enter an aircrafiType `);
    console.log("--------------------------------------------");
    fligths.push(new AEROFLOT(destination,fligthNumber,aircrafiType));
}
console.log(fligths);

fligths.sort((a, b) => a.destination.localeCompare(b.destination));

console.log(fligths);

const searchAircraftType = readlineSync.question('Enter the type of aircraft to search for: ');
let found = false; 
for(const aeroflot of fligths)
{
    if(aeroflot.aircrafiType === searchAircraftType)
    {
        console.log(`Пункт назначения: ${aeroflot.destination}, Номер рейса: ${aeroflot.fligthNumber}`);
        found = true;
    }
}
if (!found){
    console.log(`Рейсов на самолёте типа ${searchAircraftType} не найдено.`);
}

