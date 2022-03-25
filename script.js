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

//creatingthefilledgrid
movies.forEach(movie => {
    generateCardTemplate(movie);
});
//the sorting eventlisteners
newestRadioBtn.addEventListener('click', ()=>{});
avengerRadioBtn.addEventListener('click', (item)=> {
    const aveng = item.value;
    movieFilter(movie);
    console.log(movie, aveng);
});

xMenRadioBtn.addEventListener('click', ()=>{});
princessRadioBtn.addEventListener('click',()=>{});
batmanRadioBtn.addEventListener('click', ()=>{});

//sorting function
function movieFilter(movie){movies.filter(movie.title.includes(item.value))}
const newestMovies = movies.filter(movie => movie.year >= "2014");

console.log(movieFilter);
console.log(newestMovies);








