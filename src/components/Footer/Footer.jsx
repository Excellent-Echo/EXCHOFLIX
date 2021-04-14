import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<>
			<footer className="justify-content-center">
				<nav className="container">
					<div className="footer-top">
						<div className="footer-top-1">
							<h3>Exchoflix</h3>
							<p>
								Watch movies <br />
								Up to date!
							</p>
						</div>
						<div className="footer-top-2">
							<h5>Excellent Echo Project</h5>
							<h6>
								<a href="https://impactsport.netlify.app" target="_blank" rel="noreferrer">
									Impact Sport
								</a>
							</h6>
							<h6>
								<a href="https://echo-noted.netlify.app" target="_blank" rel="noreferrer">
									Excho Restaurant
								</a>
							</h6>
							<h6>
								<a href="https://exo-travel.netlify.app" target="_blank" rel="noreferrer">
									Exo Trans
								</a>
							</h6>
						</div>
						<div className="footer-top-3">
							<h5>Contact Us</h5>
							<h6>support@excho.com</h6>
							<h6>012 - 3456 - 7890</h6>
							<h6>Indonesia</h6>
						</div>
						<div className="footer-top-4">
							<h5>Our Social Media</h5>

							<a href="https://www.facebook.com" target="_blank" rel="noreferrer">
								<box-icon type="logo" name="facebook"></box-icon>
							</a>
							<a href="https://www.instagram.com" className="nav_link" target="_blank" rel="noreferrer">
								<box-icon type="logo" name="instagram"></box-icon>
							</a>
							<a href="https://www.twitter.com" className="nav_link" target="_blank" rel="noreferrer">
								<box-icon type="logo" name="twitter"></box-icon>
							</a>
						</div>
					</div>
					<div className="footer-bottom text-center">
						<p>
							&#169; 2021. All Right Reserved. By{' '}
							<a href="https://github.com/Excellent-Echo/EXCHOFLIX">Exchoflix Teams</a> with &#9829;
						</p>
					</div>
				</nav>
			</footer>
		</>
	)
}

export default Footer
