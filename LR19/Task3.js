const fs = require(`fs`);

class UtilityBillAccountingSystem{
    constructor(personalAccount, FIO, service, accuredForPayment,date, sum){
        this.personalAccount = personalAccount;
        this.FIO = FIO;
        this.service = service;
        this.accuredForPayment = accuredForPayment;
        this.date = date;
        this.sum = sum;
    }   
}
users = [
    new UtilityBillAccountingSystem(23,`Ded Maxim Ivanovish`, `Gaz`,1000,'2001-01-01',993),
    new UtilityBillAccountingSystem(23,`Zubenko Mihail Petrovich`, `Gaz`,986,'2001-01-01',979),
    new UtilityBillAccountingSystem(23,`Natalya Mirskaya Pehota`, `Gaz`,972,'2001-01-01',965),
    new UtilityBillAccountingSystem(23,`Maykl Jordan Mask`, `Gaz`,958,'2001-01-01',951),
    new UtilityBillAccountingSystem(23,`Billy Herrington Romanovich`, `Gaz`,944,'2001-01-01',937),
    new UtilityBillAccountingSystem(23,`Zubenko Natalya Petrovna`, `Gaz`,930,'2001-01-01',923),
];
fileName = 'users.json'
const serializedArray = JSON.stringify(users,null,2);
console.log(serializedArray)

fs.writeFile(fileName,serializedArray, (err) => {
    if(err) throw err;
    console.log(`Данные записаны в .json файл`)
})


fs.readFile(fileName, 'utf-8', (err, data) => {
    if(err){
        console.log(`Ошибка при чтении файла:`, err)
        return;
    }
    const parsedData=JSON.parse(data);
    console.log(`Данные прочитаны из .json файла ${JSON.stringify(parsedData,null,2)}`)
})


