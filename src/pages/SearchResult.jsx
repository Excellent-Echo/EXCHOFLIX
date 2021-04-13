import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Nav, Container, Row, Col } from 'react-bootstrap'
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
	const searchValue = useSelector((state) => state.searchValue.searchValue)

	// console.log(searchResult)
	// console.log(searchValue)

	// useEffect(() => {
	// 	dispatch(contentAction.setSearchResult(searchValue))
	// }, [dispatch, searchValue])

	useEffect(() => {
		// console.log(query.get('keyword'))
		dispatch(contentAction.setSearchResult(query.get('q')))
	}, [])

	return (
		<Container>
			<Row>
				<p>{query.get('query')}</p>
				<Col sm={2}>
					<Nav variant="pills" defaultActiveKey="/home" className="flex-column">
						<Nav.Item>
							<Nav.Link href="/home">Movie</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-1">TV</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link-2">People</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>

				<Col>
					{searchResult &&
						searchResult.map((value, index) => {
							return value.media_type === 'movie' || value.media_type === 'tv' ? (
								<MovieTV value={value} index={index} key={index} />
							) : (
								<People value={value} index={index} key={index} />
							)
						})}
				</Col>
			</Row>
		</Container>
	)
}

export default SearchResult
