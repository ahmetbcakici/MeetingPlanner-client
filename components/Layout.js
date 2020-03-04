import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = props => (
	<div>
        <title>sddsa</title>
		<Navbar />
		{props.children}
        <Footer />
	</div>
);

export default Layout;
