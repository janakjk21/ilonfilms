import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';

export default function Contactus() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const [show, setShow] = useState(false);
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

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
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
			<div id='content'>
				<div className='full-width intro'>
					<div
						className='full-height not-completely-full'
						style={{ height: '20vh' }}>
						<div className='fixed' style={{ height: '20vh' }}>
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
							{/* <div id='map' className='parallax parallax-banner' /> */}
						</div>
						<div className='full-height-wrapper white-text'>
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
									<FaInstagram
										size={45}
										style={{ padding: '5px' }}></FaInstagram>
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
		</div>
	);
}
