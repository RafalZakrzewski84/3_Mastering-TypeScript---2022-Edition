import React from 'react';

function ShoppingListForm(): JSX.Element {
	return (
		<form>
			<input type="text" placeholder="Product name" />
			<button type="submit">Add item</button>
		</form>
	);
}

export default ShoppingListForm;
