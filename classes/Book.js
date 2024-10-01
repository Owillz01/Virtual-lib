// import the Media class:
const Media = require('./Media.js')
class Book extends Media{
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre)
        this.author = author
        this.numPages = numPages
        this.rating = rating
        Media.ALL_MEDIA.push(this)
    }

    summary(){
        return`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static highestRating(books){
        let sorted = books.sort((a,b) => b.rating - a.rating)
        return sorted[0]
        // console.log(sorted, 'sorted hopefully');
        
    }

    static calculateAverageRating(books){
        let aveRating = 0
        books.forEach(book => {
            aveRating += book.rating
        });

        return aveRating = aveRating/books.length
    }
}
// create your Book class:

// don't change below
module.exports = Book;
