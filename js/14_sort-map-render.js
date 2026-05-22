function initSortSliceMapRender() {
	const recipes = [
		{
			id: 1,
			name: "Lemon Pasta",
			difficulty: "Easy",
			cookMinutes: 22,
			servings: 4,
			vegetarian: true,
		},
		{
			id: 2,
			name: "Chicken Stir Fry",
			difficulty: "Medium",
			cookMinutes: 35,
			servings: 3,
			vegetarian: false,
		},
		{
			id: 3,
			name: "Black Bean Tacos",
			difficulty: "Easy",
			cookMinutes: 18,
			servings: 4,
			vegetarian: true,
		},
		{
			id: 4,
			name: "Beef Chili",
			difficulty: "Medium",
			cookMinutes: 60,
			servings: 6,
			vegetarian: false,
		},
		{
			id: 5,
			name: "Veggie Fried Rice",
			difficulty: "Easy",
			cookMinutes: 25,
			servings: 5,
			vegetarian: true,
		},
		{
			id: 6,
			name: "Turkey Burgers",
			difficulty: "Hard",
			cookMinutes: 42,
			servings: 4,
			vegetarian: false,
		},
		{
			id: 7,
			name: "Tomato Soup",
			difficulty: "Easy",
			cookMinutes: 15,
			servings: 2,
			vegetarian: true,
		},
	];

	const root = document.querySelector(".fastest_recipes");
	if (!root) return;

	const sortedRecipes = [...recipes].sort((a, b) => a.cookMinutes - b.cookMinutes);

	const slicedRecipes = sortedRecipes.slice(0, 4);

	const mappedRecipes = slicedRecipes.map((item, index) => {
		const article = document.createElement("article");
		article.classList.add("recipe");

		const h2 = document.createElement("h2");
		h2.classList.add("secondary_heading");
		h2.textContent = item.name;

		const difficulty = document.createElement("p");
		difficulty.textContent = item.difficulty;

		const cookTime = document.createElement("p");
		cookTime.textContent = `${item.cookMinutes} minutes`;

		const servings = document.createElement("p");
		servings.textContent = `${item.servings} servings`;

		article.append(h2, difficulty, cookTime, servings);

		if (index === 0) {
			const fastest = document.createElement("p");
			fastest.textContent = "⚡️ Fastest Recipe";
			article.append(fastest);
		}

		if (item.vegetarian) {
			const vegetarian = document.createElement("p");
			vegetarian.textContent = "🌱 Vegetarian";
			article.append(vegetarian);
		}

		return article;
	});

	root.append(...mappedRecipes);

	return {
		sortedRecipes,
		mappedRecipes,
	};
}
initSortSliceMapRender();
