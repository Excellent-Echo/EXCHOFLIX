import React from 'react'
import Hero from '../components/Hero/Hero'
import FreeToWatch from '../components/FreeToWatch/FreeToWatch'
import Trending from '../components/Trending/Trending'

// import SearchResult from './SearchResult'

const Home = () => {
	return (
		<div>
			<Hero />
			<Trending />
			<FreeToWatch />
		</div>
	)
}

export default Home
