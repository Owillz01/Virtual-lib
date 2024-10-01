// import the Media class:
const Media = require("./Media")
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
    Media.ALL_MEDIA.push(this);
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }

  static longestMovie(movies) {
    let sorted = movies.sort((a, b) => b.duration - a.duration);
    return sorted[0];
  }
  static calculateAverageRating(movies) {
    let aveRating = 0;
    movies.forEach((book) => {
      aveRating += book.rating;
    });

    return (aveRating = aveRating / movies.length);
  }
}
// don't change below
module.exports = Movie;