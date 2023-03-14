import './App.scss';
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';
import Search from './components/Search';

function App() {
	return (
		<div className="wrapper clear">
			<Cart />
			<Header />
			<div className="content p-40">
				<Search />
				<div className="d-flex">
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
