export const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const LOAD_DATA = "LOAD_DATA";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";

export const sortByAlphabet = (payload) => ({
	type: SORT_BY_ALPHABET,
	payload,
});

export const sortByPrice = (payload) => ({
	type: SORT_BY_PRICE,
	payload,
});

export const loadData = (payload) => ({
	type: LOAD_DATA,
	payload,
});

export const filterByPrice = (payload) => ({
	type: FILTER_BY_PRICE,
	payload,
});
