var allMoviesData = [];

async function getAllMovies(){
    await fetch('https://ghibliapi.vercel.app/films')
    .then(response => {
        if (!response.ok) {
        throw new Error('Erro ao carregar os dados');
        }
        return response.json();
    })
    .then(data => {
        displayMovies(data);
        allMoviesData = data;
    })
    .catch(error => {
        console.error('Houve um erro:', error);
    });

}

function displayMovies(data){
    let container = document.querySelector('.row');
    container.innerHTML = '';

    data.map(movie => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';

        let img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = movie.image;
        img.style.marginTop = '10px';
        

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = movie.title;

        let description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = movie.description;

        cardBody.appendChild(title);
        cardBody.appendChild(description);

        card.appendChild(img);
        card.appendChild(cardBody);

        container.appendChild(card);
    })
}

// async function searchMovie(filmName) {
//     await fetch(`https://ghibliapi.vercel.app/films?title=${filmName}`)
//     .then(response => {
//         if (!response.ok) {
//         throw new Error('Erro ao carregar os dados');
//         }
//         return response.json();
//     })
//     .then(data => {
//         const filteredMovies = data.filter(film => film.title.toLowerCase().includes(filmName.toLowerCase()));
//         console.log(filteredMovies)
//     if (filteredMovies.length === 0) {
//         const errorModal = new bootstrap.Modal(document.getElementById('error-modal'));
//         errorModal.show();
//         getAllMovies();
//     } else {
//         displayMovies(filteredMovies);
//     }
//     });
    
// }

function searchMovie(filmName) {
    const filteredMovies = allMoviesData.filter(film => film.title.toLowerCase().includes(filmName.toLowerCase()));
    if (filteredMovies.length === 0) {
        console.log('Nenhum filme encontrado com esse nome.');
        const errorModal = new bootstrap.Modal(document.getElementById('error-modal'));
        errorModal.show();
    } else {
        displayMovies(filteredMovies);
    }
}


function validateInput(value) {
    const searchInput = document.getElementById('search-input');
    const errorMessage = document.getElementById('error-message');
    
    if (value.length < 3) {
        searchInput.classList.add('is-invalid');
        errorMessage.innerText = 'Please enter more than 3 characters as no film has less than that.';
    } else {
        searchInput.classList.remove('is-invalid');
        errorMessage.innerText = '';
    }
}



document.addEventListener('DOMContentLoaded', getAllMovies);