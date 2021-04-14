import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
					return (
						<Link
							to={
								value.first_air_date
									? 'tv/' + value.id.toString() + '/' + value.name
									: 'movie/' + value.id.toString() + '/' + value.title
							}
							style={{ textDecoration: 'none' }}
						>
							<MediaCard value={value} key={index} />
						</Link>
					)
				})
			) : (
				<h2>ini masih loading</h2>
			)}
		</Container>
	)
}

export default PopularMovies
