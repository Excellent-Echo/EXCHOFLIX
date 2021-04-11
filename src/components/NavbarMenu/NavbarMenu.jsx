import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import './NavbarMenu.css'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand as={Link} to="/" className="mx-3">
					<box-icon name="movie-play"></box-icon>Exchoflix
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown title="Movies" id="basic-nav-dropdown">
							<NavDropdown.Item as={Link} to="/popular-movies">
								Popular
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Now Playing</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Upcoming</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Top Rated</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="TV Shows" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Airing Today</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">On TV</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Top Rated</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					</Form>
					<Nav>
						<Nav.Link href="#signin">Sign In</Nav.Link>
						<Nav.Link href="#signup">Sign Up</Nav.Link>
						<Nav.Link as={Link} to="/search">
							Search Result
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default NavbarMenu
