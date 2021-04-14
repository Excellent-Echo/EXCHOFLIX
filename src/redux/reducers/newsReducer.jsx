import { SET_NEWS } from '../actionTypes/contentActionTypes'

const initialState = {
	news: ''
}

const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEWS:
			return {
				...state,
				news: action.payload.news
			}
		default:
			return state
	}
}

export default detailReducer
