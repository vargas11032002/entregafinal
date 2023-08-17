
const express = require('express');
const morgan = require('morgan');
const path = require('path');


const app = express();


app.use(morgan('dev'));


app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/testimonio', (req, res) => {
  res.render('testimonio');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
