import * as actions from '../displayMovie';
import * as types from '../actionTypes';
import mockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'


import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('get movies from API', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            movies = []
        })
    })

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('get movies', () => {
        fetchMock.getOnce('/movies', {
            body:{
                movies: ['The Shawshank Redemption'] },
                headers: {
                    'content-type': 'application.json'
                }
            }
        );
        const expectedActions= [{
            type: types.LOAD_MOVIES,
            body: {
                movies: ['The Shawshank Redemption']
            }
        }]

        return store.dispatch(actions.get_movies()).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})