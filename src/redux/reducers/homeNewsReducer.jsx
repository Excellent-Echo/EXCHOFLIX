import { SET_HOME_NEWS } from '../actionTypes/contentActionTypes'

const initialState = {
	homeNews: ''
}

const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_HOME_NEWS:
			return {
				...state,
				homeNews: action.payload.homeNews
			}
		default:
			return state
	}
}

export default detailReducer
