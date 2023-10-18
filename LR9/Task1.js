
function calculateE(a,b,x,f){
    return (Math.exp(a*x)+f*Math.pow(Math.cos(x),5)*b*x);
}
function calculateA(a,b,x,f){
    return (a+Math.pow(Math.cos(x),2)*b*x-Math.log10(f*x));
}
calculateCos = (a,b,x,f)=> {
    return (Math.pow(Math.cos(a+b*x*f),2));
}


const readlineSync = require('readline-sync');

function task1(a,b,x,f,A,E,Cos){

    if(a<x && x <= b*b) result = A(a,b,x,f)
    if(x>=a) result = E(a,b,x,f)
    if(x>b*b) result = Cos(a,b,x,f)
    return result;
}
let a,f,b;
const num = +readlineSync.question(`Enter num
 a = 0.8; b = 2.5; f = exp(1.5*ax)
 a = 1,2; b = 4.2; f = exp(2ax)
 a = 3.4; b = 8.1; f = exp(3ax)
`);
const x = +readlineSync.question(`Enter x `);


switch(num){
    case 1:
        a = 0.8; b = 2.5; f = Math.exp(1.5*ax);
        break;
    case 2:
        a = 1,2; b = 4.2; f = Math.exp(2*a*x)
        break;
    case 3:
        a = 3.4; b = 8.1; f = Math.exp(3*a*x)
        break;
    default:
        console.log("*****")
        break;
}

console.log("Result = "+ task1(a,b,x,f,calculateA,calculateE,calculateE));
