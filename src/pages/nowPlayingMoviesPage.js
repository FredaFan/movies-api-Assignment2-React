import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import BlankButton from '../components/buttons/blank.js'

const NowPlayingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying.filter((m) => {  // New
    return !("nowlpaying" in m);
  });

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <BlankButton movie={movie} />;
      }}
    />
  );
};

export default NowPlayingMoviesPage;