import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'

import HeroDetails from '../components/HeroDetails/HeroDetails'
import contentAction from '../redux/actions/contentAction'
import { CardContainer } from '../styles/jsx/ScrollingContent'
import CastCard from '../components/MediaCard/CastCard'
import MediaCard from '../components/MediaCard/MediaCard'

const Details = () => {
	const dispatch = useDispatch()
	let { category, id, title } = useParams()
	const { content, genre, titles, release_date, run_time, cast, crew, videos, recommendations, season } = useSelector(
		(state) => state.detail
	)
	const { news } = useSelector((state) => state.news)

	useEffect(() => {
		dispatch(contentAction.setDetails(category, id))
		dispatch(contentAction.setNews(category, title))
	}, [dispatch, category, id, title])

	return (
		<>
			<HeroDetails
				content={content}
				genre={genre}
				title={titles}
				release_date={release_date}
				crew={crew}
				run_time={run_time}
			/>

			<Container>
				<Row>
					<Col sm={9}>
						{category === 'tv' ? (
							<div style={{ marginBottom: '3rem' }}>
								<h3 style={{ fontSize: '2.1rem', fontWeight: '600', lineHeight: '2.5rem' }}>
									Current Season
								</h3>
								{category === 'tv' ? (
									<Row
										className="p-2"
										style={{
											border: '1px solid 227,227,227,1',
											borderRadius: '12px',
											boxShadow: '0 2px 8px rgb(0 0 0 / 10%)'
										}}
									>
										<Col sm={3}>
											<img
												src={`https://image.tmdb.org/t/p/w154${season.poster_path}`}
												alt="tv-series"
											/>
										</Col>

										<Col className="d-flex flex-column align-items-between">
											<div className="mb-2">
												<h4>{season.name}</h4>
												<h6>
													{season.air_date ? season.air_date.slice(0, 4) : ''} |{' '}
													{season.episode_count} Episodes
												</h6>
											</div>
											<div>
												<p style={{ lineHeight: '1.4' }}>{season.overview}</p>
											</div>
										</Col>
									</Row>
								) : (
									''
								)}
							</div>
						) : (
							''
						)}

						<div>
							<h3 style={{ fontSize: '2.1rem', fontWeight: '600', lineHeight: '2.5rem' }}>Videos</h3>
							<CardContainer>
								{videos &&
									videos.map((value) => {
										return (
											<div
												style={{
													width: '553px',
													height: '360px',
													marginRight: '15%'
												}}
											>
												<ReactPlayer
													url={`https://www.youtube.com/watch?v=${value}`}
													controls={true}
												/>
											</div>
										)
									})}
							</CardContainer>
						</div>

						<div>
							<h3 style={{ fontSize: '2.1rem', fontWeight: '600', lineHeight: '2.5rem' }}>Top Cast</h3>
							<CardContainer>
								{cast &&
									cast.slice(0, 9).map((value, index) => {
										return <CastCard value={value} key={index} />
									})}
							</CardContainer>
						</div>

						<div>
							<h3 style={{ fontSize: '2.1rem', fontWeight: '600', lineHeight: '2.5rem' }}>
								More Like This
							</h3>
							<CardContainer>
								{recommendations &&
									recommendations.map((value, index) => {
										return (
											<Link
												to={{
													pathname:
														category === 'movie'
															? '/' +
															  `${category}/` +
															  value.id.toString() +
															  '/' +
															  value.title
															: '/' +
															  `${category}/` +
															  value.id.toString() +
															  '/' +
															  value.name
												}}
												style={{ textDecoration: 'none' }}
												onClick={window.scrollTo(0, 0)}
											>
												<MediaCard value={value} key={index} />
											</Link>
										)
									})}
							</CardContainer>
						</div>
					</Col>

					<Col>
						<h3 style={{ fontSize: '2.1rem', fontWeight: '600', lineHeight: '2.5rem' }}>News</h3>
						<div>
							<ul>
								{news &&
									news.slice(0, 5).map((value, index) => {
										return (
											<li className="mb-2">
												<a href={`${value.url}`} target="_blank" rel="noreferrer">
													{value.title}
												</a>
											</li>
										)
									})}
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Details
