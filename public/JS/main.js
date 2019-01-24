let buttonDivWidth;
let buttonDivHeight;
let screenWidth;
let screenHeight;
let buttonPositionX;
let buttonPositionY;

function centerButtons() {
    buttonDivWidth = $('.buttons').width();
    buttonDivHeight = $('.buttons').height();
    screenWidth = $(window).width();
    screenHeight = $(window).height();

    buttonPositionX = screenWidth/2 - buttonDivWidth/2;
    buttonPositionY = screenHeight/2 - buttonDivHeight/2;
    $('.buttons').css({left: buttonPositionX, top: buttonPositionY});
}

setInterval(centerButtons, 100)