import { SET_DETAILS, SET_DETAILS_CREW, SET_LOADING } from '../actionTypes/contentActionTypes'

const initialState = {
	content: '',
	loading: false,
	genre: ''
}

const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DETAILS:
			return {
				...state,
				content: action.payload.content,
				genre: action.payload.genre,
				loading: false
			}
		case SET_LOADING:
			return { ...state, loading: true }
		default:
			return state
	}
}

export default detailReducer
