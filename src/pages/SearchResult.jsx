import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Nav, Container, Row, Col, Badge } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import contentAction from '../redux/actions/contentAction'
import MovieTV from '../components/SearchResultCard/MovieTV'
import People from '../components/SearchResultCard/People'

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const SearchResult = () => {
	const dispatch = useDispatch()
	let query = useQuery()
	const searchResult = useSelector((state) => state.searchResult)

	useEffect(() => {
		dispatch(contentAction.setSearchResult(query.get('q')))
	}, [query, dispatch])

	return (
		<Container>
			<Row>
				<p>{query.get('query')}</p>
				<Col sm={2}>
					<Nav variant="pills" defaultActiveKey="/home" className="flex-column">
						<Nav.Item>
							<Nav.Link href="/home">All</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-1">
								Movie<Badge variant="light">9</Badge>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-2">TV</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-3">People</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>

				<Col>
					{searchResult &&
						searchResult.map((value, index) => {
							return value.media_type === 'movie' || value.media_type === 'tv' ? (
								<MovieTV value={value} index={index} />
							) : (
								<People value={value} index={index} />
							)
						})}
				</Col>
			</Row>
		</Container>
	)
}

export default SearchResult
