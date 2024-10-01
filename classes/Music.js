// import the Media class:
const Media = require("./Media")
// create your Music class:
class Music extends Media {
    constructor(title, year, genre, artist, length) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length
        Media.ALL_MEDIA.push(this);
        console.log(Media.ALL_MEDIA);
    }
    
    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum(musics) {
        let sorted = musics.sort((a,b) => a.length - b.length)
        return sorted[0]
    }
}
// don't change below
module.exports = Music;
