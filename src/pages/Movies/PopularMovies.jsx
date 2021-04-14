import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import contentAction from '../../redux/actions/contentAction'
import MediaCard from '../../components/MediaCard/MediaCard'

const PopularMovies = () => {
	const dispatch = useDispatch()
	const { content, error } = useSelector((state) => state.popularMovies)

	useEffect(() => {
		dispatch(contentAction.setPopularMovies())
	}, [dispatch])

	return (
		<Container className="popularMoviesContainer">
			{error ? (
				<h2>ini error</h2>
			) : content ? (
				content.map((value, index) => {
					return <MediaCard value={value} key={index} />
					// return <h1>{value.title}</h1>
				})
			) : (
				<h2>ini masih loading</h2>
			)}
		</Container>
		// <p>ini halaman popular movies</p>
	)
}

export default PopularMovies
