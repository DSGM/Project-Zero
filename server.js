const express = require('express');
const app = express();
const port = 8000;
//Luisterd op port 8000,
app.listen(port,(port) => {
    console.log("Website word gehost op port " + port)
})