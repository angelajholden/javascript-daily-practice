function initTernaryOperators() {
	const orders = [
		{ id: 1, customer: "Angela", total: 120, shipped: true, delivered: true },
		{ id: 2, customer: "Chris", total: 45, shipped: false, delivered: false },
		{ id: 3, customer: "Sam", total: 75, shipped: true, delivered: false },
		{ id: 4, customer: "Taylor", total: 200, shipped: true, delivered: true },
	];

	console.log("Original Orders:", orders);

	const newOrders = orders
		.map((order) => {
			const status = order.delivered ? "Delivered" : order.shipped ? "Shipped" : "Processing";

			const size = order.total >= 100 ? "Large" : "Standard";
			const vip = order.total >= 150 ? "Yes" : "No";
			const priority = order.total >= 150 ? "High" : "Normal";

			return {
				id: order.id,
				customer: order.customer,
				priority: priority,
				status: status,
				size: size,
				total: order.total,
				vip: vip,
			};
		})
		.sort((a, b) => Number(b.total) - Number(a.total));

	console.log("New Orders:", newOrders);
	return newOrders;
}
// initTernaryOperators();

function initTernaryPartTwo() {
	const users = [
		{ id: 1, name: "Angela", role: "admin", active: true, loginCount: 120 },
		{ id: 2, name: "Chris", role: "editor", active: false, loginCount: 8 },
		{ id: 3, name: "Sam", role: "viewer", active: true, loginCount: 32 },
		{ id: 4, name: "Taylor", role: "editor", active: true, loginCount: 60 },
	];

	console.log("Original Users:", users);

	const newUsers = users
		.filter((user) => user.active)
		.map((user) => {
			const access = user.role === "admin" ? "Full" : user.role === "editor" ? "Limited" : "Read Only";
			const status = user.active ? "Active" : "Inactive";
			const tier = user.loginCount >= 100 ? "Power User" : user.loginCount >= 50 ? "Regular" : "New";
			const badge = user.loginCount >= 100 ? "⭐️" : "";

			return {
				id: user.id,
				name: user.name,
				access: access,
				loginCount: user.loginCount,
				status: status,
				tier: tier,
				badge: badge,
			};
		})
		.sort((a, b) => b.loginCount - a.loginCount);
	console.log("New Users:", newUsers);
	return newUsers;
}
initTernaryPartTwo();
