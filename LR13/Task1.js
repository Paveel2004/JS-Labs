const readlineSync = require("readline-sync");
let calculator = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
    read()
    {
        this.a = +readlineSync.question("Enter a ");
        this.b = +readlineSync.question("Enter b ");
    }
  
}
calculator.read();
console.log(`sum = ${calculator.sum()}`);
console.log(`mul = ${calculator.mul()}`);
