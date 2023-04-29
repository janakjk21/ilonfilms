import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import icons from '../public/ilon films grey.png';
export default function Footer() {
	return (
		<footer className='footer-distributed'>
			<div className='footer-left'>
				<Image
					src={icons}
					alt=''
					style={{ maxHeight: '170px', maxWidth: '170px' }}
				/>

				<p className='footer-company-name'>
					All rights Reserved<span style={{ marginRight: '10px' }}>|</span>©
					2023 Ilon Films{' '}
				</p>
			</div>
			<div className='footer-center'>
				<div>
					<i className='fa fa-map-marker' />
					<p>
						<span>Lalitpur</span> , Nepal
					</p>
				</div>
				<div>
					<i className='fa fa-phone' />
					<p>+977 9851242779</p>
				</div>
				<div>
					<i className='fa fa-envelope' />
					<p>
						<a href='mail@ilonfilms.com'>mail@ilonfilms.com</a>
					</p>
				</div>
			</div>
			<div className='footer-right'>
				<p className='footer-company-about'>
					<span>Ilon Films</span>
					
				</p>
				<div className='footer-icons'>
					<a href='#'>
						<a
							href='https://www.facebook.com/ilonfilms'
							style={{ color: '#000000' }}>
							{' '}
							<FaFacebook size={45} style={{ padding: '5px' }}></FaFacebook>
						</a>
						{/* <i className='fa fa-facebook' /> */}
					</a>
					<a href='#'>
						<a
							href='https://www.instagram.com/ilonfilms/?fbclid=IwAR3bjxQCtB8wtN-mtJ_ON1nDMCRepiGGdViz2m6MK0kPvBDGa-FIsKxiZGI'
							style={{ color: '#000000' }}>
							{' '}
							<FaInstagram size={45} style={{ padding: '5px' }}></FaInstagram>
						</a>
						{/* <i className='fa fa-twitter' /> */}
					</a>
					<a href='#'>
						{/* <i className='fa fa-linkedin' /> */}
						<a
							href='https://www.youtube.com/@ilonfilms6432'
							style={{ color: '#000000' }}>
							{' '}
							<FaYoutube size={45} style={{ padding: '5px' }}></FaYoutube>
						</a>
					</a>
				</div>
			</div>
		</footer>
	);
}
