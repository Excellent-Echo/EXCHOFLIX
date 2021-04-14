import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import contentAction from '../../redux/actions/contentAction'
import MediaCard from '../../components/MediaCard/MediaCard'

const TopRatedTVShows = () => {
	const dispatch = useDispatch(),
		content = useSelector((state) => state.topRatedTVShows)

	console.log(content)

	useEffect(() => {
		dispatch(contentAction.setTopRatedTVShows())
	}, [dispatch])

	return (
		<Container className="topRatedTVShowsContainer">
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

export default TopRatedTVShows
