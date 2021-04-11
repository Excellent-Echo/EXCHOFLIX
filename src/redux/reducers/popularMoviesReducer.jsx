import { SET_POPULAR_MOVIES } from '../actionTypes/contentActionTypes';

const initialState = [];
const popularMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES:
            return action.payload.content
        default:
            return state
    }
}

export default popularMoviesReducer;