import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PopularMovies from'./pages/PopularMovies';
import NowPlayingMovies from'./pages/NowPlayingMovies';
import TopRatedMovies from'./pages/TopRatedMovies';
import UpcomingMovies from'./pages/UpcomingMovies';
import HomePage from './pages/Homepage';

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
						<PopularMovies/>
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App;

