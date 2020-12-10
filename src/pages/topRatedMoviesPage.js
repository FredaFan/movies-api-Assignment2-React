import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import BlankButton from '../components/buttons/blank.js'

const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.top.filter((m) => {  // New
    return !("top" in m);
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <BlankButton movie={movie} />;
      }}
    />
  );
};

export default TopRatedMoviesPage;