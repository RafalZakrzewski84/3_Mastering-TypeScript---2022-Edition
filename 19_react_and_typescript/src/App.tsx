import React from 'react';
import './App.css';

import Greeter from './components/Greeter';
import GreeterArrow from './components/GreeterArrow';
import ShoppingList from './components/ShoppingList';

function App() {
	const items = [
		{ id: 1, product: 'Lemon', qty: 2 },
		{ id: 2, product: 'Apple', qty: 10 },
	];
	return (
		<div className="App">
			<GreeterArrow />
			<Greeter person="Rafal" />
			<ShoppingList items={items} />
		</div>
	);
}

export default App;
