import React from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';
import { startGetMovies } from './store/actions/movies';
import { IMovie } from './types';

// Alt vi vil hente fra redux sin state, tar vi inn her
// og husker å sende dem med i mapStateToProps
const BoilerPlate = ({
  user,
  banan,
  getMovies,
}: {
  user: Object | null;
  banan: Array<IMovie>;
  getMovies: VoidFunction;
}) => {
  return <h1>hei</h1>;
};

// tar inn state og gir dem til props
const mapStateToProps = (state: any) => {
  // returnerer et objekt
  return {
    // Vi vil bruke disse fra state
    user: state.user,
    banan: state.movies,
  };
};

const mapDispatchToProps = {
  getMovies: startGetMovies,
};
//                      (verdier fra state, funksjoner som gjør noe med state)
//
//                          connect(state, actions)(Komponent)
export default connect(mapStateToProps, mapDispatchToProps)(BoilerPlate);
