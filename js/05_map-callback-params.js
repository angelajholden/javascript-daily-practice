function initMapCallbackParams() {
	const products = [
		{ id: 1, name: "Minimal Desk Lamp", category: "lighting", price: 45 },
		{ id: 2, name: "Wooden Chair", category: "furniture", price: 120 },
		{ id: 3, name: "Ceramic Vase", category: "decor", price: 35 },
		{ id: 4, name: "Standing Desk", category: "furniture", price: 350 },
		{ id: 5, name: "Wall Clock", category: "decor", price: 60 },
	];

	console.log("Original Products:", products);

	const relatedProducts = products.map((product, index, array) => {
		const label = `#${index + 1} - ${product.name} ($${product.price})`;
		const isExpensive = product.price > 100;

		// either true or false
		const first = index === 0;
		const last = index === array.length - 1;

		/**
		 * first product has next
		 * last product has prev
		 * middle products have both
		 */
		const next = index + 1;
		const prev = index - 1;

		let related = [];

		// ternary operator
		first ? related.push(array[next].name) : last ? related.push(array[prev].name) : related.push(array[prev].name) + related.push(array[next].name);

		// if/else statement
		// if (first) {
		// 	related.push(array[next].name);
		// } else if (last) {
		// 	related.push(array[prev].name);
		// } else {
		// 	related.push(array[prev].name);
		// 	related.push(array[next].name);
		// }

		return {
			id: product.id,
			label,
			isExpensive,
			related,
		};
	});
	console.log("Related Products:", relatedProducts);
	return relatedProducts;
}
initMapCallbackParams();
