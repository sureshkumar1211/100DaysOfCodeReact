import React from "react";
import FormController from "./containers/FormController/FormController";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
	return (
		<div className="container my-5">
			<h4>Form validation</h4>
			<FormController />
		</div>
	);
};

export default App;
