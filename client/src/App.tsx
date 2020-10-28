import React from 'react';
import './App.css';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { startGetMovies } from './store/actions/movies';
import { startCloseModal } from './store/actions/displayMovie';
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
import { MovieType, StoreState } from './types';

const App = ({
  startCloseModal,
  displayMovie,
}: {
  startCloseModal: VoidFunction;
  displayMovie: MovieType | null;
}) => {
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
                <Route path='/startLogin' component={Login} />
                <Route path='/startRegister' component={Register} />
              </Switch>
              {displayMovie && (
                <MovieModal
                  movie={displayMovie}
                  startCloseModal={startCloseModal}
                />
              )}
            </main>
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
  };
};

export default connect(mapStateToProps, {
  startGetMovies,
  startCloseModal,
})(App);
