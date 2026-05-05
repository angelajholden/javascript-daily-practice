function initReduceCategoryGroups() {
	const products = [
		{ id: 1, name: "Desk Lamp", category: "lighting", price: 45 },
		{ id: 2, name: "Floor Lamp", category: "lighting", price: 60 },
		{ id: 3, name: "Wooden Chair", category: "furniture", price: 120 },
	];

	console.log("Original Products:", products);

	// one
	const initialValue = 0;
	const totalPrice = products.reduce((accum, product) => {
		return accum + product.price;
	}, initialValue);
	console.log("Total Price:", totalPrice);

	// two
	const newValue = {
		totalItems: 0,
		totalPrice: 0,
	};
	const newPrice = products.reduce((accum, product) => {
		// update acc based on previous acc + current item
		// accum = accum + product
		accum.totalItems = accum.totalItems + 1;
		accum.totalPrice = accum.totalPrice + product.price;

		return accum;
	}, newValue);
	console.log("New Price:", newPrice);

	// three
	const names = products.reduce((accum, product) => {
		accum.push(product.name);
		return accum;
	}, []);
	console.log("Names:", names);

	// four
	const summary = products.reduce(
		(acc, item) => {
			// update acc based on previous acc + current item
			acc.totalItems = acc.totalItems + 1;
			acc.totalPrice = acc.totalPrice + item.price;
			return acc;
		},
		{ totalItems: 0, totalPrice: 0 },
	);
	console.log("Summary:", summary);

	// five
	const buckets = products.reduce(
		(acc, item) => {
			if (item.price < 60) {
				acc.cheap.push(item.name);
			} else if (item.price >= 60) {
				acc.expensive.push(item.name);
			}
			return acc;
		},
		{ cheap: [], expensive: [] },
	);
	console.log("Buckets:", buckets);

	// six
	const categories = products.reduce(
		(acc, item) => {
			// this is dynamic-ish,
			// not the best approach
			// if (item.category === "lighting" || item.category === "furniture") {
			// 	acc[item.category].push(item.name);
			// }

			// this is a better approach
			// because it's totally dynamic
			if (!acc[item.category]) {
				acc[item.category] = [];
			}
			acc[item.category].push(item.name);
			return acc;
		},
		// { lighting: [], furniture: [] },
		{}, // use empty object instead
	);
	console.log("Categories:", categories);

	return {
		totalPrice,
		newPrice,
		names,
		buckets,
		summary,
		categories,
	};
}
initReduceCategoryGroups();
