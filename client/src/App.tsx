import React, { useEffect } from 'react';
import './App.css';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { startGetMovies } from './store/actions/movies';
import { startCloseModal } from './store/actions/displayMovie';
import {
  startLogin,
  startAddMovie,
  startRemoveMovie,
} from './store/actions/user';
import SearchMovie from './components/pages/Search/SearchMovie';
import Search from './components/pages/Search/Search';
import AllMovies from './components/pages/AllMovies/AllMovies';
import MyList from './components/pages/MyList/MyList';
import Navbar from './components/layout/Navbar';
import Account from './components/pages/Account/Account';
import Footer from './components/layout/Footer';
import Login from './components/pages/Account/Login';
import Register from './components/pages/Account/Register';
import store from './store/store';
import MovieModal from './components/movies/MovieModal';
import { IMovie, StoreState, IUser } from './types';

const App = ({
  startCloseModal,
  displayMovie,
  startLogin,
}: {
  startCloseModal: VoidFunction;
  displayMovie: IMovie | null;
  startAddMovie: (imdbId: string, email: string) => void;
  startRemoveMovie: (imdbId: string, email: string) => void;
  startLogin: (email: string) => void;
  user?: IUser;
}) => {
  useEffect(() => {
    localStorage.getItem('user') &&
      startLogin(JSON.parse(localStorage.getItem('user')!));
  }, [startLogin]);

  return (
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
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
            {displayMovie && (
              <MovieModal
                movie={displayMovie}
                startCloseModal={startCloseModal}
              />
            )}
            <Footer />
          </div>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    displayMovie: state.displayMovie,
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  startGetMovies,
  startCloseModal,
  startAddMovie,
  startRemoveMovie,
  startLogin,
})(App);
