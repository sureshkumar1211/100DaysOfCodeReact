export const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
export const SORT_BY_ID = "SORT_BY_ID";
export const LOAD_DATA = "LOAD_DATA";

export const sortByAlphabet = () => ({
	type: SORT_BY_ALPHABET,
});

export const sortByPrice = () => ({
	type: SORT_BY_ID,
});

export const loadData = (payload) => ({
	type: LOAD_DATA,
	payload,
});
