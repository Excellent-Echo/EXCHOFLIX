import styled from 'styled-components'
import { Container, Card } from 'react-bootstrap'

export const CardContainer = styled(Container)`
	display: flex;
	overflow-x: auto;
`

export const CardImage = styled(Card.Img)`
	width: 154px;
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
