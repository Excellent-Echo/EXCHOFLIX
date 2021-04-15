import axios from 'axios'
import APIKey from '../../API/APIKey'
import HelperAPI from '../../API/HelperAPI'
import {
	SET_TRENDING,
	SET_POPULAR_MOVIES,
	SET_NOW_PLAYING_MOVIES,
	SET_UPCOMING_MOVIES,
	SET_TOP_RATED_MOVIES,
	SET_FREE_WATCH,
	SET_SEARCH,
	SET_POPULAR_TV_SHOWS,
	SET_TOP_RATED_TV_SHOWS,
	SET_AIRING_TODAY_TV_SHOWS,
	SET_ON_THE_AIR_TV_SHOWS,
	SET_SEARCH_RESULT,
	SET_DETAILS,
	SET_LOADING,
	SET_ERROR,
	SET_NEWS,
	SET_HOME_NEWS
} from '../actionTypes/contentActionTypes'

const setTrending = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/trending/all/week?api_key=${APIKey}&language=en-US`
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
		dispatch({
			type: SET_LOADING
		})

		const content = await HelperAPI({
			method: 'get',
			url: `/movie/popular?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_POPULAR_MOVIES,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
		dispatch({
			type: SET_ERROR
		})
	}
}

const setNowPlayingMovies = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`
		})

		console.log(content.data.results)
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
		const content = await HelperAPI({
			method: 'get',
			url: `/movie/upcoming?api_key=${APIKey}&language=en-US&page=1`
		})

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
		const content = await HelperAPI({
			method: 'get',
			url: `/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`
		})

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

const setFreetoWatch = () => async (dispatch) => {
	try {
		const content = await HelperAPI.freetoWatch({
			method: 'get'
		})

		dispatch({
			type: SET_FREE_WATCH,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setSearch = (searchValue) => {
	return {
		type: SET_SEARCH,
		payload: searchValue
	}
}

const setSearchResult = (searchValue) => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/search/multi?api_key=${APIKey}&language=en-US&query=${searchValue}&page=1&include_adult=false`
		})

		dispatch({
			type: SET_SEARCH_RESULT,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setPopularTVShows = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/tv/popular?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_POPULAR_TV_SHOWS,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setTopRatedTVShows = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/tv/top_rated?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_TOP_RATED_TV_SHOWS,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setAiringTodayTVShows = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/tv/airing_today?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_AIRING_TODAY_TV_SHOWS,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setOnTheAirTVShows = () => async (dispatch) => {
	try {
		const content = await HelperAPI({
			method: 'get',
			url: `/tv/on_the_air?api_key=${APIKey}&language=en-US&page=1`
		})

		dispatch({
			type: SET_ON_THE_AIR_TV_SHOWS,
			payload: {
				content: content.data.results
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setNews = (media_type, title) => async (dispatch) => {
	try {
		const news = await axios({
			method: 'get',
			url: `https://newsapi.org/v2/everything?q=${media_type},%20${title}&apiKey=cec95f9fa86f4e08957e92eb4c81ee8a`
		})

		dispatch({
			type: SET_NEWS,
			payload: {
				news: news.data.articles
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setHomeNews = () => async (dispatch) => {
	try {
		const homeNews = await axios({
			method: 'get',
			url: `https://newsapi.org/v2/everything?q=Hollywood&sortBy=popularity&apiKey=cec95f9fa86f4e08957e92eb4c81ee8a`
		})

		console.log(homeNews)

		dispatch({
			type: SET_HOME_NEWS,
			payload: {
				homeNews: homeNews.data.articles
			}
		})
	} catch (error) {
		console.log(error)
	}
}

const setDetails = (media_type, media_id) => async (dispatch) => {
	try {
		dispatch({
			type: SET_LOADING
		})

		const content = await HelperAPI({
			method: 'get',
			url: `/${media_type}/${media_id}?api_key=${APIKey}&append_to_response=videos`
		})

		const contentCrew = await HelperAPI({
			method: 'get',
			url: `/${media_type}/${media_id}/credits?api_key=${APIKey}&language=en-US`
		})

		const recommendations = await HelperAPI({
			method: 'get',
			url: `/${media_type}/${media_id}/recommendations?api_key=${APIKey}&language=en-US&page=1`
		})

		const director = contentCrew.data.crew.filter((value) => value.job === 'Director').map((value) => value.name)[0]
		const creator = content.data.created_by ? content.data.created_by.map((value) => value.name)[0] : ''
		const videos = content.data.videos.results.map((value) => value.key).map((value) => value)
		const seasons = content.data.seasons
		const season = seasons ? seasons[seasons.length - 1] : ''

		dispatch({
			type: SET_DETAILS,
			payload: {
				content: content.data,
				genre: content.data.genres.map((value) => value.name).join(', '),
				title: content.data.title ? content.data.title : content.data.name,
				release_date: content.data.release_date ? content.data.release_date : content.data.first_air_date,
				run_time: content.data.runtime ? content.data.runtime : content.data.episode_run_time[0],
				cast: contentCrew.data.cast,
				crew: {
					creator: creator,
					director: director
				},
				videos: videos,
				recommendations: recommendations.data.results,
				season: season
			}
		})

		// dispatch({
		// 	type : SET_GENRE,
		// 	payload : {
		// 		genre : //mapping
		// 	}
		// })
	} catch (error) {
		console.log(error)
	}
}

const contentAction = {
	setTrending,
	setPopularMovies,
	setNowPlayingMovies,
	setUpcomingMovies,
	setTopRatedMovies,
	setFreetoWatch,
	setPopularTVShows,
	setTopRatedTVShows,
	setAiringTodayTVShows,
	setOnTheAirTVShows,
	setSearch,
	setSearchResult,
	setDetails,
	setNews,
	setHomeNews
}

export default contentAction
