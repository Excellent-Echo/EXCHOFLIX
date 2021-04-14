import React from 'react'
import { Card } from 'react-bootstrap'

const CardHeroDetails = ({ image }) => {
	return (
		<div>
			<Card style={{ width: '18rem', borderRadius: '0.5rem', border: '2px solid rgba(0,0,0,0.7)' }}>
				<Card.Img
					variant="top"
					src={`https://image.tmdb.org/t/p/w300${image}`}
					style={{ borderRadius: '0.5rem' }}
				/>
			</Card>
		</div>
	)
}

export default CardHeroDetails
