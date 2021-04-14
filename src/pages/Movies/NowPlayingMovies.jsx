import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import contentAction from '../../redux/actions/contentAction'
import MediaCard from '../../components/MediaCard/MediaCard'

const NowPlayingMovies = () => {
	const dispatch = useDispatch()
	const content = useSelector((state) => state.nowPlayingMovies)

	console.log(content)

	useEffect(() => {
		dispatch(contentAction.setNowPlayingMovies())
	}, [dispatch])

	return (
		<Container className="nowPlayingMoviesContainer">
			{content.map((value, index) => {
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
			})}
		</Container>
	)
}

export default NowPlayingMovies
