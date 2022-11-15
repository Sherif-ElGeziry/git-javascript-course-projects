const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach(movie => {
        const movieEL = document.createElement('li');
        const { info, ...ohterProps } = movie;
        console.log(ohterProps);
        // const { title: movietitle } = info;
        let { getFormattedTitle } = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie);
        let text = movie.getFormattedTitle.call(movie) + ' - ';
        // let text = movie.getFormattedTitle.apply(movie) + ' - ';
        for (const key in info) {
            if (key !== 'title' && key !== '_title') {
                text += `${key}: ${info[key]}`;
            }
        }
        movieEL.textContent = text;
        movieList.append(movieEL);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info: {
            set title(val) {
                if (val.trim() === '') {
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title;
            },
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            console.log(this);
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title = title;
    console.log(newMovie.info.title);

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    console.log(this);
    const filterTitle = document.getElementById('filter-title').value;
    renderMovies(filterTitle);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);