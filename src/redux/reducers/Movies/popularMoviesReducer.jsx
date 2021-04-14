import { SET_POPULAR_MOVIES, SET_LOADING, SET_ERROR } from '../../actionTypes/contentActionTypes'

const initialState = {
		content: '',
		loading: false,
		error: false
	},
	popularMoviesReducer = (state = initialState, action) => {
		switch (action.type) {
			case SET_POPULAR_MOVIES:
				return {
					...state,
					content: action.payload.content,
					loading: false,
					error: false
				}
			case SET_LOADING:
				return { ...state, loading: true }
			case SET_ERROR:
				return { ...state, error: true }
			default:
				return state
		}
	}

export default popularMoviesReducer
