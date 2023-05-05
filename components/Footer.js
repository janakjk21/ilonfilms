import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaYoutube } from 'react-icons/fa';
export default function Footer() {
	return (
		<footer className='footer-distributed'>
			<div className='footer-left'>
				<h1 id='footer'>
					<Link href='./'>Ilon Films</Link>
				</h1>
			</div>
			<div className='footer-center'>
				<div>
					<i className='fa fa-map-marker' />
					<p>Mahalaxmi, Lalitpur</p>
				</div>
				<div>
					<i className='fa fa-phone' />

					<p>+977 9851242779</p>
				</div>
				<div>
					<i className='fa fa-envelope' />
					<p>mail@ilonfilms.com</p>
				</div>
			</div>
			<div className='footer-right'>
				<div className='footer-icons'>
					
						<a
							href='https://www.facebook.com/ilonfilms'
							style={{ color: '#000000' }}>
							{' '}
							<FaFacebook size={45} style={{ padding: '5px' }}></FaFacebook>
						</a>
						{/* <i className='fa fa-facebook' /> */}
					
				
						<a
							href='https://www.instagram.com/ilonfilms/?fbclid=IwAR3bjxQCtB8wtN-mtJ_ON1nDMCRepiGGdViz2m6MK0kPvBDGa-FIsKxiZGI'
							style={{ color: '#000000' }}>
							{' '}
							<FaInstagram size={45} style={{ padding: '5px' }}></FaInstagram>
						</a>
						{/* <i className='fa fa-twitter' /> */}
				
				
						{/* <i className='fa fa-linkedin' /> */}
						<a
							href='https://www.youtube.com/@ilonfilms6432'
							style={{ color: '#000000' }}>
							{' '}
							<FaYoutube size={45} style={{ padding: '5px' }}></FaYoutube>
						</a>
					
					<p className='footer-company-about' style={{ paddingTop: '20px' }}>
						All rights Reserved <span style={{ paddingRight: '5px' }}>|</span>©
						2023 Ilon Films
					</p>
				</div>
			</div>
		</footer>
	);
}
