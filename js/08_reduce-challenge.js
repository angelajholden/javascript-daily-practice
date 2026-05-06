function initReduceGroupingChallenge() {
	const products = [
		{ name: "Desk Lamp", category: "lighting" },
		{ name: "Floor Lamp", category: "lighting" },
		{ name: "Wooden Chair", category: "furniture" },
		{ name: "Standing Desk", category: "furniture" },
		{ name: "Wall Clock", category: "decor" },
	];

	// console.log("Original Products:", products);

	const countCategories = products.reduce((acc, item) => {
		if (!acc[item.category]) {
			acc[item.category] = 0;
		}
		acc[item.category] = acc[item.category] + 1;
		return acc;
	}, {});

	// console.log("Count Categories:", countCategories);

	const newProducts = [
		{ name: "Desk Lamp", category: "lighting", price: 45 },
		{ name: "Floor Lamp", category: "lighting", price: 60 },
		{ name: "Wooden Chair", category: "furniture", price: 120 },
	];

	// console.log("New Products:", newProducts);

	const groupingNewProducts = newProducts.reduce((acc, item) => {
		// check for categories and initialize
		if (!acc[item.category]) {
			acc[item.category] = {
				totalItems: 0,
				totalPrice: 0,
			};
		}

		// run the accumulator
		acc[item.category].totalItems += 1;
		acc[item.category].totalPrice += item.price;

		return acc;
	}, {});

	// console.log("Grouping New Products:", groupingNewProducts);

	const data = [
		{ id: 1, name: "Desk Lamp", category: "lighting", price: 45 },
		{ id: 2, name: "Floor Lamp", category: "lighting", price: 60 },
		{ id: 3, name: "Table Lamp", category: "lighting", price: 60 },
		{ id: 4, name: "Wooden Chair", category: "furniture", price: 120 },
		{ id: 5, name: "Standing Desk", category: "furniture", price: 350 },
		{ id: 6, name: "Wall Clock", category: "decor", price: 60 },
		{ id: 7, name: "Ceramic Vase", category: "decor", price: 35 },
	];

	// console.log("Data Grouping Challenge:", data);

	const newDataGroup = data.reduce((acc, item) => {
		if (!acc[item.category]) {
			acc[item.category] = {
				totalProducts: 0,
				totalPrice: 0,
				products: [],
			};
		}

		acc[item.category].totalProducts += 1;
		acc[item.category].totalPrice += item.price;
		acc[item.category].products.push(item.name);

		return acc;
	}, {});

	console.log("New Data Group", newDataGroup);
	console.log("Object Entries: ", Object.entries(newDataGroup));

	const finalResult = Object.entries(newDataGroup).map(([category, group]) => {
		const totalProducts = group.totalProducts;
		const products = group.products;
		const totalPrice = group.totalPrice;
		const averagePrice = totalPrice / totalProducts;
		return {
			category,
			totalProducts,
			averagePrice,
			products,
		};
	});

	console.log("Final Result:", finalResult);

	return {
		finalResult,
		newDataGroup,
		countCategories,
		groupingNewProducts,
	};
}
initReduceGroupingChallenge();
