const express = require('express');
const app = express();
const port = 8000;
//Luisterd op port 8000,
app.listen(port,(error) => {
    console.log("Website word gehost op http://localhost: " + port)
})
app.use(express.static('public'))