const radioBtns = document.getElementsByName("moviechoice");
const movieGrid = document.querySelector(".movieGridContainer");
const searchBar = document.getElementById("searchBar");
let filteredMovies = [];

//making moviecards

const generateCardTemplate = (movie) => {
  const html = `<div class="movieCard">
           <a href="https://www.imdb.com/title/${movie.imdbID}/">
               <img src="${movie.poster}" alt="${movie.title}">
           </a>
       </div>
     `;
  movieGrid.innerHTML += html;
};

//creating the filled grid

const placeMovies = () => {
    deleteMovies();
  filteredMovies.forEach((movie) => {
    generateCardTemplate(movie);
  });
};

// empty the grid

const deleteMovies = () => (movieGrid.innerHTML = "");

// individual filters for each radiobutton.value

// const newestMovies = movies.filter(movie => movie.year >= "2014");
// const batmanMovies = movies.filter(movie => movie.title.includes("Batman"));
// const avengerMovies = movies.filter(movie => movie.title.includes("Avengers"));
// const xMenMovies = movies.filter(movie => movie.title.includes("X-Men"));
// const princessMovies = movies.filter(movie => movie.title.includes//("Princess"));

//filters to make the groups

function filterMovies(wordInMovieTitle) {
  filteredMovies = movies.filter((movie) => {
    return movie.title.includes(wordInMovieTitle);
  });
  placeMovies();
}
function filterNewestMovies() {
  filteredMovies = movies.filter((movie) => {
    return movie.year >= "2014";
  });
  //console.log(filteredMovies, "filterNewestMovies");
  placeMovies();
}

//eventListeners

function handleOnChangeEvent(e) {
  switch (e.target.value) {
    case "newest":
      filterNewestMovies();
      //console.log(filteredMovies, "switch");
      break;
    case "Avenger":
      filterMovies("Avenger");
      break;
    case "X-Men":
      filterMovies("X-Men");
      break;
    case "Princess":
      filterMovies("Princess");
      break;
    case "Batman":
      filterMovies("Batman");
      break;
    default:
      console.log("geen idee welke film");
      break;
  }
}
radioBtns.forEach((radioButton) => {
  radioButton.addEventListener("change", handleOnChangeEvent);
});

searchBar.addEventListener("keyup", (e) => {
  let value = e.target.value.toLowerCase();
  filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(value);
  });
  deleteMovies();
  placeMovies();
});

// initial value, all movies in the grid

filteredMovies = movies;
placeMovies();
