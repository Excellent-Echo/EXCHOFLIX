import { SET_FREE_WATCH } from '../actionTypes/contentActionTypes'

const initialState = [];

const freetoWatchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FREE_WATCH:
			return action.payload.content
		default:
			return state
	}
}

export default freetoWatchReducer;