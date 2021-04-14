import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import contentAction from '../../redux/actions/contentAction'
import MediaCard from '../MediaCard/MediaCard'
import { CardContainer } from '../../styles/jsx/ScrollingContent'

const Trending = () => {
	const dispatch = useDispatch()
	const content = useSelector((state) => state.trending)

	useEffect(() => {
		dispatch(contentAction.setTrending())
	}, [dispatch])

	return (
		<Container>
			<h4>Trending</h4>
			<CardContainer>
				{content.map((value, index) => {
					return (
						<Link
							to={
								value.media_type === 'tv'
									? 'tv/' + value.id.toString() + '/' + value.name.replace(/ /g, '-').toLowerCase()
									: 'movie/' +
									  value.id.toString() +
									  '/' +
									  value.title.replace(/ /g, '-').toLowerCase()
							}
							style={{ textDecoration: 'none' }}
						>
							<MediaCard value={value} key={index} />
						</Link>
					)
				})}
			</CardContainer>
		</Container>
	)
}

export default Trending
