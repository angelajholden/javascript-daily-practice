function initMapCallbackParams() {
	const products = [
		{ id: 1, name: "Desk Lamp", price: 45 },
		{ id: 2, name: "Floor Lamp", price: 60 },
		{ id: 3, name: "Table Lamp", price: 60 },
		{ id: 4, name: "Pendant Light", price: 80 },
		{ id: 5, name: "Wall Light", price: 70 },
	];

	console.log("Original Products:", products);

	const compareProducts = products.map((product, index, array) => {
		const first = index === 0; // either true or false
		const prev = index - 1; // this is a number
		const prevItem = array[prev];

		let difference;
		if (first) {
			difference = 0;
		} else {
			difference = Math.abs(product.price - prevItem.price);
		}

		let priceChange;
		let trend;

		if (first) {
			priceChange = "n/a";
			trend = "n/a";
		} else if (product.price > prevItem.price) {
			priceChange = "up";
			trend = "increasing";
		} else if (product.price < prevItem.price) {
			priceChange = "down";
			trend = "decreasing";
		} else {
			priceChange = "same";
			trend = "flat";
		}

		return {
			id: product.id,
			name: product.name,
			price: product.price,
			priceChange,
			difference,
			trend,
		};
	});
	console.log("Compare Products:", compareProducts);
	return compareProducts;
}
initMapCallbackParams();
