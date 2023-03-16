import './App.scss';
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';
import Search from './components/Search';
import sneakers from './server/sneakers.json'

function App() {
	return (
		<div className="wrapper clear">
			<Cart />
			<Header />
			<div className="content p-40">
				<Search />
				<div className="d-flex flex-wrap ">
					{sneakers.map((obj) => (
						<Card model={obj.model} price={obj.price} image={obj.image} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
