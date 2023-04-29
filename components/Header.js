import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/340763197_5999126313527838_7363627470835044405_n.jpg';
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	Offcanvas,
	OffcanvasBody,
	OffcanvasHeader,
} from 'reactstrap';
import { FaBars } from 'react-icons/fa';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<div>
				<header
					id='header'
					className='clearfix'
					style={{ paddingLeft: '60px' }}>
					<h1 id='logo'>
						<Link href='./'>Ilon Films</Link>
					</h1>
					{/* <ul className='social-list clearfix'></ul> */}
				</header>
				<div style={{ textAlign: 'center' }}></div>
				{/* <link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
				/> */}
				<button className='sidebar-toggle'>
					{/* <i className='fas fa-bars' /> */}
					<FaBars className='fas fa-bars' size={30} onClick={toggle}></FaBars>
				</button>

				<Offcanvas
					isOpen={isOpen}
					toggle={toggle}
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
					<nav id='main-nav'>
						<ul className='clearfix' style={{ paddingTop: '20%' }}>
							<li>
								{' '}
								<Link href='/' className='sub-nav-toggle'></Link>
							</li>

							<li>
								{' '}
								<Link href='/'>Home</Link>{' '}
							</li>

							<li>
								{' '}
								<Link href='/contactus'>Contact</Link>{' '}
							</li>
						</ul>
					</nav>
				</Offcanvas>
				{/* sidebar */}
			</div>
		</div>
	);
};

export default Header;
