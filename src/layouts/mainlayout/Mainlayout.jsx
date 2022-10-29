
import './mainlayout.module.css';
import { Navbar } from '../../components'
import { Header, Footer } from '../../containers';

const Mainlayout = ({ children }) => {
	return (
		<div class="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>

			{children}

			<Footer />
		</div>
	)
}

export default Mainlayout;
