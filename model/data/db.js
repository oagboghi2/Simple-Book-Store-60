const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/SIMPLE_BOOKSTORE_DB';
const db = pgp(connectionString);


const getAllBooks = function(){
  return db.any(`SELECT * FROM books LIMIT 10`)
}

const getABookId = function(id){
  return db.any(`SELECT id FROM books WHERE id = $1`, [parseInt(id)])
    .then(function(data){
      console.log(data.id);
    })
}

const searchTerm = function(searchString){
  return db.any("SELECT title FROM books WHERE title LIKE '%$1#%'", [searchString])
}


const addABook = function(title, author, genre){
  return db.any(`INSERT INTO books(title, author, genre) VALUES ($1, $2, $3)`,[title, author, genre])
}

const deleteABook = function(id){
  return db.any(`DELETE FROM books WHERE id = $1`,[id])
}

const updateABook = function(id){
  return db.any(`DELETE FROM books WHERE id = $1`,[id])
}

module.exports = { getAllBooks, addABook, deleteABook, getABookId, updateABook, searchTerm  }
