export const sortDes = (arr, field) =>
	[...arr].sort((a, b) => {
		if (a[field] > b[field]) return -1;
		if (a[field] < b[field]) return 1;
		return 0;
	});
export const sortAsc = (arr, field) =>
	[...arr].sort((a, b) => {
		if (a[field] < b[field]) return -1;
		if (a[field] > b[field]) return 1;
		return 0;
	});
