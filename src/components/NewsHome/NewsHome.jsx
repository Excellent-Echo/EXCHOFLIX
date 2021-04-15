import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Card } from 'react-bootstrap'

import contentAction from '../../redux/actions/contentAction'

const NewsHome = () => {
	const dispatch = useDispatch()
	const { homeNews } = useSelector((state) => state.homeNews)

	useEffect(() => {
		dispatch(contentAction.setHomeNews())
	}, [dispatch])

	return (
		<Container>
			<h4 className="mb-4">News from Hollywood</h4>
			<div className="d-flex flex-column">
				{homeNews &&
					homeNews.slice(0, 6).map((value, index) => {
						return (
							<a href={value.url} style={{ textDecoration: 'none' }}>
								<Card style={{ width: '100%', marginBottom: '1rem' }}>
									<div className="d-flex">
										<Card.Img
											variant="top"
											src={value.urlToImage}
											style={{ width: '150px', height: '150px', objectFit: 'cover' }}
										/>
										<Card.Body>
											<Card.Title>{value.title}</Card.Title>
											<Card.Text>{value.description}</Card.Text>
										</Card.Body>
									</div>
								</Card>
							</a>
						)
					})}
			</div>
		</Container>
	)
}

export default NewsHome
