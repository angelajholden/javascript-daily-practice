function initMapDirectory() {
	const data = [
		{
			id: 1,
			first_name: "Angela",
			last_name: "Holden",
			role: "Frontend Developer",
			location: "Minnesota",
			is_active: true,
		},
		{
			id: 2,
			first_name: "Chris",
			last_name: "Johnson",
			role: "Backend Developer",
			location: "Texas",
			is_active: false,
		},
		{
			id: 3,
			first_name: "Sam",
			last_name: "Lee",
			role: "UI Designer",
			location: "California",
			is_active: true,
		},
		{
			id: 4,
			first_name: "Taylor",
			last_name: "Smith",
			role: "Project Manager",
			location: "New York",
			is_active: true,
		},
	];

	/** transform data to new array
	 * {
			id: 1,
			name: "Angela Holden",
			role: "Frontend Developer",
			status: "Active",
			location: "Minnesota"
		},
	 *	Combine first_name + last_name → name
	 *	Convert is_active → "Active" or "Inactive"
	 *	Keep id, role, and location
	 *	Do not mutate the original array
	 */

	// data is available
	console.log("Original Data:", data);

	const normalizedRoles = {
		"Backend Developer": "Backend",
		"Frontend Developer": "Frontend",
	};

	const newData = data
		.map((item) => {
			const active = item.is_active ? "Active" : "Inactive";

			// next time just do item.first_name[0], etc.
			const first_initial = item.first_name.charAt(0);
			const last_initial = item.last_name.charAt(0);

			return {
				id: item.id,
				name: `${item.first_name} ${item.last_name}`,
				initials: `${first_initial}${last_initial}`,
				role: normalizedRoles[item.role] || item.role,
				status: active,
				location: item.location,
			};
		})
		// next time we can filter first and
		// avoid mapping things not used
		// can also do this: .filter((item) => item.status === 'Active');
		.filter((item) => {
			if (item.status === "Inactive") {
				return false;
			}
			return true;
		})
		// sort by role desc
		.sort((a, b) => b.role.localeCompare(a.role));

	console.log("New Data:", newData);
	return newData;
}
initMapDirectory();
