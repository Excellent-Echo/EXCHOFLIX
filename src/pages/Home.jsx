import React from 'react'
import Hero from '../components/Hero/Hero'
// import FreeToWatch from '../components/FreeToWatch/FreeToWatch'
import Trending from '../components/Trending/Trending'
import NewsHome from '../components/NewsHome/NewsHome'

// import SearchResult from './SearchResult'

const Home = () => {
	return (
		<div>
			<Hero />
			<Trending />
			<NewsHome />
		</div>
	)
}

export default Home
