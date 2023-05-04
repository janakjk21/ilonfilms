import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Blog() {
	return (
		<div className='full-width intro'>
			<div
				className='full-height not-completely-full'
				style={{ height: '100%' }}>
				<div className='fixed' style={{ height: '100vh' }}>
					<video
						className='background-image3 parallax parallax-banner'
						autoPlay={true}
						muted={true}
						loop={true}
						style={{
							transform: 'translate3d(0px, 0px, 0px)',
							height: '100%',
						}}>
						<source src='./Low res video.mp4' type='video/mp4' />
					</video>
					{/* <div id='map' className='parallax parallax-banner' /> */}
				</div>
				<div className='full-height-wrapper white-text'>
					<div
						className='overlay contact-map-overlay'
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							textAlign: 'center',
						}}>
						{' '}
						<di>
							{' '}
							<h1 className='title'>Awesome Thing</h1>
						</di>
						_____________
						<div>
							<h2 className='sub-title'>Site Under Construction</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
