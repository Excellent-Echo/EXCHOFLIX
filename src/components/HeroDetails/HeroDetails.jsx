import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import JumbotronStyles from '../../styles/jsx/JumbotronStyles'
import CardHeroDetails from './CardHeroDetails'

const HeroDetails = ({ content }) => {
	const genre = content.genres.map((value) => value.name).join(', ')
	const title_name = !content.title ? content.name : content.title
	const release_date = !content.release_date ? content.first_air_date : content.release_date

	const timeConvert = (min) => {
		var num = min
		var hours = num / 60
		var rhours = Math.floor(hours)
		var minutes = (hours - rhours) * 60
		var rminutes = Math.round(minutes)
		return rhours + 'h ' + rminutes + 'm'
	}

	console.log(typeof content.release_date) //image
	return (
		<div>
			<JumbotronStyles.Details src={content.backdrop_path}>
				<Row>
					<Col sm={3}>
						<CardHeroDetails image={content.poster_path} />
					</Col>

					<Col className="d-flex flex-column justify-content-center">
						<h2>{title_name}</h2>
						<p>
							{release_date} • {genre} • {timeConvert(content.runtime)}
						</p>
						<h3>Overview</h3>
						<p>{content.overview}</p>
					</Col>
				</Row>
			</JumbotronStyles.Details>
		</div>
	)
}

export default HeroDetails
