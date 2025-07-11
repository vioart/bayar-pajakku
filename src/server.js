const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/kalkulator', (req, res) => {
  res.render('menuKalkulator')
})

app.get('/kalkulator/ptkp', (req, res) => {
  res.render('kalkulatorPtkp')
})

app.get('/kalkulator/ter', (req, res) => {
  res.render('kalkulatorTer')
})

app.get('/info', (req, res) => {
    res.render('info');
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
