function initFeaturedCard() {
	const products = [
		{
			id: 1,
			name: "Ceramic Mug",
			category: "Kitchen",
			price: 18,
			rating: 4.7,
			reviews: 124,
		},
		{
			id: 2,
			name: "Desk Lamp",
			category: "Office",
			price: 42,
			rating: 4.9,
			reviews: 88,
		},
		{
			id: 3,
			name: "Cotton Throw Blanket",
			category: "Home",
			price: 64,
			rating: 4.6,
			reviews: 213,
		},
		{
			id: 4,
			name: "Glass Storage Set",
			category: "Kitchen",
			price: 36,
			rating: 4.8,
			reviews: 156,
		},
	];
	console.log("Original Products:", products);

	const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);

	console.log("Sorted Products:", sortedProducts);

	const root = document.querySelector(".featured_product");
	if (!root) return;

	sortedProducts.forEach((product, index) => {
		if (index === 0) {
			const name = document.createElement("h2");
			const category = document.createElement("p");
			const price = document.createElement("p");
			const rating = document.createElement("p");
			const reviewCount = document.createElement("p");

			const best = document.createElement("p");
			const bestRated = `Best rated item in ${product.category}.`;
			best.append(bestRated);

			const stars = document.createElement("p");
			let starCount;
			if (Math.round(product.rating) === 1) {
				starCount = "⭐️";
			} else if (Math.round(product.rating) === 2) {
				starCount = "⭐️⭐️";
			} else if (Math.round(product.rating) === 3) {
				starCount = "⭐️⭐️⭐️";
			} else if (Math.round(product.rating) === 4) {
				starCount = "⭐️⭐️⭐️⭐️";
			} else if (Math.round(product.rating) === 5) {
				starCount = "⭐️⭐️⭐️⭐️⭐️";
			} else {
				starCount = "No Ratings Yet";
			}
			stars.append(starCount);

			const popular = document.createElement("p");
			let popularReviews = "";
			if (product.reviews > 100) {
				popularReviews = "This is Popular!";
			} else {
				popularReviews = "Not Enough Reviews.";
			}
			popular.append(popularReviews);

			name.textContent = `Name: ${product.name}`;
			category.textContent = `Category: ${product.category}`;
			price.textContent = `$${product.price.toFixed(2)}`;
			rating.textContent = `Rating: ${product.rating}`;
			reviewCount.textContent = `Reviews: ${product.reviews}`;

			root.append(name, category, price, rating, reviewCount, best, popular, stars);
		}
	});

	return sortedProducts;
}
initFeaturedCard();
