const express = require('express');
const fetch = require('node-fetch');
const pg = require('pg-promise')();
const { getAllBooks, addABook, deleteABook, getABookId, updateABook, searchTerm } = require('../model/data/db.js')
const router = express.Router();


//routes
router.get('/api/home', (req, res)=>{
  var {query} = req;
  //var query = query.searchString;
  console.log(query);
  getAllBooks()
    .then(function(userBook){
      //console.log(userBook);
      res.render('index',{userBook: userBook});
    })
    .catch((error)=>{
      console.log(error);
    });
});

// router.get('/api/search', (req, res)=>{
//   var { title } = req.query;
//   res.render('search')
// });

//first apost to grab the value of search, and then redirected the url to a get router
//router.post
//router.get
//query.req.body

router.post('/api/home', (req, res,)=>{
  var searchString = req.body.searchString;
  //console.log(searchString);
  searchTerm(searchString)
    .then(function(userSearch){
      //console.log(userSearch);
      res.redirect("/api/home?searchString=" + searchString)
    })
    .catch(function(error){
      //console.log(error);
    })

})

router.get("/api/home", (req,res)=>{

  var searchString = req.query;
  console.log(searchString);
  searchTerm(searchString)
    .then(function(userSearch){
      console.log(userSearch);
      res.render('index', {userSearch: userSearch});
    })
    .catch(function(error){
      console.log(error);
    });
});


// router.get('/api/home', (req, res)=>{
//   searchTerm(title)
//     .then(function(userSearch){
//       console.log("test" + userSearch);
//       if(userSearch === true){
//         res.json('index',{userSearch: userSearch});
//       }else{
//         res.json('index', {userSearch: ""});
//       }
//     })
//     .catch((error)=>{
//       console.log(error);
//     });
// });

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

router.get('/api/edit/:id', (req, res)=>{
  var id = req.params.id;
  console.log(req.params.id);
  res.redirect('edit', {id:id})
});

// getABookId(id)
//   .then(function(userData){
//     console.log(userData.id);
//     var id = req.userData.id
//     res.redirect('edit');
//   })
//   .catch(function(error){
//     //console.log(error);
//   })

// router.update('/api/home', (req, res) => {
//   var {title, author, genre} = req.body;
//
//   updateABook(id)
//     .then(function(updatedBook){
//       res.redirect('home');
//     })
//     .catch(function(error){
//       console.log(error);
//     })
// });

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
