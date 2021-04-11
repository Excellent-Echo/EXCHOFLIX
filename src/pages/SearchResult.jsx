import React from 'react'
import ResultCard from '../components/ResultCard/ResultCard'
import { Container, Row, Col } from 'react-bootstrap'

const SearchResult = () => {
	return (
		<Container>
			<Row>
				<Col sm={3}>
					<h1>Search Result Page</h1>
				</Col>

				<Col>
					<ResultCard />
				</Col>
			</Row>
		</Container>
	)
}

export default SearchResult
