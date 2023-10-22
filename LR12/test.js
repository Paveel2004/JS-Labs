// function marry(man, woman)
// {
//     woman.hasband = man;
//     man.wife = woman;
    
//     return {
//         father: man,
//         mother: woman
//     }
// }

// let family = marry({name: "Miha"},{name: "Masha"});

let arr = Array(1e6).fill("");
let used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);
arr = null;
setTimeout(() => {
    used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${used} MB`);    
}, 10000);