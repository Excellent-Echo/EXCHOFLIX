import Home from './pages/Home'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// MOVIES
import PopularMovies from './pages/Movies/PopularMovies'
import NowPlayingMovies from './pages/Movies/NowPlayingMovies'
import TopRatedMovies from './pages/Movies/TopRatedMovies'
import UpcomingMovies from './pages/Movies/UpcomingMovies'

// TV SHOWS
import PopularTVShows from './pages/TVShows/PopularTVShows'
import AiringTodayTVShows from './pages/TVShows/AiringTodayTVShows'
import OnTheAirTVShows from './pages/TVShows/OnTheAirTVShows'
import TopRatedTVShows from './pages/TVShows/TopRatedTVShows'

import Footer from './components/Footer/Footer.jsx'
import SearchResult from './pages/SearchResult'
import Details from './pages/Details'
import Login from './pages/Login'

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path="/popular-tv-shows">
						<PopularTVShows />
					</Route>
					<Route path="/airing-today-tv-shows">
						<AiringTodayTVShows />
					</Route>
					<Route path="/on-the-air-tv-shows">
						<OnTheAirTVShows />
					</Route>
					<Route path="/top-rated-tv-shows">
						<TopRatedTVShows />
					</Route>
					<Route path="/upcoming-movies">
						<UpcomingMovies />
					</Route>
					<Route path="/top-rated-movies">
						<TopRatedMovies />
					</Route>
					<Route path="/now-playing-movies">
						<NowPlayingMovies />
					</Route>
					<Route path="/popular-movies">
						<PopularMovies />
					</Route>
					<Route path="/search-result">
						<SearchResult />
					</Route>
					<Route path="/:category/:id/:title" children={<Details />} />
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	)
}

export default App
