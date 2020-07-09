//IMPORT PACKAGE MODULES
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "bulma/css/bulma.css";

//IMPORT PROJECT MODULES
import Layout from "./containers/Layout/Layout";
import reducers from "./store/reducers";
import "./App.css";

function App() {
	let store = createStore(reducers);
	return (
		<Provider store={store}>
			<Layout />
		</Provider>
	);
}

export default App;
