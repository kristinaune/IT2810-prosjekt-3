import React, { ReactElement } from 'react';
import { connect } from 'react-redux';

/**
 * Displays messsage if user is not logged in.
 */
const MyListUnAuth = (): ReactElement => {
  return <div className='container'>Not Authenticated</div>;
};

export default connect(null, {})(MyListUnAuth);
