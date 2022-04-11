const radioBtns = document.getElementsByName("moviechoice");
const movieGrid = document.querySelector(".movieGridContainer");
const searchBar= document.getElementById("searchBar");
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
    if (filteredMovies.length == 0){
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
            return movie.title.includes(wordInMovieTitle);
        });

    placeMovies();
  }
function filterNewestMovies() {
    deleteMovies();
    newestMovies = movies.filter((movie) => {
            return movie.year >= "2014";
        });
        
    placeMovies();
    }

//eventListeners

function handleOnChangeEvent(e) {
    switch (e.target.value) {
        case "newest":
            deleteMovies();
            filterNewestMovies("2014");
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
    

// initial value, all movies in the grid

filteredMovies = movies;
placeMovies();
