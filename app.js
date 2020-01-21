// setting ui vars
const input = document.querySelector('#search-value');
const button = document.querySelector('#search-button');
const card = document.querySelector('.movie-card');

// setting movie list as an empty array
let movieList = [];

// FUNCTIONS
// display movies into the DOM
function showMovie() {
    // grabbing the input that it's been typed
    inputVal = input.value;
    // adding that value to the empty array
    movieList.push(inputVal);
    // inseting into the dom
    card.insertAdjacentHTML('beforeend', `<li>${inputVal}</li>`);
    // clearing input text value
    input.value = '';
}

button.addEventListener('click', showMovie);
