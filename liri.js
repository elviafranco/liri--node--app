require("dotenv").config();
// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
const axios = require("axios");
const moment = require("moment");
var Spotify = require("node-spotify-api")
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
const search = process.argv.slice(2).join(" ");

// Console.log(JSON.stringify(result, null, 2));

spotify
  .search({ type: 'track', query: search, limit:1 }, 
  function(err, response) {
      if (err) {
          console.log(err)
      }
    console.log("Track Name: " + response.tracks.items[0].name)
    console.log("Artist Name: " + response.tracks.items[0].artists[0].name)
    console.log("Album Name: " + response.tracks.items[0].album.name)
    console.log("Preview URL: " + response.tracks.items[0].preview_url)
    });
  
// We then run the request with axios module on a URL with a JSON - OMDB, SPOTIFY, BANDS IN TOWN
// axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp").then(
//   function (response) {
//     If the axios was successful...
//     Then log the body from the site!

//     ALL COMMAND LINE FOR BESTINTOWN
//     console.log("Name" + " " + response.data[0].venue.name)
//     console.log("City:" + " " + response.data[0].venue.city)
//     console.log("Region:" + " " + response.data[0].venue.region);
//     console.log("Country:" + " " + response.data[0].venue.country);
//     console.log("Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
    
//   })

//   .catch(function (error) {
//     if (error.response) {
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       console.log(error.request);
//     } else {
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });
