function initFilterWorkshops() {
	const workshops = [
		{
			id: 1,
			title: "JavaScript Basics",
			category: "JavaScript",
			level: "Beginner",
			seatsAvailable: 12,
			isOnline: true,
			price: 0,
		},
		{
			id: 2,
			title: "Advanced CSS Layouts",
			category: "CSS",
			level: "Advanced",
			seatsAvailable: 0,
			isOnline: false,
			price: 75,
		},
		{
			id: 3,
			title: "DOM Events in Practice",
			category: "JavaScript",
			level: "Intermediate",
			seatsAvailable: 5,
			isOnline: true,
			price: 40,
		},
		{
			id: 4,
			title: "Accessible Forms",
			category: "Accessibility",
			level: "Beginner",
			seatsAvailable: 8,
			isOnline: false,
			price: 25,
		},
		{
			id: 5,
			title: "Array Methods Deep Dive",
			category: "JavaScript",
			level: "Intermediate",
			seatsAvailable: 0,
			isOnline: true,
			price: 50,
		},
		{
			id: 6,
			title: "Responsive Navigation",
			category: "CSS",
			level: "Intermediate",
			seatsAvailable: 3,
			isOnline: true,
			price: 30,
		},
	];

	console.log("Original Workshops:", workshops);

	const availableWorkshops = workshops
		.filter((workshop) => {
			if (workshop.seatsAvailable > 0 && workshop.isOnline && workshop.level !== "Advanced") {
				return true;
			}
			return false;
		})
		.map((workshop) => {
			const label = workshop.price === 0 ? "Free" : "Paid";
			return {
				id: workshop.id,
				title: workshop.title,
				category: workshop.category,
				seats: workshop.seatsAvailable,
				label: label,
			};
		})
		.sort((a, b) => b.seats - a.seats);
	console.log("Available Workshops:", availableWorkshops);

	const beginnerWorkshops = workshops
		.filter((workshop) => workshop.level === "Beginner" && workshop.seatsAvailable > 0)
		.map((workshop) => {
			const label = workshop.price === 0 ? "Free" : "Paid";
			return {
				id: workshop.id,
				title: workshop.title,
				level: workshop.level,
				category: workshop.category,
				seats: workshop.seatsAvailable,
				label: label,
			};
		});
	console.log("Beginner Workshops:", beginnerWorkshops);
	return {
		availableWorkshops,
		beginnerWorkshops,
	};
}
initFilterWorkshops();
