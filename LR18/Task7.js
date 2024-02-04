const readlineSync = require('readline-sync');

menu = () => {
    console.log('Меню:\n$ 1. Добавить платёж'+
                 '\n$ 2. Вывести сведения по всем платежам с указанием номера декады, в которой был произведен платеж.'+
                 '\n$ 3. Вывести сведения по платежам за последние три месяца.'+
                 '\n$ 0. Выход' )
}
printPaymentDetails = (users) => {
    for(const user of users){
        const paymentDate = new Date(user.date);
        const decadeNumber = Math.floor((paymentDate.getDate()-1)/10)+1;
        user.toString();
        console.log(`Номер декады: ${decadeNumber}`);
        console.log(`--------------------------------------------------`);
    }
}


class UtilityBillAccountingSystem{
    constructor(personalAccount, FIO, service, accuredForPayment,date, sum){
        this.personalAccount = personalAccount;
        this.FIO = FIO;
        this.service = service;
        this.accuredForPayment = accuredForPayment;
        this.date = date;
        this.sum = sum;
    }   
    toString(){
        return (`
--------------------------------------------------
# Лицевой счет: ${this.personalAccount}
# ФИО потребителя: ${this.FIO}
# Услуга: ${this.service}
# Начислено к оплате: ${this.accuredForPayment}
# Дата оплаты: ${this.date}
# Сумма оплаты: ${this.sum}
--------------------------------------------------`);
    }
}

const isWithinLastThreeMonths = (currentDate, paymentDate) => {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(currentDate.getMonth()-3);

    return paymentDate.getTime() >= threeMonthsAgo.getTime() && paymentDate.getTime() <= currentDate.getTime();
}

const printWithLastThreeMonth = (users) => {
    for (let i = 0; i < users.length; i++) {
        if (isWithinLastThreeMonths(new Date(), new Date(users[i].date))) {
            console.log(users[i].toString());
        }
    }
}


users = [];

value = 1
while(value){
    choice = readlineSync.keyIn(menu());
    switch(choice)
    {
        case '1':
            users.push( new UtilityBillAccountingSystem(
                readlineSync.question('Personal account - '),
                readlineSync.question('Full name of the consumer - '),
                readlineSync.question('Service - '),
                readlineSync.question('Accrued for payment - '),
                readlineSync.question('Date of payment - '),
                readlineSync.question('Amount of payment - ')))
            break;
        case '2':
            printPaymentDetails(users);
            break;
        case '3':
            printWithLastThreeMonth(users);
            break;
        case '0':
            value = 0;
            break;
    }
}
