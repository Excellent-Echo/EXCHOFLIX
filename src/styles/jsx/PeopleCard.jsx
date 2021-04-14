import styled from 'styled-components'
import { Card } from 'react-bootstrap'

export const CardImage = styled(Card.Img)`
	width: 70px;
	height: 70px;
	object-fit: cover;
	border-radius: 12px;
`

export const CardTitle = styled(Card.Text)`
	font-size: 1em;
	font-weight: 600;
	margin-bottom: 0px;
	color: #000;
	&:hover {
		color: #01b4e4;
	}
`

export const CardKnownFor = styled.p`
	font-size: 0.9em;
	font-weight: 400;
`
