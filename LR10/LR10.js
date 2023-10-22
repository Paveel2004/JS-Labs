
function isEmpty(obj){
    for(let key in obj)
        return false;
    return true;
}
function multiplyNumeric(obj)
{
    for(let key in obj){
        if(typeof(obj[key]) == 'number')
            obj[key] *= 2;
    }
}
//Задание 1
console.log("\x1b[32m%s\x1b[0m",'Task 1');
const user = Object.create({},{
    name:{
        value: 'John',
        enumerable: true, 
        writable: true,
        configurable: true,
    },
    surname:{
        value: 'Smith',
        enumerable: true,
    }
});
console.log(user);
user.name = 'Pete';

for(let key in user)
    console.log(key,user[key])

delete user.name;
console.log(user);

//Задание 2
console.log("\x1b[32m%s\x1b[0m",'Task 2');
let test = {}
console.log(isEmpty(test));
test.test = "test";
console.log(isEmpty(test));
console.log(test);

//Задание 3
console.log("\x1b[32m%s\x1b[0m",'Task 3');
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    getSum(){
        return this.John + this.Ann + this.Pete;
    }
}
let sum = salaries.getSum();
console.log(sum);

//Задание 4 
console.log("\x1b[32m%s\x1b[0m",'Task 4');
let numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: "four",
    five: "five",
    six: 6
}
console.log(numbers);
multiplyNumeric(numbers);
console.log(numbers);


