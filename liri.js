require("dotenv").config();
// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
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
        const element = response.data[index].venue;
        console.table(element);
      }
      // console.table("Name" + " " + response.data[0].venue.name + "City:" + " " + response.data[0].venue.city + "Region:" + " " + response.data[0].venue.region + "Country:" + " " + response.data[0].venue.country + "Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
      // console.log("Name" + " " + response.data[0].venue.name);
      // console.log("City:" + " " + response.data[0].venue.city);
      // console.log("Region:" + " " + response.data[0].venue.region);
      // console.log("Country:" + " " + response.data[0].venue.country);
      // console.log("Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));

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

function spotifyThis() {
  if (action < 4) {
    action = "The Sign"
    spotify
      .search({ type: 'track', query: action, limit: 1 },
        function (err, response) {

          if (err) {
            return console.log('Error occurred: ' + err)
          }
          // console.log(response);
          console.log("Track Name: " + response.tracks.items[0].name)
          console.log("Artist Name: " + response.tracks.items[0].artists[0].name)
          console.log("Album Name: " + response.tracks.items[0].album.name)
          console.log("Preview URL: " + response.tracks.items[0].external_urls.spotify)
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
          console.log("Track Name: " + response.tracks.items[0].name)
          console.log("Artist Name: " + response.tracks.items[0].artists[0].name)
          console.log("Album Name: " + response.tracks.items[0].album.name)
          console.log("Preview URL: " + response.tracks.items[0].external_urls.spotify)
        });
  }

}

function movieThis(movie) {
  if (action < 4) {
    action = "Mr.Nobody"
    axios.get("http://www.omdbapi.com/?t=" + action + "&y=&plot=short&apikey=trilogy").then(
      function (response) {
        // console.log(JSON.stringify(result, null, 2));
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Value: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot)
        console.log("Actors: " + response.data.Actors)
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
        // console.log(JSON.stringify(result, null, 2));
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Value: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot)
        console.log("Actors: " + response.data.Actors)
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

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }

    console.log(data);
    const dataArr = data.split(",");
    console.log(dataArr)
    console.log(dataArr[1])
    // action.push(dataArr)

    spotify
      .search({ type: 'track', query: dataArr[1], limit: 1 },
        function (err, response) {
          if (err) {
            return console.log('Error occurred: ' + err)
          }
          console.log("Track Name: " + response.tracks.items[0].name)
          console.log("Artist Name: " + response.tracks.items[0].artists[0].name)
          console.log("Album Name: " + response.tracks.items[0].album.name)
          console.log("Preview URL: " + response.tracks.items[0].external_urls.spotify)
        }
      )
  });
}
