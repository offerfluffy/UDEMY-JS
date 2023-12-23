"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMovieDB.count = prompt("How many films you watched ?");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("How many films you watched ?");
    }
  },

  showMyDB: function () {
    if (!personalMovieDB.privat) {
      console.log("PersonalMovieDB is privat");
    } else {
      console.log(personalMovieDB);
    }
  },

  toogleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const genresOfFilms = prompt(`Your favourite genre №${i}`);

      if (genresOfFilms == "" || genresOfFilms == null) {
        i--;
      } else {
        personalMovieDB.genres.push(genresOfFilms);
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favourite genre ${i + 1} - ${item}`);
    });
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("You`ve watched not much");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("You`re an avarage viewer");
    } else if (personalMovieDB.count >= 30) {
      alert("You`re a kinoman");
    } else {
      console.log("error numberOfFilms");
    }
  },

  remeberMyFilms: function () {
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
  },
};
