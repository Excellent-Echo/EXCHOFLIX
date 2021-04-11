<<<<<<< HEAD
import NavbarMenu from './components/NavbarMenu/NavbarMenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PopularMovie from './pages/PopularMovies'
import HomePage from './pages/Homepage'
import SearchResult from './pages/SearchResult'
=======
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PopularMovies from'./pages/PopularMovies';
import NowPlayingMovies from'./pages/NowPlayingMovies';
import TopRatedMovies from'./pages/TopRatedMovies';
import UpcomingMovies from'./pages/UpcomingMovies';
import HomePage from './pages/Homepage';
>>>>>>> 87285f145aed20c4cf05f4a6540fb5f9562e3e9f

function App() {
	return (
		<>
			<Router>
				<NavbarMenu />
				<Switch>
					<Route path="/upcoming-movies">
						<UpcomingMovies/>
					</Route>
					<Route path="/top-rated-movies">
						<TopRatedMovies/>
					</Route>
					<Route path="/now-playing-movies">
						<NowPlayingMovies/>
					</Route>
					<Route path="/popular-movies">
<<<<<<< HEAD
						<PopularMovie />
					</Route>
					<Route path="/search">
						<SearchResult />
=======
						<PopularMovies/>
>>>>>>> 87285f145aed20c4cf05f4a6540fb5f9562e3e9f
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 87285f145aed20c4cf05f4a6540fb5f9562e3e9f
