# liri--node--app

 LIRI is a _Language_ Interpretation and Recognition Interface created by Elvia Franco for UAGIL201905FSF2. 
 LIRI will be a command line node app that takes in parameters and returns data specific to the request and parameters. 

## Motivation 

The motivation behind the creation of this project is primarliy due to the learning opportunity that this particular project presents. In this project, I learned how to initialize Node.js, install 3rd party dependencies, and create interactive command line applications. 

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

## User Guide + Demo

* Step 1: Initialize 
Assuming you have updated your own .env file to utilize this project, you will now need to install the approrpiate packages for this project. 

![Step 1](https://drive.google.com/file/d/18Znxtiyp-iYdsN5_0LBHtQ3FjR3dSS4H/view)



LIRI.js can take in one of the following commands: 
* `concert-this`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`


