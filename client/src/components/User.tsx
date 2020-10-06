import React from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';

// Alt vi vil hente fra redux sin state, tar vi inn her
// og husker å sende dem med i mapStateToProps
const User = ({ user }: { user: Object | null }) => {
  return <div className='Login'></div>;
  // <div className='logIn'>
  //     <Form>
  //     </Form>
  // </div>
  // )
};

// tar inn state og gir dem til props
const mapStateToProps = (state: any) => {
  // returnerer et objekt
  return {
    // Vi vil bruke disse fra state
    user: state.user,
  };
};

// const mapDispatchToProps = {
//   getMovies,
// };
//                      (verdier fra state, funksjoner som gjør noe med state)
//
//                          connect(state, actions)(Komponent)
export default connect(mapStateToProps)(User);
