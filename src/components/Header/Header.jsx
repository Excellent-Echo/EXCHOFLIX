import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../../styles/css/styles.css'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
	return (
		<>
			<Navbar expand="lg" sticky="top" bg="light">
				<Navbar.Brand as={Link} to="/" className="mx-3">
					<img
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzlhYTNhOCI+PHBhdGggZD0ibTM5MiAyNTYuMDAxdi0uMDAxaC0xNnY2NGgxNmw4MCA1NnYtMTc2eiIgZmlsbD0iIzlhYTNhOCIgZGF0YS1vcmlnaW5hbD0iIzlhYTNhOCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNjggMzQ0djE2bDE2IDMyaDEyMGwxNi0zMnYtMTZ6IiBmaWxsPSIjOWFhM2E4IiBkYXRhLW9yaWdpbmFsPSIjOWFhM2E4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTY0IDI0MGg0OHY5NmgtNDh6IiBmaWxsPSIjOWFhM2E4IiBkYXRhLW9yaWdpbmFsPSIjOWFhM2E4IiBzdHlsZT0iIj48L3BhdGg+PGNpcmNsZSBjeD0iMTYwIiBjeT0iMTIwIiByPSI5NiIgZmlsbD0iIzlhYTNhOCIgZGF0YS1vcmlnaW5hbD0iIzlhYTNhOCIgc3R5bGU9IiI+PC9jaXJjbGU+PC9nPjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjeD0iMTYwIiBjeT0iNzIiIGZpbGw9IiNlOWVlZjIiIHI9IjE2IiBkYXRhLW9yaWdpbmFsPSIjZTllZWYyIiBzdHlsZT0iIj48L2NpcmNsZT48Y2lyY2xlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY3g9IjE2MCIgY3k9IjE2OCIgZmlsbD0iI2U5ZWVmMiIgcj0iMTYiIGRhdGEtb3JpZ2luYWw9IiNlOWVlZjIiIHN0eWxlPSIiPjwvY2lyY2xlPjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjeD0iMzE2IiBjeT0iMTU2IiBmaWxsPSIjOWFhM2E4IiByPSI2MCIgZGF0YS1vcmlnaW5hbD0iIzlhYTNhOCIgc3R5bGU9IiI+PC9jaXJjbGU+PGNpcmNsZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGN4PSIxMTIiIGN5PSIxMjAiIGZpbGw9IiNlOWVlZjIiIHI9IjE2IiBkYXRhLW9yaWdpbmFsPSIjZTllZWYyIiBzdHlsZT0iIj48L2NpcmNsZT48Y2lyY2xlIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY3g9IjIwOCIgY3k9IjEyMCIgZmlsbD0iI2U5ZWVmMiIgcj0iMTYiIGRhdGEtb3JpZ2luYWw9IiNlOWVlZjIiIHN0eWxlPSIiPjwvY2lyY2xlPjxyZWN0IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzZhNzA3MyIgaGVpZ2h0PSIxNDQiIHJ4PSIxNiIgd2lkdGg9IjI4OCIgeD0iMTA0IiB5PSIyMTYiIGRhdGEtb3JpZ2luYWw9IiM2YTcwNzMiIHN0eWxlPSIiPjwvcmVjdD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00MCAyMTZoMzJ2MTQ0aC0zMnoiIGZpbGw9IiM2YTcwNzMiIGRhdGEtb3JpZ2luYWw9IiM2YTcwNzMiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMzIgMzEydi00OGwzMiAyNHoiIGZpbGw9IiM5YWEzYTgiIGRhdGEtb3JpZ2luYWw9IiM5YWEzYTgiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNjAgOTZhMjQgMjQgMCAxIDAgLTI0LTI0IDI0LjAyNyAyNC4wMjcgMCAwIDAgMjQgMjR6bTAtMzJhOCA4IDAgMSAxIC04IDggOC4wMDkgOC4wMDkgMCAwIDEgOC04eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE4NCAxNjhhMjQgMjQgMCAxIDAgLTI0IDI0IDI0LjAyNyAyNC4wMjcgMCAwIDAgMjQtMjR6bS0zMiAwYTggOCAwIDEgMSA4IDggOC4wMDkgOC4wMDkgMCAwIDEgLTgtOHoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMTIgOTZhMjQgMjQgMCAxIDAgMjQgMjQgMjQuMDI3IDI0LjAyNyAwIDAgMCAtMjQtMjR6bTAgMzJhOCA4IDAgMSAxIDgtOCA4LjAwOSA4LjAwOSAwIDAgMSAtOCA4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMxMS4xNTUgMzk1LjU3OCAxMy43ODktMjcuNTc4aDUxLjA1NmEyNC4wMjcgMjQuMDI3IDAgMCAwIDI0LTI0di04LjYzNWw2Ny40MTIgNDcuMTg5YTggOCAwIDAgMCAxMi41ODgtNi41NTR2LTE3NmE4IDggMCAwIDAgLTEzLTYuMjQ3bC02NyA1My42di0xNS4zNTNhMjQuMDI3IDI0LjAyNyAwIDAgMCAtMjQtMjRoLTE2LjI0OGE2Ny45NSA2Ny45NSAwIDAgMCAtMjAuNjU5LTExNS45NTZsLTEyNi4zLTYxLjYzNS0uMDA4LjAxNWExMDMuOTczIDEwMy45NzMgMCAxIDAgLTEwMy43MTcgMTgwLjIyMiAyNC4wMTcgMjQuMDE3IDAgMCAwIC0xMy4wNjggMjEuMzU0aC0xNnYtMTZhOCA4IDAgMCAwIC04LThoLTMyYTggOCAwIDAgMCAtOCA4djE0NGE4IDggMCAwIDAgOCA4aDMyYTggOCAwIDAgMCA4LTh2LTE2aDE2YTI0LjAyNyAyNC4wMjcgMCAwIDAgMjQgMjRoNDMuMDU2bDEzLjc4OSAyNy41NzhhOCA4IDAgMCAwIDcuMTU1IDQuNDIyaDM2bC0zNS4zODUgODQuOTIzYTggOCAwIDEgMCAxNC43NyA2LjE1NGwzMi42MTUtNzguMjc3djc1LjJhOCA4IDAgMCAwIDE2IDB2LTc1LjJsMzIuNjE1IDc4LjI3NmE4IDggMCAwIDAgMTQuNzctNi4xNTRsLTM1LjM4NS04NC45MjJoNDRhOCA4IDAgMCAwIDcuMTU1LTQuNDIyem0tMjQ3LjE1NS00My41NzhoLTE2di0xMjhoMTZ6bTQwMC0xMzUuMzU1djE0My45OWwtNjQtNDQuOHYtNDcuOTl6bS05Ni02MC42NDVhNTIgNTIgMCAxIDEgLTUyLTUyIDUyLjA1OSA1Mi4wNTkgMCAwIDEgNTIgNTJ6bS0xMDQuMjY5LTQzLjQ0MWExMDMuMjkxIDEwMy4yOTEgMCAwIDAgLTE1LjA1MS00Ni44MzNsNTAuMTUyIDI0LjQ3NGE2OC4xMzMgNjguMTMzIDAgMCAwIC0zNS4xMDEgMjIuMzU5em0tMTMuNzc4IDU5LjU4N2E2OC4xIDY4LjEgMCAwIDAgMjIuMjk1IDM1Ljg1NGgtNTYuODg1YTEwNC44IDEwNC44IDAgMCAwIDM0LjU5LTM1Ljg1NHptLTE3Ny45NTMtNTIuMTQ2YTg4IDg4IDAgMSAxIDg4IDg4IDg4LjEgODguMSAwIDAgMSAtODgtODh6bTggMjA4di04MGgxNnY4MHptMzIgMTZ2LTExMmE4LjAwOSA4LjAwOSAwIDAgMSA4LThoMjU2YTguMDA5IDguMDA5IDAgMCAxIDggOHYxMTJhOC4wMDkgOC4wMDkgMCAwIDEgLTggOGgtMjU2YTguMDA5IDguMDA5IDAgMCAxIC04LTh6bTEzNi4wNzggNDBoLTU5LjEzNGwtOC0xNmgxMjYuMTEybC04IDE2eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwOCAxNDRhMjQgMjQgMCAxIDAgLTI0LTI0IDI0LjAyNyAyNC4wMjcgMCAwIDAgMjQgMjR6bTAtMzJhOCA4IDAgMSAxIC04IDggOC4wMDkgOC4wMDkgMCAwIDEgOC04eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI2OC44IDI4MS42LTMyLTI0YTggOCAwIDAgMCAtMTIuOCA2LjR2NDhhOCA4IDAgMCAwIDEyLjggNi40bDMyLTI0YTggOCAwIDAgMCAwLTEyLjh6bS0yOC44IDE0LjR2LTE2bDEwLjY2NyA4eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
						alt=""
						width="30"
					/>
					<span>Exchoflix</span>
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
							<NavDropdown.Item as={Link} to="/popular-tv-shows">
								Popular
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/airing-today-tv-shows">
								Airing Today
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/on-the-air-tv-shows">
								On TV
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/top-rated-tv-shows">
								Top Rated
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<SearchBar as={Link} to="/search-result" />
					<Nav>
						<Nav.Link as={Link} to="/login">
							Sign In
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}

export default Header
