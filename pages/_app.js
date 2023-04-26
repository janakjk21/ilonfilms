import '@/styles/globals.css';
import '@/styles/contact.css';
import '@/styles/flexslider.css';
import '@/styles/font-awesome.min.css';
// import '@/styles/jquery.fancybox.css';
import '@/styles/styles.css';
import '@/styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
export default function App({ Component, pageProps }) {
	return (
		<ProSidebarProvider>
			<Component {...pageProps} />
		</ProSidebarProvider>
	);
}
