
let i = 1;
function nextTask(){console.log(`Задание ${i++}`)}

nextTask();//1
function ucFirst(str){
    if(!str) return str;
    return str[0].toUpperCase()+ str.slice(1);
}

console.log(ucFirst(`галя! Патроны!`));

nextTask();//2
function checkSpam(str){
    return str.includes(`торрент`) || str.includes(`МММ`);
}
console.log(checkSpam(`Скачать торрент бесплатно`));
console.log(checkSpam(`инвестируй в МММ`));
console.log(checkSpam(`Лена 19 лет в 300 м от вас`));

nextTask();//3
function truncate(str, maxlength){
    return (str.length > maxlength) ? str.slice(0,maxlength-1) + "…" : str;
}
console.log(`${truncate(`всё решено, мама я съезжаю`,20)}
${truncate("Всем привет", 200)}`);

nextTask();//4
function extractCurrencyValue(str)
{
    return +str.slice(1);
}
console.log(extractCurrencyValue(`$100`));

nextTask();//5
function replaceFirstOccurrence(S,S1,S2){
    const index = S.indexOf(S1);
    if(index !== -1){
        const start = S.slice(0,index);
        const end = S.slice(index + S1.length);
        return start + S2 + end;

    }
    return S;
}
const S = "Скажи мне, Антон! Зачем ты собрал шкаф?";
const S1 = "Антон";
const S2 = "Виктор";

const result = replaceFirstOccurrence(S,S1,S2);
console.log(result);
