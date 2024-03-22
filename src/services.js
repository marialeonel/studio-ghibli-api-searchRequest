async function getAllMovies(){
    await fetch('https://ghibliapi.vercel.app/films')
    .then(response => {
        if (!response.ok) {
        throw new Error('Erro ao carregar os dados');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        displayMovies(data);
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

function searchMovie(filmName) {
    fetch('https://ghibliapi.vercel.app/films')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(data => {
            const filteredMovies = data.filter(film => film.title.toLowerCase().includes(filmName.toLowerCase()));
            if (filteredMovies.length === 0) {
                console.log('Nenhum filme encontrado com esse nome.');
                const errorModal = new bootstrap.Modal(document.getElementById('error-modal'));
                errorModal.show();
            } else {
                displayMovies(filteredMovies);
            }
        })
}

function validateField(field) {
    if (field.value.length < 3) {
        //field.classList.remove('is-valid'); // Remover a classe is-valid se estiver presente
        //field.classList.add('is-invalid');
        toggleClass(field, 'is-valid', 'is-invalid');
    } else {
      //  field.classList.remove('is-invalid'); // Remover a classe is-invalid se estiver presente
      //  field.classList.add('is-valid');
        toggleClass(field, 'is-invalid', 'is-valid');
    }
}

function toggleClass(field, removeClass, addClass) {
    field.classList.remove(removeClass);
    field.classList.add(addClass);
    
}

document.addEventListener('DOMContentLoaded', getAllMovies);