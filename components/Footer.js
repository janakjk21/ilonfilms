import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
export default function Footer() {
	return (
		<footer id='footer'>
			<hr style={{ borderTop: '0.5px solid white', margin: '1px 0' }} />
			<div className='container clearfix'>
				<p className='alignleft'>
					mail@ilonfilms.com
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
				</p>
				<p class='alignright'>
					© 2023 Ilon Films <i></i> |
					<Link
						href='/'
						data-title='Premium HTML5 Website Templates'
						style={{ paddingLeft: '10px' }}>
						All rights Reserved
					</Link>
					.
				</p>
				{/* <p className='alignright'><></> */}.{/* </p> */}
			</div>
		</footer>
	);
}
