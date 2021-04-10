import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'

import contentAction from '../../redux/actions/contentAction'
import MediaCard from '../MediaCard/MediaCard'
import { CardContainer } from '../styles/ScrollingContent'

const Trending = () => {
	const dispatch = useDispatch()
	const content = useSelector((state) => state.content)

	console.log(content)

	useEffect(() => {
		dispatch(contentAction.setTrending())
	}, [dispatch])

	return (
		<Container>
			<h3>Trending</h3>
			<CardContainer>
				{content.map((value, index) => {
					return <MediaCard value={value} key={index} />
				})}
			</CardContainer>
		</Container>
	)
}

export default Trending
