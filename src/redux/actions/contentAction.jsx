import HelperAPI from '../../API/HelperAPI'
import { SET_TRENDING, SET_POPULAR_MOVIES, SET_NOW_PLAYING_MOVIES, SET_UPCOMING_MOVIES, SET_TOP_RATED_MOVIES } from '../actionTypes/contentActionTypes'

const setTrending = () => async (dispatch) => {
	try {
		const content = await HelperAPI.trending({
			method: 'get'
		})

		dispatch({
			type: SET_TRENDING,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setPopularMovies = () => async (dispatch) => {
	try {
		const content = await HelperAPI.popularMovies({
			method: 'get'
		})
		console.log(content);

		dispatch({
			type: SET_POPULAR_MOVIES,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setNowPlayingMovies = () => async (dispatch) => {
	try {
		const content = await HelperAPI.nowPlayingMovies({
			method: 'get'
		})
		console.log(content);

		dispatch({
			type: SET_NOW_PLAYING_MOVIES,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setUpcomingMovies = () => async (dispatch) => {
	try {
		const content = await HelperAPI.upcomingMovies({
			method: 'get'
		})
		console.log(content);

		dispatch({
			type: SET_UPCOMING_MOVIES,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setTopRatedMovies = () => async (dispatch) => {
	try {
		const content = await HelperAPI.topRatedMovies({
			method: 'get'
		})
		console.log(content);

		dispatch({
			type: SET_TOP_RATED_MOVIES,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const contentAction = {
	setTrending,
	setPopularMovies,
	setNowPlayingMovies,
	setUpcomingMovies,
	setTopRatedMovies
}

export default contentAction;
