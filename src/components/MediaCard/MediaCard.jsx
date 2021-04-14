import React from 'react'
import { Card } from 'react-bootstrap'
import { RadialProgress } from 'react-radial-progress-indicator'
import { CardImage, CardTitle, CardDate } from '../../styles/jsx/ScrollingContent'

const MediaCard = ({ value, index }) => {
	// function parse(str) {
	// 	var y = str.substr(0, 4),
	// 		m = str.substr(4, 2) - 1,
	// 		d = str.substr(6, 2)
	// 	var D = new Date(y, m, d)
	// 	return D.getFullYear() == y && D.getMonth() == m && D.getDate() == d ? D : 'invalid date'
	// }

	// console.log(parse('20120401'))

	return (
		<div>
			<Card className="mb-3 mt-3" style={{ width: '12rem', border: 'none' }} key={index}>
				<div style={{ position: 'relative', marginBottom: '1rem' }}>
					<CardImage variant="top" src={`https://image.tmdb.org/t/p/w154${value.poster_path}`} className="" />
					<div style={{ position: 'absolute', bottom: '-12px', left: '10px' }}>
						<RadialProgress
							backgroundColour="#FFE0A9"
							backgroundTransparent={false}
							duration={1000}
							fontRatio={3}
							height={30}
							ringBgColour="#EDCA8A"
							ringFgColour="#674509"
							ringIntermediateColour="#AA8239"
							ringThickness={0.2}
							segmented={false}
							showIntermediateProgress
							startStep={0}
							step={value.vote_average * 10}
							steps={100}
							text={function text(steps, proportion) {
								return ''.concat(Math.floor(100 * proportion), '%')
							}}
							width={30}
						/>
					</div>
				</div>

				<div style={{ width: '154px' }}>
					<CardTitle>{value.original_title ? value.title : value.name}</CardTitle>
					<CardDate>{value.media_type === 'movie' ? value.release_date : value.first_air_date}</CardDate>
				</div>
			</Card>
		</div>
	)
}

export default MediaCard
