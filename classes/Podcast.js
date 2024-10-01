const Music = require('./Music')

class Podcast extends Music {
  constructor(title, year, genre, artist, length, host, episodeName, episodeNumber, guests) {
    super(title, year, genre, artist, length);
    this.host = host
    this.episodeName = episodeName
    this.episodeNumber = episodeNumber
    this.guests = guests
  }

  listen(){
    return `${this.title} - Episode: ${this.episodeName}. Hosted by ${
      this.host
    } and featuring guests ${this.guests.join(" ")}. Length: ${
      this.length
    } seconds.`;
  }


}

let pod = new Podcast(
  "my title",
  1992,
  "R&B",
  "Beyonce",
  3949,
  "Drake",
  "the new episode name",
  5,
  ["Eminem", "NF"]
);

let e = pod.listen()
console.log(e);
module.exports = Podcast