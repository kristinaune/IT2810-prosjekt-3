import React from 'react';
import './App.css';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { get_movies } from './store/actions/movies';
import { load_user } from './store/actions/user';
import { close_modal } from './store/actions/displayMovie';
import SearchMovie from './components/pages/Search/SearchMovie';
import Search from './components/pages/Search/Search';
import AllMovies from './components/pages/AllMovies';
import MyList from './components/pages/MyList/MyList';
import Navbar from './components/layout/Navbar';
import Account from './components/pages/Account/Account';
import Footer from './components/layout/Footer';
import Login from './components/pages/Account/Login';
import Register from './components/pages/Account/Register';
import store from './store/store';
import MovieModal from './components/MovieModal';
import { MovieType } from './types';

const App = ({
  get_movies,
  load_user,
  close_modal,
  displayMovie,
  display,
}: {
  get_movies: Function;
  load_user: Function;
  close_modal: Function;
  displayMovie: MovieType;
  display: boolean;
}) => {
  // get_movies();
  // Kommentert ut fordi den returnerer en 501-feil
  //load_user();

  return (
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <main>
              <Switch>
                <Route exact path='/' component={Search}>
                  <SearchMovie />
                </Route>
                <Route exact path='/search' component={Search}></Route>
                <Route path='/allmovies' component={AllMovies}></Route>
                <Route path='/mylist' component={MyList} />
                <Route path='/account' component={Account} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
              </Switch>
              {displayMovie.actors && (
                <MovieModal movie={displayMovie} closeModal={close_modal} />
              )}
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
};

const mapStateToProps = (state: any) => {
  return {
    displayMovie: state.displayMovie,
  };
};

export default connect(mapStateToProps, {
  get_movies,
  load_user,
  close_modal,
})(App);
