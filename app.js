const express = require('express')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const routes = require('./src/routes');
var ejs = require('ejs');

const app = express();

// build middleware
app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'))
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');

//build routes
app.use('/', routes)


app.get('/', (req, res)=>{
  res.render('index')
})


const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log("Backend is in another castle");
})
