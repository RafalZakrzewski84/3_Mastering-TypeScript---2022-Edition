import React, { useRef } from 'react';

interface ShoppingListFormProps {
	onAddItem: (item: string) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
	const textInputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(evt: React.FormEvent) {
		evt.preventDefault();
		// console.log(textInputRef);
		const newProduct = textInputRef.current!.value;
		onAddItem(newProduct);
		textInputRef.current!.value = '';
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Product name" ref={textInputRef} />
			<button type="submit">Add item</button>
		</form>
	);
}

export default ShoppingListForm;
