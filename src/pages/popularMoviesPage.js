import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFlagButton from '../components/buttons/addToFlag.js'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.popular.filter((m) => {  // New
    return !("flag" in m);
  });

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFlagButton movie={movie} />;
      }}
    />
  );
};

export default PopularMoviesPage;