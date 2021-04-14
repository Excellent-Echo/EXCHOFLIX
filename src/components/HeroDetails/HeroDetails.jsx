import React from 'react'
import { Col, Row } from 'react-bootstrap'

import JumbotronStyles from '../../styles/jsx/JumbotronStyles'
import CardHeroDetails from './CardHeroDetails'

const HeroDetails = ({ content, genre, title, release_date, crew, run_time }) => {
	const timeConvert = (min) => {
		var num = min
		var hours = num / 60
		var rhours = Math.floor(hours)
		var minutes = (hours - rhours) * 60
		var rminutes = Math.round(minutes)
		return rhours === 0 ? rminutes + 'm' : rhours + 'h ' + rminutes + 'm'
	}

	return (
		<div>
			<JumbotronStyles.Details src={content.backdrop_path}>
				<Row>
					<Col sm={3} className="p-0">
						<CardHeroDetails image={content.poster_path} />
					</Col>

					<Col
						className="d-flex flex-column justify-content-center"
						style={{ backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '0.5rem' }}
					>
						<h2>{title}</h2>
						<p>
							{release_date} • {genre} • {timeConvert(run_time)}
						</p>
						<h3>Overview</h3>
						<p>{content.overview}</p>
						<p className="crew">{crew.director ? crew.director : crew.creator}</p>
						<p className="crew_job">{crew.director ? 'Director' : 'Creator'}</p>
					</Col>
				</Row>
			</JumbotronStyles.Details>
		</div>
	)
}

export default HeroDetails
