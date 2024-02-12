//1
let user = {
    name: "Валилий Иванвич",
    age: 35
}
let jsonString = JSON.stringify(user) 

console.log(`${typeof jsonString} — ${jsonString}`)
let vasya = JSON.parse(jsonString);
console.log(typeof vasya)


//2
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
