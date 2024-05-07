const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=09e9c58d268e354b1e572da3114678bf&page=5";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=09e9c58d268e354b1e572da3114678bf&query="';

const main = document.getElementById("main");
const search = document.getElementById("search");
const form = document.getElementById("form");
getMovies(API_URL);
async function getMovies(URL) {
  const res = await fetch(URL);
  const data = await res.json();
  showMovie(data.results);
}
function showMovie(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `<img src="${IMG_PATH + poster_path}" alt="">
    <div class="movie-info">
<h3>${title}</h3>
<span class="${showRating(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>`;
    main.appendChild(movieEl);
  });
}
function showRating(votes) {
  if (votes >= 8) {
    return "green";
  } else if (votes >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
