const newestRadioBtn = document.getElementById("newest");
const avengerRadioBtn = document.getElementById("avenger");
const xMenRadioBtn = document.getElementById("x-men");
const princessRadioBtn= document.getElementById("princess");
const batmanRadioBtn = document.getElementById("batman");
const movieGrid = document.querySelector(".movieGridContainer");
const searchPara = ["Avenger", "X-Men", "Princess", "Batman"];

//the sorting eventlisteners
newestRadioBtn.addEventListener('click', ()=>{});
avengerRadioBtn.addEventListener('click', ()=> {});
xMenRadioBtn.addEventListener('click', ()=>{});
princessRadioBtn.addEventListener('click',()=>{});
batmanRadioBtn.addEventListener('click', ()=>{});

//sorting function
function movieFilter(movie, item){movies.filter(movie.title.includes(searchPara[0]))}
const newestMovies = movies.filter(movie => movie.year >= "2014");

console.log(movieFilter);
console.log(newestMovies);
/*const avengerMovies = movies.filter(function(movie){
    return movie.title.includes("Avenger");
});

console.log ("avenger movies", avengerMovies)

const batmanMovies = movies.filter(function(movie){
    return movie.title.includes("Batman");
});

console.log ("batman movies", batmanMovies);

let newestMovies = movies.filter(movie => movie.year > "2014")
.map(movie => movie.poster);
console.log ("latest movies", newestMovies);*/

//const princessMovies = movies.filter(movie => movie.title.indexOf("Princess") > -1);
//console.log ("princess movies", princessMovies)



//making moviecards
/*const generateCardTemplate = (movie)=>{
   const html = 
   `<div class="movieCard">
          <a href="https://www.imdb.com/title/${movie.imbdID}/">
              <img src="${movie.poster}" alt="${movie.title}">
          </a>
      </div>
    `;

}*/
