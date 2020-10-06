import { GET_MOVIES_FROM_DB, GET_MOVIES_ERROR } from '../actions/actionTypes';

export default (state = [false], action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES_FROM_DB:
      return payload;
    case GET_MOVIES_ERROR:
      return [false, payload.content];
    default:
      return state;
  }
};
