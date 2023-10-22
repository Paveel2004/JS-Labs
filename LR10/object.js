const person = Object.create({},{
    name:{
        value: 'Erzhan',
        enumerable: true,//пробегать
        writable: true, // изменение полей
        configurable: true// можно удалять
    },
    birthYear:{
        value: 1993,
        enumerable:true
    },
    age: {
        get(){
            return new Date().getFullYear() - this.birthYear;
        },
        set(value){ 
            console.log(`Set age ${value}`)
        }
    }
})
console.log(person)
person.name = 'Maxim';
//delete person.name;
for(let key in person){
    console.log(key)
    console.log(person[key])
}
person.age = 100;
console.log(person.age)
