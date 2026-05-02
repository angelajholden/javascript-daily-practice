function initSortandMapData() {
	const articles = [
		{
			id: 1,
			title: "Understanding Closures",
			views: 1200,
			category: "JavaScript",
		},
		{
			id: 2,
			title: "CSS Grid vs Flexbox",
			views: 980,
			category: "CSS",
		},
		{
			id: 3,
			title: "Async/Await Explained",
			views: 2100,
			category: "JavaScript",
		},
		{
			id: 4,
			title: "Accessible Navigation Patterns",
			views: 750,
			category: "Accessibility",
		},
		{
			id: 5,
			title: "Working with APIs",
			views: 1600,
			category: "JavaScript",
		},
	];

	console.log("Original Articles:", articles);

	// make a copy of the original array before sorting
	// without a copy, sort mutates the original array
	const newArticles = [...articles]
		.sort((a, b) => b.views - a.views)
		.map((item, index) => {
			const popular = item.views >= 1500 ? "🔥" : "";
			// can just be: isTopThree = index < 3
			const isTopThree = index < 3;
			return {
				id: item.id,
				title: item.title,
				rank: index + 1,
				label: `${index + 1}. ${item.title}`,
				popular: popular,
				isTopThree: isTopThree,
				views: item.views, // just to see those values for myself
			};
		});
	console.log("New Articles:", newArticles);

	const navItems = [
		{ id: 1, label: "Home", href: "/" },
		{ id: 2, label: "Projects", href: "/projects" },
		{ id: 3, label: "About", href: "/about" },
		{ id: 4, label: "Contact", href: "/contact" },
	];

	console.log("Original Nav Items:", navItems);

	/**
	 * could get the last item in the navItems
	 * without array value in callback doing this:
	 * const lastIndex = navItems.length - 1;
	 */

	const newNavItems = navItems.map((item, index, array) => {
		// define this once and use twice
		const isLast = index === array.length - 1;
		const separator = isLast ? "" : "|";
		const label = isLast ? item.label.toUpperCase() : item.label;

		/**
		 * To check if an index is even in JavaScript,
		 * use the modulo operator (%) with 2 and
		 * check if the result is 0.
		 * index % 2: Returns the remainder of index divided by 2.
		 * === 0: If the remainder is 0, the number is even.
		 * If it is 1, the number is odd.
		 */
		const isEven = index % 2 === 0;

		return {
			id: item.id,
			label: label,
			href: item.href,
			position: index + 1,
			display: `${index + 1}. ${label}`,
			isFirst: index === 0,
			isLast, // shorthand
			separator, // only need it once
			isEven,
			isOdd: !isEven,
		};
	});
	console.log("New Nav Items:", newNavItems);

	return {
		newArticles,
		newNavItems,
	};
}
initSortandMapData();
