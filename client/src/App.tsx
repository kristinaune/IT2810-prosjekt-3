import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getMovies } from './store/actions/movies';
import { loadUser } from './store/actions/user';
import MovieList from './components/MovieList';
import Search from './components/pages/Search';
import AllMovies from './components/pages/AllMovies';
import MyList from './components/pages/MyList';
import Navbar from './components/layout/Navbar';
import Account from './components/pages/Account';
import Footer from './components/layout/Footer';

const App = ({
  getMovies,
  loadUser,
}: {
  getMovies: Function;
  loadUser: Function;
}) => {
  getMovies();
  // Kommentert ut fordi den returnerer en 501-feil
  //loadUser();

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Search}>
              <MovieList />
            </Route>
            <Route exact path='/search' component={Search}></Route>
            <Route path='/allmovies' component={AllMovies}></Route>
            <Route path='/mylist' component={MyList} />
            <Route path='/account' component={Account} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};

export default connect(null, { getMovies, loadUser })(App);
