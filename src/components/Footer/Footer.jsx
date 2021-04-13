import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer class="justify-content-center">
        <nav class="container">
            <div class="footer-top">
                <div class="footer-top-1">
                    <h3>Exchoflix</h3>
                    <p>
                        Watch movies <br />
                        Up to date!
                    </p>
                </div>
                <div class="footer-top-2">
                    <h5>Excellent Echo Project</h5>
                    <h6><a href="https://impactsport.netlify.app" target="_blank">Impact Sport</a></h6>
                    <h6><a href="https://echo-noted.netlify.app" target="_blank">Excho Restaurant</a></h6>
                    <h6><a href="https://exo-travel.netlify.app" target="_blank">Exo Trans</a>
                    </h6>
                </div>
                <div class="footer-top-3">
                    <h5>Contact Us</h5>
                    <h6>support@excho.com</h6>
                    <h6>012 - 3456 - 7890</h6>
                    <h6>Indonesia</h6>
                </div>
                <div class="footer-top-4">
                    <h5>Our Social Media</h5>
                    
                    <a href="" class="nav_link" target="_blank"><box-icon type='logo' name='facebook-circle'></box-icon></a>
                    <a href="" class="nav_link" target="_blank"><i class="bx bxl-instagram"></i></a>
                    <a href="" class="nav_link" target="_blank"><i class="bx bxl-linkedin"></i></a>
                    <a href="" class="nav_link" target="_blank"><i class="bx bxl-twitter"></i></a>
                </div>
            </div>
            <div class="footer-bottom text-center">
                <p>&copy 2021. All Right Reserved. By <a href="#team">Excho Teams</a> with <i class='bx bxs-heart'></i></p>
            </div>
        </nav>
    </footer>
    </>
    )
}

export default Footer;