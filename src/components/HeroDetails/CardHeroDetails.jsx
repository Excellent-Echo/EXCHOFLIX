import React from 'react'
import { Card } from 'react-bootstrap'

const CardHeroDetails = ({ image }) => {
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${image}`} />
			</Card>
		</div>
	)
}

export default CardHeroDetails
