import styled from 'styled-components'
import { Card } from 'react-bootstrap'

export const CardWrapper = styled(Card)`
	width: 100%;
	border-radius: 12px;
	border: 1px solid rgba(var(--lightGrey), 1);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	margin-bottom: 0.5em;
`

export const CardImage = styled(Card.Img)`
	width: 92px;
	height: 138px;
	object-fit: cover;
	border-radius: 12px 0px 0px 12px;
`

export const CardTitle = styled(Card.Text)`
	font-size: 1.2em;
	line-height: 1.2em;
	font-weight: 600;
	margin-bottom: 0px;
	color: #000;
	&:hover {
		color: #01b4e4;
	}
`

export const CardDate = styled.span`
	color: rgba(0, 0, 0, 0.6);
`

export const CardOverview = styled.p`
	font-size: 1em;
	font-weight: 400;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	margin-top: 1em;
	margin-bottom: 0;
`
