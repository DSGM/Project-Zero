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
["'a city for young an old one'",
"'A green and sustainable city'",
"'The cosiest city in South Holland'",
"'Full of fun museums'",
"'The best under the sun'",
"'There is so much to experience'",
"'Just call Leiden'",
"'The best city in the country'",
"'It was 1944, the Germans were behind us'",
"'Sustainably viewed, better insured'",
"'With the best university in the country'",
"'Room for ideas'",
"'More room for more jobs'",
"'Always together, never alone'",
"'We go for intense'",
"'With very nice restaurants'",
"'Cozy, sunny, Leiden'",
"'You go for the taste'",
"'A city full of diversity'",
"'Cup of tea?'",
"The crime figures are low",
"'A city filled with pleasure'",
"'There are villas'",
"'Leiden, a nice place to drive'",
"'Pure enjoyment'",
"'It starts with ambition, that is what Leiden is for'",
"'Making more possible, Leiden'",
"'Sizes, Makkers, Leiden'",
"'A city with a lot of crime'",
"'There is good education'",
"'Come to the local Imam'",
"'With beautiful houses'",
"'Leiden gives more, much more'",
"'Keep all your memories well, you can not experience them again'",
"'Who lives the Leiden life is worth it'",
"'Leiden is super nice'",
"'There is a lot to do in Leiden'",
"'Lead, the lust of your life'",
"'View it all on this website!'",
"'What is more fun than Leiden?'",
"'A nice city'",
"'Here are good houses!'",
"'Including good infrastructure!'",
"'With the best municipality in the Netherlands!'",
"'The city where your dreams come true'",
"'The city where your dreams become reality'",
"'A cozy city!'",
"'Quality hotels!'",
"'The citizens feel safe here!'",
"'A safe city!'",
"'A sunny city!'",
"'Everywhere to enjoy'"]


function random_quote() {
    lengte_quote = quotes.length - 1;
    random = Math.floor(Math.random() * lengte_quote) + 1;
    $("#stad").hide()
    $("#stad").fadeIn()      
    quote_tag = document.getElementById("stad").innerHTML = quotes[random];

}

setInterval(random_quote,lengte*1000)