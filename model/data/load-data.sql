\c SIMPLE_BOOKSTORE_DB

COPY books(id, title, author, genre, height, publisher)
FROM '/Users/obo/Desktop/Simple-Book-Store--Goal-69/model/data/books.csv' DELIMITER ',' CSV HEADER;
