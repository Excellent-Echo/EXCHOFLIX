import { SET_NOW_PLAYING_MOVIES } from '../actionTypes/contentActionTypes'

const initialState = [];

const nowPlayingMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOW_PLAYING_MOVIES:
            return action.payload.content
        default:
            return state
    }
}

export default nowPlayingMoviesReducer;