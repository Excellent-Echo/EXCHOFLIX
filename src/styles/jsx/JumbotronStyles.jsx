import styled from 'styled-components'
import { Jumbotron } from 'react-bootstrap'

const Home = styled(Jumbotron)`
	background-image: url('https://i.ibb.co/nsXbkNf/jumbotron-bg.webp');
	-webkit-background-size: 100% 100%;
	-moz-background-size: 100% 100%;
	-o-background-size: 100% 100%;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	height: 25rem;

	h2 {
		font-size: 3em;
		font-weight: 700;
		line-height: 1;
		color: #fff;
	}

	h3 {
		font-size: 2em;
		font-weight: 400;
		color: #fff;
	}
`

const Details = styled(Jumbotron)`
	background-image: ${(props) => `url(https://image.tmdb.org/t/p/w1280/${props.src})`};
	height: 35rem;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: right top -100px;
	filter: grayscale(50%);
	-webkit-filter: grayscale(50%);

	p {
		color: #fff;
		text-shadow: 0 0 3px #000;
	}

	h2 {
		color: #fff;
		font-weight: 700;
		text-shadow: 0 0 3px #000;
	}

	h3 {
		color: #fff;
		text-shadow: 0 0 3px #000;
		font-weight: 600;
		font-size: 1.3em;
	}
`

const JumbotronStyles = {
	Home: Home,
	Details: Details
}

export default JumbotronStyles
