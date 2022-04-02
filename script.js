const newestRadioBtn = document.getElementById("newest");
const avengerRadioBtn = document.getElementById("Avenger");
const xMenRadioBtn = document.getElementById("X-Men");
const princessRadioBtn= document.getElementById("Princess");
const batmanRadioBtn = document.getElementById("Batman");
const movieGrid = document.querySelector(".movieGridContainer");
const searchPara = ["Avenger", "X-Men", "Princess", "Batman"];

//making moviecards
const generateCardTemplate = (movie)=>{
    const html = 
    `<div class="movieCard">
           <a href="https://www.imdb.com/title/${movie.imdbID}/">
               <img src="${movie.poster}" alt="${movie.title}">
           </a>
       </div>
     `;
     movieGrid.innerHTML += html;
 }

//creating the filled grid
movies.forEach(movie => {
    generateCardTemplate(movie);
});

//the sorting eventlisteners
newestRadioBtn.addEventListener('click', ()=>{});
avengerRadioBtn.addEventListener('click', (movies)=> {
   movies.filter(movie => {
      if(!movie.title.includes("Avenger")){
          movie.classList.add(hidden)
      } else {movie.classList.remove(hidden)}
   })
});

xMenRadioBtn.addEventListener('click', ()=>{});
princessRadioBtn.addEventListener('click',()=>{});
batmanRadioBtn.addEventListener('click', ()=>{});

//sorting function
function moviesFilter(movie){
    movies.filter(movie.title.includes(item.value))}
const newestMovies = movies.filter(movie => movie.year >= "2014");

console.log(moviesFilter);
console.log(newestMovies);








