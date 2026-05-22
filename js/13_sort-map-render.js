function initSortMapRender() {
	const files = [
		{
			id: 1,
			name: "homepage-wireframe.fig",
			type: "Design",
			sizeKB: 842,
			updatedAt: "2026-05-18T14:22:00Z",
			isShared: true,
		},
		{
			id: 2,
			name: "client-notes.md",
			type: "Document",
			sizeKB: 24,
			updatedAt: "2026-05-21T09:15:00Z",
			isShared: false,
		},
		{
			id: 3,
			name: "pricing-table.js",
			type: "Code",
			sizeKB: 18,
			updatedAt: "2026-05-20T18:45:00Z",
			isShared: true,
		},
		{
			id: 4,
			name: "brand-colors.css",
			type: "Code",
			sizeKB: 12,
			updatedAt: "2026-05-19T11:05:00Z",
			isShared: false,
		},
		{
			id: 5,
			name: "analytics-report.pdf",
			type: "PDF",
			sizeKB: 1260,
			updatedAt: "2026-05-22T07:30:00Z",
			isShared: true,
		},
		{
			id: 6,
			name: "testimonial-copy.docx",
			type: "Document",
			sizeKB: 96,
			updatedAt: "2026-05-17T16:10:00Z",
			isShared: false,
		},
		{
			id: 7,
			name: "product-gallery.json",
			type: "Data",
			sizeKB: 44,
			updatedAt: "2026-05-21T13:50:00Z",
			isShared: true,
		},
	];

	const root = document.querySelector(".updated_files");
	if (!root) return;

	const wrap = document.querySelector(".main .wrap");

	const sortedFiles = [...files].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

	const slicedFiles = sortedFiles.slice(0, 5);

	/**
	 * file name
	 * file type
	 * file size
	 * updated date
	 * badge = isShared is true
	 * render only first 5
	 */

	const renderFiles = slicedFiles.map((item, index) => {
		const article = document.createElement("article");
		article.classList.add("files");

		const name = document.createElement("h2");
		name.classList.add("secondary_heading");
		name.textContent = item.name;

		const type = document.createElement("p");
		type.textContent = `🗂️ ${item.type}`;

		const size = document.createElement("p");
		let newSize;
		if (item.sizeKB < 1000) {
			newSize = `${item.sizeKB} KB`;
		} else if (item.sizeKB >= 1000) {
			newSize = `${item.sizeKB / 1000} MB`;
		}
		size.textContent = newSize;

		const date = document.createElement("time");
		let dateStyle = new Date(item.updatedAt);
		dateStyle = dateStyle.toLocaleString("en-US", { dateStyle: "medium" });
		date.dateTime = item.updatedAt.slice(0, 10);
		date.textContent = dateStyle;

		article.append(name, type, size, date);

		if (item.isShared) {
			const shared = document.createElement("p");
			shared.textContent = "This file was shared.";
			article.append(shared);
		}

		if (index === 0) {
			const recent = document.createElement("p");
			recent.textContent = "Recently Updated";
			article.append(recent);
		}

		return article;
	});

	const count = document.createElement("p");
	count.textContent = `Showing ${slicedFiles.length} of ${sortedFiles.length}`;

	root.append(...renderFiles);
	wrap.append(count);

	return {
		sortedFiles,
		renderFiles,
	};
}
initSortMapRender();
