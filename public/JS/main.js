let buttonDivWidth;
let buttonDivHeight;
let screenWidth;
let screenHeight;
let buttonPositionX;
let buttonPositionY;
let lengte_quote;
let random;
let quote_tag
let lengte = 3.5;

//Quotes
let quotes =
["'een stad voor jong een oud'",
"'Een groene en duurzame stad'",
"'De gezelligste stad in Zuid-Holland'",
"'Vol met leuke musea'",
"'Het beste onder de zon'",
"'Er valt nog zoveel te beleven'",
"'Even Leiden bellen'",
"'De beste stad van het land'",
"'Duurzaam bekeken, beter verzekerd'",
"'Met de beste universiteit van het land'",
"'Ruimte voor ideeën'",
"'Meer ruimte voor meer jobs'",
"'Altijd samen, nooit alleen'",
"'Wij gaan voor intens'",
"'Met erg leuke restaurants'",
"'Gezellig, zonnig, Leiden'",
"'Je gaat voor de smaak'",
"'Een stad vol met diversiteit'",
"'Kopje thee?'",
"'Een stad gevult met genot'",
"'Er staan villa's'",
"'Leiden, een mooie plek om te rijden'",
"'Puur genieten'",
"'Het begint met ambitie, daar is Leiden voor'",
"'Meer mogelijk maken; Leiden'",
"'Maten, Makkers, Leiden'",
"'Er is goed onderwijs'",
"'Met mooie huizen'",
"'Leiden geeft meer, veel meer'",
"'Bewaar al je herinneringen goed; je kunt ze niet opnieuw beleven'",
"'Wie het Leidse leven leeft, is het waard'",
"'Leiden is super leuk'",
"'In Leiden is veel te doen'",
"'Leiden, de lust van je leven'",
"'Bekijk het allemaal op deze website!'",
"'Wat is nou leuker dan Leiden?'",
"'Een leuke stad'",
"'Hier staan goede huizen!'",
"'Inclusief goede infrastructuur!'",
"'Met de beste gemeente van Nederland!'",
"'De stad waar je dromen uitkomen'",
"'De stad waar je dromen realiteit worden'",
"'Een gezellige stad!'",
"'Kwaliteit hotels!'",
"'De burgers voelen zich hier veilig!'",
"'Een veilige stad!'",
"'Een zonnige stad!'",
"'Overal om te genieten'",
"'Hallo leiden'",
"'Beste stad in de wereld!'",
"'Een leuke stad in de winter'",
"Van leiden word je gewoon opgewonden!",
"'Wat is beter dan leiden ?'",
"'De kans dat je deze quote krijgt is heel klein :)'",
"'1 + 1 is gratis'",
"'Ruimte genoeg voor pret!'",
"'Vol met natuur!'",
"'Puur, zuiver, Leiden'",
"'Overal om te genieten'"]

/*function centerButtons() {
    buttonDivWidth = $('.buttons').width();
    buttonDivHeight = $('.buttons').height();
    screenWidth = $(window).width();
    screenHeight = $(window).height();

    buttonPositionX = screenWidth/2 - buttonDivWidth/2;
    buttonPositionY = screenHeight/2 - buttonDivHeight/2;
    $('.buttons').css({left: buttonPositionX, top: buttonPositionY});
}

setInterval(centerButtons, 100)*/

function random_quote() {
    lengte_quote = quotes.length - 1;
    random = Math.floor(Math.random() * lengte_quote) + 1;
    $("#stad").hide()
    $("#stad").fadeIn()
    quote_tag = document.getElementById("stad").innerHTML = quotes[random];

}

setInterval(random_quote,lengte*1000)
