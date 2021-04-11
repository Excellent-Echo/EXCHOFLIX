import { SET_UPCOMING_MOVIES } from '../actionTypes/contentActionTypes';

const initialState = [];
const upcomingMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UPCOMING_MOVIES:
            return action.payload.content;
        default:
            return state;
    }
}

export default upcomingMoviesReducer;