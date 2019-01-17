let button1 = document.getElementById('button1').addEventListener('click',() => {
    window.location.href = "/over.html";
})

let button2 = document.getElementById('button2').addEventListener('click',() => {
    window.location.href = "/route.html"
});

let leiden = document.getElementById('leiden').addEventListener('click',() => {
    console.log("klik")
    window.location.href = "#"
})

function centerButtons() {
    var buttonDivWidth = $('.buttons').width();
    var buttonDivHeight = $('.buttons').height();
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();

    var buttonPositionX = screenWidth/2 - buttonDivWidth/2;
    var buttonPositionY = screenHeight/2 - buttonDivHeight/2;
    $('.buttons').css({left: buttonPositionX, top: buttonPositionY});
}

setInterval(centerButtons, 100)