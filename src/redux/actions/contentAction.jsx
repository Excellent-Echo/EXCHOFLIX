import HelperAPI from '../../API/HelperAPI'
import apiKey from '../../API/APIKey'
import { SET_TRENDING, SET_POPULAR_MOVIES, SET_SEARCH_RESULT } from '../actionTypes/contentActionTypes'

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
		})
	} catch (error) {
		console.log(error)
	}
}

const contentAction = {
	setTrending,
	setPopularMovies,
	setSearchResult
}

export default contentAction
