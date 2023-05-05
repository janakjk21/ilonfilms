import React from 'react';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import { Col, Row } from 'reactstrap';

class YouTubePlayer extends React.Component {
	handleOnReady(event) {
		event.target.pauseVideo();
	}

	handleOnPlay(event) {
		console.log('Video is playing');
	}

	handleOnPause(event) {
		console.log('Video is paused');
	}

	handleOnEnd(event) {
		console.log('Video has ended');
	}

	handleOnError(event) {
		console.log('An error has occurred:', event.data);
	}

	render() {
		return (
			<div style={{ margin: '20%' }}>
				<Row>
					<Col></Col>
				</Row>
				<div className='element col-sm-6  '>
					<ReactPlayer
						url='https://www.youtube.com/watch?v=IV0mqCxQ5ZU'
						muted
						loop
						controls
						height='50%'
					/>
				</div>

				<div className=' element clearfix col-sm-6 home travel'>
					{' '}
					<ReactPlayer
						url='https://www.youtube.com/watch?v=IV0mqCxQ5ZU'
						muted
						loop
						controls
						height='50%'
					/>
				</div>
			</div>
		);
	}
}

export default YouTubePlayer;
