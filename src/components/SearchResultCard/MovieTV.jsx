import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CardWrapper, CardImage, CardTitle, CardDate, CardOverview } from '../../styles/jsx/MovieTVCard'
import media_placeholder from '../../img/media-placeholder.webp'

const MovieTV = ({ value, index }) => {
	const mediaImage = value.poster_path ? `https://image.tmdb.org/t/p/w92${value.poster_path}` : media_placeholder

	const date =
		value.media_type === 'tv' ? (
			<CardDate>
				{new Date(value.first_air_date).toLocaleString('en-US', {
					year: 'numeric',
					month: 'long',
					day: '2-digit'
				})}
			</CardDate>
		) : (
			<CardDate>
				{value.release_date ? (
					new Date(value.release_date).toLocaleString('en-US', {
						year: 'numeric',
						month: 'long',
						day: '2-digit'
					})
				) : (
					<span>TBA</span>
				)}
			</CardDate>
		)

	return (
		<div>
			<CardWrapper key={index}>
				<div className="d-flex align-items-center">
					<CardImage variant="top" src={mediaImage} />
					<Card.Body className="p-2">
						{value.media_type === 'movie' ? (
							<Link
								to={'movie/' + value.id.toString() + '/' + value.title.replace(/ /g, '-').toLowerCase()}
								style={{ textDecoration: 'none' }}
							>
								<CardTitle>{value.title}</CardTitle>
							</Link>
						) : (
							<Link
								to={'tv/' + value.id.toString() + '/' + value.name.replace(/ /g, '-').toLowerCase()}
								style={{ textDecoration: 'none' }}
							>
								<CardTitle>{value.name}</CardTitle>
							</Link>
						)}

						{date}
						<CardOverview>{value.overview}</CardOverview>
					</Card.Body>
				</div>
			</CardWrapper>
		</div>
	)
}

export default MovieTV
