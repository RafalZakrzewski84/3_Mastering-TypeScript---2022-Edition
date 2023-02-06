import React, { useRef } from 'react';

interface ShoppingListFormProps {
	onAddItem: (item: string, qty: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
	const textInputRef = useRef<HTMLInputElement>(null);
	const numInputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(evt: React.FormEvent) {
		evt.preventDefault();
		// console.log(textInputRef);
		const newProduct = textInputRef.current!.value;
		const newQty = Number(numInputRef.current!.value);
		onAddItem(newProduct, newQty);
		textInputRef.current!.value = '';
		numInputRef.current!.value = '1';
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Product name" ref={textInputRef} />
			<input type="number" min={0} ref={numInputRef} />
			<button type="submit">Add item</button>
		</form>
	);
}

export default ShoppingListForm;
