// time tracking
let hours = new Date().getHours();
const greetPlace = document.getElementById('demo')

let greet;
if(hours < 12)greet = 'good morning'
if(hours >= 12 && hours <= 17) greet = "good after noon"
if(hours > 17 && hours <= 24) greet = `good evening`

greetPlace.innerHTML = greet;


//for loop
let text = "";
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
