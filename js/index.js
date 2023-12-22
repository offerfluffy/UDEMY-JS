"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("How many films you watched ?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("How many films you watched ?");
  }
}

start();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert("You`ve watched not much");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("You`re an avarage viewer");
  } else if (numberOfFilms >= 30) {
    alert("You`re a kinoman");
  } else {
    console.log("error numberOfFilms");
  }
}

detectPersonalLevel();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function showMyDB() {
  if (personalMovieDB.privat === true) {
    console.log("PersonalMovieDB is privat");
  }

  console.log(personalMovieDB);
}

function remeberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const movieName = prompt("One of the recent films you`ve watched ?");
    const movieMark = +prompt("How would you rate it ?");

    if (
      movieMark !== 0 &&
      movieName !== 0 &&
      movieName !== "" &&
      movieName !== "" &&
      movieName.length < 50
    ) {
      personalMovieDB.movies[movieName] = movieMark;
      console.log("done");
    } else {
      console.log("error movieName && movieMark");
      i--;
    }
  }
}

remeberMyFilms();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genresOfFilms = prompt(`Your favourite genre №${i}`);

    if (genresOfFilms == "" || genresOfFilms == null || isNaN(genresOfFilms)) {
      i--;
    }

    personalMovieDB.genres.push(genresOfFilms);
  }
}

writeYourGenres();
