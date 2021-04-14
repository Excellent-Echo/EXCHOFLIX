import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './NavbarMenu.css'
import contentAction from '../../redux/actions/contentAction'

const NavbarMenu = () => {
	const dispatch = useDispatch()
	const searchValue = useSelector((state) => state.searchValue.searchValue)

	console.log(searchValue)

	const handleForm = (e) => {
		e.preventDefault()

		dispatch(contentAction.setSearch(''))
	}

	return (
		<>
			<Navbar bg="light" expand="lg">
				<box-icon as={Link} to="/" name="movie-play">
					Exchoflix
				</box-icon>
				<Navbar.Brand as={Link} to="/" className="mx-3">
					Exchoflix
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown title="Movies" id="basic-nav-dropdown">
							<NavDropdown.Item as={Link} to="/popular-movies">
								Popular
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/now-playing-movies">
								Now Playing
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/upcoming-movies">
								Upcoming
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/top-rated-movies">
								Top Rated
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="TV Shows" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Airing Today</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">On TV</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Top Rated</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline onSubmit={handleForm}>
						<FormControl
							type="text"
							placeholder="Search"
							className="mr-sm-2"
							value={searchValue}
							onChange={(e) => dispatch(contentAction.setSearch(e.target.value))}
						/>
					</Form>
					<Nav>
						<Nav.Link href="#signin">Sign In</Nav.Link>
						<Nav.Link href="#signup">Sign Up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default NavbarMenu
