let buttonDivWidth;
let buttonDivHeight;
let screenWidth;
let screenHeight;
let buttonPositionX;
let buttonPositionY;

let quotes = ["een stad voor jong een oud","Eene groene en een kleurrijke stad","Gezelegdste stad in nederland","yeeto"]
let random = Math.round(Math.random(0,quotes.length))
let quote_tag = document.getElementById("stad").innerHTML = quotes[random];


// function centerButtons() {
//     buttonDivWidth = $('.buttons').width();
//     buttonDivHeight = $('.buttons').height();
//     screenWidth = $(window).width();
//     screenHeight = $(window).height();
//
//     buttonPositionX = screenWidth/2 - buttonDivWidth/2;
//     buttonPositionY = screenHeight/2 - buttonDivHeight/2;
//     $('.buttons').css({left: buttonPositionX, top: buttonPositionY});
// }

// setInterval(centerButtons, 100)
