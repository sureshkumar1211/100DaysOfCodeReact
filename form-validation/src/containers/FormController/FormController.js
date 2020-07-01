import React from "react";

import { useFormik } from "formik";
import InputGroup from "../../components/InputGroup/InputGroup";

const FormController = () => {
	const validate = (values) => {
		let errors = {};
		if (!values.lastName) {
			errors.lastName = "Required";
		}
		if (!values.email) {
			errors.email = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = "Invalid email address";
		}
		if (!values.password) {
			errors.password = "Required";
		} else if (!/^[A-Za-z]\w{7,14}$/.test(values.password)) {
			errors.password = "Invalid password";
		}
	};
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
		validate,
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<InputGroup type="text" handleChange={formik.handleChange} value={formik.values.firstName} name="firstName" label="First Name" />
			<InputGroup type="text" handleChange={formik.handleChange} value={formik.values.lastName} name="lastName" label="Last Name" />
			<InputGroup type="email" handleChange={formik.handleChange} value={formik.values.email} name="email" label="Email" />
			<InputGroup type="password" handleChange={formik.handleChange} value={formik.values.password} name="password" label="Password" />
			<button type="submit">submit</button>
		</form>
	);
};

export default FormController;
