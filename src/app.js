const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send("strona działa ez");
    res.render('index', {
        pageTitle: "strona główna"
    });
        
});

app.get('/omnie', (req, res) => {
    res.render('omnie', {pageTitle: "strona omnie nic"});
});

app.get('/kontakt', (req, res) => {
    res.render('kontakt', {pageTitle: "strona kontakt nie"});
});

app.listen(5000, () => {
    console.log("Serwer działa!");
});