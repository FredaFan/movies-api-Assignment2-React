import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPopularMovies, getTopRatedMovies,getNowPlayingMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
      case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        popular: [...state.popular]
      };
      case "add-watchList":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchList: true } : m
        ),
        top: state.top.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchList: true } : m
        ),
      };
      case "add-flag":
      return {
        popular: state.popular.map((m) =>
          m.id === action.payload.movie.id ? { ...m, flag: true } : m
        ),
        upcoming: [...state.upcoming],
        movies: [...state.movies]
      };
      case "load":
        return { movies: action.payload.movies, upcoming: [...state.upcoming],popular: [...state.popular],top: [...state.top],nowplaying: [...state.nowplaying]};
      case "load-upcoming":
        return { upcoming: action.payload.movies, movies: [...state.movies],popular: [...state.popular] ,top: [...state.top],nowplaying: [...state.nowplaying]};
      case "load-popular":
        return { popular: action.payload.movies ,upcoming: [...state.upcoming], movies: [...state.movies] ,top: [...state.top],nowplaying: [...state.nowplaying] };
      case "load-top":
        return { top: action.payload.movies, popular: [...state.popular] ,upcoming: [...state.upcoming] , movies: [...state.movies],nowplaying: [...state.nowplaying]};
      case "load-nowplaying":
        return { nowplaying: action.payload.movies, top: [...state.top], popular: [...state.popular] ,upcoming: [...state.upcoming] , movies: [...state.movies]};
      case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };

      
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular: [], top: [], nowplaying:[] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToFlag = (movieId) => {
    const index = state.popular.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-flag", payload: { movie: state.popular[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchList", payload: { movie: state.upcoming[index] } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      dispatch({ type: "load-top", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNowPlayingMovies().then((movies) => {
      dispatch({ type: "load-nowplaying", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        popular: state.popular,
        top:state.top,
        nowplaying:state.nowplaying,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList,
        addToFlag: addToFlag,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;