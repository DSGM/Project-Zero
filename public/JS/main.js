let buttonDivWidth;
let buttonDivHeight;
let screenWidth;
let screenHeight;

let leiden = document.getElementById('leiden').addEventListener('click',() => {
    console.log("klik")
    window.location.href = "#"
})

function centerButtons() {
    buttonDivWidth = $('.buttons').width();
    buttonDivHeight = $('.buttons').height();
    screenWidth = $(window).width();
    screenHeight = $(window).height();

    var buttonPositionX = screenWidth/2 - buttonDivWidth/2;
    var buttonPositionY = screenHeight/2 - buttonDivHeight/2;
    $('.buttons').css({left: buttonPositionX, top: buttonPositionY});
}

setInterval(centerButtons, 100)