import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import PersonPage from './pages/personDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import UpcomingMoviesPage from './pages/upcomingMoviesPage'       // NEW
import PopularMoviesPage from './pages/popularMoviesPage'       // NEW
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import NowPlayingMoviesPage from './pages/nowPlayingMoviesPage';
import PopularPeoplePage from './pages/popularPeoplePage'       // NEW
import MoviesContextProvider from "./contexts/moviesContext";
import PeopleContextProvider from "./contexts/peopleContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />
          <div className="container-fluid">
            <MoviesContextProvider>
              <GenresContextProvider>
                <PeopleContextProvider>  {/* NEW */}
                  <Switch>
                    <Route path="/people/popular" component={PopularPeoplePage} />
                    <Route path="/people/:id" component={PersonPage} />
                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                    <Route path="/movies/nowplaying" component={NowPlayingMoviesPage} />
                    <Route path="/movies/top" component={TopRatedMoviesPage} />
                    <Route path="/movies/popular" component={PopularMoviesPage} />
                    <Route path="/movies/upcoming" component={UpcomingMoviesPage} />
                    <Route path="/reviews/:id" component={MovieReviewPage} />
                    <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route path="/" component={HomePage} />
                    <Redirect from="*" to="/" />
                  </Switch>
                  </PeopleContextProvider>
            </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>

          
        </div>
          </div>
        </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));