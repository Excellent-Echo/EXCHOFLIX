import { SET_DETAILS, SET_LOADING } from '../actionTypes/contentActionTypes'

const initialState = {
	content: '',
	loading: false,
	genre: '',
	titles: '',
	release_date: '',
	cast: '',
	crew: '',
	run_time: '',
	videos: '',
	recommendations: '',
	season: ''
}

const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DETAILS:
			return {
				...state,
				content: action.payload.content,
				genre: action.payload.genre,
				titles: action.payload.title,
				release_date: action.payload.release_date,
				cast: action.payload.cast,
				crew: {
					director: action.payload.crew.director,
					creator: action.payload.crew.creator
				},
				run_time: action.payload.run_time,
				videos: action.payload.videos,
				recommendations: action.payload.recommendations,
				season: action.payload.season,
				loading: false
			}
		case SET_LOADING:
			return { ...state, loading: true }
		default:
			return state
	}
}

export default detailReducer
