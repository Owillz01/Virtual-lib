// import the Media class:
const Media = require('./Media.js')
class Book extends Media{
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre)
        this.author = author
        this.numPages = numPages
        this.rating = rating
    }

    summary(){
        returns`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static highestRating(books){
        let sorted = books.sort((a,b) => b.rating - a.rating)
        return sorted[0]
        // console.log(sorted, 'sorted hopefully');
        
    }
}
// create your Book class:
const book1 = new Book(
  "To Kill a Mockingbird",
  1960,
  "Fiction",
  "Harper Lee",
  281,
  4.4
);
const book2 = new Book(
  "The Bluest Eye",
  1970,
  "Fiction",
  "Toni Morrison",
  206,
  4.6
);
const book3 = new Book(
  "My first novel",
  2020,
  "Fiction",
  "Biblophile",
  121,
  2.2
);

Book.highestRating([book1, book2, book3]);
// don't change below
module.exports = Book;
