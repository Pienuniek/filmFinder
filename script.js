const radioBtns = document.getElementsByName("moviechoice");
const movieGrid = document.querySelector(".movieGridContainer");
let filteredMovies = [];
let newestMovies = [];

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
    if (filteredMovies === []){
        newestMovies.forEach((movie) => {
            generateCardTemplate(movie);
        })
    }else {
  filteredMovies.forEach((movie) => {
    generateCardTemplate(movie);
  });
};
};
// empty the grid

const deleteMovies = () => movieGrid.innerHTML = "";
  


// individual filters for each radiobutton.value

// const newestMovies = movies.filter(movie => movie.year >= "2014");
// const batmanMovies = movies.filter(movie => movie.title.includes("Batman"));
// const avengerMovies = movies.filter(movie => movie.title.includes("Avengers"));
// const xMenMovies = movies.filter(movie => movie.title.includes("X-Men"));
// const princessMovies = movies.filter(movie => movie.title.includes//("Princess"));

// console.log(princessMovies);
// console.log(xMenMovies);
// console.log(avengerMovies);
// console.log (batmanMovies)
// console.log(newestMovies);

//filters to make the groups

function filterMovies(wordInMovieTitle) {
    deleteMovies();
    filteredMovies = movies.filter((movie) => {
            return movie.Title.includes(wordInMovieTitle);
        });

    placeMovies();
  }
function filterNewestMovies() {
    deleteMovies();
    newestMovies = movies.filter((movie) => {
            return movie.Year >= 2014;
        });
    placeMovies();
    }
//eventListeners

function addEventListeners() {
    const radioButtons = document.getElementsByName("film-filter");

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("click", handleOnChangeEvent);
    });
    console.log(e.target.value);
}

function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "newest":
            deleteMovies();
            newestMovies("2014");
            break;
        case "avenger":
            filterMovies("Avenger");
            break;
        case "xmen":
            filterMovies("X-Men");
            break;
        case "princess":
            filterMovies("Princess");
            break;
        case "batman":
            filterMovies("Batman");
            break;
        default:
            console.log("geen idee welke film");
            break;
    }
}

// initial value, all movies in the grid

filteredMovies = movies;
placeMovies();
