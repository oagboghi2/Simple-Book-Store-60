DROP DATABASE IF EXISTS SIMPLE_BOOKSTORE_DB;
CREATE DATABASE SIMPLE_BOOKSTORE_DB;
DROP TABLE books;

\c SIMPLE_BOOKSTORE_DB


CREATE TABLE books(
       ID  SERIAL PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    genre VARCHAR(100),
   height INTEGER,
publisher VARCHAR(100)
  );

COPY books( title, author, genre, height, publisher)
FROM '/Users/obo/Desktop/Simple-Book-Store--Goal-69/model/data/books.csv' DELIMITER ',' CSV HEADER;
