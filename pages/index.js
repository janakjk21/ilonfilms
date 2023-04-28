import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
// import ReactPlayer from 'react-player';
import { AiOutlineFacebook } from 'react-icons/ai';
import { GiBoxingGloveSurprise } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<div>
					<div id='nav-wrapper'>
						<Offcanvas
							show={show}
							onHide={handleClose}
							style={{ backgroundColor: '#000000' }}>
							<Offcanvas.Header closeButton closeVariant='white'>
								<Offcanvas.Title></Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<nav id='main-nav'>
									<ul className='clearfix'>
										<li>
											{' '}
											<Link href='/' className='sub-nav-toggle selected'>
												Home
											</Link>
										</li>

										<li>
											{' '}
											<Link href='/contactus'>Contact</Link>{' '}
										</li>
									</ul>
								</nav>
							</Offcanvas.Body>
						</Offcanvas>
					</div>

					<div id='content-overlay' />
					<div id='wrap'>
						<div id='menu-button'>
							<div className='centralizer'>
								<div className='cursor'>
									<div id='nav-button' onClick={handleShow}>
										<span className='nav-bar' /> <span className='nav-bar' />{' '}
										<span className='nav-bar' />{' '}
									</div>
								</div>
							</div>
						</div>
						{/* start header */}
						<header id='header' className='clearfix'>
							<h1 id='logo'>
								<a href='index.html'>Ilon Films</a>
							</h1>
							<ul className='social-list clearfix'></ul>
						</header>
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
										<h4>Why do we film? </h4>

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
							{/* <Contatctus></Contatctus> */}
						</div>

						{/* end content */}
						<footer id='footer'>
							<div className='container clearfix'>
								<p className='alignleft'>
									<a href='https://www.facebook.com/ilonfilms'>
										{' '}
										<FaFacebook
											size={45}
											style={{ padding: '5px' }}></FaFacebook>
									</a>
									<a href='https://www.instagram.com/ilonfilms/?fbclid=IwAR3bjxQCtB8wtN-mtJ_ON1nDMCRepiGGdViz2m6MK0kPvBDGa-FIsKxiZGI'>
										{' '}
										<FaInstagram
											size={45}
											style={{ padding: '5px' }}></FaInstagram>
									</a>
									<a href='https://www.youtube.com/@ilonfilms6432'>
										{' '}
										<FaYoutube size={45} style={{ padding: '5px' }}></FaYoutube>
									</a>
								</p>
								{/* <p className='alignright'><></> */}.{/* </p> */}
							</div>
						</footer>
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
							data-title='Image Title'
							className='transition-link'>
							{' '}
							{/* <img src='images/work-single-1.jpg' alt='' /> */}
							<ReactPlayer
								url='https://www.youtube.com/watch?v=IV0mqCxQ5ZU'
								playing
								muted
								loop
							/>
							<div className='title-holder'>
								<h3>NOT YOU</h3>
								<p className='large'> AGAIN</p>
							</div>
							<div className='overlay' />
						</a>{' '}
					</div>
					<div className='element clearfix col-sm-6 home travel'>
						{' '}
						<a
							href='https://www.youtube.com/watch?v=3oJ2WXg0E8g'
							data-title='Image Title'
							className='transition-link'>
							{' '}
							<ReactPlayer
								url='https://www.youtube.com/watch?v=3oJ2WXg0E8g'
								light
							/>{' '}
							<div className='title-holder right'>
								<h3>FEAR</h3>
								<p className='large'>ONE MINUTE SHORT FILM</p>
							</div>
							<div className='overlay' />
						</a>{' '}
					</div>
					<div className='element clearfix col-sm-6 home travel'>
						{' '}
						<a
							href='https://www.youtube.com/watch?v=C3OKSJd3w6c'
							data-title='Image Title'
							className='transition-link'>
							{' '}
							<ReactPlayer url='https://www.youtube.com/watch?v=C3OKSJd3w6c' />{' '}
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
							data-title='Image Title'
							className='transition-link'>
							{' '}
							<ReactPlayer url='https://www.youtube.com/watch?v=IV0mqCxQ5ZU' />{' '}
							<div className='title-holder right'>
								<h3>COVID</h3>
								<p className='large'> in Nepal</p>
							</div>
							<div className='overlay' />
						</a>{' '}
					</div>
				</div>
			</div>
			<div className='container clearfix'>
				<div className='col-lg-12 white-text centered'>
					<p>
						<a href='portfolio.html' title className='arrow'>
							View All
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

const Contatctus = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		// Validate the form data
		if (!name) {
			return alert('Please enter your name.');
		}
		if (!email) {
			return alert('Please enter your email address.');
		}
		if (!message) {
			return alert('Please enter your message.');
		}

		// Send the email
		emailjs
			.sendForm(
				'service_i562jcd',
				'template_nfb7url',
				form.current,
				'7boS3gFmIgil9xako'
			)
			.then((result) => {
				console.log(result.text);
			})
			.catch((error) => {
				console.log(error.text);
			});
	};
	return (
		<div id='content'>
			<div className='full-width intro'>
				<div className='full-height not-completely-full'>
					<div className='fixed'>
						<div id='map' className='parallax parallax-banner' />
					</div>
					<div className='full-height-wrapper white-text'>
						<div className='parent'>
							<div className='bottom'>
								<div className='container'>
									<div className='animatedblock delay2 animatedUp'>
										<div className='col-md-7 col-md-offset-1'>
											<div className='banner-textblock'>
												<p className='large'>Contact</p>
												<h1 className='header'>
													Belton Creative Group
													<br />
													Neusser Str. 255
													<br />
													Köln
												</h1>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='overlay contact-map-overlay' />
					</div>
				</div>
			</div>
			<section className='white'>
				<div className='container clearfix'>
					<div className='row'>
						{' '}
						<div className='col-md-7 col-md-offset-1 col-sm-6 extra-padding-right'>
							<form ref={form} onSubmit={sendEmail} className='form-part'>
								<label>Name</label>
								<input
									type='text'
									name='name'
									placeholder='Name'
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<label>Email</label>
								<input
									type='email'
									name='email'
									placeholder='Email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<label>Message</label>
								<textarea
									name='message'
									cols='40'
									rows='3'
									placeholder='Message'
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
								<input type='submit' value='Submit' className='button' />
							</form>
						</div>
						<div className='col-md-3 col-sm-6'>
							<h2 className='header'>Enquiries</h2>
							<p>
								Visit us in ilons films or drop us a message. Well get back to
								you as soon as possible.{' '}
							</p>
							<div className='break' />
							<p className='large'>mail@ilonfilms.com</p>
							<p className='large'>+977 9851242779</p>
							<p className='small below-text'>Lalitpur,Nepal</p>
							<a href='https://www.facebook.com/ilonfilms'>
								{' '}
								<FaFacebook size={45} style={{ padding: '5px' }}></FaFacebook>
							</a>
							<a href='https://www.instagram.com/ilonfilms/?fbclid=IwAR3bjxQCtB8wtN-mtJ_ON1nDMCRepiGGdViz2m6MK0kPvBDGa-FIsKxiZGI'>
								{' '}
								<FaInstagram size={45} style={{ padding: '5px' }}></FaInstagram>
							</a>
							<a href='https://www.youtube.com/@ilonfilms6432'>
								{' '}
								<FaYoutube size={45} style={{ padding: '5px' }}></FaYoutube>
							</a>

							{/* <p className='small below-text'>phone</p> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
