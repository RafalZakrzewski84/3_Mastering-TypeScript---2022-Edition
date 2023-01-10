import React from 'react';
import './App.css';

import Greeter from './components/Greeter';
import GreeterArrow from './components/GreeterArrow';

function App() {
	return (
		<div className="App">
			<GreeterArrow />
			<Greeter />
		</div>
	);
}

export default App;
