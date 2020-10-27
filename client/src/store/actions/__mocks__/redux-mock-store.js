'use strict';

import configureMockStore from 'redux-mock-store';
import middlewares from '../../../middlewares';

// create the mock store
const mockStore = configureMockStore(middlewares);

export default mockStore;
