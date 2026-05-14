function initTransformDashboard() {
	const dashboardStats = [
		{
			id: 1,
			label: "Monthly Revenue",
			value: 8420.5,
			change: 12.4,
			type: "currency",
		},
		{
			id: 2,
			label: "New Users",
			value: 1842,
			change: -3.2,
			type: "number",
		},
		{
			id: 3,
			label: "Conversion Rate",
			value: 4.87,
			change: 1.1,
			type: "percent",
		},
		{
			id: 4,
			label: "Avg Session Time",
			value: 312,
			change: 8.5,
			type: "time",
		},
		{
			id: 5,
			label: "Support Tickets",
			value: 29,
			change: -12.8,
			type: "number",
		},
	];

	const dashboardTransform = dashboardStats
		.map((item) => {
			let displayValue;

			if (item.type === "currency") {
				displayValue = item.value.toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				});
			}

			if (item.label === "New Users") {
				displayValue = `${item.value.toLocaleString("en-US")} Users`;
			}

			if (item.type === "percent") {
				displayValue = `${item.value}%`;
			}

			if (item.type === "time") {
				displayValue = `${item.value / 60} Minutes`;
			}

			if (item.label === "Support Tickets") {
				displayValue = `${item.value} Tickets`;
			}

			const slug = item.label.replaceAll(" ", "-").toLowerCase();

			let trend;
			let status;
			let arrow;
			if (item.change > 0) {
				trend = "Trending Up";
				status = "Positive";
				arrow = "↑";
			} else {
				trend = "Needs Attention";
				status = "Negative";
				arrow = "↓";
			}

			return {
				id: item.id,
				label: item.label,
				change: item.change,
				displayValue,
				slug,
				trend,
				status,
				arrow,
			};
		})
		.sort((a, b) => b.change - a.change);

	console.log({ dashboardTransform });

	return {
		dashboardTransform,
	};
}
initTransformDashboard();
