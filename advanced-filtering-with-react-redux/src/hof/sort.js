export function sortByAlphabet(arr, field) {
	return arr.sort(function (a, b) {
		if (a[field] < b[field]) {
			return -1;
		}
		if (a[field] > b[field]) {
			return 1;
		}
		return 0;
	});
}
