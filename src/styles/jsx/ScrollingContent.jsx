import styled from 'styled-components'
import { Container, Card } from 'react-bootstrap'

export const CardContainer = styled(Container)`
	display: flex;
	overflow-x: auto;
	overflow-y: hidden;
	margin-bottom: 3rem;
	height: 100%;
`

export const CardImage = styled(Card.Img)`
	width: 154px;
	border-radius: 12px;
`

export const CastImage = styled(Card.Img)`
	width: 138px;
	height: 175px;
	object-fit: cover;
	border-radius: 12px;
`

export const CardTitle = styled(Card.Text)`
	font-size: 0.85rem;
	font-weight: 700;
	color: #000;
	margin-bottom: 0px;
	&:hover {
		color: #01b4e4;
	}
`

export const CardDate = styled.p`
	font-size: 0.7rem;
	color: rgba(0, 0, 0, 0.6);
`
