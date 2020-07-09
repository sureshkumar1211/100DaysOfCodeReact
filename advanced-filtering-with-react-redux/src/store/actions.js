export const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
export const SORT_BY_ID = "SORT_BY_ID";
export const LOAD_DATA = "LOAD_DATA";

export const sortByAlphabet = (payload) => ({
	type: SORT_BY_ALPHABET,
	payload,
});

export const sortByPrice = (payload) => ({
	type: SORT_BY_ID,
	payload,
});

export const loadData = (payload) => ({
	type: LOAD_DATA,
	payload,
});
