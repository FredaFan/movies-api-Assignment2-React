export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};




export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getMovie = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};

export const getGenres = () => {
  return fetch(
    '/api/genres',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};
export const getMovieReviews = id => {
  return fetch(
    `/api/movies/${id}/reviews`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   },

 }
 ).then(res => res.json());
};

export const getUpcomingMovies = () => {
  return fetch(
    '/api/upcoming',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getPopularMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=2`
  )
    .then(res => res.json())
    .then(json => json.results);
};

export const getTopRatedMovies = () => {
  return fetch(
    '/api/top',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getNowPlayingMovies = () => {
  return fetch(
    '/api/nowplaying',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getMovieSimilar = id => {
  return fetch(
    `/api/movies/${id}/similar`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   },
   method:'get'
 }
 ).then(res => res.json());
};

export const getMovieRecommendations = id => {
  return fetch(
    `/api/movies/${id}/recommendations`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   },

 }
 ).then(res => res.json());
};

export const getMovieCast = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.cast);
    
};

export const getMovieCrew = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.crew);
    
};
export const getPopularPerson = () => {
  return fetch(
    '/api/people',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getPerson = id => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};