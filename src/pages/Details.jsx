import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

// import HeroDetails from '../components/HeroDetails/HeroDetails'
import contentAction from '../redux/actions/contentAction'
import JumbotronStyles from '../styles/jsx/JumbotronStyles'
import CardHeroDetails from '../components/HeroDetails/CardHeroDetails'

const Details = () => {
	const dispatch = useDispatch()
	let { category, id } = useParams()
	const { content, loading, genre } = useSelector((state) => state.detail)

	useEffect(() => {
		dispatch(contentAction.setDetails(category, id)) // masih ngeget
	}, [dispatch, category, id])

	console.log(genre)
	console.log(loading)

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

	return (
		<>
			{/* <HeroDetails content={content} /> */}

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

			<Container>
				<h1>Details Page</h1>
				<h3>ID: {id}</h3>
				<h3>Category: {category}</h3>
				{/* <h3>Title: {content.title}</h3> */}
			</Container>
		</>
	)
}

export default Details
