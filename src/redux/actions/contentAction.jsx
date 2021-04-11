import HelperAPI from '../../API/HelperAPI'
<<<<<<< HEAD
import apiKey from '../../API/APIKey'
import { SET_TRENDING, SET_POPULAR_MOVIES, SET_SEARCH_RESULT } from '../actionTypes/contentActionTypes'
=======
import { SET_TRENDING, SET_POPULAR_MOVIES, SET_NOW_PLAYING_MOVIES, SET_UPCOMING_MOVIES, SET_TOP_RATED_MOVIES } from '../actionTypes/contentActionTypes'
>>>>>>> 87285f145aed20c4cf05f4a6540fb5f9562e3e9f

const setTrending = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/trending/all/week?api_key=${apiKey}&language=en-US`
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
		const content = await HelperAPI({
			method: 'get',
			url: `/movie/popular?api_key=${apiKey}&language=en-US&page=1`
		})

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

<<<<<<< HEAD
const setSearchResult = (query) => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1`
		})

		console.log(content)

		dispatch({
			type: SET_SEARCH_RESULT,
			payload: {}
=======
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
>>>>>>> 87285f145aed20c4cf05f4a6540fb5f9562e3e9f
		})
	} catch (error) {
		console.log(error)
	}
}

const contentAction = {
	setTrending,
	setPopularMovies,
<<<<<<< HEAD
	setSearchResult
=======
	setNowPlayingMovies,
	setUpcomingMovies,
	setTopRatedMovies
>>>>>>> 87285f145aed20c4cf05f4a6540fb5f9562e3e9f
}

export default contentAction
