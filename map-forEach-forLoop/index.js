
const names = users.map((user) => user.name)

// const names = [];

// users.forEach(user => {
//     names.push(user.name)
// })

// for (let i = 0; i < users.length; i++){
//     names.push(users[i].name)
// }

console.log(names)

const display = document.getElementById('display');
display.innerHTML = names