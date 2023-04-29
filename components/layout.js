// components/layout.js

import Footer from './Footer';
import Header from './Header';
// import Footer from './footer';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer></Footer>
		</>
	);
}
