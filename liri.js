
require("dotenv").config();
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");
var Spotify = require("node-spotify-api")
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
const programtoRun = process.argv[2];
let action = process.argv.slice(3).join(" ");


if (programtoRun === "concert-this") {
  concertThis();
}
else if (programtoRun === "spotify-this-song") {
  spotifyThis();
}
else if (programtoRun === "movie-this") {
  movieThis();
}
else if (programtoRun === "do-what-it-says") {
  doWhatItSays();
}

else {
  console.log("ERROR")
}

function concertThis(artist) {
  axios.get("https://rest.bandsintown.com/artists/" + action + "/events?app_id=codingbootcamp").then(
    function (response) {
    
      for (let index = 0; index < response.data.length; index++) {
        const jsonData = response.data;
        const showArtist = [
          "Name: " + jsonData[index].venue.name,
          "City: " + jsonData[index].venue.city,
          "Region: " + jsonData[index].venue.region,
          "Country: " + jsonData[index].venue.country,
          "Date: " + moment(jsonData[index].datetime).format("MM/DD/YYYY")
        ]//.join("\n\n");//
        console.table(showArtist)
      }

    })

    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function spotifyThis(song) {
  if (!action) {
    action = "The Sign Ace of Base"
    spotify
      .search({ type: 'track', query: action, limit: 1 },
        function (err, response) {

          if (err) {
            return console.log('Error occurred: ' + err)
          }
          const showSong = [
            "Track Name: " + response.tracks.items[0].name,
            "Artist Name: " + response.tracks.items[0].artists[0].name,
            "Album Name: " + response.tracks.items[0].album.name,
            "Preview URL: " + response.tracks.items[0].external_urls.spotify
          ]
          console.table(showSong)
        });

  }
  else {
    // Console.log(JSON.stringify(result, null, 2));
    spotify
      .search({ type: 'track', query: action, limit: 1 },
        function (err, response) {

          if (err) {
            return console.log('Error occurred: ' + err)
          }
          const showSong = [
            "Track Name: " + response.tracks.items[0].name,
            "Artist Name: " + response.tracks.items[0].artists[0].name,
            "Album Name: " + response.tracks.items[0].album.name,
            "Preview URL: " + response.tracks.items[0].external_urls.spotify
          ]
          console.table(showSong)
        });
  }

}

function movieThis(movie) {
  if (!action) {
    action = "Mr.Nobody"
    axios.get("http://www.omdbapi.com/?t=" + action + "&y=&plot=short&apikey=trilogy").then(
      function (response) {
        const showMovie = [
          "Title: " + response.data.Title,
          "Release Year: " + response.data.Year,
          "IMDB Rating: " + response.data.imdbRating,
          "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
          "Country: " + response.data.Country,
          "Language: " + response.data.Language,
          "Plot: " + response.data.Plot,
          "Actors: " + response.data.Actors
        ]
        console.table(showMovie)
      })

      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  else {
    axios.get("http://www.omdbapi.com/?t=" + action + "&y=&plot=short&apikey=trilogy").then(
      function (response) {
        const showMovie = [
          "Title: " + response.data.Title,
          "Release Year: " + response.data.Year,
          "IMDB Rating: " + response.data.imdbRating,
          "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
          "Country: " + response.data.Country,
          "Language: " + response.data.Language,
          "Plot: " + response.data.Plot,
          "Actors: " + response.data.Actors
        ]
        console.table(showMovie)
      })

      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

}

function doWhatItSays(random) {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }

    // console.log(data);
    const dataArr = data.split(",");
      action = dataArr[1].replace(/\"/g, "");
      console.log (dataArr[0]);
      console.log (action)

    if (dataArr[0] === "concert-this") {
      concertThis();
    }
    else if (dataArr[0] === "spotify-this-song") {
      spotifyThis();
    }
    else if (dataArr[0] === "movie-this") {
      movieThis();
    }
    
    else {
      console.log("ERROR")
    }
  });
}
