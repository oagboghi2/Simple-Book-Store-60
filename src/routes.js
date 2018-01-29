const express = require('express');
const pg = require('pg-promise')();
const { getAllBooks, addABook, deleteABook } = require('../model/data/db.js')
const router = express.Router();

function createNode(element, className){
  let node = document.createElement(element); //Create the type of element you pass as a parameter
  node.className = className;
  return node;
}

function append(parent, el){
  return parent.appendChild(el); //Append the second parameter to the first one
}

router.get('/api/home', (req, res)=>{
  var testing = "testing";
  getAllBooks()
    .then(function(userBook){
      //console.log(userBook);
      res.render('index',{userBook: userBook, testing});
      return userBook;
    })
    .catch((error)=>{
      console.log(error);
    });
});

router.get('/api/admin', (req, res)=>{
  res.render('admin');
  console.log("testing2");
});

router.post('/api/admin', (req, res)=>{
  var {title, author, genre} = req.body;
  console.log(req.body);
  addABook(title, author, genre)
  .then(function(newBook){
    res.redirect('admin');
  })
  .catch(function(error){
    console.log(error);
  })
});

router.update('/api/home', (req, res) => {
  var {title, author, genre} = req.body;

  updateABook(id)
    .then(function(updatedBook){
      res.redirect('home');
    })
    .catch(function(error){
      console.log(error);
    })
});

router.delete('/api/home', (req, res) => {
  var { id } = req.query;

  deleteABook(id)
    .then(function(newBook){
      res.redirect('home');
    })
    .catch(function(error){
      console.log(error);
    })
});


module.exports = router ;
