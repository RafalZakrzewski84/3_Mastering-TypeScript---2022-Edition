import React, { useRef } from 'react';

function ShoppingListForm(): JSX.Element {
	const inputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(evt: React.FormEvent) {
		evt.preventDefault();
		console.log(inputRef);
		console.log(inputRef.current?.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Product name" ref={inputRef} />
			<button type="submit">Add item</button>
		</form>
	);
}

export default ShoppingListForm;
