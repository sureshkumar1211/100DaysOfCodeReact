import { SORT_BY_ALPHABET, SORT_BY_ID, LOAD_DATA } from "./actions";

const initialState = {
	users: [
		{
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			address: {
				street: "Kulas Light",
				suite: "Apt. 556",
				city: "Gwenborough",
				zipcode: "92998-3874",
				geo: {
					lat: "-37.3159",
					lng: "81.1496",
				},
			},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: {
				name: "Romaguera-Crona",
				catchPhrase: "Multi-layered client-server neural-net",
				bs: "harness real-time e-markets",
			},
		},
	],
	sortBy: 0,
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case SORT_BY_ALPHABET: {
			return state;
		}
		case SORT_BY_ID: {
			return state;
		}
		case LOAD_DATA: {
			return { ...state, users: action.payload };
		}
		default:
			return state;
	}
};

export default reducers;
