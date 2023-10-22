let user = { name: "Иван"};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
console.log(user.name);
Object.assign(user,{name:"Петька"});
console.log(user.name);

let user2 = {
    name: "Иван",
    age: 30,
};

let clone = Object.assign({}, user2);
console.log(clone);
clone.name = "Ivan";
clone.age = 31;
console.log(clone);
console.log("------------------------------");
let user3 = {
    name: "Иван",
    sizes: {
        height: 1323,
        width: 50
    }
};

const _ = require('lodash');

