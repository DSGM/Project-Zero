let buttonDivWidth;
let buttonDivHeight;
let screenWidth;
let screenHeight;
let buttonPositionX;
let buttonPositionY;

let quotes = ["een stad voor jong een oud","Eene groene en een kleurrijke stad","Gezelegdste stad in nederland","yeeto","verander me"]
let lengte_quote = quotes.length - 1;
let random = Math.floor(Math.random() * lengte_quote) + 1;
console.log(random)
let quote_tag = document.getElementById("stad").innerHTML = quotes[random];