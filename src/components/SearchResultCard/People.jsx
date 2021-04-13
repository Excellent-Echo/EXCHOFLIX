import React from 'react'
import { Card } from 'react-bootstrap'

import { CardImage, CardTitle, CardKnownFor } from '../../styles/jsx/PeopleCard'
import default_placeholder from '../../img/people-placeholder.png'

const MovieTV = ({ value, index }) => {
	const knownFor = value.known_for
		.map((value, index) => (value.media_type === 'tv' ? value.name : value.title))
		.join(', ')

	const peopleImage = value.profile_path ? `https://image.tmdb.org/t/p/w92${value.profile_path}` : default_placeholder

	return (
		<div>
			<Card style={{ width: '100%', border: 'none' }} key={index}>
				<div className="d-flex align-items-center">
					<CardImage variant="top" src={peopleImage} />
					<Card.Body>
						<CardTitle>{value.name}</CardTitle>
						<CardKnownFor>{knownFor}</CardKnownFor>
					</Card.Body>
				</div>
			</Card>
		</div>
	)
}

export default MovieTV
