import React from 'react'
import { Card } from 'react-bootstrap'
import { CastImage, CardTitle, CardDate } from '../../styles/jsx/ScrollingContent'

const CastCard = ({ value, index }) => {
	return (
		<div>
			<Card className="mb-3 mt-3" style={{ width: '12rem', border: 'none' }} key={index}>
				<div style={{ marginBottom: '1rem' }}>
					<CastImage
						variant="top"
						src={`https://image.tmdb.org/t/p/w154${value.profile_path}`}
						className=""
					/>
				</div>

				<div style={{ width: '154px' }}>
					<CardTitle>{value.name}</CardTitle>
					<CardDate>{value.character}</CardDate>
				</div>
			</Card>
		</div>
	)
}

export default CastCard
