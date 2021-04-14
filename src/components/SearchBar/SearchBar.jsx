import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import contentAction from '../../redux/actions/contentAction'

const SearchBar = () => {
	const dispatch = useDispatch()
	let history = useHistory()
	const searchValue = useSelector((state) => state.searchValue.searchValue)

	const HandleForm = (e) => {
		e.preventDefault()
		dispatch(contentAction.setSearchResult(searchValue))
		dispatch(contentAction.setSearch(''))
		history.push(`/search-result?q=${searchValue}`)
	}

	return (
		<div>
			<Form inline onSubmit={HandleForm}>
				<FormControl
					type="text"
					placeholder="Search"
					className="mr-sm-2"
					value={searchValue}
					onChange={(e) => dispatch(contentAction.setSearch(e.target.value))}
				/>
			</Form>
		</div>
	)
}

export default SearchBar
