function initReduceStatusGroup() {
	const orders = [
		{ id: 101, customer: "Maya Chen", status: "pending", total: 84.5 },
		{ id: 102, customer: "Jon Bell", status: "shipped", total: 142.0 },
		{ id: 103, customer: "Priya Shah", status: "pending", total: 39.99 },
		{ id: 104, customer: "Luis Garcia", status: "delivered", total: 220.75 },
		{ id: 105, customer: "Nora Reed", status: "shipped", total: 58.25 },
		{ id: 106, customer: "Owen Kim", status: "delivered", total: 310.0 },
		{ id: 107, customer: "Tessa Moore", status: "pending", total: 125.25 },
	];

	// console.log("Orders:", orders);

	const groupedOrders = orders.reduce((acc, item) => {
		if (!acc[item.status]) {
			acc[item.status] = {
				orderCount: 0,
				totalRevenue: 0,
				customers: [],
			};
		}
		acc[item.status].orderCount += 1;
		acc[item.status].totalRevenue += item.total;
		acc[item.status].customers.push(item.customer);
		return acc;
	}, {});

	// console.log("Order Status:", groupedOrders);

	const orderStatus = Object.entries(groupedOrders).map(([status, group]) => {
		const orderCount = group.orderCount;
		const totalRevenue = group.totalRevenue;
		const customers = group.customers;
		const label = `${status[0].toUpperCase()}${status.slice(1)} Orders (${orderCount})`;
		// const average = totalRevenue / orderCount;
		// const averageOrder = Math.round(average * 100) / 100;

		// also returns a Number
		const averageOrder = Number((totalRevenue / orderCount).toFixed(2));
		return {
			status,
			orderCount,
			totalRevenue,
			averageOrder,
			customers,
			label,
		};
	});

	// console.log(orderStatus);

	const tickets = [
		{ id: 1, title: "Login form not submitting", priority: "high", status: "open", minutesOpen: 45 },
		{ id: 2, title: "Typo on homepage", priority: "low", status: "open", minutesOpen: 15 },
		{ id: 3, title: "Checkout error on mobile", priority: "high", status: "closed", minutesOpen: 120 },
		{ id: 4, title: "Missing alt text on hero image", priority: "medium", status: "open", minutesOpen: 60 },
		{ id: 5, title: "Dashboard chart not loading", priority: "high", status: "open", minutesOpen: 90 },
		{ id: 6, title: "Footer link broken", priority: "low", status: "closed", minutesOpen: 30 },
		{ id: 7, title: "Search results are delayed", priority: "medium", status: "open", minutesOpen: 75 },
		{ id: 8, title: "Account settings save error", priority: "high", status: "open", minutesOpen: 150 },
	];

	const openTickets = tickets
		.filter((item) => item.status === "open")
		.reduce((acc, item) => {
			if (!acc[item.priority]) {
				acc[item.priority] = {
					openCount: 0,
					totalMinutesOpen: 0,
					ticketTitles: [],
				};
			}

			acc[item.priority].openCount += 1;
			acc[item.priority].totalMinutesOpen += item.minutesOpen;
			acc[item.priority].ticketTitles.push(item.title);

			return acc;
		}, {});

	// console.log("Open Tickets:", openTickets);

	const openTicketPriority = Object.entries(openTickets).map(([priority, { openCount, ticketTitles, totalMinutesOpen }]) => {
		const label = `${priority[0].toUpperCase()}${priority.slice(1)} Priority - ${openCount} Open`;
		const averageMinutesOpen = Math.round(totalMinutesOpen / openCount);

		return {
			priority,
			openCount,
			totalMinutesOpen,
			ticketTitles,
			label,
			averageMinutesOpen,
		};
	});

	console.log("Open Ticket Priority:", openTicketPriority);

	const priorityOrder = {
		high: 1,
		medium: 2,
		low: 3,
	};

	const prioritySort = [...openTicketPriority].sort((a, b) => {
		return priorityOrder[a.priority] - priorityOrder[b.priority];
	});

	console.log("Priority Sort:", prioritySort);

	return {
		groupedOrders,
		orderStatus,
		openTickets,
		openTicketPriority,
		prioritySort,
	};
}
initReduceStatusGroup();
