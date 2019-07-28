# liri--node--app

LIRI is a _Language_ Interpretation and Recognition Interface created by Elvia Franco for UAGIL201905FSF2. 
 LIRI will be a command line node app that takes in parameters and returns data specific to the request and parameters. 

LIRI.js can take in one of the following commands: 
* `concert-this`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

## Motivation 

The motivation behind the creation of this project is primarily due to the learning opportunity that this particular project presents. In this project, I learned how to initialize Node.js, install 3rd party dependencies, and create interactive command line applications. 

### Key Topics Learned
* Node.js
* process.argv
* Client-server model
* Request-response pattern
* Axios
* fs
* Inquirer

## Prerequisites

In order to utilize LIRI, you will need to run **npm i** from the command line to install the appropriate packages for this particular project. 

* The Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api) requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**: 

* Step One: Visit <https://developer.spotify.com/my-applications/#!/>

* Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

* Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

* Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down and paste these values in your own .env file in the following format:

### Spotify API keys Examples for .env file

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

## Tech + APIs Used
* Node.js
* Axios
* fs
* node Spotify api 
* Bands in Town api
* OMDB api

## User Guide + Screenshots

* Step 1: Initialize 
Assuming you have updated your own .env file to utilize this project, you will now need to install the appropriate packages for this project. 

![](https://drive.google.com/file/d/1mLiZkzVWhemO-w3_yQhOHm62DMkiLB-Q/view?usp=sharing)
(https://drive.google.com/uc?export=view&id=1mLiZkzVWhemO-w3_yQhOHm62DMkiLB-Q)


* Step 2: Run Commands 
1. `node liri.js concert-this <artist/band name here>`

This will search the Bands in Town Artist Events API and render the following information about each event to the terminal:

    * Name of the venue
    * Venue location
    * Date of the Event

![](https://drive.google.com/file/d/1sGcEAESqu2IfCmTvzr9ucEoVOkSzN59F/view?usp=sharing)

2. `node liri.js spotify-this-song '<song name here>'`
* This will show the following information about the song in your terminal/bash window

    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
    * If no song is provided then your program will default to "The Sign" by Ace of Base.

![](https://drive.google.com/file/d/1K5LhyVNyLSvK5J8A1awpA-OJU_Hdj49j/view?usp=sharing)

3. `node liri.js movie-this '<movie name here>'`
* This will output the following information to your terminal/bash window:
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

![](https://drive.google.com/file/d/1sWcxgkNpyWDfT_JC_dvFQGv9iZzRmVlL/view?usp=sharing)

4. `node liri.js do-what-it-says`
Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

* This should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

![](https://drive.google.com/file/d/141AmbGWxQzUB_5yo82jFXew-V3ZewafN/view?usp=sharing)

