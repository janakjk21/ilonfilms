import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
// import ReactPlayer from 'react-player';
import { AiOutlineFacebook } from 'react-icons/ai';
import { GiBoxingGloveSurprise } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import YouTube from 'react-youtube';
import { Col, Row } from 'reactstrap';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
export default function Home() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Head>
				<title>Ilon Films</title>
				<meta
					name='description'
					content='We are a team of filmmakers and artists who believe that every story deserves to be told. We use film as a powerful medium to give voice to the voiceless, to tell stories of triumph and resilience, and to raise awareness of important social issues. Our films are visually stunning, deeply engaging, thought-provoking, and influential. We strive to create films that make a difference in the world.'></meta>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link
					rel='icon'
					href='/favicon.ico'
					style={{ height: '50px', width: '50px' }}
				/>
			</Head>
			<main>
				<div>
					<div id='content-overlay' />
					<div id='wrap'>
						<div id='menu-button'>
							<div className='centralizer'>
								<div className='cursor'>
									<div id='nav-button' onClick={handleShow}>
										{/* <span className='nav-bar' /> <span className='nav-bar' />{' '}
										<span className='nav-bar' />{' '} */}
									</div>
								</div>
							</div>
						</div>
						{/* start header */}

						{/* end header */}
						{/* start content */}
						<div id='content'>
							{/* Hero page */}
							<div className='full-width intro'>
								<div
									className='full-height not-completely-full min-full-height'
									style={{ height: '100%' }}>
									<div className='fixed'>
										{/* <figure
											className='background-image3 parallax parallax-banner'
											style={{ transform: 'translate3d(0px, 0px, 0px)' }}
										/> */}
										<video
											className='background-image3 parallax parallax-banner'
											autoPlay={true}
											muted={true}
											loop={true}
											style={{
												transform: 'translate3d(0px, 0px, 0px)',
												height: '100vh',
											}}>
											<source src='./Low res video.mp4' type='video/mp4' />
										</video>
									</div>
								</div>
							</div>
							{/* Content section about the componey  */}
							<section className='white'>
								<div className='container clearfix'>
									<div className='col-md-3 col-md-offset-1 col-sm-6'>
										<p className='large'></p>
										<h4 style={{ fontWeight: 'bold' }}>Why do we film? </h4>

										<div className='break' />
									</div>
									<div className='col-md-7 col-sm-6'>
										{/* <p className='large'>
											Passionate Coders. Innovative Designers. Genius
											Storytellers.
										</p> */}
										<p className='large'>
											We believe that every story deserves to be told, and that
											film is the most powerful medium to do so. Whether
											it&#39;s a personal story of triumph and resilience, or a
											larger social issue that demands attention, we strive to
											create films that give voice to the voiceless.
										</p>
										<p className='large'>
											Our team of experienced team of filmmakers and artists
											brings together a diverse range of talents and
											perspectives from cinematography and editing, to sound
											design and colour grading. Together, we work tirelessly to
											create films that are not only visually stunning, but also
											deeply engaging, thought-provoking and influential.
										</p>
									</div>
								</div>
							</section>
							<RecentWork></RecentWork>
						</div>

						{/* end content */}
					</div>
					{/* end wrap */}
				</div>
			</main>
		</>
	);
}

const RecentWork = () => {
	return (
		<section>
			<div className='container clearfix'>
				<div className='col-lg-12 white-text centered extra-padding-bottom'>
					<h2 className='header'>Recent Work</h2>
				</div>
			</div>
			<div className='container clearfix'>
				<div className='row'>
					<div className='element clearfix col-sm-6 home travel'>
						{' '}
						<a
							href='https://www.youtube.com/watch?v=IV0mqCxQ5ZU'
							className='transition-link'>
							{' '}
							<div className='player-wrapper'>
								<ReactPlayer
									className='react-player'
									url='https://www.youtube.com/watch?v=IV0mqCxQ5ZU'
									playing
									muted
									loop
									width='100%'
								/>
							</div>
							{/* <img src='images/work-single-1.jpg' alt='' /> */}
							<div className='title-holder'>
								<h3>NOT YOU</h3>
								<p className='large'> AGAIN</p>
							</div>
							<div className='overlay' />
						</a>{' '}
					</div>
					<div className='element clearfix col-sm-6 home travel'>
						{' '}
						{/* * <ReactPlayer videoId='3oJ2WXg0E8g'></ReactPlayer> */}
						<div className='player-wrapper'>
							<ReactPlayer
								className='react-player'
								url='https://www.youtube.com/watch?v=3oJ2WXg0E8g'
								light
								width='100%'
							/>{' '}
						</div>
						<div className='title-holder right'>
							<h3>FEAR</h3>
							<p className='large'>ONE MINUTE SHORT FILM</p>
						</div>
						<div className='overlay' />
					</div>
					<div className='element clearfix col-sm-6 home travel'>
						{' '}
						<a
							href='https://www.youtube.com/watch?v=C3OKSJd3w6c'
							data-title='Image Title'
							className='transition-link'>
							{' '}
							<div className='player-wrapper'>
								<ReactPlayer
									url='https://www.youtube.com/watch?v=C3OKSJd3w6c'
									className='react-player'
									width='100%'
								/>{' '}
							</div>
							<div className='title-holder'>
								<h3>Magazine Cover</h3>
								<p className='large'>Inventory</p>
							</div>
							<div className='overlay' />
						</a>{' '}
					</div>
					<div className='element clearfix col-sm-6 home travel'>
						{' '}
						<a
							href='https://www.youtube.com/watch?v=IV0mqCxQ5ZU'
							className='transition-link'>
							<div className='player-wrapper'>
								{' '}
								<ReactPlayer
									url='https://www.youtube.com/watch?v=IV0mqCxQ5ZU'
									className='react-player'
								/>{' '}
							</div>

							<div className='title-holder right'>
								<h3>Not you</h3>
								<p className='large'> Again</p>
							</div>
							<div className='overlay' />
						</a>
					</div>
				</div>
			</div>
			<div className='container clearfix'>
				<div className='col-lg-12 white-text centered'>
					<p>
						<Link href='/portfolio' title className='arrow'>
							View All
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};
