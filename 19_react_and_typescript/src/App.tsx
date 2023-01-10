import React, { useState } from 'react';
import './App.css';

import Greeter from './components/Greeter';
import GreeterArrow from './components/GreeterArrow';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';

import Item from './models/item';

function App() {
	const [items, setItems] = useState<Item[]>([]);
	const addItem = (item: string) => {
		console.log('WORK');
		console.log(item);
	};
	// const items = [
	// 	{ id: 1, product: 'Lemon', qty: 2 },
	// 	{ id: 2, product: 'Apple', qty: 10 },
	// ];
	return (
		<div className="App">
			<GreeterArrow />
			<Greeter person="Rafal" />
			<ShoppingList items={items} />
			<ShoppingListForm onAddItem={addItem} />
		</div>
	);
}

export default App;
