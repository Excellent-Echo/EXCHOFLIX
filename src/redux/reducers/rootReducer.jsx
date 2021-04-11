import trendingReducer from './trendingReducer';
import popularMoviesReducer from './popularMoviesReducer';
import nowPlayingMoviesReducer from './nowPlayingMoviesReducer';
import upcomingMoviesReducer from './upcomingMoviesReducer';
import topRatedMoviesReducer from './topRatedMoviesReducer';

const rootReducer = {
	content: trendingReducer,
	popularMovies: popularMoviesReducer,
	nowPlayingMovies: nowPlayingMoviesReducer,
	upcomingMovies: upcomingMoviesReducer,
	topRatedMovies: topRatedMoviesReducer
}

export default rootReducer;
